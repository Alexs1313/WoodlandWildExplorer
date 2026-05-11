// facts screen

import Thewlddsexpllorerlay from '../Thewlddsexpllorercpn/Thewlddsexpllorerlay';
import {thewlddsexpllorerFactCards} from '../Thewlddsexpllorerdata/Thewlddsexpllorerfacts-data';

import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Thewlddsexpllorerfacts = () => {
  const thewlddsexpllorerNavigation = useNavigation();
  return (
    <Thewlddsexpllorerlay bounce={false}>
      <View style={styles.thewlddsexpllorerRoot}>
        <View style={styles.thewlddsexpllorerHeader}>
          <View>
            <Text style={styles.thewlddsexpllorerTitle}>Did You Know?</Text>
            <Text style={styles.thewlddsexpllorerSubtitle}>
              Wild Nature Facts
            </Text>
          </View>

          <Pressable
            onPress={() =>
              (thewlddsexpllorerNavigation as any).navigate(
                'Thewlddsexpllorerfactsquiz',
              )
            }
            style={styles.thewlddsexpllorerChallengeBtn}>
            <Image
              source={require('../../assets/imgs/wodllandwllilwack.png')}
            />
            <Text style={styles.thewlddsexpllorerChallengeBtnText}>
              Challenge
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={thewlddsexpllorerFactCards}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.thewlddsexpllorerList}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View style={styles.thewlddsexpllorerCard}>
              <View style={styles.thewlddsexpllorerCardTop}>
                <View
                  style={[
                    styles.thewlddsexpllorerIconWrap,
                    index % 2 === 0
                      ? styles.thewlddsexpllorerIconWrapPurple
                      : styles.thewlddsexpllorerIconWrapGold,
                  ]}>
                  <Text style={styles.thewlddsexpllorerIconText}>
                    {item.emoji}
                  </Text>
                </View>
                <Text style={styles.thewlddsexpllorerCardTitle}>
                  {item.title}
                </Text>
              </View>
              <Text style={styles.thewlddsexpllorerCardBody}>{item.body}</Text>

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
                    styles.thewlddsexpllorerCardFoot,
                    index % 2 === 0
                      ? styles.thewlddsexpllorerCardFootPurple
                      : styles.thewlddsexpllorerCardFootGold,
                  ]}>
                  Nature Fact #{index + 1}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </Thewlddsexpllorerlay>
  );
};

export default Thewlddsexpllorerfacts;

const styles = StyleSheet.create({
  thewlddsexpllorerCard: {
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 14,
  },
  thewlddsexpllorerCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  thewlddsexpllorerRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  thewlddsexpllorerHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  thewlddsexpllorerTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  thewlddsexpllorerSubtitle: {
    color: '#A090CC',
    marginTop: 4,
    fontSize: 13,
    fontWeight: '400',
  },
  thewlddsexpllorerChallengeBtn: {
    height: 40,
    borderRadius: 14,
    backgroundColor: '#F5C800',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'center',
  },
  thewlddsexpllorerChallengeBtnText: {
    color: '#120A38',
    fontSize: 12,
    fontWeight: '900',
  },
  thewlddsexpllorerList: {
    paddingTop: 14,
    paddingBottom: 120,
    gap: 12,
  },

  thewlddsexpllorerIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  thewlddsexpllorerIconWrapPurple: {
    backgroundColor: '#7C3AED',
    borderColor: '#7C3AED',
  },
  thewlddsexpllorerIconWrapGold: {
    backgroundColor: '#C8922A',
    borderColor: '#C8922A',
  },
  thewlddsexpllorerIconText: {
    fontSize: 16,
  },
  thewlddsexpllorerCardTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
    flex: 1,
  },
  thewlddsexpllorerCardBody: {
    marginTop: 10,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
  },
  thewlddsexpllorerCardFoot: {
    fontSize: 12,
    fontWeight: '700',
  },
  thewlddsexpllorerCardFootPurple: {
    color: '#7C3AED',
  },
  thewlddsexpllorerCardFootGold: {
    color: '#C8922A',
  },
});
