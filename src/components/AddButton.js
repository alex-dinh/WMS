import React, {Component} from 'react';
import {StyleSheet, Button, Alert} from 'react-native';

function addEntry() {
    return Alert.alert('Simple Button pressed');
}

class AddButton extends Component {
    render() {
        return (
            <Button
                title="Add Item"
                onPress={this.props.onPress}
                color="#708090"
            />
        );
    }
}

const styles = StyleSheet.create({
    button: {width: 75, height: 35, flex: 3, backgroundColor: 'steelblue'},
});

export default AddButton;
