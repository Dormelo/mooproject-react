import React from 'react'
import { Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <Button
      title="Vaches"
      onPress={() =>
        navigation.navigate('Cows')
      }
    />
  );
};

export default Home
