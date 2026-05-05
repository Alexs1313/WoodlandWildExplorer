// det
import Woodllandwldexplorrlay from '../Woodllandwldexplorrcpn/Woodllandwldexplorrlay';
import {wodllandwldexplorrRaraItems} from '../Woodllandwldexplorrdata/Woodllandwldexplorrraradata';

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

type WoodllandwldexplorrRouteParams = {id?: string};

const Woodllandwldexplorrraradet = () => {
  const wodllandwldexplorrNavigation = useNavigation();
  const wodllandwldexplorrRoute = useRoute();
  const wodllandwldexplorrParams =
    (wodllandwldexplorrRoute.params as WoodllandwldexplorrRouteParams) ?? {};

  const wodllandwldexplorrItems = useMemo(
    () => wodllandwldexplorrRaraItems,
    [],
  );

  const wodllandwldexplorrCurrent = wodllandwldexplorrItems.find(
    i => i.id === wodllandwldexplorrParams.id,
  );

  const wodllandwldexplorrOnShare = async () => {
    if (!wodllandwldexplorrCurrent) return;
    try {
      await Share.share({
        title: wodllandwldexplorrCurrent.title,
        message: `${wodllandwldexplorrCurrent.title} (${wodllandwldexplorrCurrent.latin})`,
      });
    } catch {
      // ignore
    }
  };

  if (!wodllandwldexplorrCurrent) {
    return (
      <Woodllandwldexplorrlay>
        <View style={[styles.wodllandwldexplorrRoot, {paddingTop: 60}]}>
          <Text style={styles.wodllandwldexplorrTitle}>Not found</Text>
        </View>
      </Woodllandwldexplorrlay>
    );
  }

  return (
    <Woodllandwldexplorrlay bounce={false}>
      <View style={styles.wodllandwldexplorrRoot}>
        <View style={styles.wodllandwldexplorrHero}>
          <Image
            source={
              wodllandwldexplorrCurrent.image ??
              require('../../assets/imgs/wodllandwllilok1.png')
            }
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.wodllandwldexplorrContent}>
          <View style={styles.wodllandwldexplorrPillsRow}>
            <View
              style={[
                styles.wodllandwldexplorrPill,
                {
                  backgroundColor: /endangered/i.test(
                    wodllandwldexplorrCurrent.status,
                  )
                    ? '#FF4D4D'
                    : '#F5C800',
                },
              ]}>
              <Text style={styles.wodllandwldexplorrPillText}>
                {wodllandwldexplorrCurrent.status}
              </Text>
            </View>
            <View style={styles.wodllandwldexplorrPillMuted}>
              <Text style={styles.wodllandwldexplorrPillMutedText}>
                {wodllandwldexplorrCurrent.type === 'plant'
                  ? 'Plant'
                  : wodllandwldexplorrCurrent.type === 'bird'
                  ? 'Bird'
                  : wodllandwldexplorrCurrent.type === 'amphibian'
                  ? 'Amphibian'
                  : 'Animal'}
              </Text>
            </View>
          </View>

          <Text style={styles.wodllandwldexplorrTitle}>
            {wodllandwldexplorrCurrent.title}
          </Text>
          <Text style={styles.wodllandwldexplorrLatin}>
            {wodllandwldexplorrCurrent.scientificName}
          </Text>

          <View style={styles.wodllandwldexplorrInfoRow}>
            <View style={styles.wodllandwldexplorrInfoCard}>
              <Text style={styles.wodllandwldexplorrInfoLabel}>Habitat</Text>
              <Text style={styles.wodllandwldexplorrInfoValue}>
                {wodllandwldexplorrCurrent.habitat}
              </Text>
            </View>
            <View style={styles.wodllandwldexplorrInfoCard}>
              <Text style={styles.wodllandwldexplorrInfoLabel}>Population</Text>
              <Text style={styles.wodllandwldexplorrInfoValue}>
                {wodllandwldexplorrCurrent.population}
              </Text>
            </View>
          </View>

          <View style={styles.wodllandwldexplorrThreatBox}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <Image
                source={require('../../assets/imgs/wodllandwllilwarn.png')}
              />
              <Text style={styles.wodllandwldexplorrThreatTitle}>
                Main Threats
              </Text>
            </View>
            <Text style={styles.wodllandwldexplorrThreatText}>
              {wodllandwldexplorrCurrent.threats}
            </Text>
          </View>

          <View style={styles.wodllandwldexplorrSection}>
            <Text style={styles.wodllandwldexplorrSectionTitle}>
              About This Species
            </Text>
            <Text style={styles.wodllandwldexplorrBody}>
              {wodllandwldexplorrCurrent.about}
            </Text>
          </View>

          <View
            style={[
              styles.wodllandwldexplorrSection,
              {backgroundColor: '#281C68'},
            ]}>
            <Text style={styles.wodllandwldexplorrSectionTitle}>
              Interesting Facts
            </Text>
            <View style={styles.wodllandwldexplorrFacts}>
              {wodllandwldexplorrCurrent.facts.map((f, idx) => (
                <View key={f} style={styles.wodllandwldexplorrFactRow}>
                  <View style={styles.wodllandwldexplorrFactNum}>
                    <Text style={styles.wodllandwldexplorrFactNumText}>
                      {idx + 1}
                    </Text>
                  </View>
                  <Text style={styles.wodllandwldexplorrFactText}>{f}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </Woodllandwldexplorrlay>
  );
};

export default Woodllandwldexplorrraradet;

const styles = StyleSheet.create({
  wodllandwldexplorrTitle: {color: '#EDE8FF', fontSize: 22, fontWeight: '800'},
  wodllandwldexplorrLatin: {
    marginTop: 6,
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '600',
  },

  wodllandwldexplorrRoot: {flex: 1},
  wodllandwldexplorrHero: {height: 250, backgroundColor: '#140B3B'},
  wodllandwldexplorrHeroImg: {
    width: '100%',
    height: '100%',
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
  wodllandwldexplorrContent: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 30,
  },
  wodllandwldexplorrPillsRow: {flexDirection: 'row', gap: 8, marginBottom: 12},
  wodllandwldexplorrPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  wodllandwldexplorrPillText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  wodllandwldexplorrPillMuted: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  wodllandwldexplorrPillMutedText: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '700',
  },

  wodllandwldexplorrInfoRow: {flexDirection: 'row', gap: 12, marginTop: 14},
  wodllandwldexplorrInfoCard: {
    flex: 1,
    backgroundColor: '#1D1255',

    borderRadius: 14,
    padding: 14,
  },
  wodllandwldexplorrInfoLabel: {
    color: '#7B6CB0',
    fontSize: 12,
    fontWeight: '700',
  },
  wodllandwldexplorrInfoValue: {
    marginTop: 8,
    color: '#EDE8FF',
    fontSize: 13,
    fontWeight: '700',
  },
  wodllandwldexplorrThreatBox: {
    marginTop: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FF6060',
    backgroundColor: '#1D1255',
    padding: 14,
  },
  wodllandwldexplorrThreatTitle: {
    color: '#FF6060',
    fontSize: 13,
    fontWeight: '700',
  },
  wodllandwldexplorrThreatText: {
    marginTop: 8,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '600',
  },
  wodllandwldexplorrSection: {
    marginTop: 14,
    backgroundColor: '#1D1255',

    borderRadius: 18,
    padding: 14,
  },
  wodllandwldexplorrSectionTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '700',
  },
  wodllandwldexplorrBody: {
    marginTop: 10,
    color: '#C0B0E8',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
  },
  wodllandwldexplorrFacts: {marginTop: 12, gap: 10},
  wodllandwldexplorrFactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  wodllandwldexplorrFactNum: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrFactNumText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  wodllandwldexplorrFactText: {
    flex: 1,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '400',
  },
});
