import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../component/Header'
import ImageCard from '../component/ImageCard'
import PaginationButton from '../component/PaginationButton'
import SubCard from '../component/SubCard'
import { pagination } from '../constant/helper'
import { getDetail } from '../redux/action'

const Detail = props => {
  const dispatch = useDispatch();
  const imageList = useSelector(state => state.dog.imageList)
  const subList = useSelector(state => state.dog.subList)
  const subSelected = useSelector(state => state.dog.subSelected)
  const breedSelected = useSelector(state => state.dog.breedSelected)
  const [listImage, setListImage] = useState([])
  const [list, setList] = useState(new pagination(imageList));


  const getDataImage = () => {
    let listt = new pagination(imageList);
    setList(listt);
    setListImage(listt.getData())
  }
  useEffect(() => {
    getDataImage()
  }, [imageList])

  const goToPage = (param) => {
    let data = list.goTo(param)
    console.log(data);
    data ? setListImage(data) : null;
  }

  const selectSub = param => {
    param = '' ?
      dispatch(getDetail(breedSelected)) :
      dispatch(getDetail(`${breedSelected}/${param}`))
  }

  return (
    <View style={styles.container}>
      <View style={styles.forHeader} />
      <FlatList
        data={subList}
        horizontal={true}
        contentContainerStyle={{
          marginVertical: 10,
          paddingLeft: 15,
          paddingRight: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => { selectSub(item) }}>
            <SubCard item={item} selected={subSelected == item} />
          </TouchableOpacity>
        )}
        ListHeaderComponent={<TouchableOpacity
          onPress={() => { selectSub('') }}>
          <SubCard item='All' selected={subSelected == ''} />
        </TouchableOpacity>}
      />
      <FlatList
        data={listImage}
        maxToRenderPerBatch={10}
        initialNumToRender={8}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => { }}>
            <ImageCard item={item} />
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={styles.footer}>
          {list.current > 3 ? <PaginationButton action={() => goToPage(1)} title='First' /> : null}
          {list.current > 1 ? <PaginationButton action={() => goToPage(list.current - 1)} title='Prev' /> : null}
          {(list.current - 2) > 0 ? <PaginationButton action={() => goToPage(list.current - 2)} title={list.current - 2} /> : null}
          {(list.current - 1) > 0 ? <PaginationButton action={() => goToPage(list.current - 1)} title={list.current - 1} /> : null}
          <Text style={[styles.paginationButton, styles.paginationSelected]}>{list.current}</Text>
          {(list.current + 1) <= list.totalPage ? <PaginationButton action={() => goToPage(list.current + 1)} title={list.current + 1} /> : null}
          {(list.current + 2) <= list.totalPage ? <PaginationButton action={() => goToPage(list.current + 2)} title={list.current + 2} /> : null}
          {list.current < list.totalPage ? <PaginationButton action={() => goToPage(list.current + 1)} title='Next' /> : null}
          {list.current + 3 < list.totalPage ? <PaginationButton action={() => goToPage(list.totalPage)} title='Last' /> : null}
        </View>}
      />
      <Header back={props.navigation.goBack} />
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EFF6',
    minHeight: Dimensions.get('screen').height,
  },
  footer: {
    marginBottom: 300,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paginationButton: {
    marginHorizontal: 5,
  },
  textDark: {
    color: '#555'
  },
  paginationSelected: {
    backgroundColor: '#555',
    width: 20,
    textAlign: 'center',
    borderRadius: 20,
    color: '#fff'
  },
  forHeader: {
    height: 120,
  }
})
