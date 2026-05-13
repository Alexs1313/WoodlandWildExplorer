// det
import WudlanndvildExplorrlay from '../WudlanndvildExplorrcpn/WudlanndvildExplorrlay';
import {wudlanndvildexplorrRaraItems} from '../WudlanndvildExplorrdata/WudlanndvildExplorrraradata';

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

type WudlanndvildExplorrRouteParams = {id?: string};

const WudlanndvildExplorrraradet = () => {
  const wudlanndvildexplorrNavigation = useNavigation();
  const wudlanndvildexplorrRoute = useRoute();
  const wudlanndvildexplorrParams =
    (wudlanndvildexplorrRoute.params as WudlanndvildExplorrRouteParams) ?? {};

  const wudlanndvildexplorrItems = useMemo(
    () => wudlanndvildexplorrRaraItems,
    [],
  );

  const wudlanndvildexplorrCurrent = wudlanndvildexplorrItems.find(
    i => i.id === wudlanndvildexplorrParams.id,
  );

  const wudlanndvildexplorrOnShare = async () => {
    if (!wudlanndvildexplorrCurrent) return;
    try {
      await Share.share({
        title: wudlanndvildexplorrCurrent.title,
        message: `${wudlanndvildexplorrCurrent.title} (${wudlanndvildexplorrCurrent.scientificName})`,
      });
    } catch {
      // ignore
    }
  };

  if (!wudlanndvildexplorrCurrent) {
    return (
      <WudlanndvildExplorrlay>
        <View style={[styles.wudlanndvildexplorrRoot, {paddingTop: 60}]}>
          <Text style={styles.wudlanndvildexplorrTitle}>Not found</Text>
        </View>
      </WudlanndvildExplorrlay>
    );
  }

  return (
    <WudlanndvildExplorrlay bounce={false}>
      <View style={styles.wudlanndvildexplorrRoot}>
        <View style={styles.wudlanndvildexplorrHero}>
          <Image
            source={
              wudlanndvildexplorrCurrent.image ??
              require('../../assets/imgs/wodllandwllilok1.png')
            }
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.wudlanndvildexplorrContent}>
          <View style={styles.wudlanndvildexplorrPillsRow}>
            <View
              style={[
                styles.wudlanndvildexplorrPill,
                {
                  backgroundColor: /endangered/i.test(
                    wudlanndvildexplorrCurrent.status,
                  )
                    ? '#FF4D4D'
                    : '#F5C800',
                },
              ]}>
              <Text style={styles.wudlanndvildexplorrPillText}>
                {wudlanndvildexplorrCurrent.status}
              </Text>
            </View>
            <View style={styles.wudlanndvildexplorrPillMuted}>
              <Text style={styles.wudlanndvildexplorrPillMutedText}>
                {wudlanndvildexplorrCurrent.type === 'plant'
                  ? 'Plant'
                  : wudlanndvildexplorrCurrent.type === 'bird'
                  ? 'Bird'
                  : wudlanndvildexplorrCurrent.type === 'amphibian'
                  ? 'Amphibian'
                  : 'Animal'}
              </Text>
            </View>
          </View>

          <Text style={styles.wudlanndvildexplorrTitle}>
            {wudlanndvildexplorrCurrent.title}
          </Text>
          <Text style={styles.wudlanndvildexplorrLatin}>
            {wudlanndvildexplorrCurrent.scientificName}
          </Text>

          <View style={styles.wudlanndvildexplorrInfoRow}>
            <View style={styles.wudlanndvildexplorrInfoCard}>
              <Text style={styles.wudlanndvildexplorrInfoLabel}>Habitat</Text>
              <Text style={styles.wudlanndvildexplorrInfoValue}>
                {wudlanndvildexplorrCurrent.habitat}
              </Text>
            </View>
            <View style={styles.wudlanndvildexplorrInfoCard}>
              <Text style={styles.wudlanndvildexplorrInfoLabel}>Population</Text>
              <Text style={styles.wudlanndvildexplorrInfoValue}>
                {wudlanndvildexplorrCurrent.population}
              </Text>
            </View>
          </View>

          <View style={styles.wudlanndvildexplorrThreatBox}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <Image
                source={require('../../assets/imgs/wodllandwllilwarn.png')}
              />
              <Text style={styles.wudlanndvildexplorrThreatTitle}>
                Main Threats
              </Text>
            </View>
            <Text style={styles.wudlanndvildexplorrThreatText}>
              {wudlanndvildexplorrCurrent.threats}
            </Text>
          </View>

          <View style={styles.wudlanndvildexplorrSection}>
            <Text style={styles.wudlanndvildexplorrSectionTitle}>
              About This Species
            </Text>
            <Text style={styles.wudlanndvildexplorrBody}>
              {wudlanndvildexplorrCurrent.about}
            </Text>
          </View>

          <View
            style={[
              styles.wudlanndvildexplorrSection,
              {backgroundColor: '#281C68'},
            ]}>
            <Text style={styles.wudlanndvildexplorrSectionTitle}>
              Interesting Facts
            </Text>
            <View style={styles.wudlanndvildexplorrFacts}>
              {wudlanndvildexplorrCurrent.facts.map((f, idx) => (
                <View key={f} style={styles.wudlanndvildexplorrFactRow}>
                  <View style={styles.wudlanndvildexplorrFactNum}>
                    <Text style={styles.wudlanndvildexplorrFactNumText}>
                      {idx + 1}
                    </Text>
                  </View>
                  <Text style={styles.wudlanndvildexplorrFactText}>{f}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </WudlanndvildExplorrlay>
  );
};

export default WudlanndvildExplorrraradet;

const styles = StyleSheet.create({
  wudlanndvildexplorrTitle: {color: '#EDE8FF', fontSize: 22, fontWeight: '800'},
  wudlanndvildexplorrLatin: {
    marginTop: 6,
    color: '#A090CC',
    fontSize: 14,
    fontWeight: '600',
  },

  wudlanndvildexplorrRoot: {flex: 1},
  wudlanndvildexplorrHero: {height: 250, backgroundColor: '#140B3B'},
  wudlanndvildexplorrHeroImg: {
    width: '100%',
    height: '100%',
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
  wudlanndvildexplorrContent: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 30,
  },
  wudlanndvildexplorrPillsRow: {flexDirection: 'row', gap: 8, marginBottom: 12},
  wudlanndvildexplorrPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  wudlanndvildexplorrPillText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  wudlanndvildexplorrPillMuted: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#24186A',
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  wudlanndvildexplorrPillMutedText: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '700',
  },

  wudlanndvildexplorrInfoRow: {flexDirection: 'row', gap: 12, marginTop: 14},
  wudlanndvildexplorrInfoCard: {
    flex: 1,
    backgroundColor: '#1D1255',

    borderRadius: 14,
    padding: 14,
  },
  wudlanndvildexplorrInfoLabel: {
    color: '#7B6CB0',
    fontSize: 12,
    fontWeight: '700',
  },
  wudlanndvildexplorrInfoValue: {
    marginTop: 8,
    color: '#EDE8FF',
    fontSize: 13,
    fontWeight: '700',
  },
  wudlanndvildexplorrThreatBox: {
    marginTop: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FF6060',
    backgroundColor: '#1D1255',
    padding: 14,
  },
  wudlanndvildexplorrThreatTitle: {
    color: '#FF6060',
    fontSize: 13,
    fontWeight: '700',
  },
  wudlanndvildexplorrThreatText: {
    marginTop: 8,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '600',
  },
  wudlanndvildexplorrSection: {
    marginTop: 14,
    backgroundColor: '#1D1255',

    borderRadius: 18,
    padding: 14,
  },
  wudlanndvildexplorrSectionTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '700',
  },
  wudlanndvildexplorrBody: {
    marginTop: 10,
    color: '#C0B0E8',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
  },
  wudlanndvildexplorrFacts: {marginTop: 12, gap: 10},
  wudlanndvildexplorrFactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  wudlanndvildexplorrFactNum: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrFactNumText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  wudlanndvildexplorrFactText: {
    flex: 1,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '400',
  },
});
