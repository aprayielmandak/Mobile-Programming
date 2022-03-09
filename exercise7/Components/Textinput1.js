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
      />
      <TouchableOpacity style={styles.login} onPress={ResetForm}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
