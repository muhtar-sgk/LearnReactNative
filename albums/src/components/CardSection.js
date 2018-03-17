import React from 'react';
import { View, Text} from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDDDDD',
    position: 'relative'
  }
}

export default CardSection;
