import Thewlddsexpllorerlay from '../Thewlddsexpllorercpn/Thewlddsexpllorerlay';
import Thewlddsexpllorersettmenu from '../Thewlddsexpllorercpn/Thewlddsexpllorersettmenu';

import {thewlddsexpllorerRaraItems} from '../Thewlddsexpllorerdata/Thewlddsexpllorerraradata';

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

const Thewlddsexpllorerraranmls = () => {
  const thewlddsexpllorerNavigation = useNavigation();
  const [thewlddsexpllorerFilter, thewlddsexpllorerSetFilter] = useState<
    'all' | 'animal' | 'plant'
  >('all');

  const thewlddsexpllorerItems = useMemo(
    () => thewlddsexpllorerRaraItems,
    [],
  );

  const thewlddsexpllorerFiltered = useMemo(() => {
    if (thewlddsexpllorerFilter === 'all') {
      return thewlddsexpllorerItems;
    }
    if (thewlddsexpllorerFilter === 'plant') {
      return thewlddsexpllorerItems.filter(i => i.type === 'plant');
    }
    return thewlddsexpllorerItems.filter(i => i.type !== 'plant');
  }, [thewlddsexpllorerFilter, thewlddsexpllorerItems]);

  return (
    <Thewlddsexpllorerlay>
      <View style={styles.thewlddsexpllorerRoot}>
        <View style={styles.thewlddsexpllorerHeader}>
          <View style={styles.thewlddsexpllorerHeaderLeft}>
            <View style={styles.thewlddsexpllorerHeaderIconWrap}>
              <Image
                source={require('../../assets/imgs/wodllandwllilsbook.png')}
              />
            </View>
            <View>
              <Text style={styles.thewlddsexpllorerTitle}>
                Rare Animals & Plants
              </Text>
              <Text style={styles.thewlddsexpllorerSubtitle}>
                Endangered Species
              </Text>
            </View>
          </View>

          {Platform.OS === 'ios' && (
            <Thewlddsexpllorersettmenu thewlddsexpllorerAnchorTop={50} />
          )}
        </View>

        <View style={styles.thewlddsexpllorerTabs}>
          <Pressable
            onPress={() => thewlddsexpllorerSetFilter('all')}
            style={[
              styles.thewlddsexpllorerTab,
              thewlddsexpllorerFilter === 'all' &&
                styles.thewlddsexpllorerTabActive,
            ]}>
            <Text
              style={[
                styles.thewlddsexpllorerTabText,
                thewlddsexpllorerFilter === 'all' &&
                  styles.thewlddsexpllorerTabTextActive,
              ]}>
              All
            </Text>
          </Pressable>
          <Pressable
            onPress={() => thewlddsexpllorerSetFilter('animal')}
            style={[
              styles.thewlddsexpllorerTab,
              thewlddsexpllorerFilter === 'animal' &&
                styles.thewlddsexpllorerTabActive,
            ]}>
            <Text
              style={[
                styles.thewlddsexpllorerTabText,
                thewlddsexpllorerFilter === 'animal' &&
                  styles.thewlddsexpllorerTabTextActive,
              ]}>
              Animal
            </Text>
          </Pressable>
          <Pressable
            onPress={() => thewlddsexpllorerSetFilter('plant')}
            style={[
              styles.thewlddsexpllorerTab,
              thewlddsexpllorerFilter === 'plant' &&
                styles.thewlddsexpllorerTabActive,
            ]}>
            <Text
              style={[
                styles.thewlddsexpllorerTabText,
                thewlddsexpllorerFilter === 'plant' &&
                  styles.thewlddsexpllorerTabTextActive,
              ]}>
              Plant
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={thewlddsexpllorerFiltered}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.thewlddsexpllorerList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                (thewlddsexpllorerNavigation as any).navigate(
                  'Thewlddsexpllorerraradet',
                  {id: item.id},
                )
              }
              style={styles.thewlddsexpllorerCard}>
              <Image
                source={
                  item.image ??
                  require('../../assets/imgs/wodllandwllilok1.png')
                }
                style={styles.thewlddsexpllorerImage}
              />

              <View style={styles.thewlddsexpllorerCardBody}>
                <View style={styles.thewlddsexpllorerPillsRow}>
                  <View
                    style={[
                      styles.thewlddsexpllorerPill,
                      /endangered/i.test(item.status)
                        ? styles.thewlddsexpllorerPillDanger
                        : styles.thewlddsexpllorerPillWarn,
                    ]}>
                    <Text style={styles.thewlddsexpllorerPillText}>
                      {item.status}
                    </Text>
                  </View>
                  <View style={styles.thewlddsexpllorerPillMuted}>
                    <Text style={styles.thewlddsexpllorerPillMutedText}>
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

                <Text style={styles.thewlddsexpllorerCardTitle}>
                  {item.title}
                </Text>
                <Text style={styles.thewlddsexpllorerCardLatin}>
                  {item.scientificName}
                </Text>

                <View style={styles.thewlddsexpllorerHabitatRow}>
                  <Text style={styles.thewlddsexpllorerWarnIcon}>⚠︎</Text>
                  <Text style={styles.thewlddsexpllorerHabitatText}>
                    {item.habitat.split(',')[0]}
                  </Text>
                </View>
              </View>

              <View style={styles.thewlddsexpllorerChevron}>
                <Image
                  source={require('../../assets/imgs/wodllandwllilspnx.png')}
                />
              </View>
            </Pressable>
          )}
        />
      </View>
    </Thewlddsexpllorerlay>
  );
};

