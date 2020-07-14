import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import Shelf from 'common/Shelf';
import symbol from 'assets/symbol.png';

const Home = () => {
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
          source={symbol}
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
};

export default Home;
