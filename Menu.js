import React from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, FlatList, StyleSheet, Text, View,AlertIOS } from 'react-native';
import MenuDetails from './MenuDetails.js';

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

export default class Menu extends React.Component {
    static propTypes = {
        route: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }),
        navigator: PropTypes.object.isRequired,
      };
    
      constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
      }
    
      _onForward(item) {
        let nextIndex = ++this.props.index;
        this.props.navigator.push({
          component: MenuDetails,
          title: 'MenuDetails',
          passProps: {index: nextIndex, item: item}
        });
      }

//   _itemClicked = (item) => {
//     return (
//         <MenuDetails item={item}/>
//     )
//   }

  render() {
    return (
      <View style={styles.container}>
      <FlatList
        data={[
          {key: '된장찌개'},
          {key: '부대찌개'},
          {key: '콩나물불고기'},
          {key: 'Steak'},
          {key: '떡볶이'},
          {key: '오뎅국'},
          {key: '카레'}
        ]}
        renderItem={({item}) => {
            return (
            <Text button onPress={()=> {this._onForward(item.key);}} style={styles.item}>
              {item.key}
            </Text>
            )
          }
        }
      />
    </View>
    );
  }
}
