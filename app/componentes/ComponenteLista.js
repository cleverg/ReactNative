import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight
} from 'react-native';

import ComponenteListaDetalles from './ComponenteListaDetalles';

export default class ComponenteLista extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            postsDataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }

        this._goDetail = this._goDetail.bind(this);
    }

    componentDidMount()
    {
        this.getPostsFromApiAsync();
    }

    getPostsFromApiAsync()
    {
        return fetch('http://alohacreativos.com/feed/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    postsDataSource: this.state.postsDataSource.cloneWithRows(responseJson)
                });
                console.log(responseJson);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    _goDetail(rowData)
    {
        this.props.navigator.push({
            component: ComponenteListaDetalles,
            item: 'ComponenteListaDetalles',
            passProps: {
                rowData: rowData
            }
        })
    }

    _renderRow(rowData, sectionId, rowId)
    {
        return(
            <TouchableHighlight onPress={() => this._goDetail(rowData)}>
                <View style={styles.row}>
                    <Text style={styles.text}>
                        Id: {rowData.id}
                        {"\n"}
                        Title: {rowData.title}
                        {"\n"}
                        Body: {rowData.body.substr(0, 60)}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

    render()
    {
        return(
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.postsDataSource}
                    renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, sectionId, rowId)}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    text: {
        flex: 1,
    },
});