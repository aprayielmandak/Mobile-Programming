import React from 'react';
import {View, TextInput, Button} from 'react-native';

const UselessTextInput = props => {
  return <TextInput {...props} editable maxLength={null} />;
};

const UselessTextInputMultiline = () => {
  const handleClick = () => {
    onChangeText('');
    console.log(value);
  };

  const [value, onChangeText] = React.useState(null);
 
  return (
    <View
      style={{
        marginTop: 0,
        alignItems: 'center',
        backgroundColor: '#FFEDDB',
        borderBottomColor: '#000000',
        // borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        placeholder="Please write your Username, Email, and Password"
        value={value}
        style={{padding: 100}}
      />
      <Button color={'#BF9270'} title="LOGIN" onPress={handleClick} />
    </View>
  );
};

export default UselessTextInputMultiline;