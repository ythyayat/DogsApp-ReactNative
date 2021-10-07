import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const SubCard = props => {
  const color = useSelector(state => state.dog.colors)

  return (
    <View style={[styles.subContainer, { backgroundColor: color.darkMuted }, props.selected ? { backgroundColor: color.vibrant } : null]}>
      <Text style={styles.title}>{props.item}</Text>
    </View>
  )
}

export default SubCard

const styles = StyleSheet.create({
  subContainer: {
    paddingHorizontal: 13,
    backgroundColor: "#999",
    height: 40,
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 40,
    marginLeft: 5
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
  }
})
