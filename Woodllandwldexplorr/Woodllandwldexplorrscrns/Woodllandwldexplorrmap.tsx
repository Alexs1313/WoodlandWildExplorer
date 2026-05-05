// map

import Woodllandwldexplorrsettmenu from '../Woodllandwldexplorrcpn/Woodllandwldexplorrsettmenu';
import {wodllandwldexplorrLocations} from '../Woodllandwldexplorrdata/Woodllandwldexplorrlocations';
import {useWodllandwldexplorrFavorites} from '../Woodllandwldexplorrdata/Woodllandwldexplorrfavorites-context';
import Orientation from 'react-native-orientation-locker';

import React, {useCallback, useMemo, useState} from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Woodllandwldexplorrlay from '../Woodllandwldexplorrcpn/Woodllandwldexplorrlay';

const Woodllandwldexplorrmap = () => {
  const wodllandwldexplorrNavigation = useNavigation();
  const {wodllandwldexplorrIsFav} = useWodllandwldexplorrFavorites();
  const [wodllandwldexplorrSelectedId, wodllandwldexplorrSetSelectedId] =
    useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        wodllandwldexplorrSetSelectedId(null);
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const wodllandwldexplorrInitialRegion = useMemo(() => {
    const first = wodllandwldexplorrLocations[0];
    return {
      latitude: first.coords.lat,
      longitude: first.coords.lon,
      latitudeDelta: 18,
      longitudeDelta: 18,
    };
  }, []);

  const wodllandwldexplorrSelected = useMemo(() => {
    if (!wodllandwldexplorrSelectedId) {
      return null;
    }
    return (
      wodllandwldexplorrLocations.find(
        l => l.id === wodllandwldexplorrSelectedId,
      ) ?? null
    );
  }, [wodllandwldexplorrSelectedId]);

  const wodllandwldexplorrOpenDetails = () => {
    if (!wodllandwldexplorrSelected) {
      return;
    }
    (wodllandwldexplorrNavigation as any).navigate(
      'Woodllandwldexplorrlocdet',
      {
        id: wodllandwldexplorrSelected.id,
      },
    );
  };

  return (
    <Woodllandwldexplorrlay bounce={false}>
      <View style={styles.wodllandwldexplorrRoot}>
        <View style={styles.wodllandwldexplorrHeader}>
          <View>
            <Text style={styles.wodllandwldexplorrTitle}>Explorer Map</Text>
            <Text style={styles.wodllandwldexplorrSubtitle}>
              Tap a pin to see details
            </Text>
          </View>

          <Woodllandwldexplorrsettmenu wodllandwldexplorrAnchorTop={50} />
        </View>

        <View style={styles.wodllandwldexplorrMapWrap}>
          <MapView
            style={styles.wodllandwldexplorrMap}
            initialRegion={wodllandwldexplorrInitialRegion}
            onPress={e => {
              const action = (e as any)?.nativeEvent?.action;
              if (action === 'marker-press' || action === 'callout-press') {
                return;
              }
              wodllandwldexplorrSetSelectedId(null);
            }}>
            {wodllandwldexplorrLocations.map(loc => (
              <Marker
                key={loc.id}
                coordinate={{
                  latitude: loc.coords.lat,
                  longitude: loc.coords.lon,
                }}
                pinColor={
                  wodllandwldexplorrIsFav(loc.id)
                    ? '#F5C800'
                    : loc.id === wodllandwldexplorrSelectedId
                    ? '#9B5CF6'
                    : undefined
                }
                onPress={() => wodllandwldexplorrSetSelectedId(loc.id)}>
                <Image
                  source={require('../../assets/imgs/wodllandwllimarkr.png')}
                />
              </Marker>
            ))}
          </MapView>
        </View>

        {wodllandwldexplorrSelected ? (
          <View style={styles.wodllandwldexplorrSheet}>
            <Pressable
              onPress={() => wodllandwldexplorrSetSelectedId(null)}
              hitSlop={10}
              style={styles.wodllandwldexplorrSheetClose}>
              <Image
                source={require('../../assets/imgs/wodllandwllilwacls.png')}
              />
            </Pressable>

            <View style={styles.wodllandwldexplorrSheetRow}>
              <Image
                source={wodllandwldexplorrSelected.image}
                style={styles.wodllandwldexplorrSheetImage}
              />
              <View style={styles.wodllandwldexplorrSheetText}>
                <View style={styles.wodllandwldexplorrSheetTag}>
                  <Text style={styles.wodllandwldexplorrSheetTagText}>
                    {wodllandwldexplorrSelected.tags[0] ?? 'Location'}
                  </Text>
                </View>
                <Text
                  style={styles.wodllandwldexplorrSheetTitle}
                  numberOfLines={1}>
                  {wodllandwldexplorrSelected.title}
                </Text>
                <Text
                  style={styles.wodllandwldexplorrSheetMeta}
                  numberOfLines={2}>
                  {wodllandwldexplorrSelected.cityCountry}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={wodllandwldexplorrOpenDetails}
              style={styles.wodllandwldexplorrSheetBtn}>
              <Text style={styles.wodllandwldexplorrSheetBtnText}>Details</Text>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Woodllandwldexplorrlay>
  );
};

export default Woodllandwldexplorrmap;

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
  wodllandwldexplorrMapWrap: {
    marginTop: 16,
    height: '76%',
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
  },

  wodllandwldexplorrRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  wodllandwldexplorrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wodllandwldexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  wodllandwldexplorrSubtitle: {
    marginTop: 4,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '400',
  },

  wodllandwldexplorrMap: {
    width: '100%',
    height: '100%',
  },
  wodllandwldexplorrPagerDots: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 10,
  },
  wodllandwldexplorrPagerDot: {
    width: 28,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#24186A',
  },
  wodllandwldexplorrPagerDotActive: {
    width: 28,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#9B5CF6',
  },
  wodllandwldexplorrSheet: {
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

  wodllandwldexplorrSheetClose: {
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
  wodllandwldexplorrSheetCloseText: {
    color: '#A090CC',
    fontSize: 16,
    fontWeight: '900',
    marginTop: -1,
  },
  wodllandwldexplorrSheetRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    paddingRight: 18,
  },
  wodllandwldexplorrSheetImage: {
    width: 80,
    height: 80,
    borderRadius: 14,
    resizeMode: 'cover',
  },
  wodllandwldexplorrSheetText: {
    flex: 1,
  },
  wodllandwldexplorrSheetTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 8,
  },
  wodllandwldexplorrSheetTagText: {
    color: '#EDE8FF',
    fontSize: 11,
    fontWeight: '700',
  },
  wodllandwldexplorrSheetTitle: {
    color: '#EDE8FF',
    fontSize: 16,
    fontWeight: '800',
  },
  wodllandwldexplorrSheetMeta: {
    marginTop: 4,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
  wodllandwldexplorrSheetBtn: {
    marginTop: 12,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrSheetBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },
});
