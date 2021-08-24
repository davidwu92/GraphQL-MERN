const {Schema, model} = require('mongoose')

/*
A schema is a blueprint of the database which specifies what fields will be present and what would be their types.
For example an employee table will have an employee_ID column represented by a string of 10 digits and an employee_Name column with a string of 45 characters.

Data model is a high level design which decides what can be present in the schema. It provides a database user with a conceptual framework in which we specify the database requirements of the database user and the structure of the database to fulfill these requirements.

A data model can, for example, be a relational model where the data will be organised in tables whereas the schema for this model would be the set of attributes and their corresponding domains.
*/

const BookSchema = new Schema({
  title: {
    type: String, required: true
  },
  author: {
    type: String, required: true
  },
  pages : {
    type: Number, required: true
  },
})

const Book = model('Book', BookSchema)

module.exports = Book;