import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class filtrarCursos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data5Primeros: [],
            datosFiltrados: []
        };
    }


    componentWillMount() {
        const { navigation } = this.props
        this.setState({ data: navigation.getParam('cursos', []), datosFiltrados: navigation.getParam('cursos', []).slice(0, 5) })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                backgroundColor: '#ff5a06',
                elevation: 0,
            },

        };
    };

    filtrar = (texto) => {
        const { navigation } = this.props
        if (texto === '') {
            this.setState({ datosFiltrados: navigation.getParam('cursos', []).slice(0, 5) })
        } else {
            let filtradosData = this.state.data.filter(function (item) {
                return item.title.toUpperCase().includes(texto.toUpperCase());
            });
            this.setState({ datosFiltrados: filtradosData })
        }
    }


    datos(item, index) {

        return (
            <TouchableOpacity style={styles.view4}  onPress={()=> this.props.navigation.navigate('temarioCurso')}>
                <View style={{ width: '15%', backgroundColor: '#ff59063d', paddingVertical: 10, borderRadius: 30, borderColor: '#ff5a06', borderWidth: 1 }}>
                    <Icon name='coffee' type='font-awesome' color='white' />
                </View>
                <View style={{ width: '70%', marginLeft: 15 }}>
                    <Text numberOfLines={2}>{item.title}</Text>
                </View>

                <View style={{ width: '15%' }}>
                    <Icon name='chevron-right' type='evilicon' color='#ff5a06' />
                </View>

            </TouchableOpacity>

        )
    }

    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.view1}>
                    <View style={styles.view2}>
                        <View style={{ width: '12%' }}>
                            <Icon name='search' type='font-awesome' size={16} color='#ff5a06' />
                        </View>
                        <View style={{ width: '68%' }}>
                            <TextInput placeholder='¿Que quieres estudiar hoy?' onChangeText={(textoBuscar) => { this.filtrar(textoBuscar) }} />
                        </View>
                    </View>
                </View>

                <View style={styles.view3}>
                    <FlatList
                        data={this.state.datosFiltrados}
                        renderItem={({ item, index }) => this.datos(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state}
                    />
                </View>

            </View>
        );
    }
}

export default filtrarCursos;

const styles = StyleSheet.create({
    view1: {
        backgroundColor: '#ff5a06',
        height: 63
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginHorizontal: 15,
        backgroundColor: 'white',
        height: 50,
        borderRadius: 4
    },
    // view3:{
    //     paddingLeft: 20,
    //     paddingRight:30
    // },
    view4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(209, 201, 201, 0.377)',
        height: 80
    },
})