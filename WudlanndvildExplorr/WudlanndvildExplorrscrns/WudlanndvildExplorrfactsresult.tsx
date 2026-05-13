// result screens

import {useNavigation, useRoute} from '@react-navigation/native';
import WudlanndvildExplorrlay from '../WudlanndvildExplorrcpn/WudlanndvildExplorrlay';

import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

type WudlanndvildExplorrRouteParams = {correct?: number; total?: number};

const WudlanndvildExplorrfactsresult = () => {
  const wudlanndvildexplorrNavigation = useNavigation();
  const wudlanndvildexplorrRoute = useRoute();
  const {correct = 0, total = 0} =
    (wudlanndvildexplorrRoute.params as WudlanndvildExplorrRouteParams) ?? {};

  return (
    <WudlanndvildExplorrlay wudlanndvildexplorrlayScroll={false} bounce={false}>
      <View style={styles.wudlanndvildexplorrRoot}>
        <View style={styles.wudlanndvildexplorrCard}>
          <Text style={styles.wudlanndvildexplorrEmoji}>🌱</Text>
          <Text style={styles.wudlanndvildexplorrTitle}>Keep exploring!</Text>

          <View style={styles.wudlanndvildexplorrScorePill}>
            <Image source={require('../../assets/imgs/wodllandwllipprz.png')} />
            <Text style={styles.wudlanndvildexplorrScoreText}>
              {correct}/{total} correct
            </Text>
          </View>

          <Pressable
            onPress={() =>
              (wudlanndvildexplorrNavigation as any).replace(
                'WudlanndvildExplorrfactsquiz',
              )
            }
            style={styles.wudlanndvildexplorrBtn}>
            <Text style={styles.wudlanndvildexplorrBtnText}>Try Again</Text>
          </Pressable>

          <Pressable
            onPress={() =>
              (wudlanndvildexplorrNavigation as any).replace(
                'WudlanndvildExplorrtab',
                {
                  screen: 'WudlanndvildExplorrfacts',
                },
              )
            }
            style={styles.wudlanndvildexplorrLink}>
            <Text style={styles.wudlanndvildexplorrLinkText}>
              Back to Facts
            </Text>
          </Pressable>
        </View>
      </View>
    </WudlanndvildExplorrlay>
  );
};

export default WudlanndvildExplorrfactsresult;

const styles = StyleSheet.create({
  wudlanndvildexplorrEmoji: {
    fontSize: 58,
  },

  wudlanndvildexplorrTitle: {
    marginTop: 20,
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '900',
  },

  wudlanndvildexplorrRoot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wudlanndvildexplorrCard: {
    width: '94%',
    borderRadius: 24,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    padding: 20,
    alignItems: 'center',
  },

  wudlanndvildexplorrScorePill: {
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

  wudlanndvildexplorrScoreText: {
    color: '#F5C800',
    fontSize: 15,
    fontWeight: '900',
  },

  wudlanndvildexplorrBtn: {
    marginTop: 16,
    height: 48,
    width: '100%',
    borderRadius: 14,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wudlanndvildexplorrBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },

  wudlanndvildexplorrLink: {
    marginTop: 15,
    paddingHorizontal: 30,
  },
  wudlanndvildexplorrLinkText: {
    color: '#7B6CB0',
    fontSize: 14,
    fontWeight: '600',
  },
});
