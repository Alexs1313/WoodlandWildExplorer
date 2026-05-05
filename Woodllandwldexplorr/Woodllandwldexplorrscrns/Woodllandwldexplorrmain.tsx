// homme screen
import {wodllandwldexplorrLocations} from '../Woodllandwldexplorrdata/Woodllandwldexplorrlocations';
import {useWodllandwldexplorrFavorites} from '../Woodllandwldexplorrdata/Woodllandwldexplorrfavorites-context';

import React, {useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Woodllandwldexplorrlay from '../Woodllandwldexplorrcpn/Woodllandwldexplorrlay';
import Woodllandwldexplorrsettmenu from '../Woodllandwldexplorrcpn/Woodllandwldexplorrsettmenu';

const Woodllandwldexplorrmain = () => {
  const wodllandwldexplorrNavigation = useNavigation();
  const [wodllandwldexplorrQuery, wodllandwldexplorrSetQuery] = useState('');
  const {wodllandwldexplorrIsFav, wodllandwldexplorrToggle} =
    useWodllandwldexplorrFavorites();

  const wodllandwldexplorrFiltered = useMemo(() => {
    const wodllandwldexplorrQ = wodllandwldexplorrQuery.trim().toLowerCase();
    const wodllandwldexplorrBase = !wodllandwldexplorrQ
      ? wodllandwldexplorrLocations
      : wodllandwldexplorrLocations.filter(l => {
          const wodllandwldexplorrHay = `${l.title} ${
            l.cityCountry
          } ${l.tags.join(' ')}`.toLowerCase();
          return wodllandwldexplorrHay.includes(wodllandwldexplorrQ);
        });

    return wodllandwldexplorrBase.slice().sort((a, b) => {
      const wodllandwldexplorrAFav = wodllandwldexplorrIsFav(a.id) ? 1 : 0;
      const wodllandwldexplorrBFav = wodllandwldexplorrIsFav(b.id) ? 1 : 0;
      if (wodllandwldexplorrAFav !== wodllandwldexplorrBFav) {
        return wodllandwldexplorrBFav - wodllandwldexplorrAFav;
      }
      return a.title.localeCompare(b.title);
    });
  }, [wodllandwldexplorrIsFav, wodllandwldexplorrQuery]);

  const wodllandwldexplorrOpenDetails = (wodllandwldexplorrId: string) => {
    (wodllandwldexplorrNavigation as any).navigate(
      'Woodllandwldexplorrlocdet',
      {id: wodllandwldexplorrId},
    );
  };

  const wodllandwldexplorrToggleFav = async (wodllandwldexplorrId: string) => {
    await wodllandwldexplorrToggle(wodllandwldexplorrId);
  };

  return (
    <Woodllandwldexplorrlay>
      <View style={styles.wodllandwldexplorrRoot}>
        <View style={styles.wodllandwldexplorrHeader}>
          <View>
            <Text style={styles.wodllandwldexplorrTitle}>
              Explore Locations
            </Text>
            <Text style={styles.wodllandwldexplorrSubtitle}>
              Wild Research Places
            </Text>
          </View>

          {Platform.OS === 'ios' && (
            <Woodllandwldexplorrsettmenu wodllandwldexplorrAnchorTop={50} />
          )}
        </View>

        <View style={styles.wodllandwldexplorrSearchWrap}>
          <Image source={require('../../assets/imgs/wodllandwllilsea.png')} />
          <TextInput
            value={wodllandwldexplorrQuery}
            onChangeText={wodllandwldexplorrSetQuery}
            placeholder="Search locations..."
            placeholderTextColor="#6F62A9"
            style={styles.wodllandwldexplorrSearchInput}
          />
        </View>

        <FlatList
          scrollEnabled={false}
          data={wodllandwldexplorrFiltered}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.wodllandwldexplorrListContent}
          columnWrapperStyle={styles.wodllandwldexplorrColumn}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() => wodllandwldexplorrOpenDetails(item.id)}
              style={styles.wodllandwldexplorrCard}>
              <View style={styles.wodllandwldexplorrCardImage}>
                <Image
                  source={item.image}
                  style={styles.wodllandwldexplorrCardImagePlaceholder}
                />
                <Pressable
                  onPress={() => wodllandwldexplorrToggleFav(item.id)}
                  hitSlop={10}
                  style={styles.wodllandwldexplorrFavBtn}>
                  <Image
                    source={
                      wodllandwldexplorrIsFav(item.id)
                        ? require('../../assets/imgs/wodllandwllik.png')
                        : require('../../assets/imgs/wodllandwllikke.png')
                    }
                  />
                </Pressable>
              </View>

              <View style={styles.wodllandwldexplorrCardBody}>
                <Text
                  style={styles.wodllandwldexplorrCardTitle}
                  numberOfLines={2}>
                  {item.title}
                </Text>
                <View style={styles.wodllandwldexplorrCardMetaRow}>
                  <Image
                    source={require('../../assets/imgs/wodllandwllilsealoc.png')}
                  />
                  <Text style={styles.wodllandwldexplorrCardMeta}>
                    {item.cityCountry}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </Woodllandwldexplorrlay>
  );
};

export default Woodllandwldexplorrmain;

const styles = StyleSheet.create({
  wodllandwldexplorrSearchWrap: {
    marginTop: 14,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  wodllandwldexplorrSearchIcon: {
    color: '#A090CC',
    fontSize: 16,
  },

  wodllandwldexplorrRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  wodllandwldexplorrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wodllandwldexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  wodllandwldexplorrSubtitle: {
    color: '#7B6CB0',
    marginTop: 4,
    fontSize: 13,
    fontWeight: '400',
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
  wodllandwldexplorrHeaderBtnText: {
    fontSize: 16,
    color: '#EDE8FF',
  },

  wodllandwldexplorrSearchInput: {
    flex: 1,
    color: '#EDE8FF',
    fontSize: 15,
    paddingVertical: 0,
  },
  wodllandwldexplorrListContent: {
    paddingTop: 14,
    paddingBottom: 120,
  },
  wodllandwldexplorrColumn: {
    gap: 12,
  },
  wodllandwldexplorrCard: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    marginBottom: 12,
  },
  wodllandwldexplorrCardImage: {
    height: 120,
  },

  wodllandwldexplorrCardImagePlaceholder: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wodllandwldexplorrFavBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#120A38',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrFavBtnText: {
    color: '#EDE8FF',
    fontSize: 14,
  },
  wodllandwldexplorrCardBody: {
    padding: 12,
  },
  wodllandwldexplorrCardTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },
  wodllandwldexplorrCardMeta: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '500',
  },
  wodllandwldexplorrCardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
});
