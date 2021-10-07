import { loadPartialConfig } from "@babel/core";
import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import ImageColors from "react-native-image-colors";
import { baseUrl } from "../../constant/constant";
import { setSearchArr } from "../../constant/helper";
import { setColor, setDetail, setDogBreed, setHeaderImage, setSearch } from "../action";


function* getHeaderImage({ path }) {
  let url = path ? `${path}/images` : 'image';
  try {
    const response = yield axios.get(`${baseUrl}/breeds/${url}/random`);
    yield put(setHeaderImage(response.data.message))
    const result = yield ImageColors.getColors(response.data.message);
    yield put(setColor(result));

  } catch (error) {
    console.log(error);
  }
}

function* getAllDogBreed() {
  try {
    const response = yield axios.get(`${baseUrl}/breeds/list/all`);
    let breeds = Object.keys(response.data.message);
    let search = setSearchArr(response.data.message);
    yield put(setDogBreed(breeds));
    yield put(setSearch(search));

  } catch (error) {
    console.log(error);
  }
}

function* getDetails(props) {
  let path = props.payload.split('/');
  try {
    const response = yield axios.get(`${baseUrl}/breed/${path[1] ? props.payload : path[0]}/images`);
    const sub = yield axios.get(`${baseUrl}/breed/${path[0]}/list`);
    let subSelected = path[1] ? path[1] : '';
    let imageList = response.data.message;
    let subList = sub.data.message;

    yield put(setDetail({ imageList, subList, subSelected, breedSelected: path[0] }));

  } catch (error) {
    console.log(error);
  }
}

export default function* dogSaga() {
  yield takeLatest('GET_HEADER_IMAGE', getHeaderImage)
  yield takeLatest('GET_ALL_DOG_BREEDS', getAllDogBreed)
  yield takeLatest('GET_DETAIL', getDetails)
}
