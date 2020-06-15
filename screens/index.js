import React from 'react';
import {
  Button, View
} from 'react-native';
import TestScreen from './TestScreen';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator()

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
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
              <AuthStack.Screen name="Main Stack" component={props => <TestScreen title='Logged In' />}/>
            ) : (
              <AuthStack.Screen name="Sign In Stack" component={props => <TestScreen title='Logged Out' />}/>
            )
          }
        </AuthStack.Navigator>
      </View>
    )
  }
}

export default AppContainer;