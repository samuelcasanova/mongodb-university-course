import { initialAccount, sampleAccounts } from './accounts'

// Require MongoDB language driver
const { MongoClient } = require('mongodb')

// Set the value of uri to your Atlas connection string.
const uri = 'mongodb://admin:password@localhost:27017'

// Create the MongoClient instance
const client = new MongoClient(uri)

// Establishes a connection to the database using the MongoClient instance
const main = async () => {
  try {
    await client.connect()
    console.log('Connected to MongoDB Atlas!')
    // list out all the databases in the cluster
    const dbs = await client.db().admin().listDatabases()
    console.table(dbs.databases)

    // Insert sample accounts into the database
    const accountsCollection = client.db('test').collection('accounts')
    const initialResult = await accountsCollection.insertOne(initialAccount)
    console.log('Initial account insertion result:', initialResult)
    const manyResult = await accountsCollection.insertMany(sampleAccounts)
    console.log('Sample accounts insertion result:', manyResult)

    // Find accounts in the database
    const accountsGreaterThan100k = await accountsCollection.find({ balance: { $gt: 100000 } }).toArray()
    console.log('Accounts with balance greater than 100,000:', accountsGreaterThan100k)
    const oneAccount = await accountsCollection.findOne({ account_id: 'MDB314159265'})
    console.log('Account with account_id MDB314159265:', oneAccount)
  } catch (error) {
    console.error(error)
  } finally {
    await client.close()
  }
}

// Run the main function, catch any errors and finally close the connection when the main function is done
main()
  .catch((err) => console.log(err))
  .finally(() => client.close())
