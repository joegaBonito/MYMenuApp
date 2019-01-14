import React from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, FlatList, StyleSheet, View, Text, AlertIOS } from 'react-native';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 70
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
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
        // this._onForward = this._onForward.bind(this);
      }
    
    //   _onForward() {
    //     let nextIndex = ++this.props.index;
    //     this.props.navigator.push({
    //       component: MyScene,
    //       title: 'Scene ' + nextIndex,
    //       passProps: {index: nextIndex},
    //     });
    //   }

      componentWillMount() {
        this.item = this.props.item;
        console.log(this.item);
      }

      render() {
          return (
              <View style={styles.container}>
                <Text style={styles.item}>{this.item}</Text>
              </View>
          );
      }
}