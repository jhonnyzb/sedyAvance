import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>perfil</Text>
            </View>

        );
    }
}

export default perfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})