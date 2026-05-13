import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WudlanndvildExplorrfacts from './WudlanndvildExplorr/WudlanndvildExplorrscrns/WudlanndvildExplorrfacts';
import WudlanndvildExplorrminigmenu from './WudlanndvildExplorr/WudlanndvildExplorrscrns/WudlanndvildExplorrminigmenu';

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

import WudlanndvildExplorrmain from './WudlanndvildExplorr/WudlanndvildExplorrscrns/WudlanndvildExplorrmain';
import WudlanndvildExplorrraranmls from './WudlanndvildExplorr/WudlanndvildExplorrscrns/WudlanndvildExplorrraranmls';
import WudlanndvildExplorrmap from './WudlanndvildExplorr/WudlanndvildExplorrscrns/WudlanndvildExplorrmap';

const Tab = createBottomTabNavigator();

const WudlanndvildExplorrAnimatedButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const wudlanndvildexplorrScale = useRef(new Animated.Value(1)).current;

  const wudlanndvildexplorrHandlePressIn = () => {
    Animated.spring(wudlanndvildexplorrScale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const wudlanndvildexplorrav = new Animated.Value(0);
  wudlanndvildexplorrav.addListener(() => {
    return;
  });

  const wudlanndvildexplorrHandlePressOut = () => {
    Animated.spring(wudlanndvildexplorrScale, {
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
      onPressIn={wudlanndvildexplorrHandlePressIn}
      onPressOut={wudlanndvildexplorrHandlePressOut}
      style={[style as ViewStyle, styles.wudlanndvildexplorrButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.wudlanndvildexplorrButtonInner,
          {transform: [{scale: wudlanndvildexplorrScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const WudlanndvildExplorrIcon = ({
  focused,
  source,
}: {
  focused: boolean;
  source: ImageSourcePropType;
}) => {
  return (
    <View style={styles.wudlanndvildexplorrIconWrap}>
      {focused ? (
        <Image
          source={require('./assets/imgs/wodllandwldexplorsel.png')}
          style={{position: 'absolute', top: -4, right: 6}}
        />
      ) : null}
      <View style={styles.wudlanndvildexplorrIconImageWrap}>
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

const wudlanndvildexplorrBarBackground = () => (
  <LinearGradient
    pointerEvents="none"
    colors={['#180C42', '#180C42']}
    style={StyleSheet.absoluteFill}
  />
);

const wudlanndvildexplorrIconPlaces = ({focused}: {focused: boolean}) => (
  <WudlanndvildExplorrIcon
    focused={focused}
    source={require('./assets/imgs/wudlanndvildexplorrtab1.png')}
  />
);

const wudlanndvildexplorrIconSaved = ({focused}: {focused: boolean}) => (
  <WudlanndvildExplorrIcon
    focused={focused}
    source={require('./assets/imgs/wudlanndvildexplorrtab2.png')}
  />
);

const wudlanndvildexplorrIconMap = ({focused}: {focused: boolean}) => (
  <WudlanndvildExplorrIcon
    focused={focused}
    source={require('./assets/imgs/wudlanndvildexplorrtab3.png')}
  />
);

const wudlanndvildexplorrIconBlog = ({focused}: {focused: boolean}) => (
  <WudlanndvildExplorrIcon
    focused={focused}
    source={require('./assets/imgs/wudlanndvildexplorrtab4.png')}
  />
);

const wudlanndvildexplorrIconQuiz = ({focused}: {focused: boolean}) => (
  <WudlanndvildExplorrIcon
    focused={focused}
    source={require('./assets/imgs/wudlanndvildexplorrtab5.png')}
  />
);

const wudlanndvildexplorrButton = (props: Record<string, unknown>) => (
  <WudlanndvildExplorrAnimatedButton {...props} />
);

const WudlanndvildExplorrtab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.wudlanndvildexplorrBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: wudlanndvildexplorrButton,
        tabBarBackground: wudlanndvildexplorrBarBackground,
      }}>
      <Tab.Screen
        name="WudlanndvildExplorrmain"
        component={WudlanndvildExplorrmain}
        options={{
          tabBarIcon: wudlanndvildexplorrIconPlaces,
        }}
      />
      <Tab.Screen
        name="WudlanndvildExplorrraranmls"
        component={WudlanndvildExplorrraranmls}
        options={{
          tabBarIcon: wudlanndvildexplorrIconSaved,
        }}
      />
      <Tab.Screen
        name="WudlanndvildExplorrmap"
        component={WudlanndvildExplorrmap}
        options={{
          tabBarIcon: wudlanndvildexplorrIconMap,
        }}
      />
      <Tab.Screen
        name="WudlanndvildExplorrfacts"
        component={WudlanndvildExplorrfacts}
        options={{
          tabBarIcon: wudlanndvildexplorrIconBlog,
        }}
      />
      <Tab.Screen
        name="WudlanndvildExplorrminig"
        component={WudlanndvildExplorrminigmenu}
        options={{
          tabBarIcon: wudlanndvildexplorrIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  wudlanndvildexplorrIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
  },
  wudlanndvildexplorrIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  wudlanndvildexplorrIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wudlanndvildexplorrIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF1A',
  },

  wudlanndvildexplorrBar: {
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

  wudlanndvildexplorrButton: {
    flex: 1,
  },
  wudlanndvildexplorrButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wudlanndvildexplorrLabel: {
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  wudlanndvildexplorrLabelIdle: {
    color: '#FFFFFF59',
  },
});

export default WudlanndvildExplorrtab;
