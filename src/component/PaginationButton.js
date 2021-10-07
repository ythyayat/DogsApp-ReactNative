import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const PaginationButton = props => {
  return (
    <TouchableOpacity style={styles.paginationButton}
      onPress={() => props.action()}
    >
      <Text style={styles.textDark}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default PaginationButton

const styles = StyleSheet.create({
  paginationButton: {
    marginHorizontal: 5,
  },
  textDark: {
    color: '#555'
  },
})
