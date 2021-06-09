import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MyTouchableOpacity = (props) => {
  return (
    <TouchableOpacity
      key={props.cow.name}
      onPress={props.customClick}
      style={[
        styles.button,
      ]}
    >
      <Image
        source={props.cow.image}
        style={styles.vacheImage}
      />
      <Text style={{ color: '#057c09', fontWeight: 'bold' }}>{props.cow.statusLactation}</Text>
      <Text
        style={[
          styles.buttonLabel,
        ]}
      >
        {props.cow.name}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: "white",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    backgroundColor: "green",
    color: "white",
    fontSize: 24,
  },
  vacheImage: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  }
});

export default MyTouchableOpacity
