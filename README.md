# Cookie:cookie:DB

CookieDB is a database for the browser. It can store data as documents in collections like any noSQL database. It allows for very organized and structured data by using nothing other than javascript on the browser.  

## Setup

Simply include the cookiedb.js file into your project and link to it through script tags.

```html
<script src="cookiedb.js"></script>
```

In your javascript file, create a new cookiedb database.

```javascript
const db = new CookieDB()
```

Now, you can organize your data into collections and insert, update, find, and remove that data from your web application.

## Documentation

#### Create Collection

CookieDB, much like all noSQL databases stores your data into collections for better organization. To begin using the features of CookieDB create a collection.

```javascript
db.createCollection('books')
```

#### Insert

Store an object on the browser in a collection. This information will be available even after the user has closed their tab or browser. Call the insert function on the CookieDB object and pass the collection in which you want to store data, followed by objects separeted by comma that you want to store. Let's populate our database books collection with books

```javascript
db.insert('books', { title: 'The Great Gatsby', year: 1925, author: 'F. Scott Fitzgerald' })
db.insert('books', { title: 'Nineteen Eighty-Four', year: 1949, author: 'George Orwell' })

// multiple-insert
db.insert('books', { title: 'To Kill a Mockingbird', year: 1960, author: 'Harper Lee' }, { title: 'Animal Farm', year: 1945, author: 'George Orwell' })
```

#### Update

Update a value that is pre-existing in the database, by passing the collection and a object containing key and value property. The key property receives `_id` of document and the value property receives a object containing values which you want to update in the old value. The `_id` is just the unique identifier that represents the order in which the items were inserted. Let's update the two George Orwell books to reflect the authors real name which is Eric Blair and update author of Nineteen Eighty-Four and To Kill a Mockingbird books to George Newell using multiple-update.

```javascript
/* Since we know the _id's of the George Orwell books
   are 1 and 3 we can update them directly. If you don't 
   know the _id's simply query for the object you are 
   looking for and obtain the _id. */
db.update('books', { key: 1, value: { author: 'Eric Blair' }})
db.update('books', { key: 3, value: { author: 'Eric Blair' }})

// multiple-update
db.update('books', { key: 0, value: { author: 'George Newell' }}, { key: 2, value: { author: 'George Newell' }})
```

#### Find

Find the value of the data you are looking for in a collection by referencing a subset of its properties, passing an empty object will return all documents in the specified collection. The find function returns an array of all items in the database that match the query. The function can return an empty array or array of length 1. Let's query for The Great Gatsby book.

```javascript
db.find('books' { title: 'The Great Gatsby' })
// returns [{_id: 0, title: 'The Great Gatsby', year: 1925, author: 'F. Scott Fitzgerald'}]
```

#### Remove

Remove some value(s) that exists in the database by a subset of its properties. Let's remove all books published in 1960, 1925 and which contains Animal Farm title.

```javascript
db.remove('books', { year: 1960 })
// removes to kill a mockingbird from the database

// multiple-remove
db.remove('books', { title: 'Animal Farm' }, { year: 1925 })
// removes animal farm book and the great gatsby from the database
```

#### Count

Returns the number of items that are in the database. Since we have 4 books in our database, it will return 4.

```javascript
db.count()
// returns 4
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
* Sped up search times and better organization due to collections
* Ability to insert, update and remove multiple documents at once

## Todo

* ~Ability to make collections and other ways of organizing data, to speed up search times.~
* ~Advanced querying options.~
* ~Functionality to perform multiple inserts, updates, and removes at once.~
* Feedback for operations such as error / success codes.
