// onboard

import React, {useMemo, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Woodllandwldexplorrlay from '../Woodllandwldexplorrcpn/Woodllandwldexplorrlay';

const Woodllandwldexplorronbr = () => {
  const wodllandwldexplorrNavigation = useNavigation();
  const [wodllandwldexplorrStep, wodllandwldexplorrSetStep] = useState(0);

  const wodllandwldexplorrSteps = useMemo<
    Array<{
      key: string;
      eyebrow: string;
      title: string;
      description: string;
      image?: ImageSourcePropType;
      badgeEmoji: string;
      badgeColor: string;
    }>
  >(
    () => [
      {
        key: 'discover',
        eyebrow: 'DISCOVER LOCATIONS',
        title: 'Explore the Wild Side of Woodlands',
        description:
          'Find breathtaking wildlife reserves, nature centers, and forest trails. Navigate to secret spots only explorers know about.',
        image: require('../../assets/imgs/wodllandwldexon1.png'),
        badgeEmoji: '🌲',
        badgeColor: '#F5C800',
      },
      {
        key: 'rare',
        eyebrow: 'PROTECT THE ENDANGERED',
        title: 'Meet Rare Animals and Plants',
        description:
          'Discover fascinating animals and plants connected with conservation and Red Book species. Open detailed cards, read useful information, learn what makes each species special, and share discoveries with friends.',
        image: require('../../assets/imgs/wodllandwldexon3.png'),
        badgeEmoji: '🎮',
        badgeColor: '#9B5CF6',
      },
      {
        key: 'pl',
        eyebrow: 'KNOWLEDGE & ADVENTURE',
        title: 'Learn & Discover',
        description:
          'Explore quizzes, gentle activities, and wildlife facts while learning about forests and natural systems.',
        image: require('../../assets/imgs/wodllandwldexon2.png'),
        badgeEmoji: '📖',
        badgeColor: '#C8922A',
      },
    ],
    [],
  );

  const wodllandwldexplorrCurrent =
    wodllandwldexplorrSteps[
      Math.min(wodllandwldexplorrStep, wodllandwldexplorrSteps.length - 1)
    ];
  const wodllandwldexplorrIsLast =
    wodllandwldexplorrStep >= wodllandwldexplorrSteps.length - 1;

  const wodllandwldexplorrOnSkip = () => {
    (wodllandwldexplorrNavigation as any).navigate('Woodllandwldexplorrtab');
  };

  const wodllandwldexplorrOnNext = () => {
    if (wodllandwldexplorrIsLast) {
      wodllandwldexplorrOnSkip();
      return;
    }
    wodllandwldexplorrSetStep(s =>
      Math.min(s + 1, wodllandwldexplorrSteps.length - 1),
    );
  };

  return (
    <Woodllandwldexplorrlay bounce={false}>
      <View style={styles.wodllandwldexplorrRoot}>
        <View style={styles.wodllandwldexplorrTop}>
          <View style={styles.wodllandwldexplorrHeroWrap}>
            <Image
              source={wodllandwldexplorrCurrent.image}
              resizeMode="cover"
              style={styles.wodllandwldexplorrHero}
            />
          </View>

          <Pressable
            onPress={wodllandwldexplorrOnSkip}
            style={styles.wodllandwldexplorrSkipBtn}>
            <Text style={styles.wodllandwldexplorrSkipText}>Skip</Text>
          </Pressable>

          <View
            style={{
              width: 52,
              height: 52,
              backgroundColor: wodllandwldexplorrCurrent.badgeColor,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}>
            <Text style={{fontSize: 24}}>
              {wodllandwldexplorrCurrent.badgeEmoji}
            </Text>
          </View>
        </View>

        <View style={styles.wodllandwldexplorrCard}>
          <Text
            style={[
              styles.wodllandwldexplorrEyebrow,
              wodllandwldexplorrStep === 2 && {color: '#9B5CF6'},
            ]}>
            {wodllandwldexplorrCurrent.eyebrow}
          </Text>
          <Text style={styles.wodllandwldexplorrTitle}>
            {wodllandwldexplorrCurrent.title}
          </Text>
          <Text style={styles.wodllandwldexplorrDesc}>
            {wodllandwldexplorrCurrent.description}
          </Text>

          <View style={styles.wodllandwldexplorrDotsRow}>
            {wodllandwldexplorrSteps.map((wodllandwldexplorrS, idx) => {
              const wodllandwldexplorrActive = idx === wodllandwldexplorrStep;
              return (
                <View
                  key={wodllandwldexplorrS.key}
                  style={[
                    styles.wodllandwldexplorrDot,
                    wodllandwldexplorrActive &&
                      styles.wodllandwldexplorrDotActive,
                  ]}
                />
              );
            })}
          </View>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', paddingHorizontal: 20}}>
          <Pressable
            accessibilityRole="button"
            onPress={wodllandwldexplorrOnNext}
            style={[
              styles.wodllandwldexplorrPrimaryBtn,
              wodllandwldexplorrStep === 2 && {backgroundColor: '#9B5CF6'},
            ]}>
            <Text
              style={[
                styles.wodllandwldexplorrPrimaryText,
                wodllandwldexplorrStep === 2 && {color: '#FFFFFF'},
              ]}>
              {wodllandwldexplorrIsLast ? 'Get Started' : 'Continue'}
            </Text>
            <Image
              source={require('../../assets/imgs/wodllandwldexplnx.png')}
              style={[
                styles.wodllandwldexplorrPrimaryBtnImage,
                wodllandwldexplorrStep === 2 && {tintColor: '#FFFFFF'},
              ]}
            />
          </Pressable>
        </View>
      </View>
    </Woodllandwldexplorrlay>
  );
};

export default Woodllandwldexplorronbr;

const styles = StyleSheet.create({
  wodllandwldexplorrCard: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 22,
    backgroundColor: '#120A38',
    marginTop: 18,
  },
  wodllandwldexplorrEyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: '#F5C800',
    letterSpacing: 2.2,
  },

  wodllandwldexplorrRoot: {
    flex: 1,
    paddingBottom: 40,
  },
  wodllandwldexplorrTop: {
    minHeight: 350,
  },
  wodllandwldexplorrHeroWrap: {
    ...StyleSheet.absoluteFillObject,
  },
  wodllandwldexplorrHero: {
    width: '100%',
    height: '100%',
  },
  wodllandwldexplorrHeroPlaceholder: {
    flex: 1,
    backgroundColor: '#120A38',
    opacity: 0.35,
  },

  wodllandwldexplorrSkipBtn: {
    position: 'absolute',
    top: 58,
    right: 16,
    backgroundColor: '#1D1255',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  wodllandwldexplorrSkipText: {
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '600',
  },

  wodllandwldexplorrTitle: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: '800',
    color: '#EDE8FF',
    lineHeight: 34,
  },
  wodllandwldexplorrDesc: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    color: '#A090CC',
    lineHeight: 20,
  },

  wodllandwldexplorrDotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 18,
  },
  wodllandwldexplorrDot: {
    width: 8,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#2C1A64',
    marginRight: 8,
  },
  wodllandwldexplorrDotActive: {
    backgroundColor: '#F5C800',
    width: 24,
  },

  wodllandwldexplorrPrimaryBtn: {
    height: 56,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 18,
  },
  wodllandwldexplorrPrimaryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#120A38',
  },
  wodllandwldexplorrPrimaryBtnImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
