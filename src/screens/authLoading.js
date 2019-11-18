import React, { Component } from 'react';
import { View,Text, StyleSheet, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native';

class authLoading extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();       
    }

    _bootstrapAsync = async () => {
        const rol = 2
        //await AsyncStorage.getItem('userToken');
        if (rol === 1) {
          this.props.navigation.navigate('App');
        }
        else if (rol === 2){
          this.props.navigation.navigate('AppUsuario');
        }
        else{
          this.props.navigation.navigate('Auth');
        }
        
        
      };
    render() {
        return (
            <View style={styles.container}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
          </View>
        );
    }
}

export default authLoading;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
})