export default Thewlddsexpllorerraranmls;

const styles = StyleSheet.create({
  thewlddsexpllorerPillsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
    flexWrap: 'wrap',
  },

  thewlddsexpllorerPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  thewlddsexpllorerPillWarn: {
    backgroundColor: '#F0B840',
  },
  thewlddsexpllorerPillDanger: {
    backgroundColor: '#FF4D4D',
  },

  thewlddsexpllorerRoot: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  thewlddsexpllorerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thewlddsexpllorerHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  thewlddsexpllorerHeaderIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#3A1B88',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4C2AA6',
  },
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
  thewlddsexpllorerTitle: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '800',
  },
  thewlddsexpllorerSubtitle: {
    color: '#A090CC',
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
  },
  thewlddsexpllorerTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 14,
  },
  thewlddsexpllorerTab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  thewlddsexpllorerTabActive: {
    backgroundColor: '#9B5CF6',
    borderColor: '#9B5CF6',
  },
  thewlddsexpllorerTabText: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '800',
  },
  thewlddsexpllorerTabTextActive: {
    color: '#120A38',
  },
  thewlddsexpllorerList: {
    paddingTop: 14,
    paddingBottom: 120,
    gap: 12,
  },
  thewlddsexpllorerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    overflow: 'hidden',
  },
  thewlddsexpllorerImageWrap: {
    width: 110,
    height: 100,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#140B3B',
  },
  thewlddsexpllorerImage: {
    width: 120,
    height: '100%',
    resizeMode: 'cover',
  },
  thewlddsexpllorerCardBody: {
    flex: 1,
    padding: 12,
  },

  thewlddsexpllorerPillText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '800',
  },
  thewlddsexpllorerPillMuted: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#281C68',
  },
  thewlddsexpllorerPillMutedText: {
    color: '#A090CC',
    fontSize: 11,
    fontWeight: '700',
  },
  thewlddsexpllorerCardTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '700',
  },
  thewlddsexpllorerCardLatin: {
    marginTop: 4,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
  },
  thewlddsexpllorerHabitatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  thewlddsexpllorerWarnIcon: {
    color: '#C8922A',
    fontSize: 12,
    fontWeight: '900',
  },
  thewlddsexpllorerHabitatText: {
    color: '#C8922A',
    fontSize: 11,
    fontWeight: '500',
  },
  thewlddsexpllorerChevron: {
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerChevronText: {
    color: '#F5C800',
    fontSize: 24,
    fontWeight: '900',
  },
});
