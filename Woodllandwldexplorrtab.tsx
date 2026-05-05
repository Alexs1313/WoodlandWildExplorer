import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Woodllandwldexplorrfacts from './Woodllandwldexplorr/Woodllandwldexplorrscrns/Woodllandwldexplorrfacts';
import Woodllandwldexplorrminigmenu from './Woodllandwldexplorr/Woodllandwldexplorrscrns/Woodllandwldexplorrminigmenu';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  View,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Woodllandwldexplorrmain from './Woodllandwldexplorr/Woodllandwldexplorrscrns/Woodllandwldexplorrmain';
import Woodllandwldexplorrraranmls from './Woodllandwldexplorr/Woodllandwldexplorrscrns/Woodllandwldexplorrraranmls';
import Woodllandwldexplorrmap from './Woodllandwldexplorr/Woodllandwldexplorrscrns/Woodllandwldexplorrmap';

const Tab = createBottomTabNavigator();

const WodllandwldexplorrAnimatedButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const wodllandwldexplorrScale = useRef(new Animated.Value(1)).current;

  const wodllandwldexplorrHandlePressIn = () => {
    Animated.spring(wodllandwldexplorrScale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const wodllandwldexplorrav = new Animated.Value(0);
  wodllandwldexplorrav.addListener(() => {
    return;
  });

  const wodllandwldexplorrHandlePressOut = () => {
    Animated.spring(wodllandwldexplorrScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={wodllandwldexplorrHandlePressIn}
      onPressOut={wodllandwldexplorrHandlePressOut}
      style={[style as ViewStyle, styles.wodllandwldexplorrButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.wodllandwldexplorrButtonInner,
          {transform: [{scale: wodllandwldexplorrScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const WodllandwldexplorrIcon = ({
  focused,
  source,
}: {
  focused: boolean;
  source: ImageSourcePropType;
}) => {
  return (
    <View style={styles.wodllandwldexplorrIconWrap}>
      {focused ? (
        <Image
          source={require('./assets/imgs/wodllandwldexplorsel.png')}
          style={{position: 'absolute', top: -4, right: 6}}
        />
      ) : null}
      <View style={styles.wodllandwldexplorrIconImageWrap}>
        <Image source={source} tintColor={focused ? '#F5C800' : '#4A3A80'} />
      </View>

      {focused && (
        <Image
          source={require('./assets/imgs/wodllandwldac.png')}
          style={{position: 'absolute', top: 32, left: 26}}
        />
      )}
    </View>
  );
};

const wodllandwldexplorrBarBackground = () => (
  <LinearGradient
    pointerEvents="none"
    colors={['#180C42', '#180C42']}
    style={StyleSheet.absoluteFill}
  />
);

const wodllandwldexplorrIconPlaces = ({focused}: {focused: boolean}) => (
  <WodllandwldexplorrIcon
    focused={focused}
    source={require('./assets/imgs/wodllandwldexplorrtab1.png')}
  />
);

const wodllandwldexplorrIconSaved = ({focused}: {focused: boolean}) => (
  <WodllandwldexplorrIcon
    focused={focused}
    source={require('./assets/imgs/wodllandwldexplorrtab2.png')}
  />
);

const wodllandwldexplorrIconMap = ({focused}: {focused: boolean}) => (
  <WodllandwldexplorrIcon
    focused={focused}
    source={require('./assets/imgs/wodllandwldexplorrtab3.png')}
  />
);

const wodllandwldexplorrIconBlog = ({focused}: {focused: boolean}) => (
  <WodllandwldexplorrIcon
    focused={focused}
    source={require('./assets/imgs/wodllandwldexplorrtab4.png')}
  />
);

const wodllandwldexplorrIconQuiz = ({focused}: {focused: boolean}) => (
  <WodllandwldexplorrIcon
    focused={focused}
    source={require('./assets/imgs/wodllandwldexplorrtab5.png')}
  />
);

const wodllandwldexplorrButton = (props: Record<string, unknown>) => (
  <WodllandwldexplorrAnimatedButton {...props} />
);

const Woodllandwldexplorrtab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.wodllandwldexplorrBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: wodllandwldexplorrButton,
        tabBarBackground: wodllandwldexplorrBarBackground,
      }}>
      <Tab.Screen
        name="Woodllandwldexplorrmain"
        component={Woodllandwldexplorrmain}
        options={{
          tabBarIcon: wodllandwldexplorrIconPlaces,
        }}
      />
      <Tab.Screen
        name="Woodllandwldexplorrraranmls"
        component={Woodllandwldexplorrraranmls}
        options={{
          tabBarIcon: wodllandwldexplorrIconSaved,
        }}
      />
      <Tab.Screen
        name="Woodllandwldexplorrmap"
        component={Woodllandwldexplorrmap}
        options={{
          tabBarIcon: wodllandwldexplorrIconMap,
        }}
      />
      <Tab.Screen
        name="Woodllandwldexplorrfacts"
        component={Woodllandwldexplorrfacts}
        options={{
          tabBarIcon: wodllandwldexplorrIconBlog,
        }}
      />
      <Tab.Screen
        name="Woodllandwldexplorrminig"
        component={Woodllandwldexplorrminigmenu}
        options={{
          tabBarIcon: wodllandwldexplorrIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  wodllandwldexplorrIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
  },
  wodllandwldexplorrIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  wodllandwldexplorrIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wodllandwldexplorrIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF1A',
  },

  wodllandwldexplorrBar: {
    elevation: 0,
    paddingTop: 10,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 6,
    borderColor: '#3828A0',
    borderTopWidth: 1,
    borderTopColor: '#3828A0',
    backgroundColor: 'transparent',
    height: 82,
    paddingBottom: 19,
    overflow: 'hidden',
  },

  wodllandwldexplorrButton: {
    flex: 1,
  },
  wodllandwldexplorrButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wodllandwldexplorrLabel: {
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  wodllandwldexplorrLabelIdle: {
    color: '#FFFFFF59',
  },
});

export default Woodllandwldexplorrtab;
