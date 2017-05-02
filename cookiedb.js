class CookieDB {

  insert(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  find(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  remove(key) {
    localStorage.removeItem(key)
  }

  update(key, value) {
    localStorage.removeItem(key)
    localStorage.setItem(key, value)
  }

  count() {
    return localStorage.length
  }

}