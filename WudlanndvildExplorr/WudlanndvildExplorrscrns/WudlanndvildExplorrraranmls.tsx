import WudlanndvildExplorrlay from '../WudlanndvildExplorrcpn/WudlanndvildExplorrlay';
import WudlanndvildExplorrsettmenu from '../WudlanndvildExplorrcpn/WudlanndvildExplorrsettmenu';

import {wudlanndvildexplorrRaraItems} from '../WudlanndvildExplorrdata/WudlanndvildExplorrraradata';

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

const WudlanndvildExplorrraranmls = () => {
  const wudlanndvildexplorrNavigation = useNavigation();
  const [wudlanndvildexplorrFilter, wudlanndvildexplorrSetFilter] = useState<
    'all' | 'animal' | 'plant'
  >('all');

  const wudlanndvildexplorrItems = useMemo(
    () => wudlanndvildexplorrRaraItems,
    [],
  );

  const wudlanndvildexplorrFiltered = useMemo(() => {
    if (wudlanndvildexplorrFilter === 'all') {
      return wudlanndvildexplorrItems;
    }
    if (wudlanndvildexplorrFilter === 'plant') {
      return wudlanndvildexplorrItems.filter(i => i.type === 'plant');
    }
    return wudlanndvildexplorrItems.filter(i => i.type !== 'plant');
  }, [wudlanndvildexplorrFilter, wudlanndvildexplorrItems]);

  return (
    <WudlanndvildExplorrlay>
      <View style={styles.wudlanndvildexplorrRoot}>
        <View style={styles.wudlanndvildexplorrHeader}>
          <View style={styles.wudlanndvildexplorrHeaderLeft}>
            <View style={styles.wudlanndvildexplorrHeaderIconWrap}>
              <Image
                source={require('../../assets/imgs/wodllandwllilsbook.png')}
              />
            </View>
            <View>
              <Text style={styles.wudlanndvildexplorrTitle}>
                Rare Animals & Plants
              </Text>
              <Text style={styles.wudlanndvildexplorrSubtitle}>
                Endangered Species
              </Text>
            </View>
          </View>

          {Platform.OS === 'ios' && (
            <WudlanndvildExplorrsettmenu wudlanndvildexplorrAnchorTop={50} />
          )}
        </View>

        <View style={styles.wudlanndvildexplorrTabs}>
          <Pressable
            onPress={() => wudlanndvildexplorrSetFilter('all')}
            style={[
              styles.wudlanndvildexplorrTab,
              wudlanndvildexplorrFilter === 'all' &&
                styles.wudlanndvildexplorrTabActive,
            ]}>
            <Text
              style={[
                styles.wudlanndvildexplorrTabText,
                wudlanndvildexplorrFilter === 'all' &&
                  styles.wudlanndvildexplorrTabTextActive,
              ]}>
              All
            </Text>
          </Pressable>
          <Pressable
            onPress={() => wudlanndvildexplorrSetFilter('animal')}
            style={[
              styles.wudlanndvildexplorrTab,
              wudlanndvildexplorrFilter === 'animal' &&
                styles.wudlanndvildexplorrTabActive,
            ]}>
            <Text
              style={[
                styles.wudlanndvildexplorrTabText,
                wudlanndvildexplorrFilter === 'animal' &&
                  styles.wudlanndvildexplorrTabTextActive,
              ]}>
              Animal
            </Text>
          </Pressable>
          <Pressable
            onPress={() => wudlanndvildexplorrSetFilter('plant')}
            style={[
              styles.wudlanndvildexplorrTab,
              wudlanndvildexplorrFilter === 'plant' &&
                styles.wudlanndvildexplorrTabActive,
            ]}>
            <Text
              style={[
                styles.wudlanndvildexplorrTabText,
                wudlanndvildexplorrFilter === 'plant' &&
                  styles.wudlanndvildexplorrTabTextActive,
              ]}>
              Plant
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={wudlanndvildexplorrFiltered}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.wudlanndvildexplorrList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                (wudlanndvildexplorrNavigation as any).navigate(
                  'WudlanndvildExplorrraradet',
                  {id: item.id},
                )
              }
              style={styles.wudlanndvildexplorrCard}>
              <Image
                source={
                  item.image ??
                  require('../../assets/imgs/wodllandwllilok1.png')
                }
                style={styles.wudlanndvildexplorrImage}
              />

              <View style={styles.wudlanndvildexplorrCardBody}>
                <View style={styles.wudlanndvildexplorrPillsRow}>
                  <View
                    style={[
                      styles.wudlanndvildexplorrPill,
                      /endangered/i.test(item.status)
                        ? styles.wudlanndvildexplorrPillDanger
                        : styles.wudlanndvildexplorrPillWarn,
                    ]}>
                    <Text style={styles.wudlanndvildexplorrPillText}>
                      {item.status}
                    </Text>
                  </View>
                  <View style={styles.wudlanndvildexplorrPillMuted}>
                    <Text style={styles.wudlanndvildexplorrPillMutedText}>
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

                <Text style={styles.wudlanndvildexplorrCardTitle}>
                  {item.title}
                </Text>
                <Text style={styles.wudlanndvildexplorrCardLatin}>
                  {item.scientificName}
                </Text>

                <View style={styles.wudlanndvildexplorrHabitatRow}>
                  <Text style={styles.wudlanndvildexplorrWarnIcon}>⚠︎</Text>
                  <Text style={styles.wudlanndvildexplorrHabitatText}>
                    {item.habitat.split(',')[0]}
                  </Text>
                </View>
              </View>

              <View style={styles.wudlanndvildexplorrChevron}>
                <Image
                  source={require('../../assets/imgs/wodllandwllilspnx.png')}
                />
              </View>
            </Pressable>
          )}
        />
      </View>
    </WudlanndvildExplorrlay>
  );
};

