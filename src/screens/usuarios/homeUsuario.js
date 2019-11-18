import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class homeUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>homeUsuario</Text>
            </View>

        );
    }
}

export default homeUsuario;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})