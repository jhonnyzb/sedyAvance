import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar, } from '@valdio/react-native-scrollable-tabview'
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade, Loader, Shine, ShineOverlay, } from 'rn-placeholder';
import { data } from '../../servicios/http'


class inicioUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isdata: false,
      isLoading: true
    };
  }


  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity style={{ marginHorizontal: 20 }} onPress={navigation.getParam("ir_filtros")} >
          <Icon name='search' type='font-awesome' color='white' size={20} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#ff5a06',
        elevation: 0,
      },

    };
  };


  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ ir_filtros: this.irFiltros });
    data().then(
      (res) => {
        this.setState({ data: res.data, isdata: true, isLoading: false })
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  irFiltros = () => {
    this.props.navigation.navigate("filtrarCursos", { cursos: this.state.data });
  };




  datos(item, index) {

    return (
      <TouchableOpacity style={styles.view2} onPress={() => this.props.navigation.navigate('temarioCurso', { curso: this.state.data })}>
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


  siNoDatos() {
    if (this.state.isdata) {
      return (
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => this.datos(item, index)}   //{this.cursos.bind(this)}
          keyExtractor={(item, index) => index.toString()}
          extraData={this.state}
        />
      )

    } else {
      return (
        <View>
          {[0, 1, 2, 3, 4, 5].map((_, index) => (
            <View key={index} style={{ justifyContent: 'center', paddingLeft: 20, paddingRight: 20, height: 80, borderBottomWidth: 1, borderBottomColor: 'rgba(209, 201, 201, 0.377)' }}>
              <Placeholder
                Left={PlaceholderMedia}
                Right={PlaceholderMedia}
                Animation={Shine}>
                <PlaceholderLine width={80} />
                <PlaceholderLine width={10} />

              </Placeholder>
            </View>
          ))}

        </View>

      )
    }
  }


  render() {
    const firstLayout = [
      {
        width: 60,
        height: 60,
        borderRadius: 30,
      },
      {
        width: 140,
        height: 30,
      },
    ];
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.view1}>
          <Text style={styles.texto1}>Explorar Cursos</Text>
        </View>
        <ScrollableTabView
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='#D1D1D1'
          tabBarTextStyle={{ fontSize: 14 }}
          tabBarBackgroundColor='#ff5a06'
          tabBarUnderlineStyle={{ backgroundColor: 'white' }}
          renderTabBar={() => <DefaultTabBar />}
          ref={(tabView) => { this.tabView = tabView; }}
        >

          <View tabLabel='Todos'>
            {this.siNoDatos()}

          </View>
          <View tabLabel='Destacados'>
            <Text>My</Text>
          </View>

        </ScrollableTabView>


      </View>


    );
  }
}

export default inicioUsuario;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    backgroundColor: '#ff5a06',
    height: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(209, 201, 201, 0.377)',
    height: 80
  },

  texto1: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  }
})