import Woodllandwldexplorrlay from '../Woodllandwldexplorrcpn/Woodllandwldexplorrlay';
import Woodllandwldexplorrsettmenu from '../Woodllandwldexplorrcpn/Woodllandwldexplorrsettmenu';

import {wodllandwldexplorrRaraItems} from '../Woodllandwldexplorrdata/Woodllandwldexplorrraradata';

import React, {useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Woodllandwldexplorrraranmls = () => {
  const wodllandwldexplorrNavigation = useNavigation();
  const [wodllandwldexplorrFilter, wodllandwldexplorrSetFilter] = useState<
    'all' | 'animal' | 'plant'
  >('all');

  const wodllandwldexplorrItems = useMemo(
    () => wodllandwldexplorrRaraItems,
    [],
  );

  const wodllandwldexplorrFiltered = useMemo(() => {
    if (wodllandwldexplorrFilter === 'all') {
      return wodllandwldexplorrItems;
    }
    if (wodllandwldexplorrFilter === 'plant') {
      return wodllandwldexplorrItems.filter(i => i.type === 'plant');
    }
    return wodllandwldexplorrItems.filter(i => i.type !== 'plant');
  }, [wodllandwldexplorrFilter, wodllandwldexplorrItems]);

  return (
    <Woodllandwldexplorrlay>
      <View style={styles.wodllandwldexplorrRoot}>
        <View style={styles.wodllandwldexplorrHeader}>
          <View style={styles.wodllandwldexplorrHeaderLeft}>
            <View style={styles.wodllandwldexplorrHeaderIconWrap}>
              <Image
                source={require('../../assets/imgs/wodllandwllilsbook.png')}
              />
            </View>
            <View>
              <Text style={styles.wodllandwldexplorrTitle}>
                Rare Animals & Plants
              </Text>
              <Text style={styles.wodllandwldexplorrSubtitle}>
                Endangered Species
              </Text>
            </View>
          </View>

          {Platform.OS === 'ios' && (
            <Woodllandwldexplorrsettmenu wodllandwldexplorrAnchorTop={50} />
          )}
        </View>

        <View style={styles.wodllandwldexplorrTabs}>
          <Pressable
            onPress={() => wodllandwldexplorrSetFilter('all')}
            style={[
              styles.wodllandwldexplorrTab,
              wodllandwldexplorrFilter === 'all' &&
                styles.wodllandwldexplorrTabActive,
            ]}>
            <Text
              style={[
                styles.wodllandwldexplorrTabText,
                wodllandwldexplorrFilter === 'all' &&
                  styles.wodllandwldexplorrTabTextActive,
              ]}>
              All
            </Text>
          </Pressable>
          <Pressable
            onPress={() => wodllandwldexplorrSetFilter('animal')}
            style={[
              styles.wodllandwldexplorrTab,
              wodllandwldexplorrFilter === 'animal' &&
                styles.wodllandwldexplorrTabActive,
            ]}>
            <Text
              style={[
                styles.wodllandwldexplorrTabText,
                wodllandwldexplorrFilter === 'animal' &&
                  styles.wodllandwldexplorrTabTextActive,
              ]}>
              Animal
            </Text>
          </Pressable>
          <Pressable
            onPress={() => wodllandwldexplorrSetFilter('plant')}
            style={[
              styles.wodllandwldexplorrTab,
              wodllandwldexplorrFilter === 'plant' &&
                styles.wodllandwldexplorrTabActive,
            ]}>
            <Text
              style={[
                styles.wodllandwldexplorrTabText,
                wodllandwldexplorrFilter === 'plant' &&
                  styles.wodllandwldexplorrTabTextActive,
              ]}>
              Plant
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={wodllandwldexplorrFiltered}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.wodllandwldexplorrList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                (wodllandwldexplorrNavigation as any).navigate(
                  'Woodllandwldexplorrraradet',
                  {id: item.id},
                )
              }
              style={styles.wodllandwldexplorrCard}>
              <Image
                source={
                  item.image ??
                  require('../../assets/imgs/wodllandwllilok1.png')
                }
                style={styles.wodllandwldexplorrImage}
              />

              <View style={styles.wodllandwldexplorrCardBody}>
                <View style={styles.wodllandwldexplorrPillsRow}>
                  <View
                    style={[
                      styles.wodllandwldexplorrPill,
                      /endangered/i.test(item.status)
                        ? styles.wodllandwldexplorrPillDanger
                        : styles.wodllandwldexplorrPillWarn,
                    ]}>
                    <Text style={styles.wodllandwldexplorrPillText}>
                      {item.status}
                    </Text>
                  </View>
                  <View style={styles.wodllandwldexplorrPillMuted}>
                    <Text style={styles.wodllandwldexplorrPillMutedText}>
                      {item.type === 'plant'
                        ? 'Plant'
                        : item.type === 'bird'
                        ? 'Bird'
                        : item.type === 'amphibian'
                        ? 'Amphibian'
                        : 'Animal'}
                    </Text>
                  </View>
                </View>

                <Text style={styles.wodllandwldexplorrCardTitle}>
                  {item.title}
                </Text>
                <Text style={styles.wodllandwldexplorrCardLatin}>
                  {item.scientificName}
                </Text>

                <View style={styles.wodllandwldexplorrHabitatRow}>
                  <Text style={styles.wodllandwldexplorrWarnIcon}>⚠︎</Text>
                  <Text style={styles.wodllandwldexplorrHabitatText}>
                    {item.habitat.split(',')[0]}
                  </Text>
                </View>
              </View>

              <View style={styles.wodllandwldexplorrChevron}>
                <Image
                  source={require('../../assets/imgs/wodllandwllilspnx.png')}
                />
              </View>
            </Pressable>
          )}
        />
      </View>
    </Woodllandwldexplorrlay>
  );
};

