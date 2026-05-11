// det
import Thewlddsexpllorerlay from '../Thewlddsexpllorercpn/Thewlddsexpllorerlay';
import {thewlddsexpllorerRaraItems} from '../Thewlddsexpllorerdata/Thewlddsexpllorerraradata';

//
import React, {useMemo} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

type ThewlddsexpllorerRouteParams = {id?: string};

const Thewlddsexpllorerraradet = () => {
  const thewlddsexpllorerNavigation = useNavigation();
  const thewlddsexpllorerRoute = useRoute();
  const thewlddsexpllorerParams =
    (thewlddsexpllorerRoute.params as ThewlddsexpllorerRouteParams) ?? {};

  const thewlddsexpllorerItems = useMemo(
    () => thewlddsexpllorerRaraItems,
    [],
  );

  const thewlddsexpllorerCurrent = thewlddsexpllorerItems.find(
    i => i.id === thewlddsexpllorerParams.id,
  );

  const thewlddsexpllorerOnShare = async () => {
    if (!thewlddsexpllorerCurrent) return;
    try {
      await Share.share({
        title: thewlddsexpllorerCurrent.title,
        message: `${thewlddsexpllorerCurrent.title} (${thewlddsexpllorerCurrent.scientificName})`,
      });
    } catch {
      // ignore
    }
  };

  if (!thewlddsexpllorerCurrent) {
    return (
      <Thewlddsexpllorerlay>
        <View style={[styles.thewlddsexpllorerRoot, {paddingTop: 60}]}>
          <Text style={styles.thewlddsexpllorerTitle}>Not found</Text>
        </View>
      </Thewlddsexpllorerlay>
    );
  }

  return (
    <Thewlddsexpllorerlay bounce={false}>
      <View style={styles.thewlddsexpllorerRoot}>
        <View style={styles.thewlddsexpllorerHero}>
          <Image
            source={
              thewlddsexpllorerCurrent.image ??
              require('../../assets/imgs/wodllandwllilok1.png')
            }
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.thewlddsexpllorerContent}>
          <View style={styles.thewlddsexpllorerPillsRow}>
            <View
              style={[
                styles.thewlddsexpllorerPill,
                {
                  backgroundColor: /endangered/i.test(
                    thewlddsexpllorerCurrent.status,
                  )
                    ? '#FF4D4D'
                    : '#F5C800',
                },
              ]}>
              <Text style={styles.thewlddsexpllorerPillText}>
                {thewlddsexpllorerCurrent.status}
              </Text>
            </View>
            <View style={styles.thewlddsexpllorerPillMuted}>
              <Text style={styles.thewlddsexpllorerPillMutedText}>
                {thewlddsexpllorerCurrent.type === 'plant'
                  ? 'Plant'
                  : thewlddsexpllorerCurrent.type === 'bird'
                  ? 'Bird'
                  : thewlddsexpllorerCurrent.type === 'amphibian'
                  ? 'Amphibian'
                  : 'Animal'}
              </Text>
            </View>
          </View>

          <Text style={styles.thewlddsexpllorerTitle}>
            {thewlddsexpllorerCurrent.title}
          </Text>
          <Text style={styles.thewlddsexpllorerLatin}>
            {thewlddsexpllorerCurrent.scientificName}
          </Text>

          <View style={styles.thewlddsexpllorerInfoRow}>
            <View style={styles.thewlddsexpllorerInfoCard}>
              <Text style={styles.thewlddsexpllorerInfoLabel}>Habitat</Text>
              <Text style={styles.thewlddsexpllorerInfoValue}>
                {thewlddsexpllorerCurrent.habitat}
              </Text>
            </View>
            <View style={styles.thewlddsexpllorerInfoCard}>
              <Text style={styles.thewlddsexpllorerInfoLabel}>Population</Text>
              <Text style={styles.thewlddsexpllorerInfoValue}>
                {thewlddsexpllorerCurrent.population}
              </Text>
            </View>
          </View>

          <View style={styles.thewlddsexpllorerThreatBox}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <Image
                source={require('../../assets/imgs/wodllandwllilwarn.png')}
              />
              <Text style={styles.thewlddsexpllorerThreatTitle}>
                Main Threats
              </Text>
            </View>
            <Text style={styles.thewlddsexpllorerThreatText}>
              {thewlddsexpllorerCurrent.threats}
            </Text>
          </View>

          <View style={styles.thewlddsexpllorerSection}>
            <Text style={styles.thewlddsexpllorerSectionTitle}>
              About This Species
            </Text>
            <Text style={styles.thewlddsexpllorerBody}>
              {thewlddsexpllorerCurrent.about}
            </Text>
          </View>

          <View
            style={[
              styles.thewlddsexpllorerSection,
              {backgroundColor: '#281C68'},
            ]}>
            <Text style={styles.thewlddsexpllorerSectionTitle}>
              Interesting Facts
            </Text>
            <View style={styles.thewlddsexpllorerFacts}>
              {thewlddsexpllorerCurrent.facts.map((f, idx) => (
                <View key={f} style={styles.thewlddsexpllorerFactRow}>
                  <View style={styles.thewlddsexpllorerFactNum}>
                    <Text style={styles.thewlddsexpllorerFactNumText}>
                      {idx + 1}
                    </Text>
                  </View>
                  <Text style={styles.thewlddsexpllorerFactText}>{f}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </Thewlddsexpllorerlay>
  );
};

export default Thewlddsexpllorerraradet;

const styles = StyleSheet.create({
  thewlddsexpllorerTitle: {color: '#EDE8FF', fontSize: 22, fontWeight: '800'},
  thewlddsexpllorerLatin: {
    marginTop: 6,
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '600',
  },

  thewlddsexpllorerRoot: {flex: 1},
  thewlddsexpllorerHero: {height: 250, backgroundColor: '#140B3B'},
  thewlddsexpllorerHeroImg: {
    width: '100%',
    height: '100%',
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
  thewlddsexpllorerContent: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 30,
  },
  thewlddsexpllorerPillsRow: {flexDirection: 'row', gap: 8, marginBottom: 12},
  thewlddsexpllorerPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  thewlddsexpllorerPillText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  thewlddsexpllorerPillMuted: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  thewlddsexpllorerPillMutedText: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '700',
  },

  thewlddsexpllorerInfoRow: {flexDirection: 'row', gap: 12, marginTop: 14},
  thewlddsexpllorerInfoCard: {
    flex: 1,
    backgroundColor: '#1D1255',

    borderRadius: 14,
    padding: 14,
  },
  thewlddsexpllorerInfoLabel: {
    color: '#7B6CB0',
    fontSize: 12,
    fontWeight: '700',
  },
  thewlddsexpllorerInfoValue: {
    marginTop: 8,
    color: '#EDE8FF',
    fontSize: 13,
    fontWeight: '700',
  },
  thewlddsexpllorerThreatBox: {
    marginTop: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FF6060',
    backgroundColor: '#1D1255',
    padding: 14,
  },
  thewlddsexpllorerThreatTitle: {
    color: '#FF6060',
    fontSize: 13,
    fontWeight: '700',
  },
  thewlddsexpllorerThreatText: {
    marginTop: 8,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '600',
  },
  thewlddsexpllorerSection: {
    marginTop: 14,
    backgroundColor: '#1D1255',

    borderRadius: 18,
    padding: 14,
  },
  thewlddsexpllorerSectionTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '700',
  },
  thewlddsexpllorerBody: {
    marginTop: 10,
    color: '#C0B0E8',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
  },
  thewlddsexpllorerFacts: {marginTop: 12, gap: 10},
  thewlddsexpllorerFactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  thewlddsexpllorerFactNum: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerFactNumText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  thewlddsexpllorerFactText: {
    flex: 1,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '400',
  },
});
