// ./src/dataSources/_Users.js
import { MongoDataSource } from 'apollo-datasource-mongodb';

export default class Users extends MongoDataSource {
  async findOrCreateActive(query, userRecord, opts = {}) {
    let result = await this.collection.findOne(query, opts);
    if (result) {
      return result;
    } else {
      result = await this.collection.insertOne(userRecord);
      return result.ops[0];
    }
  }

  async loginUser(query, opts = {}) {
    let result = await this.collection.findOne(query, opts);
    if (result) {
      return result;
    } else {
      return false;
    }
  }
}
