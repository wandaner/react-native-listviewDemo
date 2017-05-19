/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

export default class ListViewDemo extends Component {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource(
      {
        rowHasChanged:(r1,r2)=>r1!==r2,
      }
    )

    this.state={
      dataSource:ds,
      data:["h","e","l","l","o"]
    }
  }
  _renderRow(rowData,rowId){
    return (
      <Text>{rowData+'    '+rowId}</Text>
      )
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView 
          initialListSize={17}
          contentContainerStyle={{marginTop:50,justifyContent:'space-around',flexWrap:'wrap'}}
          dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
          renderRow={(rowData,sectionId,rowId)=>this._renderRow(rowData,rowId)} 
          showsVerticalScrollIndicator={false}
          />       
      </View>
    )
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

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
