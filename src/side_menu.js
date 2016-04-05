'use strict';

var Button = require('react-native-button');

import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions
} from 'react-native';

class Page_SideMenu extends Component {
    render() {
        return (
            <View style={styles.page}>
                <Button
                    style={styles.sideMenuButton}
                    onPress={() => this.props.menuIndexChange(1) }
                    >
                    Intro
                </Button>
                <Button
                    style={styles.sideMenuButton}
                    onPress={() => this.props.menuIndexChange(2) }
                    >
                    CPU Test
                </Button>
                <Button
                    style={styles.sideMenuButton}
                    onPress={() => this.props.menuIndexChange(3) }
                    >
                    Visual Element Creation Smoothness
                </Button>
                <Button
                    style={styles.sideMenuButton}
                    onPress={() => this.props.menuIndexChange(4) }
                    >
                    Network Overhead Test
                </Button>
            </View>
        );
    }
}
exports.Page_SideMenu = Page_SideMenu;

const styles = require('./styles/shared.js').styles;


