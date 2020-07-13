import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import pot from '../assets/pot.jpg';

function Shelf() {

  const renderItems = ({ item, index }) => {
    return (
      <View
        style={{
          // minHeight: 100,
          borderWidth: 1,
          borderColor: 'green',
          margin: 5,
          flexDirection: 'column',
          width: 100,
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <Text>{item.name}</Text>
        <Image
          source={item.image}
          resizeMode={'contain'}
          style={{
            maxWidth: 80,
            maxHeight: 80,
            borderWidth: 1,
          borderColor: 'red',
          }}
        />
        <Text>{item.price}</Text>
      </View>
    );
  };

  const data = [{
    name: 'Sour Diesel',
    image: pot,
    price: 4.19,
  }, {
    name: 'Cowman',
    image: pot,
    price: 4.20,
  }, {
    name: 'Cowman',
    image: pot,
    price: 4.20,
  }, {
    name: 'Cowman',
    image: pot,
    price: 4.20,
  }, {
    name: 'Ding ',
    image: pot,
    price: 4.20,
  },
];

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        padding: 5,
        maxHeight: 150,
      }}
    >
      <FlatList
        horizontal
        renderItem={renderItems}
        data={data}
      />
    </View>
  );
}

export default Shelf;
