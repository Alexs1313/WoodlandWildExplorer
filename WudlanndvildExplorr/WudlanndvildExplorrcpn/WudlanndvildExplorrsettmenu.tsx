import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  wudlanndvildexplorrAnchorTop?: number;
  wudlanndvildexplorrAnchorRight?: number;
};

const WudlanndvildExplorrsettmenu = (props: Props) => {
  const [wudlanndvildexplorrOpen, wudlanndvildexplorrSetOpen] = useState(false);

  const wudlanndvildexplorrClose = () => wudlanndvildexplorrSetOpen(false);

  useFocusEffect(
    useCallback(() => {
      wudlanndvildexplorrSetOpen(false);
    }, []),
  );

  const wudlanndvildexplorrOnPrivacy = async () => {
    wudlanndvildexplorrClose();
    const wudlanndvildexplorrUrl =
      'https://www.termsfeed.com/live/7c9b8ca2-b216-4f28-b75d-9a421407a2d7';
    const wudlanndvildexplorrOk = await Linking.canOpenURL(
      wudlanndvildexplorrUrl,
    );
    if (wudlanndvildexplorrOk) {
      await Linking.openURL(wudlanndvildexplorrUrl);
    }
  };

  const wudlanndvildexplorrTop = props.wudlanndvildexplorrAnchorTop ?? 112;
  const wudlanndvildexplorrRight = props.wudlanndvildexplorrAnchorRight ?? 16;

  return (
    <>
      <Pressable
        style={styles.wudlanndvildexplorrHeaderBtn}
        onPress={() => wudlanndvildexplorrSetOpen(v => !v)}>
        <Image source={require('../../assets/imgs/wodllandwllilssett.png')} />
      </Pressable>

      {wudlanndvildexplorrOpen ? (
        <>
          <Pressable
            onPress={wudlanndvildexplorrClose}
            style={styles.wudlanndvildexplorrMenuOverlay}
          />
          <View
            style={[
              styles.wudlanndvildexplorrMenuCard,
              {top: wudlanndvildexplorrTop, right: wudlanndvildexplorrRight},
            ]}>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  'https://apps.apple.com/us/app/wild-woodland-explorer/id6769061198',
                )
              }
              style={styles.wudlanndvildexplorrMenuItem}>
              <Image
                source={require('../../assets/imgs/wodllandwlratte.png')}
              />
              <View style={styles.wudlanndvildexplorrMenuTextWrap}>
                <Text style={styles.wudlanndvildexplorrMenuTitle}>
                  Rate the App
                </Text>
                <Text style={styles.wudlanndvildexplorrMenuSub}>
                  Leave a review
                </Text>
              </View>
            </Pressable>

            <View style={styles.wudlanndvildexplorrMenuDivider} />

            <Pressable
              onPress={wudlanndvildexplorrOnPrivacy}
              style={styles.wudlanndvildexplorrMenuItem}>
              <Image
                source={require('../../assets/imgs/wodllandwlprivs.png')}
              />
              <View style={styles.wudlanndvildexplorrMenuTextWrap}>
                <Text style={styles.wudlanndvildexplorrMenuTitle}>
                  Privacy Policy
                </Text>
                <Text style={styles.wudlanndvildexplorrMenuSub}>
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

export default WudlanndvildExplorrsettmenu;

const styles = StyleSheet.create({
  wudlanndvildexplorrHeaderBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrMenuOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  wudlanndvildexplorrMenuCard: {
    position: 'absolute',
    width: 240,
    borderRadius: 18,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    overflow: 'hidden',
    zIndex: 1,
  },
  wudlanndvildexplorrMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  wudlanndvildexplorrMenuEmoji: {
    fontSize: 16,
    width: 26,
    textAlign: 'center',
  },
  wudlanndvildexplorrMenuTextWrap: {flex: 1},
  wudlanndvildexplorrMenuTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
  },
  wudlanndvildexplorrMenuSub: {
    marginTop: 2,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '500',
  },
  wudlanndvildexplorrMenuDivider: {
    height: 1,
    backgroundColor: '#3828A0',
    opacity: 0.6,
  },
});
