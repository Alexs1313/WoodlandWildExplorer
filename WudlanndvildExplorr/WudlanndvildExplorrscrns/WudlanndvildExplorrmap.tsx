// map

import WudlanndvildExplorrsettmenu from '../WudlanndvildExplorrcpn/WudlanndvildExplorrsettmenu';
import {wudlanndvildexplorrLocations} from '../WudlanndvildExplorrdata/WudlanndvildExplorrlocations';
import {useWudlanndvildExplorrFavorites} from '../WudlanndvildExplorrdata/WudlanndvildExplorrfavorites-context';
import Orientation from 'react-native-orientation-locker';

import React, {useCallback, useMemo, useState} from 'react';

import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import WudlanndvildExplorrlay from '../WudlanndvildExplorrcpn/WudlanndvildExplorrlay';

const WudlanndvildExplorrmap = () => {
  const wudlanndvildexplorrNavigation = useNavigation();
  const {wudlanndvildexplorrIsFav} = useWudlanndvildExplorrFavorites();
  const [wudlanndvildexplorrSelectedId, wudlanndvildexplorrSetSelectedId] =
    useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        wudlanndvildexplorrSetSelectedId(null);
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const wudlanndvildexplorrInitialRegion = useMemo(() => {
    const first = wudlanndvildexplorrLocations[0];
    return {
      latitude: first.coords.lat,
      longitude: first.coords.lon,
      latitudeDelta: 18,
      longitudeDelta: 18,
    };
  }, []);

  const wudlanndvildexplorrSelected = useMemo(() => {
    if (!wudlanndvildexplorrSelectedId) {
      return null;
    }
    return (
      wudlanndvildexplorrLocations.find(
        l => l.id === wudlanndvildexplorrSelectedId,
      ) ?? null
    );
  }, [wudlanndvildexplorrSelectedId]);

  const wudlanndvildexplorrOpenDetails = () => {
    if (!wudlanndvildexplorrSelected) {
      return;
    }
    (wudlanndvildexplorrNavigation as any).navigate(
      'WudlanndvildExplorrlocdet',
      {
        id: wudlanndvildexplorrSelected.id,
      },
    );
  };

  return (
    <WudlanndvildExplorrlay bounce={false}>
      <View style={styles.wudlanndvildexplorrRoot}>
        <View style={styles.wudlanndvildexplorrHeader}>
          <View>
            <Text style={styles.wudlanndvildexplorrTitle}>Explorer Map</Text>
            <Text style={styles.wudlanndvildexplorrSubtitle}>
              Tap a pin to see details
            </Text>
          </View>

          {Platform.OS === 'ios' && (
            <WudlanndvildExplorrsettmenu wudlanndvildexplorrAnchorTop={50} />
          )}
        </View>

        <View style={styles.wudlanndvildexplorrMapWrap}>
          <MapView
            style={styles.wudlanndvildexplorrMap}
            initialRegion={wudlanndvildexplorrInitialRegion}
            onPress={e => {
              const action = (e as any)?.nativeEvent?.action;
              if (action === 'marker-press' || action === 'callout-press') {
                return;
              }
              wudlanndvildexplorrSetSelectedId(null);
            }}>
            {wudlanndvildexplorrLocations.map(loc => (
              <Marker
                key={loc.id}
                coordinate={{
                  latitude: loc.coords.lat,
                  longitude: loc.coords.lon,
                }}
                pinColor={
                  wudlanndvildexplorrIsFav(loc.id)
                    ? '#F5C800'
                    : loc.id === wudlanndvildexplorrSelectedId
                    ? '#9B5CF6'
                    : undefined
                }
                onPress={() => wudlanndvildexplorrSetSelectedId(loc.id)}>
                <Image
                  source={require('../../assets/imgs/wodllandwllimarkr.png')}
                />
              </Marker>
            ))}
          </MapView>
        </View>

        {wudlanndvildexplorrSelected ? (
          <View style={styles.wudlanndvildexplorrSheet}>
            <Pressable
              onPress={() => wudlanndvildexplorrSetSelectedId(null)}
              hitSlop={10}
              style={styles.wudlanndvildexplorrSheetClose}>
              <Image
                source={require('../../assets/imgs/wodllandwllilwacls.png')}
              />
            </Pressable>

            <View style={styles.wudlanndvildexplorrSheetRow}>
              <Image
                source={wudlanndvildexplorrSelected.image}
                style={styles.wudlanndvildexplorrSheetImage}
              />
              <View style={styles.wudlanndvildexplorrSheetText}>
                <View style={styles.wudlanndvildexplorrSheetTag}>
                  <Text style={styles.wudlanndvildexplorrSheetTagText}>
                    {wudlanndvildexplorrSelected.tags[0] ?? 'Location'}
                  </Text>
                </View>
                <Text
                  style={styles.wudlanndvildexplorrSheetTitle}
                  numberOfLines={1}>
                  {wudlanndvildexplorrSelected.title}
                </Text>
                <Text
                  style={styles.wudlanndvildexplorrSheetMeta}
                  numberOfLines={2}>
                  {wudlanndvildexplorrSelected.cityCountry}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={wudlanndvildexplorrOpenDetails}
              style={styles.wudlanndvildexplorrSheetBtn}>
              <Text style={styles.wudlanndvildexplorrSheetBtnText}>Details</Text>
            </Pressable>
          </View>
        ) : null}
      </View>
    </WudlanndvildExplorrlay>
  );
};

export default WudlanndvildExplorrmap;

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
  wudlanndvildexplorrMapWrap: {
    marginTop: 16,
    height: '76%',
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
  },

  wudlanndvildexplorrRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  wudlanndvildexplorrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wudlanndvildexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  wudlanndvildexplorrSubtitle: {
    marginTop: 4,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '400',
  },

  wudlanndvildexplorrMap: {
    width: '100%',
    height: '100%',
  },
  wudlanndvildexplorrPagerDots: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 10,
  },
  wudlanndvildexplorrPagerDot: {
    width: 28,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#24186A',
  },
  wudlanndvildexplorrPagerDotActive: {
    width: 28,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#9B5CF6',
  },
  wudlanndvildexplorrSheet: {
    position: 'absolute',
    bottom: 75,
    left: 0,
    right: 0,
    backgroundColor: '#120A38',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 14,
    paddingTop: 16,
    marginBottom: 6,
  },

  wudlanndvildexplorrSheetClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#120A38',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrSheetCloseText: {
    color: '#A090CC',
    fontSize: 16,
    fontWeight: '900',
    marginTop: -1,
  },
  wudlanndvildexplorrSheetRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    paddingRight: 18,
  },
  wudlanndvildexplorrSheetImage: {
    width: 80,
    height: 80,
    borderRadius: 14,
    resizeMode: 'cover',
  },
  wudlanndvildexplorrSheetText: {
    flex: 1,
  },
  wudlanndvildexplorrSheetTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 8,
  },
  wudlanndvildexplorrSheetTagText: {
    color: '#EDE8FF',
    fontSize: 11,
    fontWeight: '700',
  },
  wudlanndvildexplorrSheetTitle: {
    color: '#EDE8FF',
    fontSize: 16,
    fontWeight: '800',
  },
  wudlanndvildexplorrSheetMeta: {
    marginTop: 4,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
  wudlanndvildexplorrSheetBtn: {
    marginTop: 12,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrSheetBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },
});
