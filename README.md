# Cookie:cookie:DB

CookieDB is a database for the browser. For now, it is a wrapper on top of HTML localStorage, but it aims to be a complete solution for storing data on the browser. Soon, it will be able to organize data into collections and documents, like any noSQL database, with more to come in the future. CookieDB aims to be syntactically similar to MongoDB.

## Setup
Simply include the cookiedb.js file into your project and link to it through script tags.

```html
<script src="cookiedb.js"></script>
```

In your javascript file, create a new cookiedb database.

```javascript
const db = new CookieDB()
```

Now, you can insert, update, find, and remove data from your web application.

## Documentation
#### Insert
Store a value through a key. This information will be available even after the user has closed their tab or browser. Call the insert function on the CookieDB object and pass a key (a reference to the data) and a value (the data you want to store)
```javascript
db.insert('name', 'Steve')
```

#### Update
Update a value that is pre-existing in the database, by passing the key and the new value.
```javascript
db.update('name', 'Bob')
```

#### Find
Find the value of data by referencing its key.
```javascript
db.find('name') // returns 'Bob' 
```

#### Remove
Remove a value that exists in the database by its key.
```javascript
db.remove('name')
```

## Todo
* Ability to make collections and other ways of organizing data.
* Advanced querying options.
* Functionality to perform multiple inserts, updates, and removes at once.
* Feedback for operations such as error / success codes.
