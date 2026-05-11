import Orientation from 'react-native-orientation-locker';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';

type ThewlddsexpllorerItemKind = 'berry' | 'mushroom' | 'acorn' | 'rock';
type ThewlddsexpllorerExplorer = 'fox' | 'deer' | 'rabbit';

type Props = {
  route?: {
    params?: {
      thewlddsexpllorerExplorer?: 'fox' | 'deer' | 'rabbit';
    };
  };
};

const Thewlddsexpllorerminigpll = (props: Props) => {
  const thewlddsexpllorerGameSecondsPerItem = 10;
  const thewlddsexpllorerItemTimeoutMs =
    thewlddsexpllorerGameSecondsPerItem * 1000;
  const thewlddsexpllorerMaxLives = 3;

  const thewlddsexpllorerStage = useMemo(
    () => ({
      width: Dimensions.get('window').width - 32,
      height: Math.floor(Dimensions.get('window').height * 0.52),
      padding: 18,
    }),
    [],
  );

  const thewlddsexpllorerExplorer: ThewlddsexpllorerExplorer =
    props.route?.params?.thewlddsexpllorerExplorer ?? 'fox';

  const [thewlddsexpllorerScreen, thewlddsexpllorerSetScreen] = useState<
    'playing' | 'result'
  >('playing');
  const [thewlddsexpllorerLives, thewlddsexpllorerSetLives] = useState(
    thewlddsexpllorerMaxLives,
  );
  const [thewlddsexpllorerScore, thewlddsexpllorerSetScore] = useState(0);
  const [thewlddsexpllorerBest, thewlddsexpllorerSetBest] = useState(0);
  const [thewlddsexpllorerPaused, thewlddsexpllorerSetPaused] =
    useState(false);
  const thewlddsexpllorerNavigation = useNavigation();

  const [thewlddsexpllorerPlayer, thewlddsexpllorerSetPlayer] = useState({
    x: 0,
    y: 0,
  });
  const [thewlddsexpllorerTarget, thewlddsexpllorerSetTarget] = useState({
    x: 0,
    y: 0,
    kind: 'berry' as ThewlddsexpllorerItemKind,
  });
  const [thewlddsexpllorerDeadline, thewlddsexpllorerSetDeadline] = useState(
    Date.now() + thewlddsexpllorerItemTimeoutMs,
  );
  const [thewlddsexpllorerNow, thewlddsexpllorerSetNow] = useState(
    Date.now(),
  );
  const thewlddsexpllorerTimerRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const thewlddsexpllorerPlayerSize = 56;
  const thewlddsexpllorerTargetSize = 40;
  const thewlddsexpllorerStep = 26;

  const thewlddsexpllorerPlayableW =
    thewlddsexpllorerStage.width - thewlddsexpllorerStage.padding * 2;
  const thewlddsexpllorerPlayableH =
    thewlddsexpllorerStage.height - thewlddsexpllorerStage.padding * 2;

  const thewlddsexpllorerClamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const thewlddsexpllorerExplorerAsset = useMemo<
    Record<ThewlddsexpllorerExplorer, ImageSourcePropType>
  >(
    () => ({
      fox: require('../../assets/imgs/wodllandwllfox.png'),
      deer: require('../../assets/imgs/wodllandwllideer.png'),
      rabbit: require('../../assets/imgs/wodllandwllirabb.png'),
    }),
    [],
  );

  const thewlddsexpllorerExplorerEmoji =
    thewlddsexpllorerExplorer === 'fox'
      ? '🦊'
      : thewlddsexpllorerExplorer === 'deer'
      ? '🦌'
      : '🐰';

  const thewlddsexpllorerKindEmoji = (k: ThewlddsexpllorerItemKind) => {
    if (k === 'berry') {
      return '🫐';
    }
    if (k === 'mushroom') {
      return '🍄';
    }
    if (k === 'acorn') {
      return '🌰';
    }
    return '🪨';
  };

  const thewlddsexpllorerSpawn = useCallback(
    (thewlddsexpllorerNextLives: number) => {
      if (thewlddsexpllorerNextLives <= 0) {
        return;
      }
      const kinds: Array<ThewlddsexpllorerItemKind> = [
        'berry',
        'mushroom',
        'acorn',
        'rock',
      ];
      const kind = kinds[Math.floor(Math.random() * kinds.length)];
      const x = Math.floor(
        Math.random() *
          (thewlddsexpllorerPlayableW - thewlddsexpllorerTargetSize),
      );
      const y = Math.floor(
        Math.random() *
          (thewlddsexpllorerPlayableH - thewlddsexpllorerTargetSize),
      );
      thewlddsexpllorerSetTarget({x, y, kind});
      thewlddsexpllorerSetDeadline(
        Date.now() + thewlddsexpllorerItemTimeoutMs,
      );
    },
    [
      thewlddsexpllorerItemTimeoutMs,
      thewlddsexpllorerPlayableH,
      thewlddsexpllorerPlayableW,
    ],
  );

  const thewlddsexpllorerResetRun = useCallback(() => {
    thewlddsexpllorerSetLives(thewlddsexpllorerMaxLives);
    thewlddsexpllorerSetScore(0);
    thewlddsexpllorerSetNow(Date.now());
    thewlddsexpllorerSetPlayer({
      x: Math.floor(
        (thewlddsexpllorerPlayableW - thewlddsexpllorerPlayerSize) / 2,
      ),
      y: Math.floor(
        (thewlddsexpllorerPlayableH - thewlddsexpllorerPlayerSize) / 2,
      ),
    });
    thewlddsexpllorerSpawn(thewlddsexpllorerMaxLives);
    thewlddsexpllorerSetScreen('playing');
  }, [
    thewlddsexpllorerPlayableH,
    thewlddsexpllorerPlayableW,
    thewlddsexpllorerSpawn,
  ]);

  useEffect(() => {
    thewlddsexpllorerResetRun();
  }, [thewlddsexpllorerResetRun]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  useEffect(() => {
    if (thewlddsexpllorerScreen !== 'playing') {
      if (thewlddsexpllorerTimerRef.current) {
        clearInterval(thewlddsexpllorerTimerRef.current);
        thewlddsexpllorerTimerRef.current = null;
      }
      return;
    }
    if (thewlddsexpllorerPaused) {
      if (thewlddsexpllorerTimerRef.current) {
        clearInterval(thewlddsexpllorerTimerRef.current);
        thewlddsexpllorerTimerRef.current = null;
      }
      return;
    }
    thewlddsexpllorerTimerRef.current = setInterval(() => {
      thewlddsexpllorerSetNow(Date.now());
    }, 100);
    return () => {
      if (thewlddsexpllorerTimerRef.current) {
        clearInterval(thewlddsexpllorerTimerRef.current);
        thewlddsexpllorerTimerRef.current = null;
      }
    };
  }, [thewlddsexpllorerPaused, thewlddsexpllorerScreen]);

  useEffect(() => {
    if (thewlddsexpllorerScreen !== 'playing') {
      return;
    }
    if (thewlddsexpllorerPaused) {
      return;
    }
    if (thewlddsexpllorerNow < thewlddsexpllorerDeadline) {
      return;
    }
    thewlddsexpllorerSetLives(prev => {
      const next = prev - 1;
      if (next <= 0) {
        thewlddsexpllorerSetBest(b => Math.max(b, thewlddsexpllorerScore));
        thewlddsexpllorerSetScreen('result');
        return 0;
      }
      thewlddsexpllorerSpawn(next);
      return next;
    });
  }, [
    thewlddsexpllorerDeadline,
    thewlddsexpllorerNow,
    thewlddsexpllorerPaused,
    thewlddsexpllorerScore,
    thewlddsexpllorerScreen,
    thewlddsexpllorerSpawn,
  ]);

  useEffect(() => {
    if (thewlddsexpllorerScreen !== 'playing') {
      return;
    }
    if (thewlddsexpllorerPaused) {
      return;
    }
    const px = thewlddsexpllorerPlayer.x;
    const py = thewlddsexpllorerPlayer.y;
    const tx = thewlddsexpllorerTarget.x;
    const ty = thewlddsexpllorerTarget.y;

    const hit =
      px < tx + thewlddsexpllorerTargetSize &&
      px + thewlddsexpllorerPlayerSize > tx &&
      py < ty + thewlddsexpllorerTargetSize &&
      py + thewlddsexpllorerPlayerSize > ty;

    if (!hit) {
      return;
    }

    if (thewlddsexpllorerTarget.kind === 'rock') {
      thewlddsexpllorerSetLives(prev => {
        const next = prev - 1;
        if (next <= 0) {
          thewlddsexpllorerSetBest(b => Math.max(b, thewlddsexpllorerScore));
          thewlddsexpllorerSetScreen('result');
          return 0;
        }
        thewlddsexpllorerSpawn(next);
        return next;
      });
      return;
    }

    const add =
      thewlddsexpllorerTarget.kind === 'berry'
        ? 10
        : thewlddsexpllorerTarget.kind === 'mushroom'
        ? 15
        : 20;
    thewlddsexpllorerSetScore(s => s + add);
    thewlddsexpllorerSpawn(thewlddsexpllorerLives);
  }, [
    thewlddsexpllorerLives,
    thewlddsexpllorerPaused,
    thewlddsexpllorerPlayer.x,
    thewlddsexpllorerPlayer.y,
    thewlddsexpllorerScreen,
    thewlddsexpllorerSpawn,
    thewlddsexpllorerScore,
    thewlddsexpllorerTarget.kind,
    thewlddsexpllorerTarget.x,
    thewlddsexpllorerTarget.y,
  ]);

  const thewlddsexpllorerMove = (dx: number, dy: number) => {
    if (thewlddsexpllorerPaused) {
      return;
    }
    thewlddsexpllorerSetPlayer(p => ({
      x: thewlddsexpllorerClamp(
        p.x + dx,
        0,
        thewlddsexpllorerPlayableW - thewlddsexpllorerPlayerSize,
      ),
      y: thewlddsexpllorerClamp(
        p.y + dy,
        0,
        thewlddsexpllorerPlayableH - thewlddsexpllorerPlayerSize,
      ),
    }));
  };

  const thewlddsexpllorerRemainingMs = Math.max(
    0,
    thewlddsexpllorerDeadline - thewlddsexpllorerNow,
  );
  const thewlddsexpllorerRemainingSec = Math.ceil(
    thewlddsexpllorerRemainingMs / 1000,
  );

  return (
    <ImageBackground
      source={require('../../assets/imgs/wodllandwllipgbg.png')}
      style={styles.thewlddsexpllorerRoot}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.thewlddsexpllorerRoot}>
          {thewlddsexpllorerScreen === 'playing' ? (
            <View style={styles.thewlddsexpllorerPlay}>
              <View style={styles.thewlddsexpllorerHud}>
                <View style={styles.thewlddsexpllorerHudLivesRow}>
                  {Array.from({length: thewlddsexpllorerLives}).map(
                    (_, index) => (
                      <Image
                        key={index}
                        source={require('../../assets/imgs/wodllandwllliv.png')}
                      />
                    ),
                  )}
                </View>
                <View style={styles.thewlddsexpllorerHudTimer}>
                  <Text style={styles.thewlddsexpllorerHudTimerText}>
                    ⏱ {thewlddsexpllorerRemainingSec}s
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                  <View style={styles.thewlddsexpllorerHudScore}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllwn.png')}
                    />
                    <Text style={styles.thewlddsexpllorerHudScoreText}>
                      {thewlddsexpllorerScore}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => thewlddsexpllorerSetPaused(true)}
                    style={styles.thewlddsexpllorerHudPauseBtn}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllipaus.png')}
                      style={styles.thewlddsexpllorerHudPauseImg}
                    />
                  </Pressable>
                </View>
              </View>

              <View
                style={[
                  styles.thewlddsexpllorerStage,
                  {
                    width: thewlddsexpllorerStage.width,
                    height: thewlddsexpllorerStage.height,
                  },
                ]}>
                <View style={styles.thewlddsexpllorerStageBg}>
                  <View
                    style={[
                      styles.thewlddsexpllorerStageInner,
                      {padding: thewlddsexpllorerStage.padding},
                    ]}>
                    <View
                      style={[
                        styles.thewlddsexpllorerTarget,
                        {
                          left: thewlddsexpllorerTarget.x,
                          top: thewlddsexpllorerTarget.y,
                          width: thewlddsexpllorerTargetSize,
                          height: thewlddsexpllorerTargetSize,
                        },
                      ]}>
                      <Text style={styles.thewlddsexpllorerTargetText}>
                        {thewlddsexpllorerKindEmoji(
                          thewlddsexpllorerTarget.kind,
                        )}
                      </Text>
                    </View>

                    <View
                      style={[
                        styles.thewlddsexpllorerPlayer,
                        {
                          left: thewlddsexpllorerPlayer.x,
                          top: thewlddsexpllorerPlayer.y,
                          width: thewlddsexpllorerPlayerSize,
                          height: thewlddsexpllorerPlayerSize,
                        },
                      ]}>
                      <Image
                        source={
                          thewlddsexpllorerExplorerAsset[
                            thewlddsexpllorerExplorer
                          ]
                        }
                        style={styles.thewlddsexpllorerPlayerImg}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.thewlddsexpllorerControls}>
                <Pressable
                  onPress={() =>
                    thewlddsexpllorerMove(0, -thewlddsexpllorerStep)
                  }
                  style={styles.thewlddsexpllorerArrowBtn}>
                  <Image
                    source={require('../../assets/imgs/wodllandwlltop.png')}
                  />
                </Pressable>
                <View style={styles.thewlddsexpllorerControlsRow}>
                  <Pressable
                    onPress={() =>
                      thewlddsexpllorerMove(-thewlddsexpllorerStep, 0)
                    }
                    style={styles.thewlddsexpllorerArrowBtn}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllleft.png')}
                    />
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      thewlddsexpllorerMove(thewlddsexpllorerStep, 0)
                    }
                    style={styles.thewlddsexpllorerArrowBtn}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllrigh.png')}
                    />
                  </Pressable>
                </View>
                <Pressable
                  onPress={() =>
                    thewlddsexpllorerMove(0, thewlddsexpllorerStep)
                  }
                  style={styles.thewlddsexpllorerArrowBtn}>
                  <Image
                    source={require('../../assets/imgs/wodllandwllfbott.png')}
                  />
                </Pressable>
              </View>
            </View>
          ) : null}

          {thewlddsexpllorerScreen === 'result' ? (
            <View style={styles.thewlddsexpllorerResult}>
              <View style={styles.thewlddsexpllorerResultCard}>
                <Text style={styles.thewlddsexpllorerResultEmoji}>
                  {thewlddsexpllorerExplorerEmoji}
                </Text>
                <Text style={styles.thewlddsexpllorerResultStars}>⭐⭐⭐</Text>
                <Text style={styles.thewlddsexpllorerResultTitle}>
                  Amazing Explorer!
                </Text>

                <View style={styles.thewlddsexpllorerScoreRow}>
                  <View style={styles.thewlddsexpllorerScoreBox}>
                    <Text style={styles.thewlddsexpllorerScoreLabel}>
                      Your Score
                    </Text>
                    <Text style={styles.thewlddsexpllorerScoreValue}>
                      {thewlddsexpllorerScore}
                    </Text>
                  </View>
                  <View style={styles.thewlddsexpllorerScoreBox}>
                    <Text style={styles.thewlddsexpllorerScoreLabel}>
                      Best Score
                    </Text>
                    <Text
                      style={[
                        styles.thewlddsexpllorerScoreValue,
                        styles.thewlddsexpllorerScoreValueBest,
                      ]}>
                      {Math.max(
                        thewlddsexpllorerBest,
                        thewlddsexpllorerScore,
                      )}
                    </Text>
                  </View>
                </View>

                <Pressable
                  onPress={thewlddsexpllorerResetRun}
                  style={styles.thewlddsexpllorerPrimaryBtn}>
                  <Image
                    source={require('../../assets/imgs/wodllandwlres.png')}
                  />
                  <Text style={styles.thewlddsexpllorerPrimaryBtnText}>
                    Try Again
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => thewlddsexpllorerNavigation.goBack()}
                  style={[
                    styles.thewlddsexpllorerPrimaryBtn,
                    {
                      backgroundColor: '#281C68',
                      borderColor: '#3828A0',
                      borderWidth: 1,
                      marginTop: 8,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.thewlddsexpllorerPrimaryBtnText,
                      {color: '#A090CC'},
                    ]}>
                    Home
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : null}

          {thewlddsexpllorerScreen === 'playing' &&
          thewlddsexpllorerPaused ? (
            <View style={styles.thewlddsexpllorerPauseOverlay}>
              <View style={styles.thewlddsexpllorerPauseCard}>
                <Text style={styles.thewlddsexpllorerPauseTitle}>
                  Game Paused
                </Text>
                <Text style={styles.thewlddsexpllorerPauseBody}>
                  Your animal is resting safely in the woodland. Continue the
                  game when you are ready to collect more elements and improve
                  your score.
                </Text>
                <Pressable
                  onPress={() => thewlddsexpllorerSetPaused(false)}
                  style={[
                    styles.thewlddsexpllorerPrimaryBtn,
                    styles.thewlddsexpllorerPausePrimaryBtn,
                  ]}>
                  <Text style={styles.thewlddsexpllorerPrimaryBtnText}>
                    Resume
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    thewlddsexpllorerNavigation.goBack();
                  }}
                  style={styles.thewlddsexpllorerPauseLeaveBtn}>
                  <Text style={styles.thewlddsexpllorerPauseLeaveText}>
                    Leave
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Thewlddsexpllorerminigpll;

const styles = StyleSheet.create({
  thewlddsexpllorerHudScoreText: {
    color: '#F0B840',
    fontSize: 12,
    fontWeight: '900',
  },
  thewlddsexpllorerStage: {
    alignSelf: 'center',
  },
  thewlddsexpllorerStageBg: {flex: 1},
  thewlddsexpllorerStageBgImg: {resizeMode: 'cover'},
  thewlddsexpllorerStageInner: {flex: 1},

  thewlddsexpllorerRoot: {
    flex: 1,
  },

  thewlddsexpllorerPlay: {flex: 1},
  thewlddsexpllorerHud: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 12,
    backgroundColor: '#1D1255',
    padding: 12,
    width: '100%',
    minHeight: 120,
  },
  thewlddsexpllorerHudLivesRow: {
    flexDirection: 'row',
    gap: 5,
    bottom: 4,
  },
  thewlddsexpllorerHudLives: {
    fontSize: 16,
  },
  thewlddsexpllorerHudTimer: {
    backgroundColor: '#281C68',

    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerHudTimerText: {
    color: '#EDE8FF',
    fontSize: 12,
    fontWeight: '900',
  },
  thewlddsexpllorerHudScore: {
    backgroundColor: '#281C68',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  thewlddsexpllorerHudPauseBtn: {
    width: 32,
    height: 32,
    borderRadius: 14,
    backgroundColor: '#281C68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerHudPauseImg: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  thewlddsexpllorerTarget: {
    position: 'absolute',

    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerTargetText: {fontSize: 25},
  thewlddsexpllorerPlayer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerPlayerImg: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },
  thewlddsexpllorerControls: {
    marginTop: 14,
    alignItems: 'center',
    gap: 10,
  },
  thewlddsexpllorerControlsRow: {
    flexDirection: 'row',
    gap: 68,
  },
  thewlddsexpllorerArrowBtn: {
    width: 60,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#281C68',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerArrowText: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '900',
  },

  // result
  thewlddsexpllorerResult: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#120A38',
    paddingVertical: 30,
  },
  thewlddsexpllorerResultCard: {
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 26,
    padding: 24,
    alignItems: 'center',
    width: '91%',
    alignSelf: 'center',
  },
  thewlddsexpllorerResultEmoji: {fontSize: 54},
  thewlddsexpllorerResultStars: {
    marginTop: 8,
    color: '#F5C800',
    fontSize: 28,
    fontWeight: '900',
  },
  thewlddsexpllorerResultTitle: {
    marginTop: 14,
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '900',
  },
  thewlddsexpllorerScoreRow: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 12,
  },
  thewlddsexpllorerScoreBox: {
    flex: 1,
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 14,
    alignItems: 'center',
  },
  thewlddsexpllorerScoreLabel: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '700',
  },
  thewlddsexpllorerScoreValue: {
    marginTop: 8,
    color: '#9B5CF6',
    fontSize: 24,
    fontWeight: '900',
  },
  thewlddsexpllorerScoreValueBest: {color: '#F5C800'},
  thewlddsexpllorerPrimaryBtn: {
    marginTop: 14,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    flexDirection: 'row',
    gap: 10,
  },
  thewlddsexpllorerPrimaryBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },

  thewlddsexpllorerPauseOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#120A38',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  thewlddsexpllorerPauseCard: {
    width: '94%',
    backgroundColor: '#1D1255',
    borderRadius: 26,
    padding: 24,
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
  },
  thewlddsexpllorerPauseTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  thewlddsexpllorerPauseBody: {
    marginTop: 18,
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  thewlddsexpllorerPauseLeaveBtn: {
    marginTop: 12,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerPauseLeaveText: {
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '700',
  },
  thewlddsexpllorerPausePrimaryBtn: {height: 48},
});
