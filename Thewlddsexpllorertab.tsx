import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Thewlddsexpllorerfacts from './Thewlddsexpllorer/Thewlddsexpllorerscrns/Thewlddsexpllorerfacts';
import Thewlddsexpllorerminigmenu from './Thewlddsexpllorer/Thewlddsexpllorerscrns/Thewlddsexpllorerminigmenu';

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

import Thewlddsexpllorermain from './Thewlddsexpllorer/Thewlddsexpllorerscrns/Thewlddsexpllorermain';
import Thewlddsexpllorerraranmls from './Thewlddsexpllorer/Thewlddsexpllorerscrns/Thewlddsexpllorerraranmls';
import Thewlddsexpllorermap from './Thewlddsexpllorer/Thewlddsexpllorerscrns/Thewlddsexpllorermap';

const Tab = createBottomTabNavigator();

const ThewlddsexpllorerAnimatedButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const thewlddsexpllorerScale = useRef(new Animated.Value(1)).current;

  const thewlddsexpllorerHandlePressIn = () => {
    Animated.spring(thewlddsexpllorerScale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const thewlddsexpllorerav = new Animated.Value(0);
  thewlddsexpllorerav.addListener(() => {
    return;
  });

  const thewlddsexpllorerHandlePressOut = () => {
    Animated.spring(thewlddsexpllorerScale, {
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
      onPressIn={thewlddsexpllorerHandlePressIn}
      onPressOut={thewlddsexpllorerHandlePressOut}
      style={[style as ViewStyle, styles.thewlddsexpllorerButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.thewlddsexpllorerButtonInner,
          {transform: [{scale: thewlddsexpllorerScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const ThewlddsexpllorerIcon = ({
  focused,
  source,
}: {
  focused: boolean;
  source: ImageSourcePropType;
}) => {
  return (
    <View style={styles.thewlddsexpllorerIconWrap}>
      {focused ? (
        <Image
          source={require('./assets/imgs/wodllandwldexplorsel.png')}
          style={{position: 'absolute', top: -4, right: 6}}
        />
      ) : null}
      <View style={styles.thewlddsexpllorerIconImageWrap}>
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

const thewlddsexpllorerBarBackground = () => (
  <LinearGradient
    pointerEvents="none"
    colors={['#180C42', '#180C42']}
    style={StyleSheet.absoluteFill}
  />
);

const thewlddsexpllorerIconPlaces = ({focused}: {focused: boolean}) => (
  <ThewlddsexpllorerIcon
    focused={focused}
    source={require('./assets/imgs/thewlddsexpllorertab1.png')}
  />
);

const thewlddsexpllorerIconSaved = ({focused}: {focused: boolean}) => (
  <ThewlddsexpllorerIcon
    focused={focused}
    source={require('./assets/imgs/thewlddsexpllorertab2.png')}
  />
);

const thewlddsexpllorerIconMap = ({focused}: {focused: boolean}) => (
  <ThewlddsexpllorerIcon
    focused={focused}
    source={require('./assets/imgs/thewlddsexpllorertab3.png')}
  />
);

const thewlddsexpllorerIconBlog = ({focused}: {focused: boolean}) => (
  <ThewlddsexpllorerIcon
    focused={focused}
    source={require('./assets/imgs/thewlddsexpllorertab4.png')}
  />
);

const thewlddsexpllorerIconQuiz = ({focused}: {focused: boolean}) => (
  <ThewlddsexpllorerIcon
    focused={focused}
    source={require('./assets/imgs/thewlddsexpllorertab5.png')}
  />
);

const thewlddsexpllorerButton = (props: Record<string, unknown>) => (
  <ThewlddsexpllorerAnimatedButton {...props} />
);

const Thewlddsexpllorertab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.thewlddsexpllorerBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: thewlddsexpllorerButton,
        tabBarBackground: thewlddsexpllorerBarBackground,
      }}>
      <Tab.Screen
        name="Thewlddsexpllorermain"
        component={Thewlddsexpllorermain}
        options={{
          tabBarIcon: thewlddsexpllorerIconPlaces,
        }}
      />
      <Tab.Screen
        name="Thewlddsexpllorerraranmls"
        component={Thewlddsexpllorerraranmls}
        options={{
          tabBarIcon: thewlddsexpllorerIconSaved,
        }}
      />
      <Tab.Screen
        name="Thewlddsexpllorermap"
        component={Thewlddsexpllorermap}
        options={{
          tabBarIcon: thewlddsexpllorerIconMap,
        }}
      />
      <Tab.Screen
        name="Thewlddsexpllorerfacts"
        component={Thewlddsexpllorerfacts}
        options={{
          tabBarIcon: thewlddsexpllorerIconBlog,
        }}
      />
      <Tab.Screen
        name="Thewlddsexpllorerminig"
        component={Thewlddsexpllorerminigmenu}
        options={{
          tabBarIcon: thewlddsexpllorerIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  thewlddsexpllorerIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
  },
  thewlddsexpllorerIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  thewlddsexpllorerIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thewlddsexpllorerIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF1A',
  },

  thewlddsexpllorerBar: {
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

  thewlddsexpllorerButton: {
    flex: 1,
  },
  thewlddsexpllorerButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  thewlddsexpllorerLabel: {
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  thewlddsexpllorerLabelIdle: {
    color: '#FFFFFF59',
  },
});

export default Thewlddsexpllorertab;
