import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const InputData = () => {
  const [username, onChangeusername] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [pass, onChangepass] = React.useState('');

  const ResetForm = () => {
    onChangeusername('');
    onChangeEmail('');
    onChangepass('');
    console.log(`username: ${username}, email: ${Email}, password: ${pass}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeusername}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={Email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangepass}
        value={pass}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.login} onPress={ResetForm}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEDDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
    marginTop: 30,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    width: '80%',
    backgroundColor: '#E3B7A0',
  },
  login: {
    width: '50%',
    height: 50,
    backgroundColor: '#BF9270',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
});

export default InputData;