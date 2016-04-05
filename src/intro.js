'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions
} from 'react-native';

class Page_Intro extends Component {
    render() {
        var dimensions = Dimensions.get('window');
        var renderStyle = StyleSheet.create({
            imageDimensions: {
                width: dimensions.width,
                height: 100,
                resizeMode:'contain',
                flex: 1,
                justifyContent: 'flex-end'
            }
        });
        return (
            <View style={styles.page}>
                <Text style={styles.headerTitle}>
                    Welcome to React-Native Showcase!
                </Text>
                <Text style={styles.subTitle}>
                    This is a simple application to showcase certain tests or demos to be compared.
                </Text>
                <Text style={styles.subTitle}>
                    The idea is to visualize and quantify any possible differences with different mobile development frameworks.
                </Text>
                <Text style={styles.headerTitle}>
                    Use the Side-Menu located at the top left corner to browse the demos.
                </Text>
                <Image style={styles.footer,renderStyle.imageDimensions}
                    source={require('./images/logo-entelect.png')}                    
                />
            </View>
        );
    }
}
exports.Page_Intro = Page_Intro;

const styles = require('./styles/shared.js').styles;


