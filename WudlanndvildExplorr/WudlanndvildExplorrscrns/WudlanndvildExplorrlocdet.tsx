// loc details screen
import WudlanndvildExplorrlay from '../WudlanndvildExplorrcpn/WudlanndvildExplorrlay';

import {wudlanndvildexplorrLocations} from '../WudlanndvildExplorrdata/WudlanndvildExplorrlocations';

import {useWudlanndvildExplorrFavorites} from '../WudlanndvildExplorrdata/WudlanndvildExplorrfavorites-context';

import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';

type WudlanndvildExplorrRouteParams = {id?: string};

const WudlanndvildExplorrlocdet = () => {
  const wudlanndvildexplorrNavigation = useNavigation();
  const wudlanndvildexplorrRoute = useRoute();
  const wudlanndvildexplorrParams =
    (wudlanndvildexplorrRoute.params as WudlanndvildExplorrRouteParams) ?? {};
  useWudlanndvildExplorrFavorites();

  const wudlanndvildexplorrCurrent = wudlanndvildexplorrLocations.find(
    l => l.id === wudlanndvildexplorrParams.id,
  );

  const wudlanndvildexplorrOnShare = async () => {
    if (!wudlanndvildexplorrCurrent) {
      return;
    }
    const {title, cityCountry, coords} = wudlanndvildexplorrCurrent;

    const wudlanndvildexplorrMessage = `${title}\n${cityCountry}\n${coords.lat}, ${coords.lon}`;

    try {
      await Share.share({
        title,
        message: wudlanndvildexplorrMessage,
      });
    } catch {
      console.log('err');
    }
  };

  if (!wudlanndvildexplorrCurrent) {
    return (
      <WudlanndvildExplorrlay>
        <View style={[styles.wudlanndvildexplorrRoot, {paddingTop: 60}]}>
          <Text style={styles.wudlanndvildexplorrTitle}>
            Location not found
          </Text>
          <Pressable
            onPress={() => (wudlanndvildexplorrNavigation as any).goBack()}
            style={[styles.wudlanndvildexplorrBtn, {marginTop: 16}]}>
            <Text style={styles.wudlanndvildexplorrBtnText}>Back</Text>
          </Pressable>
        </View>
      </WudlanndvildExplorrlay>
    );
  }

  return (
    <WudlanndvildExplorrlay bounce={false}>
      <View style={styles.wudlanndvildexplorrRoot}>
        <View style={styles.wudlanndvildexplorrHero}>
          <Image
            source={wudlanndvildexplorrCurrent.image}
            style={styles.wudlanndvildexplorrHeroImg}
          />

          <Pressable
            onPress={() => (wudlanndvildexplorrNavigation as any).goBack()}
            style={[styles.wudlanndvildexplorrIconBtn, {left: 16}]}>
            <Image
              source={require('../../assets/imgs/wodllandwllilsbac.png')}
            />
          </Pressable>
          <Pressable
            onPress={wudlanndvildexplorrOnShare}
            style={[styles.wudlanndvildexplorrIconBtn, {right: 16}]}>
            <Image
              source={require('../../assets/imgs/wodllandwllilsshr.png')}
            />
          </Pressable>
        </View>

        <View style={styles.wudlanndvildexplorrContent}>
          <Text style={styles.wudlanndvildexplorrTitle}>
            {wudlanndvildexplorrCurrent.title}
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
            <Text style={styles.wudlanndvildexplorrMeta}>
              {wudlanndvildexplorrCurrent.cityCountry} •{' '}
              {wudlanndvildexplorrCurrent.coords.lat.toFixed(2)},{' '}
              {wudlanndvildexplorrCurrent.coords.lon.toFixed(2)}
            </Text>
          </View>

          <View style={styles.wudlanndvildexplorrSection}>
            <Text style={styles.wudlanndvildexplorrSectionTitle}>
              About This Location
            </Text>
            <Text style={styles.wudlanndvildexplorrBody}>
              {wudlanndvildexplorrCurrent.description}
            </Text>
          </View>

          <View style={styles.wudlanndvildexplorrChipsRow}>
            {wudlanndvildexplorrCurrent.tags.map(t => (
              <View key={t} style={styles.wudlanndvildexplorrChip}>
                <Text style={styles.wudlanndvildexplorrChipText}>{t}</Text>
              </View>
            ))}
          </View>

          <View style={styles.wudlanndvildexplorrMapBox}>
            <MapView
              style={styles.wudlanndvildexplorrMap}
              scrollEnabled={false}
              pitchEnabled={false}
              rotateEnabled={false}
              zoomEnabled={false}
              initialRegion={{
                latitude: wudlanndvildexplorrCurrent.coords.lat,
                longitude: wudlanndvildexplorrCurrent.coords.lon,
                latitudeDelta: 0.6,
                longitudeDelta: 0.6,
              }}>
              <Marker
                coordinate={{
                  latitude: wudlanndvildexplorrCurrent.coords.lat,
                  longitude: wudlanndvildexplorrCurrent.coords.lon,
                }}
                title={wudlanndvildexplorrCurrent.title}
                description={wudlanndvildexplorrCurrent.cityCountry}>
                <Image
                  source={require('../../assets/imgs/wodllandwllimarkr.png')}
                />
              </Marker>
            </MapView>
          </View>
        </View>
      </View>
    </WudlanndvildExplorrlay>
  );
};

export default WudlanndvildExplorrlocdet;

const styles = StyleSheet.create({
  wudlanndvildexplorrSection: {
    marginTop: 14,
    backgroundColor: '#1D1255',
    borderRadius: 16,
    padding: 16,
  },

  wudlanndvildexplorrSectionTitle: {
    color: '#EDE8FF',
    fontSize: 16,
    fontWeight: '700',
  },
  wudlanndvildexplorrBody: {
    marginTop: 10,
    color: '#A090CC',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '500',
  },

  wudlanndvildexplorrRoot: {
    flex: 1,
  },
  wudlanndvildexplorrHero: {
    height: 250,
    backgroundColor: '#140B3B',
  },
  wudlanndvildexplorrHeroImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wudlanndvildexplorrIconBtn: {
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
  wudlanndvildexplorrIconBtnText: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '700',
  },
  wudlanndvildexplorrScroll: {
    flex: 1,
  },
  wudlanndvildexplorrContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 28,
  },
  wudlanndvildexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 20,
    fontWeight: '800',
  },

  wudlanndvildexplorrMeta: {
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '500',
  },

  wudlanndvildexplorrChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  wudlanndvildexplorrChip: {
    backgroundColor: '#281C68',
    borderWidth: 1,
    borderColor: '#4030B0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  wudlanndvildexplorrChipText: {
    color: '#9B5CF6',
    fontSize: 12,
    fontWeight: '600',
  },
  wudlanndvildexplorrMapBox: {
    marginTop: 14,
    height: 130,
    borderRadius: 24,
    backgroundColor: '#F1EFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  wudlanndvildexplorrMap: {
    width: '100%',
    height: '100%',
  },
  wudlanndvildexplorrBtn: {
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F5C800',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wudlanndvildexplorrBtnText: {
    color: '#120A38',
    fontSize: 15,
    fontWeight: '800',
  },
});
