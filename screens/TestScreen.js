import React from 'react';
import {
  View,
  Text
} from 'react-native';

class TestScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>{this.props.route.params.title || 'Title'}</Text>
      </View>
    )
  }
}

export default TestScreen;