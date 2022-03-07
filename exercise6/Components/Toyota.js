import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default Toyota = ({props}) => {
  const [jumlah5, rubahJumlah5] = useState(0);
  const styles = StyleSheet.create({
    container: {
      margin :5,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      color: 'lightpink',
      fontWeight: 'bold',
    },
    text2: {
      color: 'lightpink',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Hy, saya {props.pemilik} suka mobil berwarna {props.warna}
      </Text>
      <Button title="tambah" onPress={() => rubahJumlah5(jumlah5 + 1)} />
      <Text style={styles.text2}>Jumlah mobil yang ada : {jumlah5}</Text>
      <Button title="kurang" onPress={() => rubahJumlah5(jumlah5 - 1)} />
    </View>
  );
};
