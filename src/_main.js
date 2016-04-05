'use strict';

var Page_SideMenu = require('./side_menu.js').Page_SideMenu;
var Page_Intro = require('./intro.js').Page_Intro;
var Page_CPU_Test = require('./cpu_test.js').Page_CPU_Test;
var Page_Visual_Smoothness = require('./visual_smoothness.js').Page_Visual_Smoothness;
var Page_Network_Overhead = require('./networking_overhead.js').Page_Network_Overhead;
var NavigationBar = require('react-native-navbar');

import React, {
    Alert,
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Showcase_ReactNative extends React.Component {
    constructor(props) {
        super(props);
        
        var leftButtonConfig = {
            title: 'Menu',
            handler: () => this.showMenu(this)
        };

        var titleConfig = {
            title: 'Showcase - React-Native',
        };

        this.state = {
            menuIndex: 1, //Intro Page
            leftButtonConfig: leftButtonConfig,
            titleConfig: titleConfig
        };
    }
    
    showMenu(component) {
        component.setState({
            menuIndex: 0
        });
    }

    menuIndexChange(index) {
        this.setState({
            menuIndex: index
        });
    }
    
    renderSideMenuPage() {
        var sideMenuTitleConfig = {
            title: 'Menu - Demos'
        };
        
        return (
            <View style={styles.body}>
                <NavigationBar
                    title={sideMenuTitleConfig}/>
                <Page_SideMenu  menuIndexChange={this.menuIndexChange.bind(this)}/>
            </View>
        );
    }

    renderIntroPage() {
        return (
            <View style={styles.body}>
                <NavigationBar
                    title={this.state.titleConfig}
                    leftButton={this.state.leftButtonConfig} />
                <Page_Intro />
            </View>
        );
    }
    
    renderCPUTestPage() {
        return (
            <View style={styles.body}>
                <NavigationBar
                    title={this.state.titleConfig}
                    leftButton={this.state.leftButtonConfig} />
                <Page_CPU_Test />
            </View>
        );
    }
    
    renderVisualSmoothnessPage() {
        return (
            <View style={styles.body}>
                <NavigationBar
                    title={this.state.titleConfig}
                    leftButton={this.state.leftButtonConfig} />
                <Page_Visual_Smoothness />
            </View>
        );
    }
    
    renderAnimationPage() {
        return (
            <View style={styles.body}>
                <NavigationBar
                    title={this.state.titleConfig}
                    leftButton={this.state.leftButtonConfig} />
                <Page_Animations />
            </View>
        );
    }
    
    renderNetworkOverheadPage() {
        return (
            <View style={styles.body}>
                <NavigationBar
                    title={this.state.titleConfig}
                    leftButton={this.state.leftButtonConfig} />
                <Page_Network_Overhead />
            </View>
        );
    }
    
    render() {
        if (this.state.menuIndex === 0) {
            return this.renderSideMenuPage();
        } else if (this.state.menuIndex === 1) {
            return this.renderIntroPage();
        } else if (this.state.menuIndex === 2) {
            return this.renderCPUTestPage();
        } else if (this.state.menuIndex === 3) {
            return this.renderVisualSmoothnessPage();
        } else if (this.state.menuIndex === 4) {
            return this.renderNetworkOverheadPage();
        } else {
            return this.renderIntroPage();
        }
    }
}
exports.Showcase_ReactNative = Showcase_ReactNative;

const styles = require('./styles/shared.js').styles;

