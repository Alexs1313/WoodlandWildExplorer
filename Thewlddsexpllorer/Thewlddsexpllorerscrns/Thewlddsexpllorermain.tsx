// homme screen
import {thewlddsexpllorerLocations} from '../Thewlddsexpllorerdata/Thewlddsexpllorerlocations';
import {useThewlddsexpllorerFavorites} from '../Thewlddsexpllorerdata/Thewlddsexpllorerfavorites-context';

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

import Thewlddsexpllorerlay from '../Thewlddsexpllorercpn/Thewlddsexpllorerlay';
import Thewlddsexpllorersettmenu from '../Thewlddsexpllorercpn/Thewlddsexpllorersettmenu';

const Thewlddsexpllorermain = () => {
  const thewlddsexpllorerNavigation = useNavigation();
  const [thewlddsexpllorerQuery, thewlddsexpllorerSetQuery] = useState('');
  const {thewlddsexpllorerIsFav, thewlddsexpllorerToggle} =
    useThewlddsexpllorerFavorites();

  const thewlddsexpllorerFiltered = useMemo(() => {
    const thewlddsexpllorerQ = thewlddsexpllorerQuery.trim().toLowerCase();
    const thewlddsexpllorerBase = !thewlddsexpllorerQ
      ? thewlddsexpllorerLocations
      : thewlddsexpllorerLocations.filter(l => {
          const thewlddsexpllorerHay = `${l.title} ${
            l.cityCountry
          } ${l.tags.join(' ')}`.toLowerCase();
          return thewlddsexpllorerHay.includes(thewlddsexpllorerQ);
        });

    return thewlddsexpllorerBase.slice().sort((a, b) => {
      const thewlddsexpllorerAFav = thewlddsexpllorerIsFav(a.id) ? 1 : 0;
      const thewlddsexpllorerBFav = thewlddsexpllorerIsFav(b.id) ? 1 : 0;
      if (thewlddsexpllorerAFav !== thewlddsexpllorerBFav) {
        return thewlddsexpllorerBFav - thewlddsexpllorerAFav;
      }
      return a.title.localeCompare(b.title);
    });
  }, [thewlddsexpllorerIsFav, thewlddsexpllorerQuery]);

  const thewlddsexpllorerOpenDetails = (thewlddsexpllorerId: string) => {
    (thewlddsexpllorerNavigation as any).navigate(
      'Thewlddsexpllorerlocdet',
      {id: thewlddsexpllorerId},
    );
  };

  const thewlddsexpllorerToggleFav = async (thewlddsexpllorerId: string) => {
    await thewlddsexpllorerToggle(thewlddsexpllorerId);
  };

  return (
    <Thewlddsexpllorerlay>
      <View style={styles.thewlddsexpllorerRoot}>
        <View style={styles.thewlddsexpllorerHeader}>
          <View>
            <Text style={styles.thewlddsexpllorerTitle}>
              Explore Locations
            </Text>
            <Text style={styles.thewlddsexpllorerSubtitle}>
              Wild Research Places
            </Text>
          </View>

          {Platform.OS === 'ios' && (
            <Thewlddsexpllorersettmenu thewlddsexpllorerAnchorTop={50} />
          )}
        </View>

        <View style={styles.thewlddsexpllorerSearchWrap}>
          <Image source={require('../../assets/imgs/wodllandwllilsea.png')} />
          <TextInput
            value={thewlddsexpllorerQuery}
            onChangeText={thewlddsexpllorerSetQuery}
            placeholder="Search locations..."
            placeholderTextColor="#6F62A9"
            style={styles.thewlddsexpllorerSearchInput}
          />
        </View>

        <FlatList
          scrollEnabled={false}
          data={thewlddsexpllorerFiltered}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.thewlddsexpllorerListContent}
          columnWrapperStyle={styles.thewlddsexpllorerColumn}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() => thewlddsexpllorerOpenDetails(item.id)}
              style={styles.thewlddsexpllorerCard}>
              <View style={styles.thewlddsexpllorerCardImage}>
                <Image
                  source={item.image}
                  style={styles.thewlddsexpllorerCardImagePlaceholder}
                />
                <Pressable
                  onPress={() => thewlddsexpllorerToggleFav(item.id)}
                  hitSlop={10}
                  style={styles.thewlddsexpllorerFavBtn}>
                  <Image
                    source={
                      thewlddsexpllorerIsFav(item.id)
                        ? require('../../assets/imgs/wodllandwllik.png')
                        : require('../../assets/imgs/wodllandwllikke.png')
                    }
                  />
                </Pressable>
              </View>

              <View style={styles.thewlddsexpllorerCardBody}>
                <Text
                  style={styles.thewlddsexpllorerCardTitle}
                  numberOfLines={2}>
                  {item.title}
                </Text>
                <View style={styles.thewlddsexpllorerCardMetaRow}>
                  <Image
                    source={require('../../assets/imgs/wodllandwllilsealoc.png')}
                  />
                  <Text style={styles.thewlddsexpllorerCardMeta}>
                    {item.cityCountry}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </Thewlddsexpllorerlay>
  );
};

export default Thewlddsexpllorermain;

const styles = StyleSheet.create({
  thewlddsexpllorerSearchWrap: {
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
  thewlddsexpllorerSearchIcon: {
    color: '#A090CC',
    fontSize: 16,
  },

  thewlddsexpllorerRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  thewlddsexpllorerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thewlddsexpllorerTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  thewlddsexpllorerSubtitle: {
    color: '#7B6CB0',
    marginTop: 4,
    fontSize: 13,
    fontWeight: '400',
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
  thewlddsexpllorerHeaderBtnText: {
    fontSize: 16,
    color: '#EDE8FF',
  },

  thewlddsexpllorerSearchInput: {
    flex: 1,
    color: '#EDE8FF',
    fontSize: 15,
    paddingVertical: 0,
  },
  thewlddsexpllorerListContent: {
    paddingTop: 14,
    paddingBottom: 120,
  },
  thewlddsexpllorerColumn: {
    gap: 12,
  },
  thewlddsexpllorerCard: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    marginBottom: 12,
  },
  thewlddsexpllorerCardImage: {
    height: 120,
  },

  thewlddsexpllorerCardImagePlaceholder: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  thewlddsexpllorerFavBtn: {
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
  thewlddsexpllorerFavBtnText: {
    color: '#EDE8FF',
    fontSize: 14,
  },
  thewlddsexpllorerCardBody: {
    padding: 12,
  },
  thewlddsexpllorerCardTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },
  thewlddsexpllorerCardMeta: {
    color: '#A090CC',
    fontSize: 12,
    fontWeight: '500',
  },
  thewlddsexpllorerCardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
});
