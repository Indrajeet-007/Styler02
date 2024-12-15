import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agra, Uttar Pradesh</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in Agra, Uttar Pradesh, India.
          </Text>
          <Text style={styles.cardFooter}>
            12 mins away
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize : 24,
    color : '#ffffff',
    paddingHorizontal : 97,
    paddingTop : 5,
    marginBottom:20,
    fontWeight : 'bold',
  },
  Textcolor: {
    color: '#ffffff',
  },
  card: {
    width : 350,
    height : 360,
    borderRadius : 10,
    marginVertical : 12,
    marginHorizontal : 18
  },
  cardElevated: {
    backgroundColor:'#ffffff',
    elevation : 4,
    shadowOffset :{
      width:1,
      height:1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
  }, 
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12,
  },
  cardTitle: {
    fontSize:22,
    fontWeight : 'bold',
    marginBottom: 6
  },
  cardLabel: {
    fontSize:16,
    marginBottom:6,
  },
  cardDescription: {
    fontSize:13,
    marginBottom:12,
    marginTop:6,
    color:'#2C3335',
    flexShrink:1
  },
  cardFooter: {
    
  },
});
