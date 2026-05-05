import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  wodllandwldexplorrAnchorTop?: number;
  wodllandwldexplorrAnchorRight?: number;
};

const Woodllandwldexplorrsettmenu = (props: Props) => {
  const [wodllandwldexplorrOpen, wodllandwldexplorrSetOpen] = useState(false);

  const wodllandwldexplorrClose = () => wodllandwldexplorrSetOpen(false);

  useFocusEffect(
    useCallback(() => {
      wodllandwldexplorrSetOpen(false);
    }, []),
  );

  const wodllandwldexplorrOnPrivacy = async () => {
    wodllandwldexplorrClose();
    const wodllandwldexplorrUrl =
      'https://www.termsfeed.com/live/e4f83beb-2dd3-45d5-8b14-eaac1514e434';
    const wodllandwldexplorrOk = await Linking.canOpenURL(
      wodllandwldexplorrUrl,
    );
    if (wodllandwldexplorrOk) {
      await Linking.openURL(wodllandwldexplorrUrl);
    }
  };

  const wodllandwldexplorrTop = props.wodllandwldexplorrAnchorTop ?? 112;
  const wodllandwldexplorrRight = props.wodllandwldexplorrAnchorRight ?? 16;

  return (
    <>
      <Pressable
        style={styles.wodllandwldexplorrHeaderBtn}
        onPress={() => wodllandwldexplorrSetOpen(v => !v)}>
        <Image source={require('../../assets/imgs/wodllandwllilssett.png')} />
      </Pressable>

      {wodllandwldexplorrOpen ? (
        <>
          <Pressable
            onPress={wodllandwldexplorrClose}
            style={styles.wodllandwldexplorrMenuOverlay}
          />
          <View
            style={[
              styles.wodllandwldexplorrMenuCard,
              {top: wodllandwldexplorrTop, right: wodllandwldexplorrRight},
            ]}>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  'https://apps.apple.com/us/app/wilds-woodland-e%D1%85plorer/id6766539587',
                )
              }
              style={styles.wodllandwldexplorrMenuItem}>
              <Image
                source={require('../../assets/imgs/wodllandwlratte.png')}
              />
              <View style={styles.wodllandwldexplorrMenuTextWrap}>
                <Text style={styles.wodllandwldexplorrMenuTitle}>
                  Rate the App
                </Text>
                <Text style={styles.wodllandwldexplorrMenuSub}>
                  Leave a review
                </Text>
              </View>
            </Pressable>

            <View style={styles.wodllandwldexplorrMenuDivider} />

            <Pressable
              onPress={wodllandwldexplorrOnPrivacy}
              style={styles.wodllandwldexplorrMenuItem}>
              <Image
                source={require('../../assets/imgs/wodllandwlprivs.png')}
              />
              <View style={styles.wodllandwldexplorrMenuTextWrap}>
                <Text style={styles.wodllandwldexplorrMenuTitle}>
                  Privacy Policy
                </Text>
                <Text style={styles.wodllandwldexplorrMenuSub}>
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

export default Woodllandwldexplorrsettmenu;

const styles = StyleSheet.create({
  wodllandwldexplorrHeaderBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrMenuOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  wodllandwldexplorrMenuCard: {
    position: 'absolute',
    width: 240,
    borderRadius: 18,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    overflow: 'hidden',
    zIndex: 1,
  },
  wodllandwldexplorrMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  wodllandwldexplorrMenuEmoji: {
    fontSize: 16,
    width: 26,
    textAlign: 'center',
  },
  wodllandwldexplorrMenuTextWrap: {flex: 1},
  wodllandwldexplorrMenuTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
  },
  wodllandwldexplorrMenuSub: {
    marginTop: 2,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '500',
  },
  wodllandwldexplorrMenuDivider: {
    height: 1,
    backgroundColor: '#3828A0',
    opacity: 0.6,
  },
});
