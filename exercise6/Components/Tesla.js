import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default Tesla = ({props}) => {
  const [jumlah4, rubahJumlah4] = useState(0);
  const styles = StyleSheet.create({
    container: {
      margin: 5,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      color: 'black',
      fontWeight: 'bold',
    },
    text2: {
      color: 'black',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Hy, saya {props.pemilik} suka mobil berwarna {props.warna}
      </Text>
      <Button title="tambah" onPress={() => rubahJumlah4(jumlah4 + 1)} />
      <Text style={styles.text2}>Jumlah mobil yang ada : {jumlah4}</Text>
      <Button title="kurang" onPress={() => rubahJumlah4(jumlah4 - 1)} />
    </View>
  );
};