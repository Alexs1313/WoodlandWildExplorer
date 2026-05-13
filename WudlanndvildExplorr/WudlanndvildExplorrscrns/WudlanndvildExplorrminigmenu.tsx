import WudlanndvildExplorrlay from '../WudlanndvildExplorrcpn/WudlanndvildExplorrlay';

import React, {useMemo, useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import WudlanndvildExplorrsettmenu from '../WudlanndvildExplorrcpn/WudlanndvildExplorrsettmenu';

type WudlanndvildExplorrExplorer = 'fox' | 'deer' | 'rabbit';

const WudlanndvildExplorrminigmenu = () => {
  const wudlanndvildexplorrNavigation = useNavigation() as any;
  const [wudlanndvildexplorrExplorer, wudlanndvildexplorrSetExplorer] =
    useState<WudlanndvildExplorrExplorer | null>(null);

  const wudlanndvildexplorrExplorerEmoji = useMemo<
    Record<WudlanndvildExplorrExplorer, string>
  >(
    () => ({
      fox: '🦊',
      deer: '🦌',
      rabbit: '🐰',
    }),
    [],
  );

  const wudlanndvildexplorrStart = () => {
    wudlanndvildexplorrNavigation.navigate('WudlanndvildExplorrminigpll', {
      wudlanndvildexplorrExplorer,
    });

    wudlanndvildexplorrSetExplorer(null);
  };

  const wudlanndvildexplorrPick = (
    k: WudlanndvildExplorrExplorer,
    title: string,
    chipStyle: object,
  ) => {
    const active = wudlanndvildexplorrExplorer === k;
    return (
      <Pressable
        onPress={() => wudlanndvildexplorrSetExplorer(k)}
        style={[
          styles.wudlanndvildexplorrPickRow,
          active && styles.wudlanndvildexplorrPickRowActive,
        ]}>
        <View style={[styles.wudlanndvildexplorrPickIcon, chipStyle]}>
          <Text style={styles.wudlanndvildexplorrPickEmoji}>
            {wudlanndvildexplorrExplorerEmoji[k]}
          </Text>
        </View>
        <Text style={styles.wudlanndvildexplorrPickText}>{title}</Text>
        {active ? (
          <View style={[styles.wudlanndvildexplorrPickCheck]}>
            <Text style={styles.wudlanndvildexplorrPickCheckText}>✓</Text>
          </View>
        ) : null}
      </Pressable>
    );
  };

  return (
    <WudlanndvildExplorrlay bounce={false}>
      <View style={styles.wudlanndvildexplorrRoot}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.wudlanndvildexplorrTitle}>Mini Game</Text>
            <Text style={styles.wudlanndvildexplorrSub}>
              Choose your animal explorer
            </Text>
          </View>

          {Platform.OS === 'ios' && (
            <WudlanndvildExplorrsettmenu wudlanndvildexplorrAnchorTop={50} />
          )}
        </View>

        {wudlanndvildexplorrPick(
          'fox',
          'Fox',
          styles.wudlanndvildexplorrPickIconFox,
        )}
        {wudlanndvildexplorrPick(
          'deer',
          'Deer',
          styles.wudlanndvildexplorrPickIconDeer,
        )}
        {wudlanndvildexplorrPick(
          'rabbit',
          'Rabbit',
          styles.wudlanndvildexplorrPickIconRabbit,
        )}

        <View style={styles.wudlanndvildexplorrHowTo}>
          <Text style={styles.wudlanndvildexplorrHowToTitle}>
            🎯 How it works
          </Text>
          <Text style={styles.wudlanndvildexplorrHowToBody}>
            Use the arrow buttons to move your animal across the forest. Collect
            🫐 berries (+10), 🍄 mushrooms (+15), and 🌰 acorns (+20). Avoid 🪨
            rocks or lose a life!
          </Text>
        </View>

        <Pressable
          onPress={wudlanndvildexplorrStart}
          style={styles.wudlanndvildexplorrPrimaryBtn}>
          <Text style={styles.wudlanndvildexplorrPrimaryBtnText}>
            Start Adventure!
          </Text>
        </Pressable>
      </View>
    </WudlanndvildExplorrlay>
  );
};

export default WudlanndvildExplorrminigmenu;

const styles = StyleSheet.create({
  wudlanndvildexplorrPickIconRabbit: {backgroundColor: '#9B5CF6'},
  wudlanndvildexplorrPickEmoji: {fontSize: 22},

  wudlanndvildexplorrRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 116,
  },

  wudlanndvildexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  wudlanndvildexplorrSub: {
    marginTop: 6,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '500',
  },
  wudlanndvildexplorrPickRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1D1255',
    borderWidth: 2,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 14,
    gap: 12,
  },
  wudlanndvildexplorrPickRowActive: {borderColor: '#C8922A'},
  wudlanndvildexplorrPickIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  wudlanndvildexplorrPickIconFox: {backgroundColor: '#D4682A'},
  wudlanndvildexplorrPickIconDeer: {backgroundColor: '#C8922A'},

  wudlanndvildexplorrPickText: {
    flex: 1,
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
  },
  wudlanndvildexplorrPickCheck: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#C46A2C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wudlanndvildexplorrPickCheckText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  wudlanndvildexplorrHowTo: {
    marginTop: 16,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 14,
  },
  wudlanndvildexplorrHowToTitle: {
    color: '#F5C800',
    fontSize: 13,
    fontWeight: '800',
  },
  wudlanndvildexplorrHowToBody: {
    marginTop: 10,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 17,
  },
  wudlanndvildexplorrPrimaryBtn: {
    marginTop: 24,
    height: 65,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrPrimaryBtnText: {
    color: '#120A38',
    fontSize: 15,
    fontWeight: '900',
  },
});
