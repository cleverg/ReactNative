import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {
    Navigator
} from 'react-native-deprecated-custom-components';

import Menu from './app/componentes/Menu';
import SideMenu from 'react-native-side-menu';

import ComponenteInicio from './app/componentes/ComponenteInicio';

export default class Proyecto extends Component {

    constructor()
    {
        super();
        this.state = {
            isOpen: false,
            selectedItem: 'Home'
        };
    }

    toggle()
    {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    updateMenuState(isOpen)
    {
        this.setState({isOpen})
    }

    //al seleccionar un elemento del menú
    onMenuItemSelected = (el) => {
        //cerramos el menú
        this.setState({
            isOpen: false,
            selectedItem: el.item,
        });

        //navegamos al componente
        this.refs.navigator.push({
            component: el.component
        })
    }


    render()
    {

        const menu = <Menu
            navigator={navigator}
            onItemSelected={this.onMenuItemSelected}
        />

        return (
            <View style={{flex: 1}}>
              <SideMenu
                  menu={menu}
                  isOpen={this.state.isOpen}
                  onChange={(isOpen) => this.updateMenuState(isOpen)}
              >
                <Text
                    style={{padding: 10, backgroundColor: 'black', color: 'white', textAlign: 'center'}}
                >
                    {this.state.selectedItem}
                </Text>
                <Navigator
                    sceneStyle={{backgroundColor: 'white'}}//color por defecto
                    ref="navigator"//acceso con this.props.navigator en el resto de componentes
                    initialRoute={{name: 'ComponenteInicio', component: ComponenteInicio, index: 0}}//por defecto
                    renderScene={(route, navigator) => {//cargamos rutas dinámicas con datos dinámicos
                        return <route.component {...route.passProps}  navigator={navigator} />
                    }}
                />
                <Button
                    title="Abrir Sidemenu"
                    color="slategrey"
                    onPress={() => this.toggle()}
                />
              </SideMenu>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Proyecto', () => Proyecto);
