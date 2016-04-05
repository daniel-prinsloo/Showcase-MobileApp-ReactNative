'use strict';

var Button = require('react-native-button');
var TimerMixin = require('react-timer-mixin');

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

class Page_Visual_Smoothness extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            visualSmoothnessRunning: false,
            counter: 0,
            visualElements: [],
            visualElementSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
    }

    visualTestLoop() {
        if (this.state.visualSmoothnessRunning) {
            this.setTimeout(() => {
                var tempElements = [];
                tempElements = this.state.visualElements.slice();
                tempElements.unshift({id:this.state.counter});
                
                this.setState({
                    visualElementSource: this.state.visualElementSource.cloneWithRows(tempElements),
                    visualElements: tempElements,
                    counter: this.state.counter + 1, 
                });
                this.visualTestLoop();
            }, 1);
        } else {
            this.setState({
                visualElements: []
            });
        }
    }

    startVisualTest() {
        this.setState({
            visualSmoothnessRunning: true,
            counter: 0,
        });
        this.setTimeout(() => {
            this.visualTestLoop();
        }, 1);
    }

    stopVisualTest() {
        this.setState({
            visualSmoothnessRunning: false,
        });
    }
    
    renderRow(rowData){
        var dimensions = Dimensions.get('window');
        var renderStyle = StyleSheet.create({
            listViewItem: {
                width: dimensions.width,
                height: 10,
                backgroundColor: backgroundColorList[rowData.id % backgroundColorList.length]
            },
            listViewText: {
                color: backgroundColorList[rowData.id % backgroundColorList.length]
            }
        });
        return (
        <View style={renderStyle.listViewItem}>
            <Text style={renderStyle.listViewText}>
                {String(rowData.id)}{rowData.backgroundColor}
            </Text>
        </View>
        )
    }
    
    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.headerTitle}>
                    Visual Elements Creation Smoothness
                </Text>
                {!this.state.visualSmoothnessRunning ? <Button
                    style={styles.button}
                    onPress={() => this.startVisualTest() }
                    >
                    Start Visual Smoothness Test
                </Button>
                    :
                <Button
                    style={styles.buttonCancel}
                    onPress={() => this.stopVisualTest() }
                    >
                    Stop Test
                </Button>}
                <Text style={styles.subTitle}>
                    Visual Elements: {String(this.state.counter)}
                </Text>
                <ListView
                    dataSource={this.state.visualElementSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}
//(rowData) => <Text style={{backgroundColor:rowData.backgroundColor}}>.....</Text>
Object.assign(Page_Visual_Smoothness.prototype, TimerMixin);
exports.Page_Visual_Smoothness = Page_Visual_Smoothness;

const styles = require('./styles/shared.js').styles;
const backgroundColorList = require('./styles/shared.js').backgroundColorList;
