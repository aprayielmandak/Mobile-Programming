import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default Daihatsu = ({props}) => {
  const [jumlah1, rubahJumlah1] = useState(0);
  const styles = StyleSheet.create({
    container: {
      margin: 5,
      backgroundColor: 'navy',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      color: 'snow',
      fontWeight: 'bold',
    },
    text2: {
      color: 'snow',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Hy, saya {props.pemilik} suka mobil berwarna {props.warna}
      </Text>
      <Button title="tambah" onPress={() => rubahJumlah1(jumlah1 + 1)} />
      <Text style={styles.text2}>Jumlah mobil yang ada : {jumlah1}</Text>
      <Button title="kurang" onPress={() => rubahJumlah1(jumlah1 - 1)} />
    </View>
  );
};