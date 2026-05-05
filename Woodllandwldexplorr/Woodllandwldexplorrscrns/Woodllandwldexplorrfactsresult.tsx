// result screens

import {useNavigation, useRoute} from '@react-navigation/native';
import Woodllandwldexplorrlay from '../Woodllandwldexplorrcpn/Woodllandwldexplorrlay';

import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

type WoodllandwldexplorrRouteParams = {correct?: number; total?: number};

const Woodllandwldexplorrfactsresult = () => {
  const wodllandwldexplorrNavigation = useNavigation();
  const wodllandwldexplorrRoute = useRoute();
  const {correct = 0, total = 0} =
    (wodllandwldexplorrRoute.params as WoodllandwldexplorrRouteParams) ?? {};

  return (
    <Woodllandwldexplorrlay wodllandwldexplorrlayScroll={false} bounce={false}>
      <View style={styles.wodllandwldexplorrRoot}>
        <View style={styles.wodllandwldexplorrCard}>
          <Text style={styles.wodllandwldexplorrEmoji}>🌱</Text>
          <Text style={styles.wodllandwldexplorrTitle}>Keep exploring!</Text>

          <View style={styles.wodllandwldexplorrScorePill}>
            <Image source={require('../../assets/imgs/wodllandwllipprz.png')} />
            <Text style={styles.wodllandwldexplorrScoreText}>
              {correct}/{total} correct
            </Text>
          </View>

          <Pressable
            onPress={() =>
              (wodllandwldexplorrNavigation as any).replace(
                'Woodllandwldexplorrfactsquiz',
              )
            }
            style={styles.wodllandwldexplorrBtn}>
            <Text style={styles.wodllandwldexplorrBtnText}>Try Again</Text>
          </Pressable>

          <Pressable
            onPress={() =>
              (wodllandwldexplorrNavigation as any).replace(
                'Woodllandwldexplorrtab',
                {
                  screen: 'Woodllandwldexplorrfacts',
                },
              )
            }
            style={styles.wodllandwldexplorrLink}>
            <Text style={styles.wodllandwldexplorrLinkText}>Back to Facts</Text>
          </Pressable>
        </View>
      </View>
    </Woodllandwldexplorrlay>
  );
};

export default Woodllandwldexplorrfactsresult;

const styles = StyleSheet.create({
  wodllandwldexplorrEmoji: {
    fontSize: 58,
  },

  wodllandwldexplorrTitle: {
    marginTop: 20,
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '900',
  },

  wodllandwldexplorrRoot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wodllandwldexplorrCard: {
    width: '94%',
    borderRadius: 24,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    padding: 20,
    alignItems: 'center',
  },

  wodllandwldexplorrScorePill: {
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
  wodllandwldexplorrScoreText: {
    color: '#F5C800',
    fontSize: 15,
    fontWeight: '900',
  },
  wodllandwldexplorrBtn: {
    marginTop: 16,
    height: 48,
    width: '100%',
    borderRadius: 14,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },
  wodllandwldexplorrLink: {
    marginTop: 15,
    paddingHorizontal: 30,
  },
  wodllandwldexplorrLinkText: {
    color: '#7B6CB0',
    fontSize: 14,
    fontWeight: '600',
  },
});
