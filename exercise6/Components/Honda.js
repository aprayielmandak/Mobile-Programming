import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default Honda = ({props}) => {
  const [jumlah2, rubahJumlah2] = useState(0);
  const styles = StyleSheet.create({
    container: {
      margin: 5,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      color: 'midnightblue',
      fontWeight: 'bold',
    },
    text2: {
      color: 'midnightblue',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Hy, saya {props.pemilik} suka mobil berwarna {props.warna}
      </Text>
      <Button title="tambah" onPress={() => rubahJumlah2(jumlah2 + 1)} />
      <Text style={styles.text2}>Jumlah mobil yang ada : {jumlah2}</Text>
      <Button title="kurang" onPress={() => rubahJumlah2(jumlah2 - 1)} />
    </View>
  );
};
