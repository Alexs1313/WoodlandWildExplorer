// homme screen
import {wudlanndvildexplorrLocations} from '../WudlanndvildExplorrdata/WudlanndvildExplorrlocations';
import {useWudlanndvildExplorrFavorites} from '../WudlanndvildExplorrdata/WudlanndvildExplorrfavorites-context';

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

import WudlanndvildExplorrlay from '../WudlanndvildExplorrcpn/WudlanndvildExplorrlay';
import WudlanndvildExplorrsettmenu from '../WudlanndvildExplorrcpn/WudlanndvildExplorrsettmenu';

const WudlanndvildExplorrmain = () => {
  const wudlanndvildexplorrNavigation = useNavigation();
  const [wudlanndvildexplorrQuery, wudlanndvildexplorrSetQuery] = useState('');
  const {wudlanndvildexplorrIsFav, wudlanndvildexplorrToggle} =
    useWudlanndvildExplorrFavorites();

  const wudlanndvildexplorrFiltered = useMemo(() => {
    const wudlanndvildexplorrQ = wudlanndvildexplorrQuery.trim().toLowerCase();
    const wudlanndvildexplorrBase = !wudlanndvildexplorrQ
      ? wudlanndvildexplorrLocations
      : wudlanndvildexplorrLocations.filter(l => {
          const wudlanndvildexplorrHay = `${l.title} ${
            l.cityCountry
          } ${l.tags.join(' ')}`.toLowerCase();
          return wudlanndvildexplorrHay.includes(wudlanndvildexplorrQ);
        });

    return wudlanndvildexplorrBase.slice().sort((a, b) => {
      const wudlanndvildexplorrAFav = wudlanndvildexplorrIsFav(a.id) ? 1 : 0;
      const wudlanndvildexplorrBFav = wudlanndvildexplorrIsFav(b.id) ? 1 : 0;
      if (wudlanndvildexplorrAFav !== wudlanndvildexplorrBFav) {
        return wudlanndvildexplorrBFav - wudlanndvildexplorrAFav;
      }
      return a.title.localeCompare(b.title);
    });
  }, [wudlanndvildexplorrIsFav, wudlanndvildexplorrQuery]);

  const wudlanndvildexplorrOpenDetails = (wudlanndvildexplorrId: string) => {
    (wudlanndvildexplorrNavigation as any).navigate(
      'WudlanndvildExplorrlocdet',
      {id: wudlanndvildexplorrId},
    );
  };

  const wudlanndvildexplorrToggleFav = async (wudlanndvildexplorrId: string) => {
    await wudlanndvildexplorrToggle(wudlanndvildexplorrId);
  };

  return (
    <WudlanndvildExplorrlay>
      <View style={styles.wudlanndvildexplorrRoot}>
        <View style={styles.wudlanndvildexplorrHeader}>
          <View>
            <Text style={styles.wudlanndvildexplorrTitle}>
              Explore Locations
            </Text>
            <Text style={styles.wudlanndvildexplorrSubtitle}>
              Wild Research Places
            </Text>
          </View>

          {Platform.OS === 'ios' && (
            <WudlanndvildExplorrsettmenu wudlanndvildexplorrAnchorTop={50} />
          )}
        </View>

        <View style={styles.wudlanndvildexplorrSearchWrap}>
          <Image source={require('../../assets/imgs/wodllandwllilsea.png')} />
          <TextInput
            value={wudlanndvildexplorrQuery}
            onChangeText={wudlanndvildexplorrSetQuery}
            placeholder="Search locations..."
            placeholderTextColor="#6F62A9"
            style={styles.wudlanndvildexplorrSearchInput}
          />
        </View>

        <FlatList
          scrollEnabled={false}
          data={wudlanndvildexplorrFiltered}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.wudlanndvildexplorrListContent}
          columnWrapperStyle={styles.wudlanndvildexplorrColumn}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() => wudlanndvildexplorrOpenDetails(item.id)}
              style={styles.wudlanndvildexplorrCard}>
              <View style={styles.wudlanndvildexplorrCardImage}>
                <Image
                  source={item.image}
                  style={styles.wudlanndvildexplorrCardImagePlaceholder}
                />
                <Pressable
                  onPress={() => wudlanndvildexplorrToggleFav(item.id)}
                  hitSlop={10}
                  style={styles.wudlanndvildexplorrFavBtn}>
                  <Image
                    source={
                      wudlanndvildexplorrIsFav(item.id)
                        ? require('../../assets/imgs/wodllandwllik.png')
                        : require('../../assets/imgs/wodllandwllikke.png')
                    }
                  />
                </Pressable>
              </View>

              <View style={styles.wudlanndvildexplorrCardBody}>
                <Text
                  style={styles.wudlanndvildexplorrCardTitle}
                  numberOfLines={2}>
                  {item.title}
                </Text>
                <View style={styles.wudlanndvildexplorrCardMetaRow}>
                  <Image
                    source={require('../../assets/imgs/wodllandwllilsealoc.png')}
                  />
                  <Text style={styles.wudlanndvildexplorrCardMeta}>
                    {item.cityCountry}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </WudlanndvildExplorrlay>
  );
};

export default WudlanndvildExplorrmain;

const styles = StyleSheet.create({
  wudlanndvildexplorrSearchWrap: {
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
  wudlanndvildexplorrSearchIcon: {
    color: '#A090CC',
    fontSize: 16,
  },

  wudlanndvildexplorrRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  wudlanndvildexplorrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wudlanndvildexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  wudlanndvildexplorrSubtitle: {
    color: '#7B6CB0',
    marginTop: 4,
    fontSize: 13,
    fontWeight: '400',
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
  wudlanndvildexplorrHeaderBtnText: {
    fontSize: 16,
    color: '#EDE8FF',
  },

  wudlanndvildexplorrSearchInput: {
    flex: 1,
    color: '#EDE8FF',
    fontSize: 15,
    paddingVertical: 0,
  },
  wudlanndvildexplorrListContent: {
    paddingTop: 14,
    paddingBottom: 120,
  },
  wudlanndvildexplorrColumn: {
    gap: 12,
  },
  wudlanndvildexplorrCard: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    marginBottom: 12,
  },
  wudlanndvildexplorrCardImage: {
    height: 120,
  },

  wudlanndvildexplorrCardImagePlaceholder: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wudlanndvildexplorrFavBtn: {
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
  wudlanndvildexplorrFavBtnText: {
    color: '#EDE8FF',
    fontSize: 14,
  },
  wudlanndvildexplorrCardBody: {
    padding: 12,
  },
  wudlanndvildexplorrCardTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },
  wudlanndvildexplorrCardMeta: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '500',
  },
  wudlanndvildexplorrCardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
});
