import React from 'react';
import PropTypes from 'prop-types';
import { PickerIOS,AppRegistry, FlatList, StyleSheet, View, Text, AlertIOS, TabBarIOS, NavigatorIOS,Vibration } from 'react-native';
import { Button } from 'react-native-elements'
import TodaysMenu from './TodaysMenu.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    },
    item: {
        padding: 10,
        fontSize: 30,
        height: 44,
    },
    picker: {
     position:'absolute',
     top:50,
     width: '100%',
     textAlign:'center'
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
        this.state = {
            item: '',
            bld: 'Breakfast',
        }
    }

    _onMyMenu() {
        this.props.navigator.pop();
    }

    _onSubmitButton(item, bld) {
        console.log(JSON.stringify({
            menu: item,
            bld: bld
        }));
        fetch('http://192.168.1.7:8184/api/createTodaysMenu', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                menu: item,
                bld: bld
            }),
        }).then(Vibration.vibrate());
    }

    componentDidMount() {
        let item = this.props.item;
        this.setState({
            item: item
        });
    }

    render() {
        
        return (
            <View style={styles.container}>
                <Text style={styles.item}>{this.props.item}</Text>
                <PickerIOS
                    selectedValue={this.state.bld}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({ bld: itemValue })}>
                    <PickerIOS.Item label="Breakfast" value="Breakfast" />
                    <PickerIOS.Item label="Lunch" value="Lunch" />
                    <PickerIOS.Item label="Dinner" value="Dinner" />
                </PickerIOS>
                <Button
                    buttonStyle={{ 
                        backgroundColor:"blue",
                        width: '100%',
                        height: 50,
                        position:'absolute',
                        top:400
                    }}
                    onPress={()=>this._onSubmitButton(this.state.item,this.state.bld)}
                    title="Submit"
                    accessibilityLabel="To submit the menu for today's menu."
                />
            </View>
        );
    }
}