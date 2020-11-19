// ./src/dataSources/_Users.js
import { MongoDataSource } from 'apollo-datasource-mongodb';

export default class Users extends MongoDataSource {
  async loginUser(query, opts = {}) {
    const result = await this.collection.findOne(query, opts);
    return result || false;
  }

  async createUser(userRecord) {
    const result = await this.collection.insertOne(userRecord);
    return result ? result.ops[0] : false;
  }
}
