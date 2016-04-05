'use strict';

import React, {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1
    },page:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#212121',
    },headerTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        marginTop: 10
    },subTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 10
    },contentFont: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },sideMenuButton: {
        color: 'white',
        height: 50,
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        paddingLeft: 5,
        paddingRight: 5,
    }
    ,container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        paddingTop: 20,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonGroup: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    button: {
        color: 'blue',
        height: 40,
        marginRight: 5,
        marginLeft: 5,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 20
    },
    buttonCancel: {
        color: 'red',
        height: 40,
        fontSize: 20
    },
    visualTestListItem: {
        height: 10,
        backgroundColor: 'white',
    },
});

const backgroundColorList = [
    '#ff4000',
    '#ff8000',
    '#ffbf00',
    '#ffff00',
    '#bfff00',
    '#80ff00',
    '#40ff00',
    '#00ff00',
    '#00ff40',
    '#00ff80',
    '#00ffbf',
    '#00ffff',
    '#00bfff',
    '#0080ff',
    '#0066ff',
    '#0040ff',
    '#0000ff',
    '#4000ff',
    '#8000ff',
    '#bf00ff',
    '#ff00ff',
    '#ff00bf',
    '#ff0080',
    '#ff0040',
    '#ff0000'];

exports.styles = styles;
exports.backgroundColorList = backgroundColorList;