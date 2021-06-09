import React from 'react'
import { Text, Button } from 'react-native';

const Cow = ({ navigation, route }) => {
    return (
      <Text>Je suis une vache et je m'appelle {route.params.name}</Text>
    );
  };

export default Cow