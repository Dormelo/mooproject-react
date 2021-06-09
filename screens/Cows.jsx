import React, { useState } from 'react';
import MyTouchableOpacity from '../components/MyTouchableOpacity'
import { StyleSheet, View } from 'react-native';

const Cows = ({ navigation }) => {
  const cows = [
    {
      name: 'Marie',
      image: require('../assets/vaches/1.jpg'),
      statusLactation: 'En lactation',
    },
    {
      name: 'Enfer',
      image: require('../assets/vaches/2.jpg'),
      statusLactation: 'Lait aux veaux',
    },
    {
      name: 'Eloise',
      image: require('../assets/vaches/3.jpg'),
      statusLactation: 'En lactation',
    },
    {
      name: 'Huberte',
      image: require('../assets/vaches/4.jpg'),
      statusLactation: 'En lactation',
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {cows.map((cow) => (
          <MyTouchableOpacity
            customClick={() => navigation.navigate('Cow', { name: cow.name })}
            cow={cow}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
});

export default Cows
