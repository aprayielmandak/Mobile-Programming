import React, {useState} from 'react';
import {View} from 'react-native';
import Toyota from './Components/Toyota';
import Honda from './Components/Honda';
import Tesla from './Components/Tesla';
import Suzuki from './Components/Suzuki';
import Daihatsu from './Components/Daihatsu';

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
    Tesla: {
      pemilik : 'Isabella',
      warna: 'putih',
      alamat: 'Manado',
    },
    Suzuki: {
      pemilik: 'Miranda',
      warna: 'peach',
      alamat: 'Aermadidi',
    },
    Daihatsu: {
      pemilik: 'Susan',
      warna: 'putih',
      alamat: 'Bitung',
    },
  });

  return (
    <View>
      <Toyota props={state.Toyota} />
      <Honda props={state.Honda} />
      <Tesla props={state.Tesla} />
      <Suzuki props={state.Suzuki} />
      <Daihatsu props={state.Daihatsu} />
    </View>
  );
};
