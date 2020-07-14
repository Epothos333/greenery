import React from 'react';
import { View, Button, Text } from 'react-native';


function Login({ navigation }) {
  return (
    <View style={{
      flex: 1,
    }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


export default Login;
