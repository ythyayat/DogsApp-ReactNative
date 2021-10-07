import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImageCard = props => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: props.item }}
        style={styles.image}
      />
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  imageContainer: {
    width: '90%',
    height: 400,
    alignSelf: 'center',
    marginBottom: 20,
  }
})
