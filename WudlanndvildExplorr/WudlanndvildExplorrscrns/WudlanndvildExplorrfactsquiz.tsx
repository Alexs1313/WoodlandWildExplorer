import {
  wudlanndvildexplorrMatchQuestions,
  type WudlanndvildExplorrMatchQuestion,
} from '../WudlanndvildExplorrdata/WudlanndvildExplorrfacts-data';

import WudlanndvildExplorrlay from '../WudlanndvildExplorrcpn/WudlanndvildExplorrlay';

import React, {useMemo, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type WudlanndvildExplorrAnswerMap = Record<number, string | null>;

const wudlanndvildexplorrMakeEmptyAnswers = (
  q: WudlanndvildExplorrMatchQuestion,
) =>
  q.statements.reduce<WudlanndvildExplorrAnswerMap>((acc, _s, idx) => {
    acc[idx] = null;
    return acc;
  }, {});

const WudlanndvildExplorrfactsquiz = () => {
  const wudlanndvildexplorrNavigation = useNavigation();
  const wudlanndvildexplorrBatchSize = 5;
  const wudlanndvildexplorrBatchQuestions = useMemo(
    () =>
      wudlanndvildexplorrMatchQuestions.slice(0, wudlanndvildexplorrBatchSize),
    [],
  );
  const [wudlanndvildexplorrIdx, wudlanndvildexplorrSetIdx] = useState(0);
  const [wudlanndvildexplorrAnswers, wudlanndvildexplorrSetAnswers] =
    useState<WudlanndvildExplorrAnswerMap>(
      wudlanndvildexplorrMakeEmptyAnswers(wudlanndvildexplorrBatchQuestions[0]),
    );
  const [wudlanndvildexplorrChecked, wudlanndvildexplorrSetChecked] =
    useState(false);
  const [wudlanndvildexplorrPaused, wudlanndvildexplorrSetPaused] =
    useState(false);
  const [wudlanndvildexplorrCorrectCount, wudlanndvildexplorrSetCorrectCount] =
    useState(0);

  const wudlanndvildexplorrQuestion =
    wudlanndvildexplorrBatchQuestions[wudlanndvildexplorrIdx];

  const wudlanndvildexplorrAllFilled = useMemo(() => {
    return wudlanndvildexplorrQuestion.statements.every(
      (_s, i) => !!wudlanndvildexplorrAnswers[i],
    );
  }, [wudlanndvildexplorrAnswers, wudlanndvildexplorrQuestion.statements]);

  const wudlanndvildexplorrUsedOptions = useMemo(() => {
    const set = new Set<string>();
    Object.values(wudlanndvildexplorrAnswers).forEach(v => {
      if (v) {
        set.add(v);
      }
    });
    return set;
  }, [wudlanndvildexplorrAnswers]);

  const wudlanndvildexplorrPickOption = (opt: string) => {
    if (wudlanndvildexplorrChecked) {
      return;
    }

    const firstEmpty = wudlanndvildexplorrQuestion.statements.findIndex(
      (_s, i) => !wudlanndvildexplorrAnswers[i],
    );
    if (firstEmpty === -1) {
      return;
    }
    wudlanndvildexplorrSetAnswers(prev => ({...prev, [firstEmpty]: opt}));
  };

  const wudlanndvildexplorrRemoveAt = (i: number) => {
    if (wudlanndvildexplorrChecked) {
      return;
    }
    wudlanndvildexplorrSetAnswers(prev => ({...prev, [i]: null}));
  };

  const wudlanndvildexplorrDisplayValue = (v: string) =>
    v.replace(/\s*×\s*$/, '');

  const wudlanndvildexplorrCheck = () => {
    if (!wudlanndvildexplorrAllFilled) {
      return;
    }
    if (wudlanndvildexplorrChecked) {
      return;
    }
    let add = 0;
    wudlanndvildexplorrQuestion.statements.forEach((_s, i) => {
      const chosen = wudlanndvildexplorrAnswers[i];
      if (
        chosen &&
        wudlanndvildexplorrQuestion.correctByStatementIndex[i] === chosen
      ) {
        add += 1;
      }
    });
    wudlanndvildexplorrSetCorrectCount(c => c + add);
    wudlanndvildexplorrSetChecked(true);
  };

  const wudlanndvildexplorrNext = () => {
    const isLast =
      wudlanndvildexplorrIdx >= wudlanndvildexplorrBatchQuestions.length - 1;
    if (isLast) {
      (wudlanndvildexplorrNavigation as any).navigate(
        'WudlanndvildExplorrfactsresult',
        {
          correct: wudlanndvildexplorrCorrectCount,
          total: wudlanndvildexplorrBatchQuestions.length * 3,
        },
      );
      return;
    }
    const nextIdx = wudlanndvildexplorrIdx + 1;
    wudlanndvildexplorrSetIdx(nextIdx);
    wudlanndvildexplorrSetAnswers(
      wudlanndvildexplorrMakeEmptyAnswers(
        wudlanndvildexplorrBatchQuestions[nextIdx],
      ),
    );
    wudlanndvildexplorrSetChecked(false);
    wudlanndvildexplorrSetPaused(false);
  };

  return (
    <WudlanndvildExplorrlay bounce={false}>
      <View style={styles.wudlanndvildexplorrRoot}>
        <View style={styles.wudlanndvildexplorrHeader}>
          <View style={styles.wudlanndvildexplorrHeaderText}>
            <Text style={styles.wudlanndvildexplorrHeaderTitle}>
              Question {wudlanndvildexplorrIdx + 1} of{' '}
              {wudlanndvildexplorrBatchQuestions.length}
            </Text>
            <Text style={styles.wudlanndvildexplorrHeaderSub}>
              Match the answers with the correct statements
            </Text>
          </View>

          <Pressable
            onPress={() => wudlanndvildexplorrSetPaused(true)}
            style={styles.wudlanndvildexplorrPauseBtn}>
            <Image source={require('../../assets/imgs/wodllandwllipaus.png')} />
          </Pressable>
        </View>

        <View style={styles.wudlanndvildexplorrQuestions}>
          {wudlanndvildexplorrQuestion.statements.map((s, i) => {
            const chosen = wudlanndvildexplorrAnswers[i];
            const correct = chosen
              ? wudlanndvildexplorrQuestion.correctByStatementIndex[i] === chosen
              : false;
            const show = wudlanndvildexplorrChecked && chosen;
            return (
              <View
                key={`${wudlanndvildexplorrQuestion.id}-${i}`}
                style={styles.wudlanndvildexplorrQuestionCard}>
                <View style={styles.wudlanndvildexplorrRow}>
                  <View style={styles.wudlanndvildexplorrNum}>
                    <Text style={styles.wudlanndvildexplorrNumText}>
                      {i + 1}
                    </Text>
                  </View>
                  <Text style={styles.wudlanndvildexplorrStmt} numberOfLines={2}>
                    {s}
                  </Text>

                  <Pressable
                    onPress={() => wudlanndvildexplorrRemoveAt(i)}
                    style={[
                      styles.wudlanndvildexplorrSlt,
                      chosen && !wudlanndvildexplorrChecked
                        ? styles.wudlanndvildexplorrSltFilled
                        : null,
                      show &&
                        (correct
                          ? styles.wudlanndvildexplorrSltOk
                          : styles.wudlanndvildexplorrSltBad),
                    ]}>
                    <Text
                      style={[
                        styles.wudlanndvildexplorrSltText,
                        chosen && !wudlanndvildexplorrChecked
                          ? styles.wudlanndvildexplorrSltTextFilled
                          : null,
                        show &&
                          (correct
                            ? styles.wudlanndvildexplorrSltTextOk
                            : styles.wudlanndvildexplorrSltTextBad),
                      ]}>
                      {chosen
                        ? wudlanndvildexplorrDisplayValue(chosen)
                        : 'Drop here'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>

        <Text style={styles.wudlanndvildexplorrOptionsTitle}>
          ANSWER OPTIONS
        </Text>
        <View style={styles.wudlanndvildexplorrOptions}>
          {wudlanndvildexplorrQuestion.options.map(opt => {
            const used = wudlanndvildexplorrUsedOptions.has(opt);
            if (used) {
              return null;
            }
            return (
              <Pressable
                key={opt}
                onPress={() => wudlanndvildexplorrPickOption(opt)}
                style={[styles.wudlanndvildexplorrOption]}>
                <Text style={[styles.wudlanndvildexplorrOptionText]}>
                  {wudlanndvildexplorrDisplayValue(opt)}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          onPress={
            wudlanndvildexplorrChecked
              ? wudlanndvildexplorrNext
              : wudlanndvildexplorrCheck
          }
          disabled={!wudlanndvildexplorrAllFilled}
          style={[
            styles.wudlanndvildexplorrCta,
            wudlanndvildexplorrAllFilled
              ? styles.wudlanndvildexplorrCtaActive
              : styles.wudlanndvildexplorrCtaDisabled,
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <Image source={require('../../assets/imgs/wodllandwllipnx.png')} />
            <Text
              style={[
                styles.wudlanndvildexplorrCtaText,
                wudlanndvildexplorrAllFilled
                  ? styles.wudlanndvildexplorrCtaTextActive
                  : styles.wudlanndvildexplorrCtaTextDisabled,
              ]}>
              {wudlanndvildexplorrChecked ? 'Next' : 'Check Answers'}
            </Text>
          </View>
        </Pressable>

        {wudlanndvildexplorrPaused ? (
          <View style={styles.wudlanndvildexplorrModalOverlay}>
            <View style={styles.wudlanndvildexplorrModal}>
              <Text style={styles.wudlanndvildexplorrModalTitle}>
                Challenge Paused
              </Text>
              <Text style={styles.wudlanndvildexplorrModalText}>
                Take a short break. Your nature clues are saved, and you can
                continue when you are ready.
              </Text>
              <Pressable
                onPress={() => wudlanndvildexplorrSetPaused(false)}
                style={styles.wudlanndvildexplorrModalBtn}>
                <Text style={styles.wudlanndvildexplorrModalBtnText}>
                  Resume
                </Text>
              </Pressable>
              <Pressable
                onPress={() => (wudlanndvildexplorrNavigation as any).goBack()}
                style={styles.wudlanndvildexplorrModalLink}>
                <Text style={styles.wudlanndvildexplorrModalLinkText}>
                  Leave
                </Text>
              </Pressable>
            </View>
          </View>
        ) : null}
      </View>
    </WudlanndvildExplorrlay>
  );
};

export default WudlanndvildExplorrfactsquiz;

const styles = StyleSheet.create({
  wudlanndvildexplorrPauseBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wudlanndvildexplorrPauseText: {
    color: '#EDE8FF',
    fontSize: 16,
    fontWeight: '900',
    marginTop: -2,
  },
  wudlanndvildexplorrHeaderText: {flex: 1},
  wudlanndvildexplorrHeaderTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
  },

  wudlanndvildexplorrRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  wudlanndvildexplorrHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  wudlanndvildexplorrBackBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrBackText: {
    color: '#EDE8FF',
    fontSize: 20,
    fontWeight: '900',
    marginTop: -2,
  },

  wudlanndvildexplorrHeaderSub: {
    marginTop: 6,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
  wudlanndvildexplorrQuestions: {
    marginTop: 16,
    gap: 10,
  },
  wudlanndvildexplorrQuestionCard: {
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 12,
    minHeight: 70,
    justifyContent: 'center',
  },
  wudlanndvildexplorrRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  wudlanndvildexplorrNum: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#281C68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrNumText: {
    color: '#9B5CF6',
    fontSize: 12,
    fontWeight: '800',
  },
  wudlanndvildexplorrStmt: {
    flex: 1,
    color: '#C0B0E8',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },
  wudlanndvildexplorrSlt: {
    minWidth: 80,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#3828A0',
    backgroundColor: '#24186A',
  },
  wudlanndvildexplorrSltFilled: {
    backgroundColor: '#9B5CF6',
    borderColor: '#9B5CF6',
  },
  wudlanndvildexplorrSltOk: {
    backgroundColor: '#2A7D3D',
    borderColor: '#2A7D3D',
  },
  wudlanndvildexplorrSltBad: {
    backgroundColor: '#B53A3A',
    borderColor: '#B53A3A',
  },
  wudlanndvildexplorrSltText: {
    color: '#9B5CF6',
    fontSize: 12,
    fontWeight: '800',
  },
  wudlanndvildexplorrSltTextFilled: {color: '#FFFFFF'},
  wudlanndvildexplorrSltTextOk: {color: '#FFFFFF'},
  wudlanndvildexplorrSltTextBad: {color: '#FFFFFF'},
  wudlanndvildexplorrOptionsTitle: {
    marginTop: 16,
    color: '#7B6CB0',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  wudlanndvildexplorrOptions: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  wudlanndvildexplorrOption: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: '#281C68',
    borderWidth: 1,
    borderColor: '#4030B0',
    minHeight: 46,
    justifyContent: 'center',
  },
  wudlanndvildexplorrOptionUsed: {
    opacity: 0.5,
  },
  wudlanndvildexplorrOptionText: {
    color: '#EDE8FF',
    fontSize: 12,
    fontWeight: '800',
  },
  wudlanndvildexplorrOptionTextUsed: {
    color: '#A090CC',
  },
  wudlanndvildexplorrCta: {
    marginTop: 20,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrCtaActive: {backgroundColor: '#F5C800'},
  wudlanndvildexplorrCtaDisabled: {
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  wudlanndvildexplorrCtaText: {fontSize: 15, fontWeight: '800'},
  wudlanndvildexplorrCtaTextActive: {color: '#120A38'},
  wudlanndvildexplorrCtaTextDisabled: {color: '#A090CC'},

  wudlanndvildexplorrModalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#120A3866',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wudlanndvildexplorrModal: {
    width: '94%',
    borderRadius: 22,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    padding: 24,
  },
  wudlanndvildexplorrModalTitle: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  wudlanndvildexplorrModalText: {
    marginTop: 18,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  wudlanndvildexplorrModalBtn: {
    marginTop: 14,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrModalBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },
  wudlanndvildexplorrModalLink: {
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrModalLinkText: {
    color: '#7B6CB0',
    fontSize: 14,
    fontWeight: '600',
  },
});
