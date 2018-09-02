class CookieDB {

  constructor() {
    this.length = JSON.parse(localStorage.getItem('length')) || 0
  }

  createCollection(collection) {
    localStorage.setItem(collection, JSON.stringify([]))
  }

  insert(collection, ...values) {
    let data = JSON.parse(localStorage.getItem(collection))

    values.forEach(value => {
      value._id = this.length++
      data.push(value)
    })

    localStorage.setItem('length', JSON.stringify(this.length))
    localStorage.setItem(collection, JSON.stringify(data))
  }

  find(collection, query) {
    let items = JSON.parse(localStorage.getItem(collection))

    for (let property in query)
      items = items.filter(item => item[property] == query[property])

    return items
  }

  remove(collection, ...queries) {
    let data = localStorage.getItem(collection)

    queries.forEach(query => {
      let items = this.find(collection, query)
      for (let i = 0; i < items.length; i++) {
        let item = JSON.stringify(items[i])
        data = data.replace(new RegExp(`(,${item})|(,${item},)|(${item},)`, 'g'), '')
      }
    })

    localStorage.setItem(collection, data)
  }

  update(collection, key, value) {
    let items = JSON.parse(localStorage.getItem(collection))

    for (let property in value) {
      items[key][property] = value[property]
    }

    localStorage.setItem(collection, JSON.stringify(items))
  }

  count() {
    return this.length
  }

  dump() {
    return localStorage
  }

  drop() {
    localStorage.clear()
  }

}