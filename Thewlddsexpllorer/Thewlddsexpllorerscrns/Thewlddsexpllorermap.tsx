// map

import Thewlddsexpllorersettmenu from '../Thewlddsexpllorercpn/Thewlddsexpllorersettmenu';
import {thewlddsexpllorerLocations} from '../Thewlddsexpllorerdata/Thewlddsexpllorerlocations';
import {useThewlddsexpllorerFavorites} from '../Thewlddsexpllorerdata/Thewlddsexpllorerfavorites-context';
import Orientation from 'react-native-orientation-locker';

import React, {useCallback, useMemo, useState} from 'react';

import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Thewlddsexpllorerlay from '../Thewlddsexpllorercpn/Thewlddsexpllorerlay';

const Thewlddsexpllorermap = () => {
  const thewlddsexpllorerNavigation = useNavigation();
  const {thewlddsexpllorerIsFav} = useThewlddsexpllorerFavorites();
  const [thewlddsexpllorerSelectedId, thewlddsexpllorerSetSelectedId] =
    useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        thewlddsexpllorerSetSelectedId(null);
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const thewlddsexpllorerInitialRegion = useMemo(() => {
    const first = thewlddsexpllorerLocations[0];
    return {
      latitude: first.coords.lat,
      longitude: first.coords.lon,
      latitudeDelta: 18,
      longitudeDelta: 18,
    };
  }, []);

  const thewlddsexpllorerSelected = useMemo(() => {
    if (!thewlddsexpllorerSelectedId) {
      return null;
    }
    return (
      thewlddsexpllorerLocations.find(
        l => l.id === thewlddsexpllorerSelectedId,
      ) ?? null
    );
  }, [thewlddsexpllorerSelectedId]);

  const thewlddsexpllorerOpenDetails = () => {
    if (!thewlddsexpllorerSelected) {
      return;
    }
    (thewlddsexpllorerNavigation as any).navigate(
      'Thewlddsexpllorerlocdet',
      {
        id: thewlddsexpllorerSelected.id,
      },
    );
  };

  return (
    <Thewlddsexpllorerlay bounce={false}>
      <View style={styles.thewlddsexpllorerRoot}>
        <View style={styles.thewlddsexpllorerHeader}>
          <View>
            <Text style={styles.thewlddsexpllorerTitle}>Explorer Map</Text>
            <Text style={styles.thewlddsexpllorerSubtitle}>
              Tap a pin to see details
            </Text>
          </View>

          {Platform.OS === 'ios' && (
            <Thewlddsexpllorersettmenu thewlddsexpllorerAnchorTop={50} />
          )}
        </View>

        <View style={styles.thewlddsexpllorerMapWrap}>
          <MapView
            style={styles.thewlddsexpllorerMap}
            initialRegion={thewlddsexpllorerInitialRegion}
            onPress={e => {
              const action = (e as any)?.nativeEvent?.action;
              if (action === 'marker-press' || action === 'callout-press') {
                return;
              }
              thewlddsexpllorerSetSelectedId(null);
            }}>
            {thewlddsexpllorerLocations.map(loc => (
              <Marker
                key={loc.id}
                coordinate={{
                  latitude: loc.coords.lat,
                  longitude: loc.coords.lon,
                }}
                pinColor={
                  thewlddsexpllorerIsFav(loc.id)
                    ? '#F5C800'
                    : loc.id === thewlddsexpllorerSelectedId
                    ? '#9B5CF6'
                    : undefined
                }
                onPress={() => thewlddsexpllorerSetSelectedId(loc.id)}>
                <Image
                  source={require('../../assets/imgs/wodllandwllimarkr.png')}
                />
              </Marker>
            ))}
          </MapView>
        </View>

        {thewlddsexpllorerSelected ? (
          <View style={styles.thewlddsexpllorerSheet}>
            <Pressable
              onPress={() => thewlddsexpllorerSetSelectedId(null)}
              hitSlop={10}
              style={styles.thewlddsexpllorerSheetClose}>
              <Image
                source={require('../../assets/imgs/wodllandwllilwacls.png')}
              />
            </Pressable>

            <View style={styles.thewlddsexpllorerSheetRow}>
              <Image
                source={thewlddsexpllorerSelected.image}
                style={styles.thewlddsexpllorerSheetImage}
              />
              <View style={styles.thewlddsexpllorerSheetText}>
                <View style={styles.thewlddsexpllorerSheetTag}>
                  <Text style={styles.thewlddsexpllorerSheetTagText}>
                    {thewlddsexpllorerSelected.tags[0] ?? 'Location'}
                  </Text>
                </View>
                <Text
                  style={styles.thewlddsexpllorerSheetTitle}
                  numberOfLines={1}>
                  {thewlddsexpllorerSelected.title}
                </Text>
                <Text
                  style={styles.thewlddsexpllorerSheetMeta}
                  numberOfLines={2}>
                  {thewlddsexpllorerSelected.cityCountry}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={thewlddsexpllorerOpenDetails}
              style={styles.thewlddsexpllorerSheetBtn}>
              <Text style={styles.thewlddsexpllorerSheetBtnText}>Details</Text>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Thewlddsexpllorerlay>
  );
};

export default Thewlddsexpllorermap;

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
  thewlddsexpllorerMapWrap: {
    marginTop: 16,
    height: '76%',
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
  },

  thewlddsexpllorerRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  thewlddsexpllorerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thewlddsexpllorerTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  thewlddsexpllorerSubtitle: {
    marginTop: 4,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '400',
  },

  thewlddsexpllorerMap: {
    width: '100%',
    height: '100%',
  },
  thewlddsexpllorerPagerDots: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 10,
  },
  thewlddsexpllorerPagerDot: {
    width: 28,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#24186A',
  },
  thewlddsexpllorerPagerDotActive: {
    width: 28,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#9B5CF6',
  },
  thewlddsexpllorerSheet: {
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

  thewlddsexpllorerSheetClose: {
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
  thewlddsexpllorerSheetCloseText: {
    color: '#A090CC',
    fontSize: 16,
    fontWeight: '900',
    marginTop: -1,
  },
  thewlddsexpllorerSheetRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    paddingRight: 18,
  },
  thewlddsexpllorerSheetImage: {
    width: 80,
    height: 80,
    borderRadius: 14,
    resizeMode: 'cover',
  },
  thewlddsexpllorerSheetText: {
    flex: 1,
  },
  thewlddsexpllorerSheetTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 8,
  },
  thewlddsexpllorerSheetTagText: {
    color: '#EDE8FF',
    fontSize: 11,
    fontWeight: '700',
  },
  thewlddsexpllorerSheetTitle: {
    color: '#EDE8FF',
    fontSize: 16,
    fontWeight: '800',
  },
  thewlddsexpllorerSheetMeta: {
    marginTop: 4,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
  thewlddsexpllorerSheetBtn: {
    marginTop: 12,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerSheetBtnText: {
    color: '#120A38',
    fontSize: 14,
    fontWeight: '800',
  },
});
