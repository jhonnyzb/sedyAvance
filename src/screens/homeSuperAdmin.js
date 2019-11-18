import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity    } from 'react-native';

class homeSuperAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
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
    render() {
        return (
            <View  style={styles.container}>
                 <Text>home1</Text>
            </View>
        );
    }
}

export default homeSuperAdmin;

const styles = StyleSheet.create({
     container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})