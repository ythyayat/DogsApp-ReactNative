export const getHeaderImage = () => {
  return {
    type: 'GET_HEADER_IMAGE'
  }
}

export const setHeaderImage = payload => {
  return {
    type: 'SET_HEADER_IMAGE',
    payload
  }
}

export const getAllDogBreeds = () => {
  return {
    type: 'GET_ALL_DOG_BREEDS',
  }
}

export const setDogBreed = payload => {
  return {
    type: 'SET_DOG_BREEDS',
    payload
  }
}

export const setSearch = payload => {
  return {
    type: 'SET_SEARCH',
    payload
  }
}

export const setColor = payload => {
  return {
    type: 'SET_COLORS',
    payload
  }
}

export const getDetail = payload => {
  return {
    type: 'GET_DETAIL',
    payload
  }
}

export const setDetail = payload => {
  return {
    type: 'SET_DETAIL',
    payload
  }
}