/* Item Table */

import React, {Component} from 'react';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import {StyleSheet, ScrollView, View, Dimensions} from 'react-native';
import AddButton from './AddButton';

// var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

class ItemTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Item', 'Location'],
            widthArr: [screenWidth * 0.45, screenWidth * 0.45],
            entries: [
                {item: 'Phone', location: 'Kitchen Sink'},
                {item: 'Keys', location: 'Fridge'},
                {item: 'Wallet', location: 'Dishwasher'},
            ],
            rows: [],
            newEntry: '',
        };
    }

    addEntry = () => {
        const entry = [this.props.item, this.props.location];
        if (this.props.item !== '' && this.props.item !== '') {
            this.setState({
                rows: [...this.state.rows, entry],
            });
        }
        this.props.clearFieldFunc();
    };

    render() {
        const state = this.state;
        return (
            <View>
                <AddButton onPress={this.addEntry} />
                <ScrollView horizontal={true}>
                    <View style={styles.tableContainer}>
                        <Table borderStyle={{borderColor: '#C1C0B9'}}>
                            <Row
                                data={state.tableHead}
                                widthArr={state.widthArr}
                                style={styles.head}
                                textStyle={styles.text}
                            />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                            <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                {this.state.rows.map((dataRow, index) => (
                                    <Row
                                        key={index}
                                        data={dataRow}
                                        widthArr={state.widthArr}
                                        style={[
                                            styles.row,
                                            index % 2 && {
                                                backgroundColor: '#ffffff',
                                            },
                                        ]}
                                        textStyle={styles.text}
                                    />
                                ))}
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {margin: 1, alignContent: 'center'},
    text: {margin: 1},
    tableContainer: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
        alignContent: 'center',
    },
});

export default ItemTable;
