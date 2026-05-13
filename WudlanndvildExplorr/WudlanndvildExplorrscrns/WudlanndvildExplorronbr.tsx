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

import WudlanndvildExplorrlay from '../WudlanndvildExplorrcpn/WudlanndvildExplorrlay';

const WudlanndvildExplorronbr = () => {
  const wudlanndvildexplorrNavigation = useNavigation();
  const [wudlanndvildexplorrStep, wudlanndvildexplorrSetStep] = useState(0);

  const wudlanndvildexplorrSteps = useMemo<
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
        title: 'Explore Wild Places',
        description:
          'Find wildlife reserves, nature centers, quiet forest paths, and hidden outdoor spots. Discover places connected with animals, plants, habitats, and nature research.',
        image: require('../../assets/imgs/wodllandwldexon1.png'),
        badgeEmoji: '🌲',
        badgeColor: '#F5C800',
      },
      {
        key: 'rare',
        eyebrow: 'PROTECT THE ENDANGERED',
        title: 'Discover Rare Species',
        description:
          'Learn about rare animals, protected plants, and species connected with conservation. Open detailed cards, read clear facts, and understand what makes each living system important.',
        image: require('../../assets/imgs/wodllandwldexon3.png'),
        badgeEmoji: '🌿',
        badgeColor: '#9B5CF6',
      },
      {
        key: 'pl',
        eyebrow: 'KNOWLEDGE & ADVENTURE',
        title: 'Learn Through Nature',
        description:
          'Explore wildlife facts, calm activities, and knowledge challenges inspired by forests, habitats, species, and the balance of natural ecosystems.',
        image: require('../../assets/imgs/wodllandwldexon2.png'),
        badgeEmoji: '📖',
        badgeColor: '#C8922A',
      },
    ],
    [],
  );

  const wudlanndvildexplorrCurrent =
    wudlanndvildexplorrSteps[
      Math.min(wudlanndvildexplorrStep, wudlanndvildexplorrSteps.length - 1)
    ];
  const wudlanndvildexplorrIsLast =
    wudlanndvildexplorrStep >= wudlanndvildexplorrSteps.length - 1;

  const wudlanndvildexplorrOnSkip = () => {
    (wudlanndvildexplorrNavigation as any).navigate('WudlanndvildExplorrtab');
  };

  const wudlanndvildexplorrOnNext = () => {
    if (wudlanndvildexplorrIsLast) {
      wudlanndvildexplorrOnSkip();
      return;
    }
    wudlanndvildexplorrSetStep(s =>
      Math.min(s + 1, wudlanndvildexplorrSteps.length - 1),
    );
  };

  return (
    <WudlanndvildExplorrlay bounce={false}>
      <View style={styles.wudlanndvildexplorrRoot}>
        <View style={styles.wudlanndvildexplorrTop}>
          <View style={styles.wudlanndvildexplorrHeroWrap}>
            <Image
              source={wudlanndvildexplorrCurrent.image}
              resizeMode="cover"
              style={styles.wudlanndvildexplorrHero}
            />
          </View>

          <Pressable
            onPress={wudlanndvildexplorrOnSkip}
            style={styles.wudlanndvildexplorrSkipBtn}>
            <Text style={styles.wudlanndvildexplorrSkipText}>Skip</Text>
          </Pressable>

          <View
            style={{
              width: 52,
              height: 52,
              backgroundColor: wudlanndvildexplorrCurrent.badgeColor,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}>
            <Text style={{fontSize: 24}}>
              {wudlanndvildexplorrCurrent.badgeEmoji}
            </Text>
          </View>
        </View>

        <View style={styles.wudlanndvildexplorrCard}>
          <Text
            style={[
              styles.wudlanndvildexplorrEyebrow,
              wudlanndvildexplorrStep === 2 && {color: '#9B5CF6'},
            ]}>
            {wudlanndvildexplorrCurrent.eyebrow}
          </Text>
          <Text style={styles.wudlanndvildexplorrTitle}>
            {wudlanndvildexplorrCurrent.title}
          </Text>
          <Text style={styles.wudlanndvildexplorrDesc}>
            {wudlanndvildexplorrCurrent.description}
          </Text>

          <View style={styles.wudlanndvildexplorrDotsRow}>
            {wudlanndvildexplorrSteps.map((wudlanndvildexplorrS, idx) => {
              const wudlanndvildexplorrActive = idx === wudlanndvildexplorrStep;
              return (
                <View
                  key={wudlanndvildexplorrS.key}
                  style={[
                    styles.wudlanndvildexplorrDot,
                    wudlanndvildexplorrActive &&
                      styles.wudlanndvildexplorrDotActive,
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
            onPress={wudlanndvildexplorrOnNext}
            style={[
              styles.wudlanndvildexplorrPrimaryBtn,
              wudlanndvildexplorrStep === 2 && {backgroundColor: '#9B5CF6'},
            ]}>
            <Text
              style={[
                styles.wudlanndvildexplorrPrimaryText,
                wudlanndvildexplorrStep === 2 && {color: '#FFFFFF'},
              ]}>
              {wudlanndvildexplorrIsLast ? 'Get Started' : 'Continue'}
            </Text>
            <Image
              source={require('../../assets/imgs/wodllandwldexplnx.png')}
              style={[
                styles.wudlanndvildexplorrPrimaryBtnImage,
                wudlanndvildexplorrStep === 2 && {tintColor: '#FFFFFF'},
              ]}
            />
          </Pressable>
        </View>
      </View>
    </WudlanndvildExplorrlay>
  );
};

export default WudlanndvildExplorronbr;

const styles = StyleSheet.create({
  wudlanndvildexplorrCard: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 22,
    backgroundColor: '#120A38',

    marginTop: 18,
  },
  wudlanndvildexplorrEyebrow: {
    fontSize: 12,
    fontWeight: '700',

    color: '#F5C800',
    letterSpacing: 2.2,
  },

  wudlanndvildexplorrRoot: {
    flex: 1,
    paddingBottom: 40,
  },
  wudlanndvildexplorrTop: {
    minHeight: 350,
  },
  wudlanndvildexplorrHeroWrap: {
    ...StyleSheet.absoluteFillObject,
  },
  wudlanndvildexplorrHero: {
    width: '100%',
    height: '100%',
  },
  wudlanndvildexplorrHeroPlaceholder: {
    flex: 1,
    backgroundColor: '#120A38',
    opacity: 0.35,
  },

  wudlanndvildexplorrSkipBtn: {
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
  wudlanndvildexplorrSkipText: {
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '600',
  },

  wudlanndvildexplorrTitle: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: '800',
    color: '#EDE8FF',
    lineHeight: 34,
  },
  wudlanndvildexplorrDesc: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    color: '#A090CC',
    lineHeight: 20,
  },

  wudlanndvildexplorrDotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 18,
  },
  wudlanndvildexplorrDot: {
    width: 8,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#2C1A64',
    marginRight: 8,
  },
  wudlanndvildexplorrDotActive: {
    backgroundColor: '#F5C800',
    width: 24,
  },

  wudlanndvildexplorrPrimaryBtn: {
    height: 56,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 18,
  },
  wudlanndvildexplorrPrimaryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#120A38',
  },
  wudlanndvildexplorrPrimaryBtnImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
