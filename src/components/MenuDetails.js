import React from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, FlatList, StyleSheet, View, Text, AlertIOS, TabBarIOS, NavigatorIOS } from 'react-native';
import { Button } from 'react-native-elements'
import TodaysMenu from './TodaysMenu.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

export default class MenuDetails extends React.Component {
    static propTypes = {
        route: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
        navigator: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.item = this.props.item;
        console.log(this.item);
    }

    _onMyMenu() {
        this.props.navigator.pop();
    }

    _onSubmitButton() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item}>{this.item}</Text>
                <Button
                      backgroundColor="blue"
                    onPress={this._onSubmitButton}
                    title="Submit"
                    accessibilityLabel="To submit the menu for today's menu."
                />
            </View>
        );
    }
}