// result screens

import {useNavigation, useRoute} from '@react-navigation/native';
import Thewlddsexpllorerlay from '../Thewlddsexpllorercpn/Thewlddsexpllorerlay';

import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

type ThewlddsexpllorerRouteParams = {correct?: number; total?: number};

const Thewlddsexpllorerfactsresult = () => {
  const thewlddsexpllorerNavigation = useNavigation();
  const thewlddsexpllorerRoute = useRoute();
  const {correct = 0, total = 0} =
    (thewlddsexpllorerRoute.params as ThewlddsexpllorerRouteParams) ?? {};

  return (
    <Thewlddsexpllorerlay thewlddsexpllorerlayScroll={false} bounce={false}>
      <View style={styles.thewlddsexpllorerRoot}>
        <View style={styles.thewlddsexpllorerCard}>
          <Text style={styles.thewlddsexpllorerEmoji}>🌱</Text>
          <Text style={styles.thewlddsexpllorerTitle}>Keep exploring!</Text>

          <View style={styles.thewlddsexpllorerScorePill}>
            <Image source={require('../../assets/imgs/wodllandwllipprz.png')} />
            <Text style={styles.thewlddsexpllorerScoreText}>
              {correct}/{total} correct
            </Text>
          </View>

          <Pressable
            onPress={() =>
              (thewlddsexpllorerNavigation as any).replace(
                'Thewlddsexpllorerfactsquiz',
              )
            }
            style={styles.thewlddsexpllorerBtn}>
            <Text style={styles.thewlddsexpllorerBtnText}>Try Again</Text>
          </Pressable>

          <Pressable
            onPress={() =>
              (thewlddsexpllorerNavigation as any).replace(
                'Thewlddsexpllorertab',
                {
                  screen: 'Thewlddsexpllorerfacts',
                },
              )
            }
            style={styles.thewlddsexpllorerLink}>
            <Text style={styles.thewlddsexpllorerLinkText}>Back to Facts</Text>
          </Pressable>
        </View>
      </View>
    </Thewlddsexpllorerlay>
  );
};

export default Thewlddsexpllorerfactsresult;

const styles = StyleSheet.create({
  thewlddsexpllorerEmoji: {
    fontSize: 58,
  },

  thewlddsexpllorerTitle: {
    marginTop: 20,
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '900',
  },

  thewlddsexpllorerRoot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  thewlddsexpllorerCard: {
    width: '94%',
    borderRadius: 24,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    padding: 20,
    alignItems: 'center',
  },

  thewlddsexpllorerScorePill: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: '#281C68',
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  thewlddsexpllorerScoreText: {
    color: '#F5C800',
    fontSize: 15,
    fontWeight: '900',
  },
  thewlddsexpllorerBtn: {
    marginTop: 16,
    height: 48,
    width: '100%',
    borderRadius: 14,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },
  thewlddsexpllorerLink: {
    marginTop: 15,
    paddingHorizontal: 30,
  },
  thewlddsexpllorerLinkText: {
    color: '#7B6CB0',
    fontSize: 14,
    fontWeight: '600',
  },
});
