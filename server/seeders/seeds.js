//allows us to get fake data, pump into our db
const faker = require('faker')
const db = require('../config/connection')
const {Book} = require('../models')


db.once('open', async ()=>{
  await Book.deleteMany({}); //get brand new book data

  const dbLibrary = []; //house our fake data

  for(let i=0; i<30; i++){
    const title = faker.company.catchPhrase()
    const author = faker.name.findName()
    const pages = faker.datatype.number()

    dbLibrary.push({title, author, pages})
  }

  await Book.collection.insertMany(dbLibrary)
  console.log('faker has completed data migration')
  console.table(dbLibrary)
  
  process.exit(0)
})