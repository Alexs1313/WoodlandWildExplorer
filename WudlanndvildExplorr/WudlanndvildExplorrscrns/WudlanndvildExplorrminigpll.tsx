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

type WudlanndvildExplorrItemKind = 'berry' | 'mushroom' | 'acorn' | 'rock';
type WudlanndvildExplorrExplorer = 'fox' | 'deer' | 'rabbit';

type Props = {
  route?: {
    params?: {
      wudlanndvildexplorrExplorer?: 'fox' | 'deer' | 'rabbit';
    };
  };
};

const WudlanndvildExplorrminigpll = (props: Props) => {
  const wudlanndvildexplorrGameSecondsPerItem = 10;
  const wudlanndvildexplorrItemTimeoutMs =
    wudlanndvildexplorrGameSecondsPerItem * 1000;
  const wudlanndvildexplorrMaxLives = 3;

  const wudlanndvildexplorrStage = useMemo(
    () => ({
      width: Dimensions.get('window').width - 32,
      height: Math.floor(Dimensions.get('window').height * 0.52),
      padding: 18,
    }),
    [],
  );

  const wudlanndvildexplorrExplorer: WudlanndvildExplorrExplorer =
    props.route?.params?.wudlanndvildexplorrExplorer ?? 'fox';

  const [wudlanndvildexplorrScreen, wudlanndvildexplorrSetScreen] = useState<
    'playing' | 'result'
  >('playing');
  const [wudlanndvildexplorrLives, wudlanndvildexplorrSetLives] = useState(
    wudlanndvildexplorrMaxLives,
  );
  const [wudlanndvildexplorrScore, wudlanndvildexplorrSetScore] = useState(0);
  const [wudlanndvildexplorrBest, wudlanndvildexplorrSetBest] = useState(0);
  const [wudlanndvildexplorrPaused, wudlanndvildexplorrSetPaused] =
    useState(false);
  const wudlanndvildexplorrNavigation = useNavigation();

  const [wudlanndvildexplorrPlayer, wudlanndvildexplorrSetPlayer] = useState({
    x: 0,
    y: 0,
  });
  const [wudlanndvildexplorrTarget, wudlanndvildexplorrSetTarget] = useState({
    x: 0,
    y: 0,
    kind: 'berry' as WudlanndvildExplorrItemKind,
  });
  const [wudlanndvildexplorrDeadline, wudlanndvildexplorrSetDeadline] =
    useState(Date.now() + wudlanndvildexplorrItemTimeoutMs);
  const [wudlanndvildexplorrNow, wudlanndvildexplorrSetNow] = useState(
    Date.now(),
  );
  const wudlanndvildexplorrTimerRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const wudlanndvildexplorrPlayerSize = 56;
  const wudlanndvildexplorrTargetSize = 40;
  const wudlanndvildexplorrStep = 26;

  const wudlanndvildexplorrPlayableW =
    wudlanndvildexplorrStage.width - wudlanndvildexplorrStage.padding * 2;
  const wudlanndvildexplorrPlayableH =
    wudlanndvildexplorrStage.height - wudlanndvildexplorrStage.padding * 2;

  const wudlanndvildexplorrClamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const wudlanndvildexplorrExplorerAsset = useMemo<
    Record<WudlanndvildExplorrExplorer, ImageSourcePropType>
  >(
    () => ({
      fox: require('../../assets/imgs/wodllandwllfox.png'),
      deer: require('../../assets/imgs/wodllandwllideer.png'),
      rabbit: require('../../assets/imgs/wodllandwllirabb.png'),
    }),
    [],
  );

  const wudlanndvildexplorrExplorerEmoji =
    wudlanndvildexplorrExplorer === 'fox'
      ? '🦊'
      : wudlanndvildexplorrExplorer === 'deer'
      ? '🦌'
      : '🐰';

  const wudlanndvildexplorrKindEmoji = (k: WudlanndvildExplorrItemKind) => {
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

  const wudlanndvildexplorrSpawn = useCallback(
    (wudlanndvildexplorrNextLives: number) => {
      if (wudlanndvildexplorrNextLives <= 0) {
        return;
      }
      const kinds: Array<WudlanndvildExplorrItemKind> = [
        'berry',
        'mushroom',
        'acorn',
        'rock',
      ];
      const kind = kinds[Math.floor(Math.random() * kinds.length)];
      const x = Math.floor(
        Math.random() *
          (wudlanndvildexplorrPlayableW - wudlanndvildexplorrTargetSize),
      );
      const y = Math.floor(
        Math.random() *
          (wudlanndvildexplorrPlayableH - wudlanndvildexplorrTargetSize),
      );
      wudlanndvildexplorrSetTarget({x, y, kind});
      wudlanndvildexplorrSetDeadline(
        Date.now() + wudlanndvildexplorrItemTimeoutMs,
      );
    },
    [
      wudlanndvildexplorrItemTimeoutMs,
      wudlanndvildexplorrPlayableH,
      wudlanndvildexplorrPlayableW,
    ],
  );

  const wudlanndvildexplorrResetRun = useCallback(() => {
    wudlanndvildexplorrSetLives(wudlanndvildexplorrMaxLives);
    wudlanndvildexplorrSetScore(0);
    wudlanndvildexplorrSetNow(Date.now());
    wudlanndvildexplorrSetPlayer({
      x: Math.floor(
        (wudlanndvildexplorrPlayableW - wudlanndvildexplorrPlayerSize) / 2,
      ),
      y: Math.floor(
        (wudlanndvildexplorrPlayableH - wudlanndvildexplorrPlayerSize) / 2,
      ),
    });
    wudlanndvildexplorrSpawn(wudlanndvildexplorrMaxLives);
    wudlanndvildexplorrSetScreen('playing');
  }, [
    wudlanndvildexplorrPlayableH,
    wudlanndvildexplorrPlayableW,
    wudlanndvildexplorrSpawn,
  ]);

  useEffect(() => {
    wudlanndvildexplorrResetRun();
  }, [wudlanndvildexplorrResetRun]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  useEffect(() => {
    if (wudlanndvildexplorrScreen !== 'playing') {
      if (wudlanndvildexplorrTimerRef.current) {
        clearInterval(wudlanndvildexplorrTimerRef.current);
        wudlanndvildexplorrTimerRef.current = null;
      }
      return;
    }
    if (wudlanndvildexplorrPaused) {
      if (wudlanndvildexplorrTimerRef.current) {
        clearInterval(wudlanndvildexplorrTimerRef.current);
        wudlanndvildexplorrTimerRef.current = null;
      }
      return;
    }
    wudlanndvildexplorrTimerRef.current = setInterval(() => {
      wudlanndvildexplorrSetNow(Date.now());
    }, 100);
    return () => {
      if (wudlanndvildexplorrTimerRef.current) {
        clearInterval(wudlanndvildexplorrTimerRef.current);
        wudlanndvildexplorrTimerRef.current = null;
      }
    };
  }, [wudlanndvildexplorrPaused, wudlanndvildexplorrScreen]);

  useEffect(() => {
    if (wudlanndvildexplorrScreen !== 'playing') {
      return;
    }
    if (wudlanndvildexplorrPaused) {
      return;
    }
    if (wudlanndvildexplorrNow < wudlanndvildexplorrDeadline) {
      return;
    }
    wudlanndvildexplorrSetLives(prev => {
      const next = prev - 1;
      if (next <= 0) {
        wudlanndvildexplorrSetBest(b => Math.max(b, wudlanndvildexplorrScore));
        wudlanndvildexplorrSetScreen('result');
        return 0;
      }
      wudlanndvildexplorrSpawn(next);
      return next;
    });
  }, [
    wudlanndvildexplorrDeadline,
    wudlanndvildexplorrNow,
    wudlanndvildexplorrPaused,
    wudlanndvildexplorrScore,
    wudlanndvildexplorrScreen,
    wudlanndvildexplorrSpawn,
  ]);

  useEffect(() => {
    if (wudlanndvildexplorrScreen !== 'playing') {
      return;
    }
    if (wudlanndvildexplorrPaused) {
      return;
    }
    const px = wudlanndvildexplorrPlayer.x;
    const py = wudlanndvildexplorrPlayer.y;
    const tx = wudlanndvildexplorrTarget.x;
    const ty = wudlanndvildexplorrTarget.y;

    const hit =
      px < tx + wudlanndvildexplorrTargetSize &&
      px + wudlanndvildexplorrPlayerSize > tx &&
      py < ty + wudlanndvildexplorrTargetSize &&
      py + wudlanndvildexplorrPlayerSize > ty;

    if (!hit) {
      return;
    }

    if (wudlanndvildexplorrTarget.kind === 'rock') {
      wudlanndvildexplorrSetLives(prev => {
        const next = prev - 1;
        if (next <= 0) {
          wudlanndvildexplorrSetBest(b =>
            Math.max(b, wudlanndvildexplorrScore),
          );
          wudlanndvildexplorrSetScreen('result');
          return 0;
        }
        wudlanndvildexplorrSpawn(next);
        return next;
      });
      return;
    }

    const add =
      wudlanndvildexplorrTarget.kind === 'berry'
        ? 10
        : wudlanndvildexplorrTarget.kind === 'mushroom'
        ? 15
        : 20;
    wudlanndvildexplorrSetScore(s => s + add);
    wudlanndvildexplorrSpawn(wudlanndvildexplorrLives);
  }, [
    wudlanndvildexplorrLives,
    wudlanndvildexplorrPaused,
    wudlanndvildexplorrPlayer.x,
    wudlanndvildexplorrPlayer.y,
    wudlanndvildexplorrScreen,
    wudlanndvildexplorrSpawn,
    wudlanndvildexplorrScore,
    wudlanndvildexplorrTarget.kind,
    wudlanndvildexplorrTarget.x,
    wudlanndvildexplorrTarget.y,
  ]);

  const wudlanndvildexplorrMove = (dx: number, dy: number) => {
    if (wudlanndvildexplorrPaused) {
      return;
    }
    wudlanndvildexplorrSetPlayer(p => ({
      x: wudlanndvildexplorrClamp(
        p.x + dx,
        0,
        wudlanndvildexplorrPlayableW - wudlanndvildexplorrPlayerSize,
      ),
      y: wudlanndvildexplorrClamp(
        p.y + dy,
        0,
        wudlanndvildexplorrPlayableH - wudlanndvildexplorrPlayerSize,
      ),
    }));
  };

  const wudlanndvildexplorrRemainingMs = Math.max(
    0,
    wudlanndvildexplorrDeadline - wudlanndvildexplorrNow,
  );
  const wudlanndvildexplorrRemainingSec = Math.ceil(
    wudlanndvildexplorrRemainingMs / 1000,
  );

  return (
    <ImageBackground
      source={require('../../assets/imgs/wodllandwllipgbg.png')}
      style={styles.wudlanndvildexplorrRoot}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.wudlanndvildexplorrRoot}>
          {wudlanndvildexplorrScreen === 'playing' ? (
            <View style={styles.wudlanndvildexplorrPlay}>
              <View style={styles.wudlanndvildexplorrHud}>
                <View style={styles.wudlanndvildexplorrHudLivesRow}>
                  {Array.from({length: wudlanndvildexplorrLives}).map(
                    (_, index) => (
                      <Image
                        key={index}
                        source={require('../../assets/imgs/wodllandwllliv.png')}
                      />
                    ),
                  )}
                </View>
                <View style={styles.wudlanndvildexplorrHudTimer}>
                  <Text style={styles.wudlanndvildexplorrHudTimerText}>
                    ⏱ {wudlanndvildexplorrRemainingSec}s
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                  <View style={styles.wudlanndvildexplorrHudScore}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllwn.png')}
                    />
                    <Text style={styles.wudlanndvildexplorrHudScoreText}>
                      {wudlanndvildexplorrScore}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => wudlanndvildexplorrSetPaused(true)}
                    style={styles.wudlanndvildexplorrHudPauseBtn}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllipaus.png')}
                      style={styles.wudlanndvildexplorrHudPauseImg}
                    />
                  </Pressable>
                </View>
              </View>

              <View
                style={[
                  styles.wudlanndvildexplorrStage,
                  {
                    width: wudlanndvildexplorrStage.width,
                    height: wudlanndvildexplorrStage.height,
                  },
                ]}>
                <View style={styles.wudlanndvildexplorrStageBg}>
                  <View
                    style={[
                      styles.wudlanndvildexplorrStageInner,
                      {padding: wudlanndvildexplorrStage.padding},
                    ]}>
                    <View
                      style={[
                        styles.wudlanndvildexplorrTarget,
                        {
                          left: wudlanndvildexplorrTarget.x,
                          top: wudlanndvildexplorrTarget.y,
                          width: wudlanndvildexplorrTargetSize,
                          height: wudlanndvildexplorrTargetSize,
                        },
                      ]}>
                      <Text style={styles.wudlanndvildexplorrTargetText}>
                        {wudlanndvildexplorrKindEmoji(
                          wudlanndvildexplorrTarget.kind,
                        )}
                      </Text>
                    </View>

                    <View
                      style={[
                        styles.wudlanndvildexplorrPlayer,
                        {
                          left: wudlanndvildexplorrPlayer.x,
                          top: wudlanndvildexplorrPlayer.y,
                          width: wudlanndvildexplorrPlayerSize,
                          height: wudlanndvildexplorrPlayerSize,
                        },
                      ]}>
                      <Image
                        source={
                          wudlanndvildexplorrExplorerAsset[
                            wudlanndvildexplorrExplorer
                          ]
                        }
                        style={styles.wudlanndvildexplorrPlayerImg}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.wudlanndvildexplorrControls}>
                <Pressable
                  onPress={() =>
                    wudlanndvildexplorrMove(0, -wudlanndvildexplorrStep)
                  }
                  style={styles.wudlanndvildexplorrArrowBtn}>
                  <Image
                    source={require('../../assets/imgs/wodllandwlltop.png')}
                  />
                </Pressable>
                <View style={styles.wudlanndvildexplorrControlsRow}>
                  <Pressable
                    onPress={() =>
                      wudlanndvildexplorrMove(-wudlanndvildexplorrStep, 0)
                    }
                    style={styles.wudlanndvildexplorrArrowBtn}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllleft.png')}
                    />
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      wudlanndvildexplorrMove(wudlanndvildexplorrStep, 0)
                    }
                    style={styles.wudlanndvildexplorrArrowBtn}>
                    <Image
                      source={require('../../assets/imgs/wodllandwllrigh.png')}
                    />
                  </Pressable>
                </View>
                <Pressable
                  onPress={() =>
                    wudlanndvildexplorrMove(0, wudlanndvildexplorrStep)
                  }
                  style={styles.wudlanndvildexplorrArrowBtn}>
                  <Image
                    source={require('../../assets/imgs/wodllandwllfbott.png')}
                  />
                </Pressable>
              </View>
            </View>
          ) : null}

          {wudlanndvildexplorrScreen === 'result' ? (
            <View style={styles.wudlanndvildexplorrResult}>
              <View style={styles.wudlanndvildexplorrResultCard}>
                <Text style={styles.wudlanndvildexplorrResultEmoji}>
                  {wudlanndvildexplorrExplorerEmoji}
                </Text>
                <Text style={styles.wudlanndvildexplorrResultStars}>
                  ⭐⭐⭐
                </Text>
                <Text style={styles.wudlanndvildexplorrResultTitle}>
                  Amazing Explorer!
                </Text>

                <View style={styles.wudlanndvildexplorrScoreRow}>
                  <View style={styles.wudlanndvildexplorrScoreBox}>
                    <Text style={styles.wudlanndvildexplorrScoreLabel}>
                      Your Score
                    </Text>
                    <Text style={styles.wudlanndvildexplorrScoreValue}>
                      {wudlanndvildexplorrScore}
                    </Text>
                  </View>
                  <View style={styles.wudlanndvildexplorrScoreBox}>
                    <Text style={styles.wudlanndvildexplorrScoreLabel}>
                      Best Score
                    </Text>
                    <Text
                      style={[
                        styles.wudlanndvildexplorrScoreValue,
                        styles.wudlanndvildexplorrScoreValueBest,
                      ]}>
                      {Math.max(
                        wudlanndvildexplorrBest,
                        wudlanndvildexplorrScore,
                      )}
                    </Text>
                  </View>
                </View>

                <Pressable
                  onPress={wudlanndvildexplorrResetRun}
                  style={styles.wudlanndvildexplorrPrimaryBtn}>
                  <Image
                    source={require('../../assets/imgs/wodllandwlres.png')}
                  />
                  <Text style={styles.wudlanndvildexplorrPrimaryBtnText}>
                    Try Again
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => wudlanndvildexplorrNavigation.goBack()}
                  style={[
                    styles.wudlanndvildexplorrPrimaryBtn,
                    {
                      backgroundColor: '#281C68',
                      borderColor: '#3828A0',
                      borderWidth: 1,
                      marginTop: 8,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.wudlanndvildexplorrPrimaryBtnText,
                      {color: '#A090CC'},
                    ]}>
                    Home
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : null}

          {wudlanndvildexplorrScreen === 'playing' &&
          wudlanndvildexplorrPaused ? (
            <View style={styles.wudlanndvildexplorrPauseOverlay}>
              <View style={styles.wudlanndvildexplorrPauseCard}>
                <Text style={styles.wudlanndvildexplorrPauseTitle}>
                  Game Paused
                </Text>
                <Text style={styles.wudlanndvildexplorrPauseBody}>
                  Your animal is resting safely in the woodland. Continue the
                  game when you are ready to collect more elements and improve
                  your score.
                </Text>
                <Pressable
                  onPress={() => wudlanndvildexplorrSetPaused(false)}
                  style={[
                    styles.wudlanndvildexplorrPrimaryBtn,
                    styles.wudlanndvildexplorrPausePrimaryBtn,
                  ]}>
                  <Text style={styles.wudlanndvildexplorrPrimaryBtnText}>
                    Resume
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    wudlanndvildexplorrNavigation.goBack();
                  }}
                  style={styles.wudlanndvildexplorrPauseLeaveBtn}>
                  <Text style={styles.wudlanndvildexplorrPauseLeaveText}>
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

export default WudlanndvildExplorrminigpll;

const styles = StyleSheet.create({
  wudlanndvildexplorrHudScoreText: {
    color: '#F0B840',
    fontSize: 12,
    fontWeight: '900',
  },
  wudlanndvildexplorrStage: {
    alignSelf: 'center',
  },
  wudlanndvildexplorrStageBg: {flex: 1},
  wudlanndvildexplorrStageBgImg: {resizeMode: 'cover'},
  wudlanndvildexplorrStageInner: {flex: 1},

  wudlanndvildexplorrRoot: {
    flex: 1,
  },

  wudlanndvildexplorrPlay: {flex: 1},
  wudlanndvildexplorrHud: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 12,
    backgroundColor: '#1D1255',
    padding: 12,
    width: '100%',
    minHeight: 120,
  },

  wudlanndvildexplorrHudLivesRow: {
    flexDirection: 'row',
    gap: 5,
    bottom: 4,
  },

  wudlanndvildexplorrHudLives: {
    fontSize: 16,
  },

  wudlanndvildexplorrHudTimer: {
    backgroundColor: '#281C68',

    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrHudTimerText: {
    color: '#EDE8FF',
    fontSize: 12,
    fontWeight: '900',
  },
  wudlanndvildexplorrHudScore: {
    backgroundColor: '#281C68',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  wudlanndvildexplorrHudPauseBtn: {
    width: 32,
    height: 32,

    borderRadius: 14,

    backgroundColor: '#281C68',

    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrHudPauseImg: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  wudlanndvildexplorrTarget: {
    position: 'absolute',

    alignItems: 'center',

    justifyContent: 'center',
  },
  wudlanndvildexplorrTargetText: {fontSize: 25},
  wudlanndvildexplorrPlayer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrPlayerImg: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },
  wudlanndvildexplorrControls: {
    marginTop: 14,

    alignItems: 'center',
    gap: 10,
  },
  wudlanndvildexplorrControlsRow: {
    flexDirection: 'row',
    gap: 68,
  },
  wudlanndvildexplorrArrowBtn: {
    width: 60,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#281C68',
    borderWidth: 1,
    borderColor: '#3828A0',

    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrArrowText: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '900',
  },

  // result
  wudlanndvildexplorrResult: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#120A38',

    paddingVertical: 30,
  },
  wudlanndvildexplorrResultCard: {
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',

    borderRadius: 26,

    padding: 24,
    alignItems: 'center',
    width: '91%',
    alignSelf: 'center',
  },
  wudlanndvildexplorrResultEmoji: {fontSize: 54},
  wudlanndvildexplorrResultStars: {
    marginTop: 8,
    color: '#F5C800',
    fontSize: 28,
    fontWeight: '900',
  },
  wudlanndvildexplorrResultTitle: {
    marginTop: 14,
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '900',
  },
  wudlanndvildexplorrScoreRow: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 12,
  },
  wudlanndvildexplorrScoreBox: {
    flex: 1,
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 14,
    alignItems: 'center',
  },
  wudlanndvildexplorrScoreLabel: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '700',
  },
  wudlanndvildexplorrScoreValue: {
    marginTop: 8,
    color: '#9B5CF6',
    fontSize: 24,
    fontWeight: '900',
  },
  wudlanndvildexplorrScoreValueBest: {color: '#F5C800'},
  wudlanndvildexplorrPrimaryBtn: {
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
  wudlanndvildexplorrPrimaryBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },

  wudlanndvildexplorrPauseOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#120A38',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wudlanndvildexplorrPauseCard: {
    width: '94%',
    backgroundColor: '#1D1255',
    borderRadius: 26,
    padding: 24,
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
  },
  wudlanndvildexplorrPauseTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  wudlanndvildexplorrPauseBody: {
    marginTop: 18,
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  wudlanndvildexplorrPauseLeaveBtn: {
    marginTop: 12,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrPauseLeaveText: {
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '700',
  },
  wudlanndvildexplorrPausePrimaryBtn: {height: 48},
});
