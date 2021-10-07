import React, { useEffect } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import BreedCard from '../component/BreedCard'
import Header from '../component/Header'
import { getAllDogBreeds, getDetail } from '../redux/action'

const Home = props => {
  const dispatch = useDispatch();
  const breeds = useSelector(state => state.dog.breedList)

  useEffect(() => {
    dispatch(getAllDogBreeds());
  }, [])

  const goDetail = (item) => {
    console.log(item);
    dispatch(getDetail(item));
    props.navigation.navigate('Detail')
    console.log('masuk');
  }

  return (
    <View style={styles.container}>
      <View style={styles.forHeader} />
      <FlatList
        data={breeds}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => goDetail(item)}>
            <BreedCard item={item} />
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={styles.footer} />}
      />
      <Header title='Home' navigation={props.navigation} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EFF6',
    minHeight: Dimensions.get('screen').height,
  },
  forHeader: {
    height: 120,
  },
  footer: {
    height: 300,
  }
})
