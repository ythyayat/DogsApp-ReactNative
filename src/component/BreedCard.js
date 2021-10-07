import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const BreedCard = props => {
  const color = useSelector(state => state.dog.colors)

  return (
    <View style={styles.cardContainer}>
      <View style={[styles.titleContainer, color ? { backgroundColor: color.darkMuted } : null]}>
        <Text style={styles.title}>{props.item}</Text>
      </View>
    </View>
  )
}

export default BreedCard

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get('screen').width,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: 'grey',
    width: '90%',
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
  }
})
