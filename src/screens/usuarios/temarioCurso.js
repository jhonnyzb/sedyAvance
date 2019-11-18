import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar, } from '@valdio/react-native-scrollable-tabview'
import { Icon } from 'react-native-elements';

class temarioCurso extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                backgroundColor: '#ff5a06',
                elevation: 0,
            },

        };
    };

    componentWillMount() {
        const { navigation } = this.props
        this.setState({ data: navigation.getParam('curso', []) })
    }

    Temario(item, index) {
        if (item.completed === false) {
            return (
                <View style={{height: 30, backgroundColor:'#EDEBEB', justifyContent: 'center', paddingHorizontal: 15}}>
                    <Text>{item.title}</Text>
                </View>
            )

        } else {
            return (
                <TouchableOpacity>
                    <View>
                        <Text>temario</Text>
                    </View>

                </TouchableOpacity>

            )
        }

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.view1}>
                    <View style={{ width: '15%', backgroundColor: '#ffceb5', paddingVertical: 10, borderRadius: 30, borderColor: 'white', borderWidth: 1 }}>
                        <Icon name='coffee' type='font-awesome' color='#ff5a06' />
                    </View>
                    <View style={{ width: '85%', marginLeft: 20 }} >
                        <Text style={{ color: 'white' }}>Curso Programacion</Text>
                    </View>
                </View>
                <ScrollableTabView
                    tabBarActiveTextColor='white'
                    tabBarInactiveTextColor='#D1D1D1'
                    tabBarTextStyle={{ fontSize: 14 }}
                    tabBarBackgroundColor='#ff5a06'
                    tabBarUnderlineStyle={{ backgroundColor: 'white', borderRadius: 10 }}
                    renderTabBar={() => <DefaultTabBar />}
                    ref={(tabView) => { this.tabView = tabView; }}
                >

                    <View tabLabel='Temario'>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item, index }) => this.Temario(item, index)}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={this.state}
                        />

                    </View>
                    <View tabLabel='Descripcion'>
                        <Text>My</Text>
                    </View>

                </ScrollableTabView>
            </View>
        );
    }
}

export default temarioCurso;

const styles = StyleSheet.create({
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#ff5a06',
        paddingVertical: 5
    }
})