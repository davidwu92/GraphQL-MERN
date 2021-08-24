const {Book} = require('../models');

const resolvers = {
  Query: {
    books: async()=>{
      return Book.find()
    },
    book: async(parent, {title})=>{
      console.log("parent:", parent)
      return Book.findOne({title})
    }
  },

  Mutation: {
    addBook: async(parent, args)=>{
      console.log("addBook resolver ran.")
      console.log("parent:", parent)
      console.log("args:", args)
      const book = await Book.insertMany(args)
      return book;
    }
  }
}

module.exports = resolvers