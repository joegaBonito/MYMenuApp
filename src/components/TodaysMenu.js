import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, AlertIOS, TabBarIOS, NavigatorIOS, TouchableHighlight,SectionList } from 'react-native';
import Menu from './Menu.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    SectionHeader:{
      backgroundColor : '#64B5F6',
      fontSize : 20,
      padding: 5,
      color: '#fff',
      fontWeight: 'bold'
   },
    SectionListItemS:{
      fontSize : 16,
      padding: 6,
      color: '#000',
      backgroundColor : '#F5F5F5'
  }
});

export default class TodaysMenu extends React.Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: TodaysMenuScene,
                    title: 'Today\'s Menu',
                    passProps: { index: 1 },
                }}
                style={{ flex: 1 }}
            />);
    }
}

class TodaysMenuScene extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        { date: '01/20/2019', data: ['Cereal', 'Gyro', 'Steak'] },
                        { date: '01/19/2019', data: ['Banana', 'Bibimbap', 'Spaghetti'] }
                    ]}
                    renderSectionHeader={({ section }) => <Text style={styles.SectionHeader}> {section.date} </Text>}
                    renderItem={({ item }) => <Text style={styles.SectionListItemS} > {item} </Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}
