class CookieDB {

  insert(value) {
    value._id = localStorage.length
    localStorage.setItem(localStorage.length, JSON.stringify(value))
  }

  find(query) {
    let items = []

    for (let i = 0; i < localStorage.length; i++)
      items.push(JSON.parse(localStorage[i]))

    for (let property in query)
      items = items.filter(item => item[property] == query[property])

    return items
  }

  remove(query) {
    let items = this.find(query)

    for (let i = 0; i < items.length; i++)
      localStorage.removeItem(items[i]._id)
  }

  update(key, value) {
    localStorage.removeItem(key)
    localStorage.setItem(key, value)
  }

  count() {
    return localStorage.length
  }

  dump() {
    return localStorage
  }

  drop() {
    localStorage.clear()
  }

}