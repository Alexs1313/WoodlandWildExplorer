import Thewlddsexpllorerlay from '../Thewlddsexpllorercpn/Thewlddsexpllorerlay';

import React, {useMemo, useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Thewlddsexpllorersettmenu from '../Thewlddsexpllorercpn/Thewlddsexpllorersettmenu';

type ThewlddsexpllorerExplorer = 'fox' | 'deer' | 'rabbit';

const Thewlddsexpllorerminigmenu = () => {
  const thewlddsexpllorerNavigation = useNavigation() as any;
  const [thewlddsexpllorerExplorer, thewlddsexpllorerSetExplorer] =
    useState<ThewlddsexpllorerExplorer | null>(null);

  const thewlddsexpllorerExplorerEmoji = useMemo<
    Record<ThewlddsexpllorerExplorer, string>
  >(
    () => ({
      fox: '🦊',
      deer: '🦌',
      rabbit: '🐰',
    }),
    [],
  );

  const thewlddsexpllorerStart = () => {
    thewlddsexpllorerNavigation.navigate('Thewlddsexpllorerminigpll', {
      thewlddsexpllorerExplorer,
    });

    thewlddsexpllorerSetExplorer(null);
  };

  const thewlddsexpllorerPick = (
    k: ThewlddsexpllorerExplorer,
    title: string,
    chipStyle: object,
  ) => {
    const active = thewlddsexpllorerExplorer === k;
    return (
      <Pressable
        onPress={() => thewlddsexpllorerSetExplorer(k)}
        style={[
          styles.thewlddsexpllorerPickRow,
          active && styles.thewlddsexpllorerPickRowActive,
        ]}>
        <View style={[styles.thewlddsexpllorerPickIcon, chipStyle]}>
          <Text style={styles.thewlddsexpllorerPickEmoji}>
            {thewlddsexpllorerExplorerEmoji[k]}
          </Text>
        </View>
        <Text style={styles.thewlddsexpllorerPickText}>{title}</Text>
        {active ? (
          <View style={[styles.thewlddsexpllorerPickCheck]}>
            <Text style={styles.thewlddsexpllorerPickCheckText}>✓</Text>
          </View>
        ) : null}
      </Pressable>
    );
  };

  return (
    <Thewlddsexpllorerlay bounce={false}>
      <View style={styles.thewlddsexpllorerRoot}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.thewlddsexpllorerTitle}>Mini Game</Text>
            <Text style={styles.thewlddsexpllorerSub}>
              Choose your animal explorer
            </Text>
          </View>

          {Platform.OS === 'ios' && (
            <Thewlddsexpllorersettmenu thewlddsexpllorerAnchorTop={50} />
          )}
        </View>

        {thewlddsexpllorerPick(
          'fox',
          'Fox',
          styles.thewlddsexpllorerPickIconFox,
        )}
        {thewlddsexpllorerPick(
          'deer',
          'Deer',
          styles.thewlddsexpllorerPickIconDeer,
        )}
        {thewlddsexpllorerPick(
          'rabbit',
          'Rabbit',
          styles.thewlddsexpllorerPickIconRabbit,
        )}

        <View style={styles.thewlddsexpllorerHowTo}>
          <Text style={styles.thewlddsexpllorerHowToTitle}>
            🎯 How it works
          </Text>
          <Text style={styles.thewlddsexpllorerHowToBody}>
            Use the arrow buttons to move your animal across the forest. Collect
            🫐 berries (+10), 🍄 mushrooms (+15), and 🌰 acorns (+20). Avoid 🪨
            rocks or lose a life!
          </Text>
        </View>

        <Pressable
          onPress={thewlddsexpllorerStart}
          style={styles.thewlddsexpllorerPrimaryBtn}>
          <Text style={styles.thewlddsexpllorerPrimaryBtnText}>
            Start Adventure!
          </Text>
        </Pressable>
      </View>
    </Thewlddsexpllorerlay>
  );
};

export default Thewlddsexpllorerminigmenu;

const styles = StyleSheet.create({
  thewlddsexpllorerPickIconRabbit: {backgroundColor: '#9B5CF6'},
  thewlddsexpllorerPickEmoji: {fontSize: 22},

  thewlddsexpllorerRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 116,
  },

  thewlddsexpllorerTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  thewlddsexpllorerSub: {
    marginTop: 6,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '500',
  },
  thewlddsexpllorerPickRow: {
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
  thewlddsexpllorerPickRowActive: {borderColor: '#C8922A'},
  thewlddsexpllorerPickIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  thewlddsexpllorerPickIconFox: {backgroundColor: '#D4682A'},
  thewlddsexpllorerPickIconDeer: {backgroundColor: '#C8922A'},

  thewlddsexpllorerPickText: {
    flex: 1,
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
  },
  thewlddsexpllorerPickCheck: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#C46A2C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  thewlddsexpllorerPickCheckText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  thewlddsexpllorerHowTo: {
    marginTop: 16,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 14,
  },
  thewlddsexpllorerHowToTitle: {
    color: '#F5C800',
    fontSize: 13,
    fontWeight: '800',
  },
  thewlddsexpllorerHowToBody: {
    marginTop: 10,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 17,
  },
  thewlddsexpllorerPrimaryBtn: {
    marginTop: 24,
    height: 65,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerPrimaryBtnText: {
    color: '#120A38',
    fontSize: 15,
    fontWeight: '900',
  },
});