export default WudlanndvildExplorrraranmls;

const styles = StyleSheet.create({
  wudlanndvildexplorrPillsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
    flexWrap: 'wrap',
  },

  wudlanndvildexplorrPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  wudlanndvildexplorrPillWarn: {
    backgroundColor: '#F0B840',
  },
  wudlanndvildexplorrPillDanger: {
    backgroundColor: '#FF4D4D',
  },

  wudlanndvildexplorrRoot: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  wudlanndvildexplorrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wudlanndvildexplorrHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  wudlanndvildexplorrHeaderIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#3A1B88',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4C2AA6',
  },
  wudlanndvildexplorrHeaderBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 18,
    fontWeight: '800',
  },
  wudlanndvildexplorrSubtitle: {
    color: '#A090CC',
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
  },
  wudlanndvildexplorrTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 14,
  },
  wudlanndvildexplorrTab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
  },
  wudlanndvildexplorrTabActive: {
    backgroundColor: '#9B5CF6',
    borderColor: '#9B5CF6',
  },
  wudlanndvildexplorrTabText: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '800',
  },
  wudlanndvildexplorrTabTextActive: {
    color: '#120A38',
  },
  wudlanndvildexplorrList: {
    paddingTop: 14,
    paddingBottom: 120,
    gap: 12,
  },
  wudlanndvildexplorrCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    overflow: 'hidden',
  },
  wudlanndvildexplorrImageWrap: {
    width: 110,
    height: 100,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#140B3B',
  },
  wudlanndvildexplorrImage: {
    width: 120,
    height: '100%',
    resizeMode: 'cover',
  },
  wudlanndvildexplorrCardBody: {
    flex: 1,
    padding: 12,
  },

  wudlanndvildexplorrPillText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '800',
  },
  wudlanndvildexplorrPillMuted: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#281C68',
  },
  wudlanndvildexplorrPillMutedText: {
    color: '#A090CC',
    fontSize: 11,
    fontWeight: '700',
  },
  wudlanndvildexplorrCardTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '700',
  },
  wudlanndvildexplorrCardLatin: {
    marginTop: 4,
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '600',
  },
  wudlanndvildexplorrHabitatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  wudlanndvildexplorrWarnIcon: {
    color: '#C8922A',
    fontSize: 12,
    fontWeight: '900',
  },
  wudlanndvildexplorrHabitatText: {
    color: '#C8922A',
    fontSize: 11,
    fontWeight: '500',
  },
  wudlanndvildexplorrChevron: {
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrChevronText: {
    color: '#F5C800',
    fontSize: 24,
    fontWeight: '900',
  },
});
