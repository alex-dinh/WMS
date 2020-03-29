/* Item Table */

import React, {Component} from 'react';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import {StyleSheet, ScrollView, View, Dimensions} from 'react-native';

// var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

class ItemTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Item', 'Location'],
            widthArr: [screenWidth * 0.45, screenWidth * 0.45],
        };
    }

    render() {
        const state = this.state;
        const data = [];
        for (let i = 0; i < 10; i += 1) {
            const dataRow = [];
            for (let j = 0; j < this.state.widthArr.length; j += 1) {
                dataRow.push(`${i}${j}`);
            }
            data.push(dataRow);
        }

        return (
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
                            {data.map((dataRow, index) => (
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
        );
    }
}

const styles = StyleSheet.create({
    row: {margin: 1, alignContent: 'center',},
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
