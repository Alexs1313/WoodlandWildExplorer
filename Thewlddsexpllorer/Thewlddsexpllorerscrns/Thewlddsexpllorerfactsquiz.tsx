import {
  thewlddsexpllorerMatchQuestions,
  type ThewlddsexpllorerMatchQuestion,
} from '../Thewlddsexpllorerdata/Thewlddsexpllorerfacts-data';

import Thewlddsexpllorerlay from '../Thewlddsexpllorercpn/Thewlddsexpllorerlay';

import React, {useMemo, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type ThewlddsexpllorerAnswerMap = Record<number, string | null>;

const thewlddsexpllorerMakeEmptyAnswers = (
  q: ThewlddsexpllorerMatchQuestion,
) =>
  q.statements.reduce<ThewlddsexpllorerAnswerMap>((acc, _s, idx) => {
    acc[idx] = null;
    return acc;
  }, {});

const Thewlddsexpllorerfactsquiz = () => {
  const thewlddsexpllorerNavigation = useNavigation();
  const thewlddsexpllorerBatchSize = 5;
  const thewlddsexpllorerBatchQuestions = useMemo(
    () =>
      thewlddsexpllorerMatchQuestions.slice(0, thewlddsexpllorerBatchSize),
    [],
  );
  const [thewlddsexpllorerIdx, thewlddsexpllorerSetIdx] = useState(0);
  const [thewlddsexpllorerAnswers, thewlddsexpllorerSetAnswers] =
    useState<ThewlddsexpllorerAnswerMap>(
      thewlddsexpllorerMakeEmptyAnswers(thewlddsexpllorerBatchQuestions[0]),
    );
  const [thewlddsexpllorerChecked, thewlddsexpllorerSetChecked] =
    useState(false);
  const [thewlddsexpllorerPaused, thewlddsexpllorerSetPaused] =
    useState(false);
  const [thewlddsexpllorerCorrectCount, thewlddsexpllorerSetCorrectCount] =
    useState(0);

  const thewlddsexpllorerQuestion =
    thewlddsexpllorerBatchQuestions[thewlddsexpllorerIdx];

  const thewlddsexpllorerAllFilled = useMemo(() => {
    return thewlddsexpllorerQuestion.statements.every(
      (_s, i) => !!thewlddsexpllorerAnswers[i],
    );
  }, [thewlddsexpllorerAnswers, thewlddsexpllorerQuestion.statements]);

  const thewlddsexpllorerUsedOptions = useMemo(() => {
    const set = new Set<string>();
    Object.values(thewlddsexpllorerAnswers).forEach(v => {
      if (v) {
        set.add(v);
      }
    });
    return set;
  }, [thewlddsexpllorerAnswers]);

  const thewlddsexpllorerPickOption = (opt: string) => {
    if (thewlddsexpllorerChecked) {
      return;
    }

    const firstEmpty = thewlddsexpllorerQuestion.statements.findIndex(
      (_s, i) => !thewlddsexpllorerAnswers[i],
    );
    if (firstEmpty === -1) {
      return;
    }
    thewlddsexpllorerSetAnswers(prev => ({...prev, [firstEmpty]: opt}));
  };

  const thewlddsexpllorerRemoveAt = (i: number) => {
    if (thewlddsexpllorerChecked) {
      return;
    }
    thewlddsexpllorerSetAnswers(prev => ({...prev, [i]: null}));
  };

  const thewlddsexpllorerDisplayValue = (v: string) =>
    v.replace(/\s*×\s*$/, '');

  const thewlddsexpllorerCheck = () => {
    if (!thewlddsexpllorerAllFilled) {
      return;
    }
    if (thewlddsexpllorerChecked) {
      return;
    }
    let add = 0;
    thewlddsexpllorerQuestion.statements.forEach((_s, i) => {
      const chosen = thewlddsexpllorerAnswers[i];
      if (
        chosen &&
        thewlddsexpllorerQuestion.correctByStatementIndex[i] === chosen
      ) {
        add += 1;
      }
    });
    thewlddsexpllorerSetCorrectCount(c => c + add);
    thewlddsexpllorerSetChecked(true);
  };

  const thewlddsexpllorerNext = () => {
    const isLast =
      thewlddsexpllorerIdx >= thewlddsexpllorerBatchQuestions.length - 1;
    if (isLast) {
      (thewlddsexpllorerNavigation as any).navigate(
        'Thewlddsexpllorerfactsresult',
        {
          correct: thewlddsexpllorerCorrectCount,
          total: thewlddsexpllorerBatchQuestions.length * 3,
        },
      );
      return;
    }
    const nextIdx = thewlddsexpllorerIdx + 1;
    thewlddsexpllorerSetIdx(nextIdx);
    thewlddsexpllorerSetAnswers(
      thewlddsexpllorerMakeEmptyAnswers(
        thewlddsexpllorerBatchQuestions[nextIdx],
      ),
    );
    thewlddsexpllorerSetChecked(false);
    thewlddsexpllorerSetPaused(false);
  };

  return (
    <Thewlddsexpllorerlay bounce={false}>
      <View style={styles.thewlddsexpllorerRoot}>
        <View style={styles.thewlddsexpllorerHeader}>
          <View style={styles.thewlddsexpllorerHeaderText}>
            <Text style={styles.thewlddsexpllorerHeaderTitle}>
              Question {thewlddsexpllorerIdx + 1} of{' '}
              {thewlddsexpllorerBatchQuestions.length}
            </Text>
            <Text style={styles.thewlddsexpllorerHeaderSub}>
              Match the answers with the correct statements
            </Text>
          </View>

          <Pressable
            onPress={() => thewlddsexpllorerSetPaused(true)}
            style={styles.thewlddsexpllorerPauseBtn}>
            <Image source={require('../../assets/imgs/wodllandwllipaus.png')} />
          </Pressable>
        </View>

        <View style={styles.thewlddsexpllorerQuestions}>
          {thewlddsexpllorerQuestion.statements.map((s, i) => {
            const chosen = thewlddsexpllorerAnswers[i];
            const correct = chosen
              ? thewlddsexpllorerQuestion.correctByStatementIndex[i] === chosen
              : false;
            const show = thewlddsexpllorerChecked && chosen;
            return (
              <View
                key={`${thewlddsexpllorerQuestion.id}-${i}`}
                style={styles.thewlddsexpllorerQuestionCard}>
                <View style={styles.thewlddsexpllorerRow}>
                  <View style={styles.thewlddsexpllorerNum}>
                    <Text style={styles.thewlddsexpllorerNumText}>
                      {i + 1}
                    </Text>
                  </View>
                  <Text style={styles.thewlddsexpllorerStmt} numberOfLines={2}>
                    {s}
                  </Text>

                  <Pressable
                    onPress={() => thewlddsexpllorerRemoveAt(i)}
                    style={[
                      styles.thewlddsexpllorerSlt,
                      chosen && !thewlddsexpllorerChecked
                        ? styles.thewlddsexpllorerSltFilled
                        : null,
                      show &&
                        (correct
                          ? styles.thewlddsexpllorerSltOk
                          : styles.thewlddsexpllorerSltBad),
                    ]}>
                    <Text
                      style={[
                        styles.thewlddsexpllorerSltText,
                        chosen && !thewlddsexpllorerChecked
                          ? styles.thewlddsexpllorerSltTextFilled
                          : null,
                        show &&
                          (correct
                            ? styles.thewlddsexpllorerSltTextOk
                            : styles.thewlddsexpllorerSltTextBad),
                      ]}>
                      {chosen
                        ? thewlddsexpllorerDisplayValue(chosen)
                        : 'Drop here'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>

        <Text style={styles.thewlddsexpllorerOptionsTitle}>
          ANSWER OPTIONS
        </Text>
        <View style={styles.thewlddsexpllorerOptions}>
          {thewlddsexpllorerQuestion.options.map(opt => {
            const used = thewlddsexpllorerUsedOptions.has(opt);
            if (used) {
              return null;
            }
            return (
              <Pressable
                key={opt}
                onPress={() => thewlddsexpllorerPickOption(opt)}
                style={[styles.thewlddsexpllorerOption]}>
                <Text style={[styles.thewlddsexpllorerOptionText]}>
                  {thewlddsexpllorerDisplayValue(opt)}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          onPress={
            thewlddsexpllorerChecked
              ? thewlddsexpllorerNext
              : thewlddsexpllorerCheck
          }
          disabled={!thewlddsexpllorerAllFilled}
          style={[
            styles.thewlddsexpllorerCta,
            thewlddsexpllorerAllFilled
              ? styles.thewlddsexpllorerCtaActive
              : styles.thewlddsexpllorerCtaDisabled,
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <Image source={require('../../assets/imgs/wodllandwllipnx.png')} />
            <Text
              style={[
                styles.thewlddsexpllorerCtaText,
                thewlddsexpllorerAllFilled
                  ? styles.thewlddsexpllorerCtaTextActive
                  : styles.thewlddsexpllorerCtaTextDisabled,
              ]}>
              {thewlddsexpllorerChecked ? 'Next' : 'Check Answers'}
            </Text>
          </View>
        </Pressable>

        {thewlddsexpllorerPaused ? (
          <View style={styles.thewlddsexpllorerModalOverlay}>
            <View style={styles.thewlddsexpllorerModal}>
              <Text style={styles.thewlddsexpllorerModalTitle}>
                Challenge Paused
              </Text>
              <Text style={styles.thewlddsexpllorerModalText}>
                Take a short break. Your nature clues are saved, and you can
                continue when you are ready.
              </Text>
              <Pressable
                onPress={() => thewlddsexpllorerSetPaused(false)}
                style={styles.thewlddsexpllorerModalBtn}>
                <Text style={styles.thewlddsexpllorerModalBtnText}>
                  Resume
                </Text>
              </Pressable>
              <Pressable
                onPress={() => (thewlddsexpllorerNavigation as any).goBack()}
                style={styles.thewlddsexpllorerModalLink}>
                <Text style={styles.thewlddsexpllorerModalLinkText}>
                  Leave
                </Text>
              </Pressable>
            </View>
          </View>
        ) : null}
      </View>
    </Thewlddsexpllorerlay>
  );
};

export default Thewlddsexpllorerfactsquiz;

const styles = StyleSheet.create({
  thewlddsexpllorerPauseBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  thewlddsexpllorerPauseText: {
    color: '#EDE8FF',
    fontSize: 16,
    fontWeight: '900',
    marginTop: -2,
  },
  thewlddsexpllorerHeaderText: {flex: 1},
  thewlddsexpllorerHeaderTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
  },

  thewlddsexpllorerRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  thewlddsexpllorerHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  thewlddsexpllorerBackBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerBackText: {
    color: '#EDE8FF',
    fontSize: 20,
    fontWeight: '900',
    marginTop: -2,
  },

  thewlddsexpllorerHeaderSub: {
    marginTop: 6,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
  thewlddsexpllorerQuestions: {
    marginTop: 16,
    gap: 10,
  },
  thewlddsexpllorerQuestionCard: {
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 12,
    minHeight: 70,
    justifyContent: 'center',
  },
  thewlddsexpllorerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  thewlddsexpllorerNum: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#281C68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerNumText: {
    color: '#9B5CF6',
    fontSize: 12,
    fontWeight: '800',
  },
  thewlddsexpllorerStmt: {
    flex: 1,
    color: '#C0B0E8',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },
  thewlddsexpllorerSlt: {
    minWidth: 80,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#3828A0',
    backgroundColor: '#24186A',
  },
  thewlddsexpllorerSltFilled: {
    backgroundColor: '#9B5CF6',
    borderColor: '#9B5CF6',
  },
  thewlddsexpllorerSltOk: {
    backgroundColor: '#2A7D3D',
    borderColor: '#2A7D3D',
  },
  thewlddsexpllorerSltBad: {
    backgroundColor: '#B53A3A',
    borderColor: '#B53A3A',
  },
  thewlddsexpllorerSltText: {
    color: '#9B5CF6',
    fontSize: 12,
    fontWeight: '800',
  },
  thewlddsexpllorerSltTextFilled: {color: '#FFFFFF'},
  thewlddsexpllorerSltTextOk: {color: '#FFFFFF'},
  thewlddsexpllorerSltTextBad: {color: '#FFFFFF'},
  thewlddsexpllorerOptionsTitle: {
    marginTop: 16,
    color: '#7B6CB0',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  thewlddsexpllorerOptions: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  thewlddsexpllorerOption: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: '#281C68',
    borderWidth: 1,
    borderColor: '#4030B0',
    minHeight: 46,
    justifyContent: 'center',
  },
  thewlddsexpllorerOptionUsed: {
    opacity: 0.5,
  },
  thewlddsexpllorerOptionText: {
    color: '#EDE8FF',
    fontSize: 12,
    fontWeight: '800',
  },
  thewlddsexpllorerOptionTextUsed: {
    color: '#A090CC',
  },
  thewlddsexpllorerCta: {
    marginTop: 20,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerCtaActive: {backgroundColor: '#F5C800'},
  thewlddsexpllorerCtaDisabled: {
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  thewlddsexpllorerCtaText: {fontSize: 15, fontWeight: '800'},
  thewlddsexpllorerCtaTextActive: {color: '#120A38'},
  thewlddsexpllorerCtaTextDisabled: {color: '#A090CC'},

  thewlddsexpllorerModalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#120A3866',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  thewlddsexpllorerModal: {
    width: '94%',
    borderRadius: 22,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    padding: 24,
  },
  thewlddsexpllorerModalTitle: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  thewlddsexpllorerModalText: {
    marginTop: 18,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  thewlddsexpllorerModalBtn: {
    marginTop: 14,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerModalBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },
  thewlddsexpllorerModalLink: {
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerModalLinkText: {
    color: '#7B6CB0',
    fontSize: 14,
    fontWeight: '600',
  },
});
