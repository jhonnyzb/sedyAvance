import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import authLoading from './src/screens/authLoading'
import login from './src/screens/login'
import inicioSuperAdmin from './src/screens/inicioSuperAdmin'
import inicioUsuario from './src/screens/usuarios/inicioUsuario'
import homeSuperAdmin from './src/screens/homeSuperAdmin'
import home1SuperAdmin from './src/screens/home1SuperAdmin'
import homeUsuario from './src/screens/usuarios/homeUsuario'
import perfil from './src/screens/usuarios/perfil'
import filtrarCursos from './src/screens/usuarios/filtrarCursos'
import temarioCurso from './src/screens/usuarios/temarioCurso'



const stackSuperAdmin = createStackNavigator({
  home1: {
    screen: inicioSuperAdmin,
  },
  home2: {
    screen: homeSuperAdmin,
  },
  home3: {
    screen: home1SuperAdmin,
  },
})

const DiscoverStack = createStackNavigator({
  inicioUsuario: {
    screen: inicioUsuario,
  }
});


const MainTabs = createBottomTabNavigator({
  inicioUsuario: {
    screen: DiscoverStack,
    navigationOptions: {
      tabBarLabel: 'Cursos',
    },
  },
  homeUsuario: {
    screen: homeUsuario,
    navigationOptions: {
      tabBarLabel: 'home',
    },
  },
  perfil: {
    screen: perfil,
    navigationOptions: {
      tabBarLabel: 'Perfil',
    },
  },
});


const stackprincipalUsuario = createStackNavigator({
  Tabs: {
    screen: MainTabs,
    navigationOptions:{
      header: null
    }
  },
  filtrarCursos: {
    screen: filtrarCursos,
  },
  temarioCurso: {
    screen: temarioCurso
  }
},
);




const App = createSwitchNavigator({
  AuthLoading: {
    screen: authLoading,
  },
  Auth: {
    screen: login,
  },
  App: {
    screen: stackSuperAdmin,
  },
  AppUsuario: {
    screen: stackprincipalUsuario,
  }
});

export default createAppContainer(App);


