import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';

const Cows = ({ navigation }) => {
    const cows=[
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
              <TouchableOpacity
                key={cow.name}
                onPress={() => navigation.navigate('Cow',{name:cow.name}) }
                style={[
                  styles.button,
                ]}
              >
                <Image
                  source={cow.image}
                  style={styles.vacheImage}
                />
                <Text style={{ color: '#057c09', fontWeight: 'bold' }}>{cow.statusLactation}</Text>
                <Text
                  style={[
                    styles.buttonLabel,
                  ]}
                >
                  {cow.name}
                </Text>
              </TouchableOpacity>
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
      box: {
        width: 50,
        height: 50,
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
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

export default Cows
