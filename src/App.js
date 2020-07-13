import React from 'react';
import { View, Text, Image, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Shelf from './common/Shelf';

function App() {
  return (
    <AppNavigation />
  );
}


export default App;

const Stack = createStackNavigator()
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="first" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const HomeScreen = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
    }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('first')}
      />
    </View>
  )
}

const OtherScreen = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ab9f72',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          height: height * 0.2,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          resizeMode={'contain'}
          source={require('./assets/symbol.png')}
          style={{
            width: width * 0.5,
            height: height * 0.2,
          }}
        />
      </View>
      <View>
        <Text>Featured Items: </Text>
        <Shelf />
        <Text
          style={{
            color: '#526d44',
            fontSize: 18,
            fontWeight: '700',
          }}
        >Welcome to Greenery!</Text>
      </View>
    </View>
  );
}