import {
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

const thewlddsexpllorerhtmlloader = `<!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            overflow: hidden;
          }

          body {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .sun {
            position: relative;
            animation: rotate 4s linear infinite;
            --color: yellow;
            --scale: 0.4;
          }

          .center {
            height: calc(var(--scale) * 10em);
            width: calc(var(--scale) * 10em);
            background-color: var(--color);
            border-radius: 50%;
            box-shadow: 0 0 calc(var(--scale) * 3em) var(--color);
          }

          .ray {
            position: absolute;
            height: calc(var(--scale) * 3em);
            width: calc(var(--scale) * 0.5em);
            box-shadow: 0 0 calc(var(--scale) * 1em) var(--color);
            background-color: var(--color);
          }

          .r-1 {
            margin-left: calc(var(--scale) * 4.75em);
            margin-top: calc(var(--scale) * 1em);
          }

          .r-2 {
            margin-left: calc(var(--scale) * 12.25em);
            margin-top: calc(var(--scale) * -6.25em);
            transform: rotate(90deg);
          }

          .r-3 {
            margin-left: calc(var(--scale) * 4.75em);
            margin-top: calc(var(--scale) * -14em);
          }

          .r-4 {
            margin-left: calc(var(--scale) * -2.75em);
            margin-top: calc(var(--scale) * -6.25em);
            transform: rotate(90deg);
          }

          .r-5 {
            margin-left: calc(var(--scale) * -0.5em);
            margin-top: calc(var(--scale) * -1em);
            transform: rotate(45deg);
          }

          .r-6 {
            margin-left: calc(var(--scale) * 9.75em);
            margin-top: calc(var(--scale) * -1em);
            transform: rotate(-45deg);
          }

          .r-7 {
            margin-left: calc(var(--scale) * 10.25em);
            margin-top: calc(var(--scale) * -11.75em);
            transform: rotate(45deg);
          }

          .r-8 {
            margin-left: calc(var(--scale) * -0.5em);
            margin-top: calc(var(--scale) * -11.75em);
            transform: rotate(-45deg);
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
              --color: yellow;
            }

            100% {
              transform: rotate(360deg);
              --color: orange;
            }
          }
        </style>
      </head>

      <body>
        <div class="sun">
          <div class="center"></div>
          <div class="ray r-1"></div>
          <div class="ray r-2"></div>
          <div class="ray r-3"></div>
          <div class="ray r-4"></div>
          <div class="ray r-5"></div>
          <div class="ray r-6"></div>
          <div class="ray r-7"></div>
          <div class="ray r-8"></div>
        </div>
      </body>
    </html>`;

const Thewlddsexpllorerloade = () => {
  const thewlddsexpllorerNavigation = useNavigation();

  useEffect(() => {
    const thewlddsexpllorerTimer = setTimeout(() => {
      thewlddsexpllorerNavigation.navigate('Thewlddsexplloreronbr' as never);
    }, 6000);

    return () => {
      clearTimeout(thewlddsexpllorerTimer);
    };
  }, [thewlddsexpllorerNavigation]);

  return (
    <ImageBackground
      source={
        Platform.OS === 'ios'
          ? require('../../assets/imgs/wodllandwldexploloade.png')
          : require('../../assets/imgs/wodllandwlprivbgand.png')
      }
      style={styles.thewlddsexpllorerimageBg}>
      <ScrollView
        contentContainerStyle={styles.thewlddsexpllorerscrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.thewlddsexpllorerbottomWrap}>
          <WebView
            source={{html: thewlddsexpllorerhtmlloader}}
            scrollEnabled={false}
            originWhitelist={['*']}
            style={{width: 260, height: 150, backgroundColor: 'transparent'}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Thewlddsexpllorerloade;

const styles = StyleSheet.create({
  thewlddsexpllorerimageBg: {
    flex: 1,
  },
  thewlddsexpllorerscrollContent: {
    flexGrow: 1,
  },

  thewlddsexpllorerbottomWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    flex: 1,
  },
});
