import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppContainer from './screens';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <NavigationContainer linking={LinkConfig}>
      <AppContainer />
    </NavigationContainer>
  );
}

const LinkConfig = {
  config: {
    MainStack: {
      path: 'main',
      screens: {
        RandomPages: {
          path: 'RandomPages',
          path: 'others',
          screens: {
            Profile: 'profile',
            Admin: 'admin'
          }
        },
        Drawers: {
          path: 'drawers',
          screens: {
            Tabs: {
              path: 'tabs',
              screens: {
                Challenges: {
                  path: 'challenges',
                  screens: {
                    Challenge: 'challenge',
                    ChallengesList: 'list'
                  }
                },
                Ideas: 'ideas'
              }
            },
            Random: {
              path: 'random',
              screens: {
                Profile: 'profile',
                Admin: 'admin'
              }
            }
          }
        },
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
