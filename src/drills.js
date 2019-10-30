require('dotenv').config()
const knex = require('knex')
const ArticlesService = require('./articles-service')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
  })
require('dotenv').config()

console.log(ArticlesService.getAllArticles())

//DRILL 1
// function searchByName(searchTerm) {
//     knexInstance
//       .select('name', 'price', 'date_added', 'checked','category')
//       .where( 'name', 'ILIKE', `%${searchTerm}%`
//       )
//       .from('shopping_list')
//       .groupBy('name', 'price', 'date_added', 'checked','category')
//       .then(result => {
//         console.log(result)
//       })
//   }
  
// searchByName('Burga')

//DRILL 2
// function paginateItems(page) {
//     const products = 6
//     const offset = products * (page-1)
//     knexInstance
//       .select('name', 'price', 'date_added', 'checked','category')
//       .from('shopping_list')
//       .limit(products)
//       .offset(offset)
//       .then(result => {
//         console.log(result)
//       })
//   }
  
//   paginateItems(2)

//DRILL3
// function paginateItems(page) {
//     const products = 6
//     const offset = products * (page-1)
//     knexInstance
//       .select('name', 'price', 'date_added', 'checked','category')
//       .from('shopping_list')
//       .limit(products)
//       .offset(offset)
//       .then(result => {
//         console.log(result)
//       })
//   }
  
//   paginateItems(2)
//DRILL4
// function daysFrom(days) {
//     knexInstance
//       .select('name', 'price', 'date_added', 'checked','category')
//       .where('date_added', '>', knexInstance.raw(`now() - '?? days' :: INTERVAL`, days))
//       .from('shopping_list')
//       .then(result => {
//         console.log(result)
//       })
//   }
  
//   daysFrom(5)

  function cost (){
      knexInstance  
        .select('category')
        .sum('price as total')
        .from ('shopping_list')
        .groupBy('category')
        .then(result => {
            console.log(result)
        })
  }

  cost()