import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, AppRegistry, FlatList, StyleSheet, Text, View, AlertIOS, TabBarIOS, NavigatorIOS } from 'react-native';
import MenuDetails from './MenuDetails.js';
import TodaysMenu from './TodaysMenu.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

export default class Menu extends React.Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: MenuScene,
                    title: 'Menu',
                    passProps: { index: 1 },
                }}
                style={{ flex: 1 }}
            />
        );
    }
}

class MenuScene extends React.Component {
    static propTypes = {
        route: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
        navigator: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedTab: 'Menu',
            isLoading: true,
            dataSource: []
        }
        this._onForward = this._onForward.bind(this);
    }

    componentDidMount() {
        return fetch('http://192.168.1.7:8184/api/getAllMenu')
            .then((response) => response.json())
            .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson,
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _onForward(item) {
        let nextIndex = ++this.props.index;
        this.props.navigator.push({
            component: MenuDetails,
            title: 'Menu Details',
            passProps: { index: nextIndex, item: item }
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={styles.container}>

                <FlatList
                    data={
                        this.state.dataSource
                    }
                    renderItem={({ item }) => {
                        return (
                            <Text button onPress={() => { this._onForward(item.name); }} style={styles.item}>
                                {item.name}
                            </Text>
                        )
                    }
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}
