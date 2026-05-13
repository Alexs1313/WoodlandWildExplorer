// facts screen

import WudlanndvildExplorrlay from '../WudlanndvildExplorrcpn/WudlanndvildExplorrlay';
import {wudlanndvildexplorrFactCards} from '../WudlanndvildExplorrdata/WudlanndvildExplorrfacts-data';

import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WudlanndvildExplorrfacts = () => {
  const wudlanndvildexplorrNavigation = useNavigation();
  return (
    <WudlanndvildExplorrlay bounce={false}>
      <View style={styles.wudlanndvildexplorrRoot}>
        <View style={styles.wudlanndvildexplorrHeader}>
          <View>
            <Text style={styles.wudlanndvildexplorrTitle}>Did You Know?</Text>
            <Text style={styles.wudlanndvildexplorrSubtitle}>
              Wild Nature Facts
            </Text>
          </View>

          <Pressable
            onPress={() =>
              (wudlanndvildexplorrNavigation as any).navigate(
                'WudlanndvildExplorrfactsquiz',
              )
            }
            style={styles.wudlanndvildexplorrChallengeBtn}>
            <Image
              source={require('../../assets/imgs/wodllandwllilwack.png')}
            />
            <Text style={styles.wudlanndvildexplorrChallengeBtnText}>
              Challenge
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={wudlanndvildexplorrFactCards}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.wudlanndvildexplorrList}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View style={styles.wudlanndvildexplorrCard}>
              <View style={styles.wudlanndvildexplorrCardTop}>
                <View
                  style={[
                    styles.wudlanndvildexplorrIconWrap,
                    index % 2 === 0
                      ? styles.wudlanndvildexplorrIconWrapPurple
                      : styles.wudlanndvildexplorrIconWrapGold,
                  ]}>
                  <Text style={styles.wudlanndvildexplorrIconText}>
                    {item.emoji}
                  </Text>
                </View>
                <Text style={styles.wudlanndvildexplorrCardTitle}>
                  {item.title}
                </Text>
              </View>
              <Text style={styles.wudlanndvildexplorrCardBody}>
                {item.body}
              </Text>

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
                    styles.wudlanndvildexplorrCardFoot,
                    index % 2 === 0
                      ? styles.wudlanndvildexplorrCardFootPurple
                      : styles.wudlanndvildexplorrCardFootGold,
                  ]}>
                  Nature Fact #{index + 1}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </WudlanndvildExplorrlay>
  );
};

export default WudlanndvildExplorrfacts;

const styles = StyleSheet.create({
  wudlanndvildexplorrCard: {
    backgroundColor: '#1D1255',
    borderWidth: 1,
    borderColor: '#3828A0',
    borderRadius: 18,
    padding: 14,
  },

  wudlanndvildexplorrCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  wudlanndvildexplorrRoot: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },

  wudlanndvildexplorrHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  wudlanndvildexplorrTitle: {
    color: '#EDE8FF',
    fontSize: 22,
    fontWeight: '800',
  },
  wudlanndvildexplorrSubtitle: {
    color: '#A090CC',
    marginTop: 4,
    fontSize: 13,
    fontWeight: '400',
  },
  wudlanndvildexplorrChallengeBtn: {
    height: 40,
    borderRadius: 14,
    backgroundColor: '#F5C800',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'center',
  },

  wudlanndvildexplorrChallengeBtnText: {
    color: '#120A38',
    fontSize: 12,
    fontWeight: '900',
  },
  wudlanndvildexplorrList: {
    paddingTop: 14,
    paddingBottom: 120,
    gap: 12,
  },

  wudlanndvildexplorrIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wudlanndvildexplorrIconWrapPurple: {
    backgroundColor: '#7C3AED',
    borderColor: '#7C3AED',
  },

  wudlanndvildexplorrIconWrapGold: {
    backgroundColor: '#C8922A',
    borderColor: '#C8922A',
  },
  wudlanndvildexplorrIconText: {
    fontSize: 16,
  },

  wudlanndvildexplorrCardTitle: {
    color: '#EDE8FF',
    fontSize: 14,
    fontWeight: '800',
    flex: 1,
  },
  wudlanndvildexplorrCardBody: {
    marginTop: 10,
    color: '#A090CC',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
  },
  wudlanndvildexplorrCardFoot: {
    fontSize: 12,
    fontWeight: '700',
  },
  wudlanndvildexplorrCardFootPurple: {
    color: '#7C3AED',
  },
  wudlanndvildexplorrCardFootGold: {
    color: '#C8922A',
  },
});
