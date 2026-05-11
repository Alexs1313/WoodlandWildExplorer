import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  thewlddsexpllorerAnchorTop?: number;
  thewlddsexpllorerAnchorRight?: number;
};

const Thewlddsexpllorersettmenu = (props: Props) => {
  const [thewlddsexpllorerOpen, thewlddsexpllorerSetOpen] = useState(false);

  const thewlddsexpllorerClose = () => thewlddsexpllorerSetOpen(false);

  useFocusEffect(
    useCallback(() => {
      thewlddsexpllorerSetOpen(false);
    }, []),
  );

  const thewlddsexpllorerOnPrivacy = async () => {
    thewlddsexpllorerClose();
    const thewlddsexpllorerUrl =
      'https://www.termsfeed.com/live/b183ffaf-33dc-4c3a-967b-abf454135733';
    const thewlddsexpllorerOk = await Linking.canOpenURL(
      thewlddsexpllorerUrl,
    );
    if (thewlddsexpllorerOk) {
      await Linking.openURL(thewlddsexpllorerUrl);
    }
  };

  const thewlddsexpllorerTop = props.thewlddsexpllorerAnchorTop ?? 112;
  const thewlddsexpllorerRight = props.thewlddsexpllorerAnchorRight ?? 16;

  return (
    <>
      <Pressable
        style={styles.thewlddsexpllorerHeaderBtn}
        onPress={() => thewlddsexpllorerSetOpen(v => !v)}>
        <Image source={require('../../assets/imgs/wodllandwllilssett.png')} />
      </Pressable>

      {thewlddsexpllorerOpen ? (
        <>
          <Pressable
            onPress={thewlddsexpllorerClose}
            style={styles.thewlddsexpllorerMenuOverlay}
          />
          <View
            style={[
              styles.thewlddsexpllorerMenuCard,
              {top: thewlddsexpllorerTop, right: thewlddsexpllorerRight},
            ]}>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  'https://apps.apple.com/us/app/the-wilds-e%D1%85plorer/id6766976722',
                )
              }
              style={styles.thewlddsexpllorerMenuItem}>
              <Image
                source={require('../../assets/imgs/wodllandwlratte.png')}
              />
              <View style={styles.thewlddsexpllorerMenuTextWrap}>
                <Text style={styles.thewlddsexpllorerMenuTitle}>
                  Rate the App
                </Text>
                <Text style={styles.thewlddsexpllorerMenuSub}>
                  Leave a review
                </Text>
              </View>
            </Pressable>

            <View style={styles.thewlddsexpllorerMenuDivider} />

            <Pressable
              onPress={thewlddsexpllorerOnPrivacy}
              style={styles.thewlddsexpllorerMenuItem}>
              <Image
                source={require('../../assets/imgs/wodllandwlprivs.png')}
              />
              <View style={styles.thewlddsexpllorerMenuTextWrap}>
                <Text style={styles.thewlddsexpllorerMenuTitle}>
                  Privacy Policy
                </Text>
                <Text style={styles.thewlddsexpllorerMenuSub}>
                  Read our policy
                </Text>
              </View>
            </Pressable>
          </View>
        </>
      ) : null}
    </>
  );
};

export default Thewlddsexpllorersettmenu;

const styles = StyleSheet.create({
  thewlddsexpllorerHeaderBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerMenuOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  thewlddsexpllorerMenuCard: {
    position: 'absolute',
    width: 240,
    borderRadius: 18,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    overflow: 'hidden',
    zIndex: 1,
  },
  thewlddsexpllorerMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  thewlddsexpllorerMenuEmoji: {
    fontSize: 16,
    width: 26,
    textAlign: 'center',
  },
  thewlddsexpllorerMenuTextWrap: {flex: 1},
  thewlddsexpllorerMenuTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
  },
  thewlddsexpllorerMenuSub: {
    marginTop: 2,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '500',
  },
  thewlddsexpllorerMenuDivider: {
    height: 1,
    backgroundColor: '#3828A0',
    opacity: 0.6,
  },
});
