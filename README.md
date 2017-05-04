# Cookie:cookie:DB

CookieDB is a database for the browser. For now, it is a wrapper on top of HTML localStorage with many extra features, but it aims to be a complete solution for storing data on the browser. Soon, it will be able to organize data into collections and documents, like any noSQL database, with more to come in the future. CookieDB aims to be syntactically similar to MongoDB.

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
Store an object on the browser. This information will be available even after the user has closed their tab or browser. Call the insert function on the CookieDB object and pass an object that you want to store.
```javascript
db.insert({name: 'Steve', age: 18}) // {_id: 0, name: 'Steve', age: 18}
```

#### Update
Update a value that is pre-existing in the database, by passing the _id and the new value.
```javascript
db.update(0, {name: 'Bob', age: 22})
```

#### Find
Find the value of the data you are looking for by referencing a subset of its properties.
```javascript
db.find({age: 22}) // returns {_id: 0, name: 'Bob', age: 22} 
```

#### Remove
Remove some value(s) that exists in the database by a subset of its properties.
```javascript
db.remove({name: 'Bob'})
```

#### Count
Returns the number of items that are in the database. Since we have `{_id: 0, name: 'Bob', age: 22}` in our database, it will return 1.
```javascript
db.count() // returns 1
```

#### Drop
Deletes all the content of the database.
```javascript
db.drop()
```

## Features
* Familiar database syntax
* Ability to store javascript objects, unlike native localStorage which only supports strings.
* Querying for an object by one or multiple known properties.
* Each document is assigned its own unique `_id` similar to MongoDB.
* Written completely in javascript and for front-end use.

## Todo
* Ability to make collections and other ways of organizing data, to speed up search times.
* ~Advanced querying options.~
* Functionality to perform multiple inserts, updates, and removes at once.
* Feedback for operations such as error / success codes.
