'use strict';

var Button = require('react-native-button');

import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    ListView,
    Alert
} from 'react-native';

class Page_Network_Overhead extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            apiUrl: 'http://jsonplaceholder.typicode.com/posts',
            totalCalls: 10, //Hardcoded
            counter: 0,
            average: 0,
            networkCalls: [],
            timer: undefined,
            networkTestRunning: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
    }

    networkTestLoop() {
        if (this.state.counter < this.state.totalCalls && this.state.networkTestRunning) {
            this.setState({
                timer: Date.now()
            });
            //Alert.alert(String(this.state.timer));
            fetch(this.state.apiUrl)
            .then((response) => response.json())
            .then((responseData) => {
                var endTime = Date.now();
                var tempCalls = [];
                var tempCalls = this.state.networkCalls.slice();
                tempCalls.unshift({id:this.state.counter + 1, time: endTime - this.state.timer});
                var average = 0;
                for (var i=0; i < tempCalls.length; i++) {
                    average += tempCalls[i].time;
                }
                average = average / tempCalls.length;
                //Alert.alert(String(endTime - this.state.timer));
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(tempCalls),
                    networkCalls: tempCalls,
                    average: average,
                    counter: this.state.counter + 1,
                });
                if (this.state.counter >= this.state.totalCalls) {
                    this.setState({
                        networkTestRunning: false,
                    });
                } else {
                    this.networkTestLoop();
                }
            })
            .done();
        }
    }

    startNetworkOverheadTest() {
        this.setState({
            networkCalls: [],
            counter: 0,
            average: 0,
            networkTestRunning: true
        });
        this.networkTestLoop();
    }
    
    stopNetworkOverheadTest() {
        this.setState({
            networkTestRunning: false
        });
    }

    renderRow(rowData){
        var dimensions = Dimensions.get('window');
        var renderStyle = StyleSheet.create({
            listViewItem: {
                width: dimensions.width,
            },
            listViewText: {
                color: 'white'
            }
        });
        return (
        <View style={renderStyle.listViewItem}>
            <Text style={renderStyle.listViewText}>
                {String(rowData.id)} - duration:{String(Math.round(rowData.time/100)/10)} - average: {String(Math.round((this.state.average - rowData.time)/100)/10)}s  Compared to average
            </Text>
        </View>
        )
    }
    
    getTotalTime() {
        var total = 0;
        for (var i=0; i < this.state.networkCalls.length; i++) {
            total += this.state.networkCalls[i].time;
        }
        return Math.round(total/100)/10;
    }
    
    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.headerTitle}>
                    Visual Elements Creation Smoothness
                </Text>
                {!this.state.networkTestRunning ? <Button
                    style={styles.button}
                    onPress={() => this.startNetworkOverheadTest() }
                    >
                    Start Network Overhead Test
                </Button>
                    :
                <Button
                    style={styles.buttonCancel}
                    onPress={() => this.stopNetworkOverheadTest() }
                    >
                    Stop Network Overhead Test
                </Button>}
                <Text style={styles.subTitle}>
                    Total-time: {String(this.getTotalTime())}s Average: {String(Math.round(this.state.average/100)/10)}s
                </Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}
exports.Page_Network_Overhead = Page_Network_Overhead;

const styles = require('./styles/shared.js').styles;
