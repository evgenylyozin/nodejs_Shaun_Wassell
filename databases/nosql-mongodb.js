import { MongoClient } from "mongodb"
import fsBase from 'fs'
const fs = fsBase.promises
import path from "path"

const newProductsString = await fs.readFile(path.resolve('./databases/products.txt'), 'utf-8')
console.log(newProductsString)
const newArrayOfProducts = newProductsString.split(',')
console.log(newArrayOfProducts)
const client = await MongoClient.connect(
  'mongodb://localhost:27017',
  { useUnifiedTopology: true }
)

const db = client.db('node-course-shaun-wassell')

for (let productName of newArrayOfProducts) {
  await db.collection('products').insertOne({
    name: productName
  })
}

const currentProducts = await db.collection('products').find({}).toArray()

console.log(currentProducts)

await client.close()