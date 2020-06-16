import React from 'react';
import {
  Button, View
} from 'react-native';
import TestScreen from './TestScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

class LinkToChallenge extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title='Go to challenge page' onPress={() => this.props.navigation.navigate('Drawers', {
          screen: 'Tabs',
          params: {
            screen: 'Challenges',
            params: {
              screen: 'Challenge'
            }
          }
        })} />
      </View>
    )
  }
}

const RandomPages = createStackNavigator();
class RandomContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RandomPages.Navigator>
          <RandomPages.Screen name='Admin' component={LinkToChallenge} initialParams={{ title: 'Admin' }} />
          <RandomPages.Screen name='Profile' component={TestScreen} initialParams={{ title: 'Profile' }} />
        </RandomPages.Navigator>
      </View>
    )
  }
}

const ChallengeThings = createStackNavigator();
class ChallengeContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ChallengeThings.Navigator>
          <ChallengeThings.Screen name='Challenge' component={TestScreen} initialParams={{ title: 'Challenge' }} />
          <ChallengeThings.Screen name='ChallengesList' component={TestScreen} initialParams={{ title: 'ChallengesList' }} />
        </ChallengeThings.Navigator>
      </View>
    )
  }
}

const Tabs = createBottomTabNavigator();
class TabsContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs.Navigator>
          <Tabs.Screen name='Challenges' component={ChallengeContainer} />
          <Tabs.Screen name='Ideas' component={TestScreen} initialParams={{ title: 'Ideas' }} />
        </Tabs.Navigator>
      </View>
    )
  }
}

const Drawer = createDrawerNavigator();
class DrawerContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Drawer.Navigator>
          <Drawer.Screen name='Tabs' component={TabsContainer} />
          <Drawer.Screen name='Random' component={RandomContainer} />
        </Drawer.Navigator>
      </View>
    )
  }
}

const Main = createStackNavigator();
class MainContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Main.Navigator>
          <Main.Screen name='Drawers' component={DrawerContainer} />
          <Main.Screen name='Idea' component={TestScreen} initialParams={{ title: 'Idea' }} />
        </Main.Navigator>
      </View>
    )
  }
}

const AuthStack = createStackNavigator();
class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    }
  }

  setLoggedIn = () => this.setState(prevState => ({ loggedIn: !prevState.loggedIn }));

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{
          justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 20
        }}>
          <Button title={this.state.loggedIn ? 'Log out' : 'Log in'} onPress={() => this.setLoggedIn()} />
        </View>
        <AuthStack.Navigator>
          {this.state.loggedIn
            ? (
              <AuthStack.Screen name="MainStack" component={MainContainer} />
            ) : (
              <AuthStack.Screen name="SignIn" component={TestScreen} initialParams={{ title: 'Sign In' }} />
            )
          }
        </AuthStack.Navigator>
      </View>
    )
  }
}

export default AppContainer;