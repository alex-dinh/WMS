/* Home Page */

import React, {Component} from 'react';
import {TextInput} from 'react-native';
import ItemTable from '../components/ItemTable';
import AddButton from '../components/AddButton';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

const Home: () => React$Node = () => {
    const [value, onChangeText] = React.useState('Item Entry');
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.title}>Where's My Stuff</Text>
                <TextInput
                    style={styles.entrybox}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
                <AddButton />
                <ItemTable />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    entrybox: {
        margin: 15,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
});

export default Home;
