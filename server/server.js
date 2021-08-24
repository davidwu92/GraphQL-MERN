const express = require('express')
//npm i apollo-server-express express faker graphql mongoose
const {ApolloServer} = require('apollo-server-express')
const {typeDefs, resolvers} = require('/schemas')

const db = require('./config/connection')
const PORT = process.env.PORT || 3001


const app = express()

//create apollo server, pass in schema data
//mechanism that sits on top of our Express App, handles users' requests!
const server = new ApolloServer({typeDefs, resolvers})
//typeDefs: how our data looks (schematics)
//resolvers: methods responsible for interacting w/ API

//integrate the apollo server as middleware.

server.applyMiddleware({app});
app.use(express.urlencoded({extended: false}))
app.use(express.json())


db.once('open', ()=>{
  console.log('DB is live!')
  app.listen(PORT, ()=>{
    console.log(`App is running and waiting on incoming request at port ${PORT}`)
    //auto-configured PLAYGROUND.
    console.log(`The GraphQL PLAYGROUND that is configured here at http://localhost:${PORT}${server.graphqlParth}`)
  })
})