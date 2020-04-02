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

// const Home: () => React$Node = () => {
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            location: '',
        };
    }

    handleItemChange(text) {
        this.setState({
            item: text,
        });
    }

    handleLocChange(text) {
        this.setState({
            location: text,
        });
    }

    clearFields = () => {
        this.setState({
            item: '',
            location: '',
        });
    };

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text style={styles.title}>Where's My Stuff</Text>
                    <View style={styles.entryBoxWrapper}>
                        <TextInput
                            style={styles.entryBox}
                            placeholder="Item"
                            onChangeText={text => this.handleItemChange(text)}
                            value={this.state.item}
                        />
                        <TextInput
                            style={styles.entryBox}
                            placeholder="Location"
                            onChangeText={text => this.handleLocChange(text)}
                            value={this.state.location}
                        />
                    </View>
                    <ItemTable
                        item={this.state.item}
                        location={this.state.location}
                        clearFieldFunc={this.clearFields}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    entryBox: {
        fontSize: 16,
        margin: 5,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
    },
    entryBoxWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default Home;
