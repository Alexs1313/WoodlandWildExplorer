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
import Thewlddsexpllorerlay from '../Thewlddsexpllorercpn/Thewlddsexpllorerlay';

const Thewlddsexplloreronbr = () => {
  const thewlddsexpllorerNavigation = useNavigation();
  const [thewlddsexpllorerStep, thewlddsexpllorerSetStep] = useState(0);

  const thewlddsexpllorerSteps = useMemo<
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
        title: 'Explore the Hidden Side of Nature',
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

  const thewlddsexpllorerCurrent =
    thewlddsexpllorerSteps[
      Math.min(thewlddsexpllorerStep, thewlddsexpllorerSteps.length - 1)
    ];
  const thewlddsexpllorerIsLast =
    thewlddsexpllorerStep >= thewlddsexpllorerSteps.length - 1;

  const thewlddsexpllorerOnSkip = () => {
    (thewlddsexpllorerNavigation as any).navigate('Thewlddsexpllorertab');
  };

  const thewlddsexpllorerOnNext = () => {
    if (thewlddsexpllorerIsLast) {
      thewlddsexpllorerOnSkip();
      return;
    }
    thewlddsexpllorerSetStep(s =>
      Math.min(s + 1, thewlddsexpllorerSteps.length - 1),
    );
  };

  return (
    <Thewlddsexpllorerlay bounce={false}>
      <View style={styles.thewlddsexpllorerRoot}>
        <View style={styles.thewlddsexpllorerTop}>
          <View style={styles.thewlddsexpllorerHeroWrap}>
            <Image
              source={thewlddsexpllorerCurrent.image}
              resizeMode="cover"
              style={styles.thewlddsexpllorerHero}
            />
          </View>

          <Pressable
            onPress={thewlddsexpllorerOnSkip}
            style={styles.thewlddsexpllorerSkipBtn}>
            <Text style={styles.thewlddsexpllorerSkipText}>Skip</Text>
          </Pressable>

          <View
            style={{
              width: 52,
              height: 52,
              backgroundColor: thewlddsexpllorerCurrent.badgeColor,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}>
            <Text style={{fontSize: 24}}>
              {thewlddsexpllorerCurrent.badgeEmoji}
            </Text>
          </View>
        </View>

        <View style={styles.thewlddsexpllorerCard}>
          <Text
            style={[
              styles.thewlddsexpllorerEyebrow,
              thewlddsexpllorerStep === 2 && {color: '#9B5CF6'},
            ]}>
            {thewlddsexpllorerCurrent.eyebrow}
          </Text>
          <Text style={styles.thewlddsexpllorerTitle}>
            {thewlddsexpllorerCurrent.title}
          </Text>
          <Text style={styles.thewlddsexpllorerDesc}>
            {thewlddsexpllorerCurrent.description}
          </Text>

          <View style={styles.thewlddsexpllorerDotsRow}>
            {thewlddsexpllorerSteps.map((thewlddsexpllorerS, idx) => {
              const thewlddsexpllorerActive = idx === thewlddsexpllorerStep;
              return (
                <View
                  key={thewlddsexpllorerS.key}
                  style={[
                    styles.thewlddsexpllorerDot,
                    thewlddsexpllorerActive &&
                      styles.thewlddsexpllorerDotActive,
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
            onPress={thewlddsexpllorerOnNext}
            style={[
              styles.thewlddsexpllorerPrimaryBtn,
              thewlddsexpllorerStep === 2 && {backgroundColor: '#9B5CF6'},
            ]}>
            <Text
              style={[
                styles.thewlddsexpllorerPrimaryText,
                thewlddsexpllorerStep === 2 && {color: '#FFFFFF'},
              ]}>
              {thewlddsexpllorerIsLast ? 'Get Started' : 'Continue'}
            </Text>
            <Image
              source={require('../../assets/imgs/wodllandwldexplnx.png')}
              style={[
                styles.thewlddsexpllorerPrimaryBtnImage,
                thewlddsexpllorerStep === 2 && {tintColor: '#FFFFFF'},
              ]}
            />
          </Pressable>
        </View>
      </View>
    </Thewlddsexpllorerlay>
  );
};

export default Thewlddsexplloreronbr;

const styles = StyleSheet.create({
  thewlddsexpllorerCard: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 22,
    backgroundColor: '#120A38',
    marginTop: 18,
  },
  thewlddsexpllorerEyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: '#F5C800',
    letterSpacing: 2.2,
  },

  thewlddsexpllorerRoot: {
    flex: 1,
    paddingBottom: 40,
  },
  thewlddsexpllorerTop: {
    minHeight: 350,
  },
  thewlddsexpllorerHeroWrap: {
    ...StyleSheet.absoluteFillObject,
  },
  thewlddsexpllorerHero: {
    width: '100%',
    height: '100%',
  },
  thewlddsexpllorerHeroPlaceholder: {
    flex: 1,
    backgroundColor: '#120A38',
    opacity: 0.35,
  },

  thewlddsexpllorerSkipBtn: {
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
  thewlddsexpllorerSkipText: {
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '600',
  },

  thewlddsexpllorerTitle: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: '800',
    color: '#EDE8FF',
    lineHeight: 34,
  },
  thewlddsexpllorerDesc: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    color: '#A090CC',
    lineHeight: 20,
  },

  thewlddsexpllorerDotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 18,
  },
  thewlddsexpllorerDot: {
    width: 8,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#2C1A64',
    marginRight: 8,
  },
  thewlddsexpllorerDotActive: {
    backgroundColor: '#F5C800',
    width: 24,
  },

  thewlddsexpllorerPrimaryBtn: {
    height: 56,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 18,
  },
  thewlddsexpllorerPrimaryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#120A38',
  },
  thewlddsexpllorerPrimaryBtnImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
