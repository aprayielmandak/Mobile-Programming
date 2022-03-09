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