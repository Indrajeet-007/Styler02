import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style ={styles.headingText}>FlatCards</Text>
      <View style ={styles.container}>
        <View style ={[styles.card , styles.cardOne]}>
               <Text style ={styles.cardText}>Red</Text> 
        </View>
        <View style ={[styles.card , styles.cardTwo]}>
               <Text style ={styles.cardText}>Cyan</Text> 
        </View>
        <View style ={[styles.card , styles.cardThree]}>
               <Text style ={styles.cardText}>Green</Text> 
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
        cardText:{
                color : '#000000',
        },
        headingText:{
                fontSize : 24,
                color : '#ffffff',
                paddingHorizontal : 135,
                paddingTop : 20,
                fontWeight : 'bold',
        },
        container:{
                flexDirection: 'row',
                padding : 8,
                justifyContent : 'center'
        },
        card:{
                width:100,
                height:100,
                borderRadius: 8,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
        }, 
        cardOne:{
                backgroundColor: '#EF5354',   
        }, 
        cardTwo:{
                backgroundColor: '#7FFFD4',   
        }, 
        cardThree:{
                backgroundColor: '#68AF2C',   
        }
})