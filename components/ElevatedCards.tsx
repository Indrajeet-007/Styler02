import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style = {[styles.cards , styles.card1]}>
                <Text style={styles.texts}>Tap</Text>
        </View>
        <View style = {[styles.cards , styles.card1]}>
                <Text style={styles.texts}>Me</Text>
        </View>
        <View style = {[styles.cards , styles.card1]}>
                <Text style={styles.texts}>To</Text>
        </View>
        <View style = {[styles.cards , styles.card1]}>
                <Text style={styles.texts}>Scroll</Text>
        </View>
        <View style = {[styles.cards , styles.card1]}>
                <Text style={styles.texts}>More ..</Text>
        </View>
        <View style = {[styles.cards , styles.card1]}>
                <Text style={styles.texts}>❤️</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
        texts:{
                color:'#ffffff'
        },
        headingText:{
                fontSize : 24,
                color : '#ffffff',
                paddingHorizontal : 105,
                paddingTop : 5,
                fontWeight : 'bold',
        },
        container:{
                padding:8,
        },
        cards:{
                justifyContent: 'center',
                alignItems : 'center',
                width:100,
                height:100,
                borderRadius:10,
                margin : 10
        },
        card1:{
                backgroundColor:'#CAD5E2',
                elevation:10,
                shadowOffset:{
                        width:1,
                        height:1,
                },
                shadowColor:'#ffffff'
        }
})
