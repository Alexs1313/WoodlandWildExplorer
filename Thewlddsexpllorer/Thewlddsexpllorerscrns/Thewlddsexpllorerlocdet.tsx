// loc details screen
import Thewlddsexpllorerlay from '../Thewlddsexpllorercpn/Thewlddsexpllorerlay';

import {thewlddsexpllorerLocations} from '../Thewlddsexpllorerdata/Thewlddsexpllorerlocations';

import {useThewlddsexpllorerFavorites} from '../Thewlddsexpllorerdata/Thewlddsexpllorerfavorites-context';

import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';

type ThewlddsexpllorerRouteParams = {id?: string};

const Thewlddsexpllorerlocdet = () => {
  const thewlddsexpllorerNavigation = useNavigation();
  const thewlddsexpllorerRoute = useRoute();
  const thewlddsexpllorerParams =
    (thewlddsexpllorerRoute.params as ThewlddsexpllorerRouteParams) ?? {};
  useThewlddsexpllorerFavorites();

  const thewlddsexpllorerCurrent = thewlddsexpllorerLocations.find(
    l => l.id === thewlddsexpllorerParams.id,
  );

  const thewlddsexpllorerOnShare = async () => {
    if (!thewlddsexpllorerCurrent) {
      return;
    }
    const {title, cityCountry, coords} = thewlddsexpllorerCurrent;

    const thewlddsexpllorerMessage = `${title}\n${cityCountry}\n${coords.lat}, ${coords.lon}`;

    try {
      await Share.share({
        title,
        message: thewlddsexpllorerMessage,
      });
    } catch {
      console.log('err');
    }
  };

  if (!thewlddsexpllorerCurrent) {
    return (
      <Thewlddsexpllorerlay>
        <View style={[styles.thewlddsexpllorerRoot, {paddingTop: 60}]}>
          <Text style={styles.thewlddsexpllorerTitle}>Location not found</Text>
          <Pressable
            onPress={() => (thewlddsexpllorerNavigation as any).goBack()}
            style={[styles.thewlddsexpllorerBtn, {marginTop: 16}]}>
            <Text style={styles.thewlddsexpllorerBtnText}>Back</Text>
          </Pressable>
        </View>
      </Thewlddsexpllorerlay>
    );
  }

  return (
    <Thewlddsexpllorerlay bounce={false}>
      <View style={styles.thewlddsexpllorerRoot}>
        <View style={styles.thewlddsexpllorerHero}>
          <Image
            source={thewlddsexpllorerCurrent.image}
            style={styles.thewlddsexpllorerHeroImg}
          />

          <Pressable
            onPress={() => (thewlddsexpllorerNavigation as any).goBack()}
            style={[styles.thewlddsexpllorerIconBtn, {left: 16}]}>
            <Image
              source={require('../../assets/imgs/wodllandwllilsbac.png')}
            />
          </Pressable>
          <Pressable
            onPress={thewlddsexpllorerOnShare}
            style={[styles.thewlddsexpllorerIconBtn, {right: 16}]}>
            <Image
              source={require('../../assets/imgs/wodllandwllilsshr.png')}
            />
          </Pressable>
        </View>

        <View style={styles.thewlddsexpllorerContent}>
          <Text style={styles.thewlddsexpllorerTitle}>
            {thewlddsexpllorerCurrent.title}
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
            <Text style={styles.thewlddsexpllorerMeta}>
              {thewlddsexpllorerCurrent.cityCountry} •{' '}
              {thewlddsexpllorerCurrent.coords.lat.toFixed(2)},{' '}
              {thewlddsexpllorerCurrent.coords.lon.toFixed(2)}
            </Text>
          </View>

          <View style={styles.thewlddsexpllorerSection}>
            <Text style={styles.thewlddsexpllorerSectionTitle}>
              About This Location
            </Text>
            <Text style={styles.thewlddsexpllorerBody}>
              {thewlddsexpllorerCurrent.description}
            </Text>
          </View>

          <View style={styles.thewlddsexpllorerChipsRow}>
            {thewlddsexpllorerCurrent.tags.map(t => (
              <View key={t} style={styles.thewlddsexpllorerChip}>
                <Text style={styles.thewlddsexpllorerChipText}>{t}</Text>
              </View>
            ))}
          </View>

          <View style={styles.thewlddsexpllorerMapBox}>
            <MapView
              style={styles.thewlddsexpllorerMap}
              scrollEnabled={false}
              pitchEnabled={false}
              rotateEnabled={false}
              zoomEnabled={false}
              initialRegion={{
                latitude: thewlddsexpllorerCurrent.coords.lat,
                longitude: thewlddsexpllorerCurrent.coords.lon,
                latitudeDelta: 0.6,
                longitudeDelta: 0.6,
              }}>
              <Marker
                coordinate={{
                  latitude: thewlddsexpllorerCurrent.coords.lat,
                  longitude: thewlddsexpllorerCurrent.coords.lon,
                }}
                title={thewlddsexpllorerCurrent.title}
                description={thewlddsexpllorerCurrent.cityCountry}>
                <Image
                  source={require('../../assets/imgs/wodllandwllimarkr.png')}
                />
              </Marker>
            </MapView>
          </View>
        </View>
      </View>
    </Thewlddsexpllorerlay>
  );
};

export default Thewlddsexpllorerlocdet;

const styles = StyleSheet.create({
  thewlddsexpllorerSection: {
    marginTop: 14,
    backgroundColor: '#1D1255',
    borderRadius: 16,
    padding: 16,
  },

  thewlddsexpllorerSectionTitle: {
    color: '#EDE8FF',
    fontSize: 16,
    fontWeight: '700',
  },
  thewlddsexpllorerBody: {
    marginTop: 10,
    color: '#A090CC',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '500',
  },

  thewlddsexpllorerRoot: {
    flex: 1,
  },
  thewlddsexpllorerHero: {
    height: 250,
    backgroundColor: '#140B3B',
  },
  thewlddsexpllorerHeroImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  thewlddsexpllorerIconBtn: {
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
  thewlddsexpllorerIconBtnText: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '700',
  },
  thewlddsexpllorerScroll: {
    flex: 1,
  },
  thewlddsexpllorerContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 28,
  },
  thewlddsexpllorerTitle: {
    color: '#EDE8FF',
    fontSize: 20,
    fontWeight: '800',
  },
  thewlddsexpllorerMeta: {
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '500',
  },

  thewlddsexpllorerChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  thewlddsexpllorerChip: {
    backgroundColor: '#281C68',
    borderWidth: 1,
    borderColor: '#4030B0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  thewlddsexpllorerChipText: {
    color: '#9B5CF6',
    fontSize: 12,
    fontWeight: '600',
  },
  thewlddsexpllorerMapBox: {
    marginTop: 14,
    height: 130,
    borderRadius: 24,
    backgroundColor: '#F1EFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  thewlddsexpllorerMap: {
    width: '100%',
    height: '100%',
  },
  thewlddsexpllorerBtn: {
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  thewlddsexpllorerBtnText: {
    color: '#120A38',
    fontSize: 15,
    fontWeight: '800',
  },
});
