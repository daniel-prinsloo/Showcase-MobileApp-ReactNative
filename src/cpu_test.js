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

class Page_CPU_Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            primes: '10000',
            startTime: undefined,
            duration: undefined,
            calculating: false,
        };
    }
    
    setPrimeAmount(primes) {
        this.setState({
            primes: primes
        });
    }

    isPrime(n) {
        //check if n is a multiple of 2
        if (n % 2 === 0) return false;
        //if not, then just check the odds
        for (var i = 3; i * i <= n; i += 2) {
            if (n % i === 0)
                return false;
        }
        return true;
    }

    calculatePrimes(primes) {
        var primeCount = 0;
        var counter = 1;
        this.setState({
            startTime: new Date(),
            duration: undefined,
            calculating: true
        });
        this.forceUpdate();
        while (primeCount < primes) {
            if (this.isPrime(counter)) {
                primeCount++;
            }
            counter++;
        }
        var endTime = new Date();
        this.setState({
            duration: (endTime - this.state.startTime) / 1000,
            calculating: false
        });
        this.forceUpdate();
    }
    
    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.headerTitle}>
                    CPU Test
                </Text>
                <Text style={styles.subTitle}>
                   Calculates the first amount of prime numbers in input field.
                </Text>
                <React.TextInput style={styles.subTitle} onChangeText={(text) => this.setPrimeAmount(text) } value={this.state.primes}/>
                {!this.state.calculating ? <Button
                    style={styles.subTitle}
                    onPress={() => this.calculatePrimes(Number(this.state.primes)) }
                    >
                    Calculate
                </Button> : <Text style={styles.subTitle}> Calculating... </Text>}
                {this.state.duration ? <Text style={styles.subTitle}>
                    Calculation time: {this.state.duration} second(s)
                </Text> : <Text></Text>}
            </View>
        );
    }
}
exports.Page_CPU_Test = Page_CPU_Test;

const styles = require('./styles/shared.js').styles;


