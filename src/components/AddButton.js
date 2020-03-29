import React from 'react';
import {StyleSheet, Button, Alert} from 'react-native';

function addEntry() {
    return Alert.alert('Simple Button pressed');
}

const AddButton: () => React$Node = () => {
    return <Button title="Add Item" onPress={() => Alert.alert('Simple Button pressed')} />;
};

const styles = StyleSheet.create({
    button: {width: 75, height: 35, textAlign: 'center'},
});

export default AddButton;
