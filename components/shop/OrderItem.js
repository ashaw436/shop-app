import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CartItem from './CartItem';
import Colors  from '../../constants/Color';

const OrderItem = props => {
  
    return (
      <View style={styles.orderItem}>
          <View style={styles.summary}>
            <Text style={styles.totalAmount}>£{props.amount.toFixed(2)}</Text>
            <Text style={styles.date}>{props.date}</Text>
          </View>
          <Button color={Colors.primary} title="Show Details" />
      </View>
      
    );
  };
  
  const styles = StyleSheet.create({
        orderItem:{
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 8,
            elevation: 5,
            borderRadius: 10,
            backgroundColor: 'white',
            margin: 20,
            padding: 10,
            alignItems: 'center',
        },
        summary:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: 20
        },
        totalAmount:{
            fontFamily: 'open-sans-bold',
            fontSize:16
        },
        date:{
            fontFamily: 'open-sans',
            fontSize:16,
            color: '#888'
        }
  });
  
  export default OrderItem;
  