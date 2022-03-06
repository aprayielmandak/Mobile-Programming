import React, {useState} from 'react';
import {View} from 'react-native';
import Toyota from './Components/Toyota';
import Honda from './Components/Honda';

export default App = () => {
  const [state, setState] = useState({
    Toyota: {
      pemilik: 'Aprayiel',
      warna: 'gray',
      alamat: 'Bitung',
    },
    Honda: {
      pemilik: 'Ferren',
      warna: 'biru',
      alamat: 'Bitung',
    },
  });

  return (
    <View>
      <Toyota props={state.Toyota} />
      <Honda props={state.Honda} />
    </View>
  );
};
