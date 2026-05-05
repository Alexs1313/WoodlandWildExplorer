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

type WodllandwldexplorrItemKind = 'berry' | 'mushroom' | 'acorn' | 'rock';
type WodllandwldexplorrExplorer = 'fox' | 'deer' | 'rabbit';

type Props = {
  route?: {
    params?: {
      wodllandwldexplorrExplorer?: 'fox' | 'deer' | 'rabbit';
    };
  };
};

const Woodllandwldexplorrminigpll = (props: Props) => {
  const wodllandwldexplorrGameSecondsPerItem = 10;
  const wodllandwldexplorrItemTimeoutMs =
    wodllandwldexplorrGameSecondsPerItem * 1000;
  const wodllandwldexplorrMaxLives = 3;

  const wodllandwldexplorrStage = useMemo(
    () => ({
      width: Dimensions.get('window').width - 32,
      height: Math.floor(Dimensions.get('window').height * 0.52),
      padding: 18,
    }),
    [],
  );

  const wodllandwldexplorrExplorer: WodllandwldexplorrExplorer =
    props.route?.params?.wodllandwldexplorrExplorer ?? 'fox';

  const [wodllandwldexplorrScreen, wodllandwldexplorrSetScreen] = useState<
    'playing' | 'result'
  >('playing');
  const [wodllandwldexplorrLives, wodllandwldexplorrSetLives] = useState(
    wodllandwldexplorrMaxLives,
  );
  const [wodllandwldexplorrScore, wodllandwldexplorrSetScore] = useState(0);
  const [wodllandwldexplorrBest, wodllandwldexplorrSetBest] = useState(0);
  const [wodllandwldexplorrPaused, wodllandwldexplorrSetPaused] =
    useState(false);
  const wodllandwldexplorrNavigation = useNavigation();

  const [wodllandwldexplorrPlayer, wodllandwldexplorrSetPlayer] = useState({
    x: 0,
    y: 0,
  });
  const [wodllandwldexplorrTarget, wodllandwldexplorrSetTarget] = useState({
    x: 0,
    y: 0,
    kind: 'berry' as WodllandwldexplorrItemKind,
  });
  const [wodllandwldexplorrDeadline, wodllandwldexplorrSetDeadline] = useState(
    Date.now() + wodllandwldexplorrItemTimeoutMs,
  );
  const [wodllandwldexplorrNow, wodllandwldexplorrSetNow] = useState(
    Date.now(),
  );
  const wodllandwldexplorrTimerRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const wodllandwldexplorrPlayerSize = 56;
  const wodllandwldexplorrTargetSize = 40;
  const wodllandwldexplorrStep = 26;

  const wodllandwldexplorrPlayableW =
    wodllandwldexplorrStage.width - wodllandwldexplorrStage.padding * 2;
  const wodllandwldexplorrPlayableH =
    wodllandwldexplorrStage.height - wodllandwldexplorrStage.padding * 2;

  const wodllandwldexplorrClamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const wodllandwldexplorrExplorerAsset = useMemo<
    Record<WodllandwldexplorrExplorer, ImageSourcePropType>
  >(
    () => ({
      fox: require('../../assets/imgs/wodllandwllfox.png'),
      deer: require('../../assets/imgs/wodllandwllideer.png'),
      rabbit: require('../../assets/imgs/wodllandwllirabb.png'),
    }),
    [],
  );

  const wodllandwldexplorrExplorerEmoji =
    wodllandwldexplorrExplorer === 'fox'
      ? '🦊'
      : wodllandwldexplorrExplorer === 'deer'
      ? '🦌'
      : '🐰';

  const wodllandwldexplorrKindEmoji = (k: WodllandwldexplorrItemKind) => {
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

  const wodllandwldexplorrSpawn = useCallback(
    (wodllandwldexplorrNextLives: number) => {
      if (wodllandwldexplorrNextLives <= 0) {
        return;
      }
      const kinds: Array<WodllandwldexplorrItemKind> = [
        'berry',
        'mushroom',
        'acorn',
        'rock',
      ];
      const kind = kinds[Math.floor(Math.random() * kinds.length)];
      const x = Math.floor(
        Math.random() *
          (wodllandwldexplorrPlayableW - wodllandwldexplorrTargetSize),
      );
      const y = Math.floor(
        Math.random() *
          (wodllandwldexplorrPlayableH - wodllandwldexplorrTargetSize),
      );
      wodllandwldexplorrSetTarget({x, y, kind});
      wodllandwldexplorrSetDeadline(
        Date.now() + wodllandwldexplorrItemTimeoutMs,
      );
    },
    [
      wodllandwldexplorrItemTimeoutMs,
      wodllandwldexplorrPlayableH,
      wodllandwldexplorrPlayableW,
    ],
  );

  const wodllandwldexplorrResetRun = useCallback(() => {
    wodllandwldexplorrSetLives(wodllandwldexplorrMaxLives);
    wodllandwldexplorrSetScore(0);
    wodllandwldexplorrSetNow(Date.now());
    wodllandwldexplorrSetPlayer({
      x: Math.floor(
        (wodllandwldexplorrPlayableW - wodllandwldexplorrPlayerSize) / 2,
      ),
      y: Math.floor(
        (wodllandwldexplorrPlayableH - wodllandwldexplorrPlayerSize) / 2,
      ),
    });
    wodllandwldexplorrSpawn(wodllandwldexplorrMaxLives);
    wodllandwldexplorrSetScreen('playing');
  }, [
    wodllandwldexplorrPlayableH,
    wodllandwldexplorrPlayableW,
    wodllandwldexplorrSpawn,
  ]);

  useEffect(() => {
    wodllandwldexplorrResetRun();
  }, [wodllandwldexplorrResetRun]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  useEffect(() => {
    if (wodllandwldexplorrScreen !== 'playing') {
      if (wodllandwldexplorrTimerRef.current) {
        clearInterval(wodllandwldexplorrTimerRef.current);
        wodllandwldexplorrTimerRef.current = null;
      }
      return;
    }
    if (wodllandwldexplorrPaused) {
      if (wodllandwldexplorrTimerRef.current) {
        clearInterval(wodllandwldexplorrTimerRef.current);
        wodllandwldexplorrTimerRef.current = null;
      }
      return;
    }
    wodllandwldexplorrTimerRef.current = setInterval(() => {
      wodllandwldexplorrSetNow(Date.now());
    }, 100);
    return () => {
      if (wodllandwldexplorrTimerRef.current) {
        clearInterval(wodllandwldexplorrTimerRef.current);
        wodllandwldexplorrTimerRef.current = null;
      }
    };
  }, [wodllandwldexplorrPaused, wodllandwldexplorrScreen]);

  useEffect(() => {
    if (wodllandwldexplorrScreen !== 'playing') {
      return;
    }
    if (wodllandwldexplorrPaused) {
      return;
    }
    if (wodllandwldexplorrNow < wodllandwldexplorrDeadline) {
      return;
    }
    wodllandwldexplorrSetLives(prev => {
      const next = prev - 1;
      if (next <= 0) {
        wodllandwldexplorrSetBest(b => Math.max(b, wodllandwldexplorrScore));
        wodllandwldexplorrSetScreen('result');
        return 0;
      }
      wodllandwldexplorrSpawn(next);
      return next;
    });
  }, [
    wodllandwldexplorrDeadline,
    wodllandwldexplorrNow,
    wodllandwldexplorrPaused,
    wodllandwldexplorrScore,
    wodllandwldexplorrScreen,
    wodllandwldexplorrSpawn,
  ]);

  useEffect(() => {
    if (wodllandwldexplorrScreen !== 'playing') {
      return;
    }
    if (wodllandwldexplorrPaused) {
      return;
    }
    const px = wodllandwldexplorrPlayer.x;
    const py = wodllandwldexplorrPlayer.y;
    const tx = wodllandwldexplorrTarget.x;
    const ty = wodllandwldexplorrTarget.y;

    const hit =
      px < tx + wodllandwldexplorrTargetSize &&
      px + wodllandwldexplorrPlayerSize > tx &&
      py < ty + wodllandwldexplorrTargetSize &&
      py + wodllandwldexplorrPlayerSize > ty;

    if (!hit) {
      return;
    }

    if (wodllandwldexplorrTarget.kind === 'rock') {
      wodllandwldexplorrSetLives(prev => {
        const next = prev - 1;
        if (next <= 0) {
          wodllandwldexplorrSetBest(b => Math.max(b, wodllandwldexplorrScore));
          wodllandwldexplorrSetScreen('result');
          return 0;
        }
        wodllandwldexplorrSpawn(next);
        return next;
      });
      return;
    }

    const add =
      wodllandwldexplorrTarget.kind === 'berry'
        ? 10
        : wodllandwldexplorrTarget.kind === 'mushroom'
        ? 15
        : 20;
    wodllandwldexplorrSetScore(s => s + add);
    wodllandwldexplorrSpawn(wodllandwldexplorrLives);
  }, [
    wodllandwldexplorrLives,
    wodllandwldexplorrPaused,
    wodllandwldexplorrPlayer.x,
    wodllandwldexplorrPlayer.y,
    wodllandwldexplorrScreen,
    wodllandwldexplorrSpawn,
    wodllandwldexplorrScore,
    wodllandwldexplorrTarget.kind,
    wodllandwldexplorrTarget.x,
    wodllandwldexplorrTarget.y,
  ]);

  const wodllandwldexplorrMove = (dx: number, dy: number) => {
    if (wodllandwldexplorrPaused) {
      return;
    }
    wodllandwldexplorrSetPlayer(p => ({
      x: wodllandwldexplorrClamp(
        p.x + dx,
        0,
        wodllandwldexplorrPlayableW - wodllandwldexplorrPlayerSize,
      ),
      y: wodllandwldexplorrClamp(
        p.y + dy,
        0,
        wodllandwldexplorrPlayableH - wodllandwldexplorrPlayerSize,
      ),
    }));
  };

  const wodllandwldexplorrRemainingMs = Math.max(
    0,
    wodllandwldexplorrDeadline - wodllandwldexplorrNow,
  );
  const wodllandwldexplorrRemainingSec = Math.ceil(
    wodllandwldexplorrRemainingMs / 1000,
  );

  return (
    <ImageBackground
      source={require('../../assets/imgs/wodllandwllipgbg.png')}
      style={styles.wodllandwldexplorrRoot}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.wodllandwldexplorrRoot}>
          {wodllandwldexplorrScreen === 'playing' ? (
            <View style={styles.wodllandwldexplorrPlay}>
              <View style={styles.wodllandwldexplorrHud}>
                <View style={styles.wodllandwldexplorrHudLivesRow}>
                  {Array.from({length: wodllandwldexplorrLives}).map(
                    (_, index) => (
                      <Image
                        key={index}
                        source={require('../../assets/imgs/wodllandwllliv.png')}
                      />
                    ),
                  )}
                </View>
                <View style={styles.wodllandwldexplorrHudTimer}>
                  <Text style={styles.wodllandwldexplorrHudTimerText}>
                    ⏱ {wodllandwldexplorrRemainingSec}s
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                  <View style={styles.wodllandwldexplorrHudScore}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllwn.png')}
                    />
                    <Text style={styles.wodllandwldexplorrHudScoreText}>
                      {wodllandwldexplorrScore}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => wodllandwldexplorrSetPaused(true)}
                    style={styles.wodllandwldexplorrHudPauseBtn}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllipaus.png')}
                      style={styles.wodllandwldexplorrHudPauseImg}
                    />
                  </Pressable>
                </View>
              </View>

              <View
                style={[
                  styles.wodllandwldexplorrStage,
                  {
                    width: wodllandwldexplorrStage.width,
                    height: wodllandwldexplorrStage.height,
                  },
                ]}>
                <View style={styles.wodllandwldexplorrStageBg}>
                  <View
                    style={[
                      styles.wodllandwldexplorrStageInner,
                      {padding: wodllandwldexplorrStage.padding},
                    ]}>
                    <View
                      style={[
                        styles.wodllandwldexplorrTarget,
                        {
                          left: wodllandwldexplorrTarget.x,
                          top: wodllandwldexplorrTarget.y,
                          width: wodllandwldexplorrTargetSize,
                          height: wodllandwldexplorrTargetSize,
                        },
                      ]}>
                      <Text style={styles.wodllandwldexplorrTargetText}>
                        {wodllandwldexplorrKindEmoji(
                          wodllandwldexplorrTarget.kind,
                        )}
                      </Text>
                    </View>

                    <View
                      style={[
                        styles.wodllandwldexplorrPlayer,
                        {
                          left: wodllandwldexplorrPlayer.x,
                          top: wodllandwldexplorrPlayer.y,
                          width: wodllandwldexplorrPlayerSize,
                          height: wodllandwldexplorrPlayerSize,
                        },
                      ]}>
                      <Image
                        source={
                          wodllandwldexplorrExplorerAsset[
                            wodllandwldexplorrExplorer
                          ]
                        }
                        style={styles.wodllandwldexplorrPlayerImg}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.wodllandwldexplorrControls}>
                <Pressable
                  onPress={() =>
                    wodllandwldexplorrMove(0, -wodllandwldexplorrStep)
                  }
                  style={styles.wodllandwldexplorrArrowBtn}>
                  <Image
                    source={require('../../assets/imgs/wodllandwlltop.png')}
                  />
                </Pressable>
                <View style={styles.wodllandwldexplorrControlsRow}>
                  <Pressable
                    onPress={() =>
                      wodllandwldexplorrMove(-wodllandwldexplorrStep, 0)
                    }
                    style={styles.wodllandwldexplorrArrowBtn}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllleft.png')}
                    />
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      wodllandwldexplorrMove(wodllandwldexplorrStep, 0)
                    }
                    style={styles.wodllandwldexplorrArrowBtn}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllrigh.png')}
                    />
                  </Pressable>
                </View>
                <Pressable
                  onPress={() =>
                    wodllandwldexplorrMove(0, wodllandwldexplorrStep)
                  }
                  style={styles.wodllandwldexplorrArrowBtn}>
                  <Image
                    source={require('../../assets/imgs/wodllandwllfbott.png')}
                  />
                </Pressable>
              </View>
            </View>
          ) : null}

          {wodllandwldexplorrScreen === 'result' ? (
            <View style={styles.wodllandwldexplorrResult}>
              <View style={styles.wodllandwldexplorrResultCard}>
                <Text style={styles.wodllandwldexplorrResultEmoji}>
                  {wodllandwldexplorrExplorerEmoji}
                </Text>
                <Text style={styles.wodllandwldexplorrResultStars}>⭐⭐⭐</Text>
                <Text style={styles.wodllandwldexplorrResultTitle}>
                  Amazing Explorer!
                </Text>

                <View style={styles.wodllandwldexplorrScoreRow}>
                  <View style={styles.wodllandwldexplorrScoreBox}>
                    <Text style={styles.wodllandwldexplorrScoreLabel}>
                      Your Score
                    </Text>
                    <Text style={styles.wodllandwldexplorrScoreValue}>
                      {wodllandwldexplorrScore}
                    </Text>
                  </View>
                  <View style={styles.wodllandwldexplorrScoreBox}>
                    <Text style={styles.wodllandwldexplorrScoreLabel}>
                      Best Score
                    </Text>
                    <Text
                      style={[
                        styles.wodllandwldexplorrScoreValue,
                        styles.wodllandwldexplorrScoreValueBest,
                      ]}>
                      {Math.max(
                        wodllandwldexplorrBest,
                        wodllandwldexplorrScore,
                      )}
                    </Text>
                  </View>
                </View>

                <Pressable
                  onPress={wodllandwldexplorrResetRun}
                  style={styles.wodllandwldexplorrPrimaryBtn}>
                  <Image
                    source={require('../../assets/imgs/wodllandwlres.png')}
                  />
                  <Text style={styles.wodllandwldexplorrPrimaryBtnText}>
                    Try Again
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => wodllandwldexplorrNavigation.goBack()}
                  style={[
                    styles.wodllandwldexplorrPrimaryBtn,
                    {
                      backgroundColor: '#281C68',
                      borderColor: '#3828A0',
                      borderWidth: 1,
                      marginTop: 8,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.wodllandwldexplorrPrimaryBtnText,
                      {color: '#A090CC'},
                    ]}>
                    Home
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : null}

          {wodllandwldexplorrScreen === 'playing' &&
          wodllandwldexplorrPaused ? (
            <View style={styles.wodllandwldexplorrPauseOverlay}>
              <View style={styles.wodllandwldexplorrPauseCard}>
                <Text style={styles.wodllandwldexplorrPauseTitle}>
                  Game Paused
                </Text>
                <Text style={styles.wodllandwldexplorrPauseBody}>
                  Your animal is resting safely in the woodland. Continue the
                  game when you are ready to collect more elements and improve
                  your score.
                </Text>
                <Pressable
                  onPress={() => wodllandwldexplorrSetPaused(false)}
                  style={[
                    styles.wodllandwldexplorrPrimaryBtn,
                    styles.wodllandwldexplorrPausePrimaryBtn,
                  ]}>
                  <Text style={styles.wodllandwldexplorrPrimaryBtnText}>
                    Resume
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    wodllandwldexplorrNavigation.goBack();
                  }}
                  style={styles.wodllandwldexplorrPauseLeaveBtn}>
                  <Text style={styles.wodllandwldexplorrPauseLeaveText}>
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

export default Woodllandwldexplorrminigpll;

const styles = StyleSheet.create({
  wodllandwldexplorrHudScoreText: {
    color: '#F0B840',
    fontSize: 12,
    fontWeight: '900',
  },
  wodllandwldexplorrStage: {
    alignSelf: 'center',
  },
  wodllandwldexplorrStageBg: {flex: 1},
  wodllandwldexplorrStageBgImg: {resizeMode: 'cover'},
  wodllandwldexplorrStageInner: {flex: 1},

  wodllandwldexplorrRoot: {
    flex: 1,
  },

  wodllandwldexplorrPlay: {flex: 1},
  wodllandwldexplorrHud: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 12,
    backgroundColor: '#1D1255',
    padding: 12,
    width: '100%',
    minHeight: 120,
  },
  wodllandwldexplorrHudLivesRow: {
    flexDirection: 'row',
    gap: 5,
    bottom: 4,
  },
  wodllandwldexplorrHudLives: {
    fontSize: 16,
  },
  wodllandwldexplorrHudTimer: {
    backgroundColor: '#281C68',

    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrHudTimerText: {
    color: '#EDE8FF',
    fontSize: 12,
    fontWeight: '900',
  },
  wodllandwldexplorrHudScore: {
    backgroundColor: '#281C68',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  wodllandwldexplorrHudPauseBtn: {
    width: 32,
    height: 32,
    borderRadius: 14,
    backgroundColor: '#281C68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrHudPauseImg: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  wodllandwldexplorrTarget: {
    position: 'absolute',

    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrTargetText: {fontSize: 25},
  wodllandwldexplorrPlayer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrPlayerImg: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },
  wodllandwldexplorrControls: {
    marginTop: 14,
    alignItems: 'center',
    gap: 10,
  },
  wodllandwldexplorrControlsRow: {
    flexDirection: 'row',
    gap: 68,
  },
  wodllandwldexplorrArrowBtn: {
    width: 60,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#281C68',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrArrowText: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '900',
  },

  // result
  wodllandwldexplorrResult: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#120A38',
    paddingVertical: 30,
  },
  wodllandwldexplorrResultCard: {
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 26,
    padding: 24,
    alignItems: 'center',
    width: '91%',
    alignSelf: 'center',
  },
  wodllandwldexplorrResultEmoji: {fontSize: 54},
  wodllandwldexplorrResultStars: {
    marginTop: 8,
    color: '#F5C800',
    fontSize: 28,
    fontWeight: '900',
  },
  wodllandwldexplorrResultTitle: {
    marginTop: 14,
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '900',
  },
  wodllandwldexplorrScoreRow: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 12,
  },
  wodllandwldexplorrScoreBox: {
    flex: 1,
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 14,
    alignItems: 'center',
  },
  wodllandwldexplorrScoreLabel: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '700',
  },
  wodllandwldexplorrScoreValue: {
    marginTop: 8,
    color: '#9B5CF6',
    fontSize: 24,
    fontWeight: '900',
  },
  wodllandwldexplorrScoreValueBest: {color: '#F5C800'},
  wodllandwldexplorrPrimaryBtn: {
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
  wodllandwldexplorrPrimaryBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },

  wodllandwldexplorrPauseOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#120A38',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wodllandwldexplorrPauseCard: {
    width: '94%',
    backgroundColor: '#1D1255',
    borderRadius: 26,
    padding: 24,
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
  },
  wodllandwldexplorrPauseTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  wodllandwldexplorrPauseBody: {
    marginTop: 18,
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  wodllandwldexplorrPauseLeaveBtn: {
    marginTop: 12,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrPauseLeaveText: {
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '700',
  },
  wodllandwldexplorrPausePrimaryBtn: {height: 48},
});
