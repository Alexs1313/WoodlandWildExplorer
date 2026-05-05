// loc details screen
import Woodllandwldexplorrlay from '../Woodllandwldexplorrcpn/Woodllandwldexplorrlay';

import {wodllandwldexplorrLocations} from '../Woodllandwldexplorrdata/Woodllandwldexplorrlocations';

import {useWodllandwldexplorrFavorites} from '../Woodllandwldexplorrdata/Woodllandwldexplorrfavorites-context';

import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';

type WoodllandwldexplorrRouteParams = {id?: string};

const Woodllandwldexplorrlocdet = () => {
  const wodllandwldexplorrNavigation = useNavigation();
  const wodllandwldexplorrRoute = useRoute();
  const wodllandwldexplorrParams =
    (wodllandwldexplorrRoute.params as WoodllandwldexplorrRouteParams) ?? {};
  useWodllandwldexplorrFavorites();

  const wodllandwldexplorrCurrent = wodllandwldexplorrLocations.find(
    l => l.id === wodllandwldexplorrParams.id,
  );

  const wodllandwldexplorrOnShare = async () => {
    if (!wodllandwldexplorrCurrent) {
      return;
    }
    const {title, cityCountry, coords} = wodllandwldexplorrCurrent;

    const wodllandwldexplorrMessage = `${title}\n${cityCountry}\n${coords.lat}, ${coords.lon}`;

    try {
      await Share.share({
        title,
        message: wodllandwldexplorrMessage,
      });
    } catch {
      console.log('err');
    }
  };

  if (!wodllandwldexplorrCurrent) {
    return (
      <Woodllandwldexplorrlay>
        <View style={[styles.wodllandwldexplorrRoot, {paddingTop: 60}]}>
          <Text style={styles.wodllandwldexplorrTitle}>Location not found</Text>
          <Pressable
            onPress={() => (wodllandwldexplorrNavigation as any).goBack()}
            style={[styles.wodllandwldexplorrBtn, {marginTop: 16}]}>
            <Text style={styles.wodllandwldexplorrBtnText}>Back</Text>
          </Pressable>
        </View>
      </Woodllandwldexplorrlay>
    );
  }

  return (
    <Woodllandwldexplorrlay bounce={false}>
      <View style={styles.wodllandwldexplorrRoot}>
        <View style={styles.wodllandwldexplorrHero}>
          <Image
            source={wodllandwldexplorrCurrent.image}
            style={styles.wodllandwldexplorrHeroImg}
          />

          <Pressable
            onPress={() => (wodllandwldexplorrNavigation as any).goBack()}
            style={[styles.wodllandwldexplorrIconBtn, {left: 16}]}>
            <Image
              source={require('../../assets/imgs/wodllandwllilsbac.png')}
            />
          </Pressable>
          <Pressable
            onPress={wodllandwldexplorrOnShare}
            style={[styles.wodllandwldexplorrIconBtn, {right: 16}]}>
            <Image
              source={require('../../assets/imgs/wodllandwllilsshr.png')}
            />
          </Pressable>
        </View>

        <View style={styles.wodllandwldexplorrContent}>
          <Text style={styles.wodllandwldexplorrTitle}>
            {wodllandwldexplorrCurrent.title}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              marginTop: 8,
            }}>
            <Image
              source={require('../../assets/imgs/wodllandwllilsealoc.png')}
            />
            <Text style={styles.wodllandwldexplorrMeta}>
              {wodllandwldexplorrCurrent.cityCountry} •{' '}
              {wodllandwldexplorrCurrent.coords.lat.toFixed(2)},{' '}
              {wodllandwldexplorrCurrent.coords.lon.toFixed(2)}
            </Text>
          </View>

          <View style={styles.wodllandwldexplorrSection}>
            <Text style={styles.wodllandwldexplorrSectionTitle}>
              About This Location
            </Text>
            <Text style={styles.wodllandwldexplorrBody}>
              {wodllandwldexplorrCurrent.description}
            </Text>
          </View>

          <View style={styles.wodllandwldexplorrChipsRow}>
            {wodllandwldexplorrCurrent.tags.map(t => (
              <View key={t} style={styles.wodllandwldexplorrChip}>
                <Text style={styles.wodllandwldexplorrChipText}>{t}</Text>
              </View>
            ))}
          </View>

          <View style={styles.wodllandwldexplorrMapBox}>
            <MapView
              style={styles.wodllandwldexplorrMap}
              scrollEnabled={false}
              pitchEnabled={false}
              rotateEnabled={false}
              zoomEnabled={false}
              initialRegion={{
                latitude: wodllandwldexplorrCurrent.coords.lat,
                longitude: wodllandwldexplorrCurrent.coords.lon,
                latitudeDelta: 0.6,
                longitudeDelta: 0.6,
              }}>
              <Marker
                coordinate={{
                  latitude: wodllandwldexplorrCurrent.coords.lat,
                  longitude: wodllandwldexplorrCurrent.coords.lon,
                }}
                title={wodllandwldexplorrCurrent.title}
                description={wodllandwldexplorrCurrent.cityCountry}>
                <Image
                  source={require('../../assets/imgs/wodllandwllimarkr.png')}
                />
              </Marker>
            </MapView>
          </View>
        </View>
      </View>
    </Woodllandwldexplorrlay>
  );
};

export default Woodllandwldexplorrlocdet;

const styles = StyleSheet.create({
  wodllandwldexplorrSection: {
    marginTop: 14,
    backgroundColor: '#1D1255',
    borderRadius: 16,
    padding: 16,
  },

  wodllandwldexplorrSectionTitle: {
    color: '#EDE8FF',
    fontSize: 16,
    fontWeight: '700',
  },
  wodllandwldexplorrBody: {
    marginTop: 10,
    color: '#A090CC',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '500',
  },

  wodllandwldexplorrRoot: {
    flex: 1,
  },
  wodllandwldexplorrHero: {
    height: 250,
    backgroundColor: '#140B3B',
  },
  wodllandwldexplorrHeroImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wodllandwldexplorrIconBtn: {
    position: 'absolute',
    top: 60,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrIconBtnText: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '700',
  },
  wodllandwldexplorrScroll: {
    flex: 1,
  },
  wodllandwldexplorrContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 28,
  },
  wodllandwldexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 20,
    fontWeight: '800',
  },
  wodllandwldexplorrMeta: {
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '500',
  },

  wodllandwldexplorrChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  wodllandwldexplorrChip: {
    backgroundColor: '#281C68',
    borderWidth: 1,
    borderColor: '#4030B0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  wodllandwldexplorrChipText: {
    color: '#9B5CF6',
    fontSize: 12,
    fontWeight: '600',
  },
  wodllandwldexplorrMapBox: {
    marginTop: 14,
    height: 130,
    borderRadius: 24,
    backgroundColor: '#F1EFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  wodllandwldexplorrMap: {
    width: '100%',
    height: '100%',
  },
  wodllandwldexplorrBtn: {
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wodllandwldexplorrBtnText: {
    color: '#120A38',
    fontSize: 15,
    fontWeight: '800',
  },
});
