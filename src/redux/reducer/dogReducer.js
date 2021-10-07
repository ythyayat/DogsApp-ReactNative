const initState = {
  breadList: [],
  headerImage: '',
  breedList: [],
  searchList: [],
  colors: {
    average: "#3E371D",
    darkMuted: "#706838",
    darkVibrant: "#282010",
    dominant: "#282010",
    lightMuted: "#B0D8D0",
    lightVibrant: "#60C0D0",
    muted: "#988850",
    platform: "android",
    vibrant: "#30A0B0"
  },
  imageList: [],
  subList: [],
  subSelected: '',
  breedSelected: ''
}
const dogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ALL_DOG_BREEDS':
      return {
        ...state
      }

    case 'SET_DOG_BREEDS':
      return {
        ...state,
        breedList: action.payload
      }

    case 'SET_SEARCH':
      return {
        ...state,
        searchList: action.payload
      }

    case 'SET_COLORS':
      return {
        ...state,
        colors: action.payload
      }

    case 'GET_HEADER_IMAGE':
      return {
        ...state
      }

    case 'SET_HEADER_IMAGE':
      return {
        ...state,
        headerImage: action.payload
      }

    case 'GET_BREEDS_LIST':
      return {
        ...state
      }

    case 'GET_DETAIL':
      return {
        ...state
      }

    case 'SET_DETAIL':
      return {
        ...state,
        imageList: action.payload.imageList,
        subList: action.payload.subList,
        subSelected: action.payload.subSelected,
        breedSelected: action.payload.breedSelected
      }

    default:
      return state
  }
}

export default dogReducer;