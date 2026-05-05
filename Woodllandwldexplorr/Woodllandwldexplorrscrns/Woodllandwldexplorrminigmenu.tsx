import Woodllandwldexplorrlay from '../Woodllandwldexplorrcpn/Woodllandwldexplorrlay';

import React, {useMemo, useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Woodllandwldexplorrsettmenu from '../Woodllandwldexplorrcpn/Woodllandwldexplorrsettmenu';

type WodllandwldexplorrExplorer = 'fox' | 'deer' | 'rabbit';

const Woodllandwldexplorrminigmenu = () => {
  const wodllandwldexplorrNavigation = useNavigation() as any;
  const [wodllandwldexplorrExplorer, wodllandwldexplorrSetExplorer] =
    useState<WodllandwldexplorrExplorer | null>(null);

  const wodllandwldexplorrExplorerEmoji = useMemo<
    Record<WodllandwldexplorrExplorer, string>
  >(
    () => ({
      fox: '🦊',
      deer: '🦌',
      rabbit: '🐰',
    }),
    [],
  );

  const wodllandwldexplorrStart = () => {
    wodllandwldexplorrNavigation.navigate('Woodllandwldexplorrminigpll', {
      wodllandwldexplorrExplorer,
    });

    wodllandwldexplorrSetExplorer(null);
  };

  const wodllandwldexplorrPick = (
    k: WodllandwldexplorrExplorer,
    title: string,
    chipStyle: object,
  ) => {
    const active = wodllandwldexplorrExplorer === k;
    return (
      <Pressable
        onPress={() => wodllandwldexplorrSetExplorer(k)}
        style={[
          styles.wodllandwldexplorrPickRow,
          active && styles.wodllandwldexplorrPickRowActive,
        ]}>
        <View style={[styles.wodllandwldexplorrPickIcon, chipStyle]}>
          <Text style={styles.wodllandwldexplorrPickEmoji}>
            {wodllandwldexplorrExplorerEmoji[k]}
          </Text>
        </View>
        <Text style={styles.wodllandwldexplorrPickText}>{title}</Text>
        {active ? (
          <View style={[styles.wodllandwldexplorrPickCheck]}>
            <Text style={styles.wodllandwldexplorrPickCheckText}>✓</Text>
          </View>
        ) : null}
      </Pressable>
    );
  };

  return (
    <Woodllandwldexplorrlay bounce={false}>
      <View style={styles.wodllandwldexplorrRoot}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.wodllandwldexplorrTitle}>Mini Game</Text>
            <Text style={styles.wodllandwldexplorrSub}>
              Choose your animal explorer
            </Text>
          </View>

          {Platform.OS === 'ios' && (
            <Woodllandwldexplorrsettmenu wodllandwldexplorrAnchorTop={50} />
          )}
        </View>

        {wodllandwldexplorrPick(
          'fox',
          'Fox',
          styles.wodllandwldexplorrPickIconFox,
        )}
        {wodllandwldexplorrPick(
          'deer',
          'Deer',
          styles.wodllandwldexplorrPickIconDeer,
        )}
        {wodllandwldexplorrPick(
          'rabbit',
          'Rabbit',
          styles.wodllandwldexplorrPickIconRabbit,
        )}

        <View style={styles.wodllandwldexplorrHowTo}>
          <Text style={styles.wodllandwldexplorrHowToTitle}>
            🎯 How it works
          </Text>
          <Text style={styles.wodllandwldexplorrHowToBody}>
            Use the arrow buttons to move your animal across the forest. Collect
            🫐 berries (+10), 🍄 mushrooms (+15), and 🌰 acorns (+20). Avoid 🪨
            rocks or lose a life!
          </Text>
        </View>

        <Pressable
          onPress={wodllandwldexplorrStart}
          style={styles.wodllandwldexplorrPrimaryBtn}>
          <Text style={styles.wodllandwldexplorrPrimaryBtnText}>
            Start Adventure!
          </Text>
        </Pressable>
      </View>
    </Woodllandwldexplorrlay>
  );
};

export default Woodllandwldexplorrminigmenu;

const styles = StyleSheet.create({
  wodllandwldexplorrPickIconRabbit: {backgroundColor: '#9B5CF6'},
  wodllandwldexplorrPickEmoji: {fontSize: 22},

  wodllandwldexplorrRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 116,
  },

  wodllandwldexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  wodllandwldexplorrSub: {
    marginTop: 6,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '500',
  },
  wodllandwldexplorrPickRow: {
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
  wodllandwldexplorrPickRowActive: {borderColor: '#C8922A'},
  wodllandwldexplorrPickIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  wodllandwldexplorrPickIconFox: {backgroundColor: '#D4682A'},
  wodllandwldexplorrPickIconDeer: {backgroundColor: '#C8922A'},

  wodllandwldexplorrPickText: {
    flex: 1,
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
  },
  wodllandwldexplorrPickCheck: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#C46A2C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wodllandwldexplorrPickCheckText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  wodllandwldexplorrHowTo: {
    marginTop: 16,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 14,
  },
  wodllandwldexplorrHowToTitle: {
    color: '#F5C800',
    fontSize: 13,
    fontWeight: '800',
  },
  wodllandwldexplorrHowToBody: {
    marginTop: 10,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 17,
  },
  wodllandwldexplorrPrimaryBtn: {
    marginTop: 24,
    height: 65,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrPrimaryBtnText: {
    color: '#120A38',
    fontSize: 15,
    fontWeight: '900',
  },
});
