import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default Suzuki = ({props}) => {
  const [jumlah3, rubahJumlah3] = useState(0);
  const styles = StyleSheet.create({
    container: {
      margin: 5,
      backgroundColor: 'peachpuff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      color: 'palevioletred',
      fontWeight: 'bold',
    },
    text2: {
      color: 'palevioletred',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Hy, saya {props.pemilik} suka mobil berwarna {props.warna}
      </Text>
      <Button title="tambah" onPress={() => rubahJumlah3(jumlah3 + 1)} />
      <Text style={styles.text2}>Jumlah mobil yang ada : {jumlah3}</Text>
      <Button title="kurang" onPress={() => rubahJumlah3(jumlah3 - 1)} />
    </View>
  );
};