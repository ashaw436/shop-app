import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CartItem from './CartItem';
import Colors  from '../../constants/Color';
import Card from '../../components/UI/Card';

const OrderItem = props => {
        const [showDetails, setShowDetails] = useState(false);

    return (
      <Card style={styles.orderItem}>
          <View style={styles.summary}>
            <Text style={styles.totalAmount}>£{props.amount.toFixed(2)}</Text>
            <Text style={styles.date}>{props.date}</Text>
          </View>
          <Button 
          color={Colors.primary} 
          title={showDetails ? "Hide Details" :"Show Details"}
          onPress={() => {
            setShowDetails(prevState => !prevState);
          }}
          />
        {showDetails && 
            <View style={styles.detailItems}>
                {props.items.map(cartItem => 
                <CartItem 
                    key={cartItem.productId}
                    quantity={cartItem.quantity} 
                    amount={cartItem.sum} 
                    title={cartItem.productTitle} 
                    />
                )}
            </View>}
      </Card>
      
    );
  };
  
  const styles = StyleSheet.create({
        detailItems:{
            width: '100%',
            justifyContent:'space-between',
        },
        orderItem:{
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
  