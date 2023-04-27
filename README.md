# Important MongoDB Commands:

1) View all databases : `show dbs`
2) Create a new or switch databases : `use dbName`
3) View current Database : `db`
4) Delete Database : `db.dropDatabase()`
5) Show Collections : `show collections`
6) Create a collection named 'comments' : `db.createCollection('comments')`
7) Drop a collection named 'comments' : `db.comments.drop()`
8) Show all Rows in a Collection : `db.comments.find()`
9) Show all Rows in a Collection (Prettified) : `db.comments.find().pretty()`
10) Find the first row matching the object : `db.comments.findOne({name: 'Suraj'})`
11) Insert One Row : `db.comments.insert({
    'name': 'Suraj',
    'lang': 'React'
 })`
 12) Insert Many Rows : `db.comments.insertMany([{'name': 'Suraj',
    'lang': 'React',
    age : 19
    }, 
    {'name': 'Rohan',
    'lang': 'Python',
     age : 21
    },
    {'name': 'Lovish',
    'lang': 'Java',
     age : 24
}])`
13) Search in a MongoDb Database : `db.comments.find({lang:'Python'})`
14) Limit the number of rows in output : `db.comments.find().limit(2)`
15) Count the number of rows in the output : `db.comments.find().count()`
16) Update a row : `db.comments.updateOne({name: 'Sam'},
{$set: {'name': 'Suraj',
    'lang': 'React',
    age : 19
}}, {upsert: true})`
17) Mongodb Increment Operator : `db.comments.update({name: 'Suraj'},
{$inc:{
    age: 20
}}) `
18) Mongodb Rename Operator : `db.comments.update({name: 'Rohan'},
{$rename:{
    age: 'Age'
}})`
19) Delete Row : `db.comments.remove({name: 'Lovish'})`
20) Less than/Greater than/ Less than or Eq/Greater than or Eq : `db.comments.find({age: {$lt: 100}})
` , `db.comments.find({age: {$lte: 100}})` , `db.comments.find({age: {$gt: 100}})` , `db.comments.find({age: {$gte: 00}})`
