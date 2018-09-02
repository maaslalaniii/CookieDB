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

  remove(collection, query) {
    let items = this.find(query)

    for (let i = 0; i < items.length; i++)
      localStorage.removeItem(items[i]._id)
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