export default Woodllandwldexplorrraranmls;

const styles = StyleSheet.create({
  wodllandwldexplorrPillsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
    flexWrap: 'wrap',
  },

  wodllandwldexplorrPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  wodllandwldexplorrPillWarn: {
    backgroundColor: '#F0B840',
  },
  wodllandwldexplorrPillDanger: {
    backgroundColor: '#FF4D4D',
  },

  wodllandwldexplorrRoot: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  wodllandwldexplorrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wodllandwldexplorrHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  wodllandwldexplorrHeaderIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#3A1B88',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4C2AA6',
  },
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
  wodllandwldexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '800',
  },
  wodllandwldexplorrSubtitle: {
    color: '#A090CC',
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
  },
  wodllandwldexplorrTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 14,
  },
  wodllandwldexplorrTab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  wodllandwldexplorrTabActive: {
    backgroundColor: '#9B5CF6',
    borderColor: '#9B5CF6',
  },
  wodllandwldexplorrTabText: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '800',
  },
  wodllandwldexplorrTabTextActive: {
    color: '#120A38',
  },
  wodllandwldexplorrList: {
    paddingTop: 14,
    paddingBottom: 120,
    gap: 12,
  },
  wodllandwldexplorrCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    overflow: 'hidden',
  },
  wodllandwldexplorrImageWrap: {
    width: 110,
    height: 100,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#140B3B',
  },
  wodllandwldexplorrImage: {
    width: 120,
    height: '100%',
    resizeMode: 'cover',
  },
  wodllandwldexplorrCardBody: {
    flex: 1,
    padding: 12,
  },

  wodllandwldexplorrPillText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '800',
  },
  wodllandwldexplorrPillMuted: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#281C68',
  },
  wodllandwldexplorrPillMutedText: {
    color: '#A090CC',
    fontSize: 11,
    fontWeight: '700',
  },
  wodllandwldexplorrCardTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '700',
  },
  wodllandwldexplorrCardLatin: {
    marginTop: 4,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
  },
  wodllandwldexplorrHabitatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  wodllandwldexplorrWarnIcon: {
    color: '#C8922A',
    fontSize: 12,
    fontWeight: '900',
  },
  wodllandwldexplorrHabitatText: {
    color: '#C8922A',
    fontSize: 11,
    fontWeight: '500',
  },
  wodllandwldexplorrChevron: {
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrChevronText: {
    color: '#F5C800',
    fontSize: 24,
    fontWeight: '900',
  },
});
