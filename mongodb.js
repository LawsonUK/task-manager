// CRUD
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// generate new guid
const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database!')
		}
		const db = client.db(databaseName)
		// db.collection('users').insertOne(
		// 	{
		// 		_id: id,
		// 		name: 'Marion',
		// 		age: 68
		// 	},
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert user!')
		// 		}
		// 		console.log(result.ops)
		// 	}
		// )
		// db.collection('users').insertMany(
		// 	[
		// 		{
		// 			name: 'Claire',
		// 			age: 30
		// 		},
		// 		{
		// 			name: 'Phil',
		// 			age: 38
		// 		}
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert documents!')
		// 		}
		// 		console.log(result.ops)
		// 	}
		// )

		// db.collection('tasks').insertMany(
		// 	[
		// 		{
		// 			description: 'Go to Asda',
		// 			completed: true
		// 		},
		// 		{
		// 			description: 'Clean the kitchen',
		// 			completed: true
		// 		},
		// 		{
		// 			description: 'Go to bed',
		// 			completed: false
		// 		}
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert tasks!')
		// 		}

		// 		console.log(result.ops)
		// 	}
		// )
	}
)
