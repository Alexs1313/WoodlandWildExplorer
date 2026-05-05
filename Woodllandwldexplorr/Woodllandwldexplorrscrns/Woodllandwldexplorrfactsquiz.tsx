import {
  wodllandwldexplorrMatchQuestions,
  type WoodllandwldexplorrMatchQuestion,
} from '../Woodllandwldexplorrdata/Woodllandwldexplorrfacts-data';

import Woodllandwldexplorrlay from '../Woodllandwldexplorrcpn/Woodllandwldexplorrlay';

import React, {useMemo, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type WodllandwldexplorrAnswerMap = Record<number, string | null>;

const wodllandwldexplorrMakeEmptyAnswers = (
  q: WoodllandwldexplorrMatchQuestion,
) =>
  q.statements.reduce<WodllandwldexplorrAnswerMap>((acc, _s, idx) => {
    acc[idx] = null;
    return acc;
  }, {});

const Woodllandwldexplorrfactsquiz = () => {
  const wodllandwldexplorrNavigation = useNavigation();
  const wodllandwldexplorrBatchSize = 5;
  const wodllandwldexplorrBatchQuestions = useMemo(
    () =>
      wodllandwldexplorrMatchQuestions.slice(0, wodllandwldexplorrBatchSize),
    [],
  );
  const [wodllandwldexplorrIdx, wodllandwldexplorrSetIdx] = useState(0);
  const [wodllandwldexplorrAnswers, wodllandwldexplorrSetAnswers] =
    useState<WodllandwldexplorrAnswerMap>(
      wodllandwldexplorrMakeEmptyAnswers(wodllandwldexplorrBatchQuestions[0]),
    );
  const [wodllandwldexplorrChecked, wodllandwldexplorrSetChecked] =
    useState(false);
  const [wodllandwldexplorrPaused, wodllandwldexplorrSetPaused] =
    useState(false);
  const [wodllandwldexplorrCorrectCount, wodllandwldexplorrSetCorrectCount] =
    useState(0);

  const wodllandwldexplorrQuestion =
    wodllandwldexplorrBatchQuestions[wodllandwldexplorrIdx];

  const wodllandwldexplorrAllFilled = useMemo(() => {
    return wodllandwldexplorrQuestion.statements.every(
      (_s, i) => !!wodllandwldexplorrAnswers[i],
    );
  }, [wodllandwldexplorrAnswers, wodllandwldexplorrQuestion.statements]);

  const wodllandwldexplorrUsedOptions = useMemo(() => {
    const set = new Set<string>();
    Object.values(wodllandwldexplorrAnswers).forEach(v => {
      if (v) {
        set.add(v);
      }
    });
    return set;
  }, [wodllandwldexplorrAnswers]);

  const wodllandwldexplorrPickOption = (opt: string) => {
    if (wodllandwldexplorrChecked) {
      return;
    }

    const firstEmpty = wodllandwldexplorrQuestion.statements.findIndex(
      (_s, i) => !wodllandwldexplorrAnswers[i],
    );
    if (firstEmpty === -1) {
      return;
    }
    wodllandwldexplorrSetAnswers(prev => ({...prev, [firstEmpty]: opt}));
  };

  const wodllandwldexplorrRemoveAt = (i: number) => {
    if (wodllandwldexplorrChecked) {
      return;
    }
    wodllandwldexplorrSetAnswers(prev => ({...prev, [i]: null}));
  };

  const wodllandwldexplorrDisplayValue = (v: string) =>
    v.replace(/\s*×\s*$/, '');

  const wodllandwldexplorrCheck = () => {
    if (!wodllandwldexplorrAllFilled) {
      return;
    }
    if (wodllandwldexplorrChecked) {
      return;
    }
    let add = 0;
    wodllandwldexplorrQuestion.statements.forEach((_s, i) => {
      const chosen = wodllandwldexplorrAnswers[i];
      if (
        chosen &&
        wodllandwldexplorrQuestion.correctByStatementIndex[i] === chosen
      ) {
        add += 1;
      }
    });
    wodllandwldexplorrSetCorrectCount(c => c + add);
    wodllandwldexplorrSetChecked(true);
  };

  const wodllandwldexplorrNext = () => {
    const isLast =
      wodllandwldexplorrIdx >= wodllandwldexplorrBatchQuestions.length - 1;
    if (isLast) {
      (wodllandwldexplorrNavigation as any).navigate(
        'Woodllandwldexplorrfactsresult',
        {
          correct: wodllandwldexplorrCorrectCount,
          total: wodllandwldexplorrBatchQuestions.length * 3,
        },
      );
      return;
    }
    const nextIdx = wodllandwldexplorrIdx + 1;
    wodllandwldexplorrSetIdx(nextIdx);
    wodllandwldexplorrSetAnswers(
      wodllandwldexplorrMakeEmptyAnswers(
        wodllandwldexplorrBatchQuestions[nextIdx],
      ),
    );
    wodllandwldexplorrSetChecked(false);
    wodllandwldexplorrSetPaused(false);
  };

  return (
    <Woodllandwldexplorrlay bounce={false}>
      <View style={styles.wodllandwldexplorrRoot}>
        <View style={styles.wodllandwldexplorrHeader}>
          <View style={styles.wodllandwldexplorrHeaderText}>
            <Text style={styles.wodllandwldexplorrHeaderTitle}>
              Question {wodllandwldexplorrIdx + 1} of{' '}
              {wodllandwldexplorrBatchQuestions.length}
            </Text>
            <Text style={styles.wodllandwldexplorrHeaderSub}>
              Match the answers with the correct statements
            </Text>
          </View>

          <Pressable
            onPress={() => wodllandwldexplorrSetPaused(true)}
            style={styles.wodllandwldexplorrPauseBtn}>
            <Image source={require('../../assets/imgs/wodllandwllipaus.png')} />
          </Pressable>
        </View>

        <View style={styles.wodllandwldexplorrQuestions}>
          {wodllandwldexplorrQuestion.statements.map((s, i) => {
            const chosen = wodllandwldexplorrAnswers[i];
            const correct = chosen
              ? wodllandwldexplorrQuestion.correctByStatementIndex[i] === chosen
              : false;
            const show = wodllandwldexplorrChecked && chosen;
            return (
              <View
                key={`${wodllandwldexplorrQuestion.id}-${i}`}
                style={styles.wodllandwldexplorrQuestionCard}>
                <View style={styles.wodllandwldexplorrRow}>
                  <View style={styles.wodllandwldexplorrNum}>
                    <Text style={styles.wodllandwldexplorrNumText}>
                      {i + 1}
                    </Text>
                  </View>
                  <Text style={styles.wodllandwldexplorrStmt} numberOfLines={2}>
                    {s}
                  </Text>

                  <Pressable
                    onPress={() => wodllandwldexplorrRemoveAt(i)}
                    style={[
                      styles.wodllandwldexplorrSlt,
                      chosen && !wodllandwldexplorrChecked
                        ? styles.wodllandwldexplorrSltFilled
                        : null,
                      show &&
                        (correct
                          ? styles.wodllandwldexplorrSltOk
                          : styles.wodllandwldexplorrSltBad),
                    ]}>
                    <Text
                      style={[
                        styles.wodllandwldexplorrSltText,
                        chosen && !wodllandwldexplorrChecked
                          ? styles.wodllandwldexplorrSltTextFilled
                          : null,
                        show &&
                          (correct
                            ? styles.wodllandwldexplorrSltTextOk
                            : styles.wodllandwldexplorrSltTextBad),
                      ]}>
                      {chosen
                        ? wodllandwldexplorrDisplayValue(chosen)
                        : 'Drop here'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>

        <Text style={styles.wodllandwldexplorrOptionsTitle}>
          ANSWER OPTIONS
        </Text>
        <View style={styles.wodllandwldexplorrOptions}>
          {wodllandwldexplorrQuestion.options.map(opt => {
            const used = wodllandwldexplorrUsedOptions.has(opt);
            if (used) {
              return null;
            }
            return (
              <Pressable
                key={opt}
                onPress={() => wodllandwldexplorrPickOption(opt)}
                style={[styles.wodllandwldexplorrOption]}>
                <Text style={[styles.wodllandwldexplorrOptionText]}>
                  {wodllandwldexplorrDisplayValue(opt)}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          onPress={
            wodllandwldexplorrChecked
              ? wodllandwldexplorrNext
              : wodllandwldexplorrCheck
          }
          disabled={!wodllandwldexplorrAllFilled}
          style={[
            styles.wodllandwldexplorrCta,
            wodllandwldexplorrAllFilled
              ? styles.wodllandwldexplorrCtaActive
              : styles.wodllandwldexplorrCtaDisabled,
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <Image source={require('../../assets/imgs/wodllandwllipnx.png')} />
            <Text
              style={[
                styles.wodllandwldexplorrCtaText,
                wodllandwldexplorrAllFilled
                  ? styles.wodllandwldexplorrCtaTextActive
                  : styles.wodllandwldexplorrCtaTextDisabled,
              ]}>
              {wodllandwldexplorrChecked ? 'Next' : 'Check Answers'}
            </Text>
          </View>
        </Pressable>

        {wodllandwldexplorrPaused ? (
          <View style={styles.wodllandwldexplorrModalOverlay}>
            <View style={styles.wodllandwldexplorrModal}>
              <Text style={styles.wodllandwldexplorrModalTitle}>
                Challenge Paused
              </Text>
              <Text style={styles.wodllandwldexplorrModalText}>
                Take a short break. Your nature clues are saved, and you can
                continue when you are ready.
              </Text>
              <Pressable
                onPress={() => wodllandwldexplorrSetPaused(false)}
                style={styles.wodllandwldexplorrModalBtn}>
                <Text style={styles.wodllandwldexplorrModalBtnText}>
                  Resume
                </Text>
              </Pressable>
              <Pressable
                onPress={() => (wodllandwldexplorrNavigation as any).goBack()}
                style={styles.wodllandwldexplorrModalLink}>
                <Text style={styles.wodllandwldexplorrModalLinkText}>
                  Leave
                </Text>
              </Pressable>
            </View>
          </View>
        ) : null}
      </View>
    </Woodllandwldexplorrlay>
  );
};

export default Woodllandwldexplorrfactsquiz;

const styles = StyleSheet.create({
  wodllandwldexplorrPauseBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wodllandwldexplorrPauseText: {
    color: '#EDE8FF',
    fontSize: 16,
    fontWeight: '900',
    marginTop: -2,
  },
  wodllandwldexplorrHeaderText: {flex: 1},
  wodllandwldexplorrHeaderTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
  },

  wodllandwldexplorrRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  wodllandwldexplorrHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  wodllandwldexplorrBackBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrBackText: {
    color: '#EDE8FF',
    fontSize: 20,
    fontWeight: '900',
    marginTop: -2,
  },

  wodllandwldexplorrHeaderSub: {
    marginTop: 6,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
  wodllandwldexplorrQuestions: {
    marginTop: 16,
    gap: 10,
  },
  wodllandwldexplorrQuestionCard: {
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 12,
    minHeight: 70,
    justifyContent: 'center',
  },
  wodllandwldexplorrRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  wodllandwldexplorrNum: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#281C68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrNumText: {
    color: '#9B5CF6',
    fontSize: 12,
    fontWeight: '800',
  },
  wodllandwldexplorrStmt: {
    flex: 1,
    color: '#C0B0E8',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },
  wodllandwldexplorrSlt: {
    minWidth: 80,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#3828A0',
    backgroundColor: '#24186A',
  },
  wodllandwldexplorrSltFilled: {
    backgroundColor: '#9B5CF6',
    borderColor: '#9B5CF6',
  },
  wodllandwldexplorrSltOk: {
    backgroundColor: '#2A7D3D',
    borderColor: '#2A7D3D',
  },
  wodllandwldexplorrSltBad: {
    backgroundColor: '#B53A3A',
    borderColor: '#B53A3A',
  },
  wodllandwldexplorrSltText: {
    color: '#9B5CF6',
    fontSize: 12,
    fontWeight: '800',
  },
  wodllandwldexplorrSltTextFilled: {color: '#FFFFFF'},
  wodllandwldexplorrSltTextOk: {color: '#FFFFFF'},
  wodllandwldexplorrSltTextBad: {color: '#FFFFFF'},
  wodllandwldexplorrOptionsTitle: {
    marginTop: 16,
    color: '#7B6CB0',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  wodllandwldexplorrOptions: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  wodllandwldexplorrOption: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: '#281C68',
    borderWidth: 1,
    borderColor: '#4030B0',
    minHeight: 46,
    justifyContent: 'center',
  },
  wodllandwldexplorrOptionUsed: {
    opacity: 0.5,
  },
  wodllandwldexplorrOptionText: {
    color: '#EDE8FF',
    fontSize: 12,
    fontWeight: '800',
  },
  wodllandwldexplorrOptionTextUsed: {
    color: '#A090CC',
  },
  wodllandwldexplorrCta: {
    marginTop: 20,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrCtaActive: {backgroundColor: '#F5C800'},
  wodllandwldexplorrCtaDisabled: {
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  wodllandwldexplorrCtaText: {fontSize: 15, fontWeight: '800'},
  wodllandwldexplorrCtaTextActive: {color: '#120A38'},
  wodllandwldexplorrCtaTextDisabled: {color: '#A090CC'},

  wodllandwldexplorrModalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#120A3866',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wodllandwldexplorrModal: {
    width: '94%',
    borderRadius: 22,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    padding: 24,
  },
  wodllandwldexplorrModalTitle: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  wodllandwldexplorrModalText: {
    marginTop: 18,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  wodllandwldexplorrModalBtn: {
    marginTop: 14,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrModalBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },
  wodllandwldexplorrModalLink: {
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrModalLinkText: {
    color: '#7B6CB0',
    fontSize: 14,
    fontWeight: '600',
  },
});
