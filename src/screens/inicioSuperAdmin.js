import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

class inicioSuperAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity >
                    <Text>presionar</Text>
                </TouchableOpacity>
            )
        };
    };

    home2 =  () => {
        this.props.navigation.navigate('home2');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="home2!" onPress={this.home2} />
            </View>
        );
    }
}

export default inicioSuperAdmin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})