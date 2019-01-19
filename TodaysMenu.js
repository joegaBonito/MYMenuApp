import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, AlertIOS, TabBarIOS, NavigatorIOS, TouchableHighlight } from 'react-native';
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
});

export default class TodaysMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    _onMyMenu() {
        this.props.navigator.push({
            component: Menu,
            title: 'Menu'
        });
    }

    _onTodaysMenu() {
        this.props.navigator.push({
            component: TodaysMenu,
            title: 'Today\'s Menu'
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Today's Menu</Text>
                {/* <TabBarIOS>
                    <TabBarIOS.Item title="Menu" onPress={() => this.props.navigator.popToTop({component: Menu, title: 'Menu'})}/>
                    <TabBarIOS.Item title="Today's Menu" onPress={() => this.props.navigator.replace({component: TodaysMenu, title: 'Today\'s Menu'})}/>
                </TabBarIOS> */}
            </View>
        );
    }
}
