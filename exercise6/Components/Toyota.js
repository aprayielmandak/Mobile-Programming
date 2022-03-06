import React, {useState} from 'react';
import {View} from 'react-native';
import Toyota from './Components/Toyota';

export default App = () => {
  const [state, setState] = useState({
   Toyota: {
      pemilik : 'Aprayiel',
      warna: 'gray',
      alamat : 'Bitung',
    },
  });

  return (
    <View>
      <Toyota props={state.Toyota} />
    </View>
  );
};
