import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = props => {
  const [text, setText] = useState('');

  const handleText = textValue => {
    return setText(textValue);
  };

  const handleAddItem = () => {
    props.addItem(text);
    setText('');
  };

  console.log(props);
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={handleText}
      />
      <TouchableOpacity style={styles.btn} onPress={handleAddItem}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: 'dodgerblue',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
