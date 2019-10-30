const  ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')

describe(`Shopping List Service Object`, function() {
    let db
    let testItems = [
        {
            id: 1,
            name: 'First test',
            date_added: new Date("2019-01-22"), 
            price: '12.00',
            category: 'Main'
        },
        {
            id: 2,
            name: 'Second test',
            date_added: new Date("2018-01-22"), 
            price: '2.00',
            category: 'Snack'
        }
        {
            id: 3,
            name: 'Third test',
            date_added: new Date("2013-01-22"), 
            price: '32.00',
            category: 'Breakfast'
        }
    ]
    before(() => {
             db = knex({
               client: 'pg',
               connection: process.env.TEST_DB_URL,
             })
           })
    before(() => db('shopping_list').truncate())
    
    afterEach(() => db('shopping_list').truncate())

    after(() => db.destroy())

    context(`Given 'shopping_list' has data`, ()=>{
        beforeEach(()=>{
            return db   
                .into('shopping_list')
                .insert(testItems)
        })
        it(`getAllItems() resolves all items from 'shopping_list' table`, ()=>{
            const idToGet = 3
            const thirdItem = testItems [idToGet -1]
            return ShoppingListService.getById(db, idToGet)
                .then(actual =>{
                    expect(actual).to.eql({
                        id:idToGet,
                        name: thirdItem.name,
                        date_added: thirdItem.date_added,
                        price: thirdItem.price,
                        category: thirdItem.category,
                        checked: false,
                    })
                })
            })
         })
    describe(`getAllArticles()`, () => {
        it(`resolves all articles from 'blogful_articles' table`, () => {
        // test that ArticlesService.getAllArticles gets data from table
        })
  })
})