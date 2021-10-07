import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import { getDetail, getHeaderImage } from '../redux/action';

const Header = props => {
  const dispatch = useDispatch();
  const headerImage = useSelector(state => state.dog.headerImage)
  const title = useSelector(state => state.dog.breedSelected)
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')
  const searchList = useSelector(state => state.dog.searchList)
  const [filteredList, setFilteredList] = useState(searchList)

  useEffect(() => {
    dispatch(getHeaderImage());
  }, [])

  const filterItems = (arr, query) => {
    return arr.filter(function (el) {
      return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
  }

  const changed = (e) => {
    setValue(e);
    let filtered = filterItems(searchList, e);
    setFilteredList(filtered);
  }

  return (
    <View style={styles.absolute}>
      <View style={styles.headerBackground}>
        {headerImage !== '' ?
          <Image
            style={styles.image}
            source={{ uri: headerImage }}
          />
          : null}
        <View style={styles.imageCover} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Find dog's breed here..."
          placeholderTextColor='#bbb'
          onFocus={() => setShow(true)}
          value={value}
          onChangeText={e => changed(e)}
        />
        <Feather
          name='search'
          size={20}
          color='#bbb'
          style={styles.iconSearch}
        />
        {show ? <View style={styles.suggest}>
          <ScrollView>
            {filteredList.map((item, index) => <View
              key={index}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation ? props.navigation.navigate('Detail') : null;
                  dispatch(getDetail(item.path));
                  console.log('test');
                  setShow(false);
                }}
              >
                <View>
                  <Text style={styles.suggestText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </View>)}
          </ScrollView>
        </View> : null}
      </View>
      <Text style={styles.title}>{props.title ? props.title : title}</Text>
      {props.back ? <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => props.back()}
        >
          <Feather
            name='arrow-left'
            size={32}
            color='#fff'
          />
        </TouchableOpacity>
      </View> : null}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  headerBackground: {
    width: '100%',
    height: 120,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  imageCover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000055'
  },
  input: {
    borderRadius: 30,
    height: 40,
    paddingVertical: 0,
    paddingHorizontal: 20,
    color: '#555',
    backgroundColor: '#fff',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderRadius: 40,
    borderColor: '#bbb',
  },
  iconSearch: {
    elevation: 10,
    position: 'absolute',
    right: 15,
    top: 10,
  },
  title: {
    position: 'absolute',
    top: 15,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  suggest: {
    position: 'absolute',
    top: 43,
    padding: 20,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    zIndex: 200,
    height: 300,
    overflow: 'hidden',
  },
  suggestText: {
    color: '#777',
    textTransform: 'capitalize',
    paddingBottom: 8,
    fontSize: 16,
  }
})
