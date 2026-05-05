// facts screen

import Woodllandwldexplorrlay from '../Woodllandwldexplorrcpn/Woodllandwldexplorrlay';
import {wodllandwldexplorrFactCards} from '../Woodllandwldexplorrdata/Woodllandwldexplorrfacts-data';

import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Woodllandwldexplorrfacts = () => {
  const wodllandwldexplorrNavigation = useNavigation();
  return (
    <Woodllandwldexplorrlay bounce={false}>
      <View style={styles.wodllandwldexplorrRoot}>
        <View style={styles.wodllandwldexplorrHeader}>
          <View>
            <Text style={styles.wodllandwldexplorrTitle}>Did You Know?</Text>
            <Text style={styles.wodllandwldexplorrSubtitle}>
              Wild Nature Facts
            </Text>
          </View>

          <Pressable
            onPress={() =>
              (wodllandwldexplorrNavigation as any).navigate(
                'Woodllandwldexplorrfactsquiz',
              )
            }
            style={styles.wodllandwldexplorrChallengeBtn}>
            <Image
              source={require('../../assets/imgs/wodllandwllilwack.png')}
            />
            <Text style={styles.wodllandwldexplorrChallengeBtnText}>
              Challenge
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={wodllandwldexplorrFactCards}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.wodllandwldexplorrList}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View style={styles.wodllandwldexplorrCard}>
              <View style={styles.wodllandwldexplorrCardTop}>
                <View
                  style={[
                    styles.wodllandwldexplorrIconWrap,
                    index % 2 === 0
                      ? styles.wodllandwldexplorrIconWrapPurple
                      : styles.wodllandwldexplorrIconWrapGold,
                  ]}>
                  <Text style={styles.wodllandwldexplorrIconText}>
                    {item.emoji}
                  </Text>
                </View>
                <Text style={styles.wodllandwldexplorrCardTitle}>
                  {item.title}
                </Text>
              </View>
              <Text style={styles.wodllandwldexplorrCardBody}>{item.body}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 10,
                }}>
                <Image
                  source={require('../../assets/imgs/wodllandwllifcr.png')}
                  style={
                    index % 2 === 0
                      ? {tintColor: '#7C3AED'}
                      : {tintColor: '#C8922A'}
                  }
                />
                <Text
                  style={[
                    styles.wodllandwldexplorrCardFoot,
                    index % 2 === 0
                      ? styles.wodllandwldexplorrCardFootPurple
                      : styles.wodllandwldexplorrCardFootGold,
                  ]}>
                  Nature Fact #{index + 1}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </Woodllandwldexplorrlay>
  );
};

export default Woodllandwldexplorrfacts;

const styles = StyleSheet.create({
  wodllandwldexplorrCard: {
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 14,
  },
  wodllandwldexplorrCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  wodllandwldexplorrRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  wodllandwldexplorrHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  wodllandwldexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  wodllandwldexplorrSubtitle: {
    color: '#A090CC',
    marginTop: 4,
    fontSize: 13,
    fontWeight: '400',
  },
  wodllandwldexplorrChallengeBtn: {
    height: 40,
    borderRadius: 14,
    backgroundColor: '#F5C800',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'center',
  },
  wodllandwldexplorrChallengeBtnText: {
    color: '#120A38',
    fontSize: 12,
    fontWeight: '900',
  },
  wodllandwldexplorrList: {
    paddingTop: 14,
    paddingBottom: 120,
    gap: 12,
  },

  wodllandwldexplorrIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wodllandwldexplorrIconWrapPurple: {
    backgroundColor: '#7C3AED',
    borderColor: '#7C3AED',
  },
  wodllandwldexplorrIconWrapGold: {
    backgroundColor: '#C8922A',
    borderColor: '#C8922A',
  },
  wodllandwldexplorrIconText: {
    fontSize: 16,
  },
  wodllandwldexplorrCardTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
    flex: 1,
  },
  wodllandwldexplorrCardBody: {
    marginTop: 10,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
  },
  wodllandwldexplorrCardFoot: {
    fontSize: 12,
    fontWeight: '700',
  },
  wodllandwldexplorrCardFootPurple: {
    color: '#7C3AED',
  },
  wodllandwldexplorrCardFootGold: {
    color: '#C8922A',
  },
});
