export const setSearchArr = (obj) => {
  let result = [];
  for (const key in obj) {
    result.push({
      name: key,
      path: key
    });

    if (obj[key].length > 0) {
      for (let i = 0; i < obj[key].length; i++) {
        const element = obj[key][i];
        result.push({
          name: `${key} ${element}`,
          path: `${key}/${element}`
        })
      }
    }
  }
  return result;
}

export class pagination {
  constructor(arr) {
    this._arr = arr;
    this._current = 1;
    this._totalData = arr.length;
    this._totalPage = Math.ceil(arr.length / 20);
  }

  goTo(param) {
    if (param > this._totalPage || param < 1) {
      return false
    }
    let data = this._arr
    this._current = param
    let result = data.slice(((param - 1) * 20), ((param - 1) * 20) + 20);
    return result;
  }

  get totalPage() {
    return this._totalPage
  }

  get totalData() {
    return this._totalData
  }

  get current() {
    return this._current
  }

  getData() {
    let data = this._arr
    return data.slice(((this._current - 1) * 20), ((this._current - 1) * 20) + 20);
  }

}