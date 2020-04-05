import React, {Component} from 'react';
import {StyleSheet, Alert, Image} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';

function addEntry() {
    return Alert.alert('Simple Button pressed');
}

class SettingsButton extends Component {
    render() {
        return (
            <Button
                icon="camera"
                onPress={this.props.onPress}
                mode="contained"
                style={styles.dots}>
                <Icon name="dots-three-vertical" size={16} color="#000" />
            </Button>
        );
    }
}

const styles = StyleSheet.create({
    dots: {width: 30, alignContent: 'center'},
});

export default SettingsButton;
