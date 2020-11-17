// ./src/dataSources/_External.js
import { MongoDataSource } from 'apollo-datasource-mongodb';

export default class Articles extends MongoDataSource {
  async getAll(query, opts) {
    return await this.collection.find(query, opts).toArray()
  }

  createNew(doc, opts) {
    return new Promise((resolve, reject) => {
     this.collection.insertOne(doc, opts,
       (err, result) => {
        if (err) {
           reject(err)
          }
        resolve(result.ops[0])
      })
    })
  }
}