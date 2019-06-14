// CRUD
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database!')
		}
		const db = client.db(databaseName)

		db.collection('users').findOne(
			{ _id: new ObjectID('5cfeaf2b26e24019692c1cb9') },
			(error, user) => {
				if (error) {
					return console.log('Unable to fetch')
				}
				if (user) {
					return console.log(user)
				}

				return console.log('Unable to find user')
			}
		)

		db.collection('users')
			.find({ age: 34 })
			.toArray((error, users) => {
				if (error) {
					return console.log('Unable to fetch')
				}

				if (users) {
					return console.log(users)
				}

				return console.log('Unable to find users')
			})

		db.collection('users')
			.find({ age: 34 })
			.count((error, count) => {
				if (error) {
					return console.log('Unable to determine count')
				}

				if (count) {
					return console.log(count)
				}

				return console.log('No records exist')
			})

		db.collection('tasks').findOne(
			{
				_id: new ObjectID('5cfeb03a2afd9124fe9be1dd')
			},
			(error, task) => {
				if (error) {
					return console.log('Unable to fetch')
				}

				if (task) {
					return console.log(task)
				}

				return console.log('No tasks found')
			}
		)

		db.collection('tasks')
			.find({ completed: false })
			.toArray((error, tasks) => {
				if (error) {
					return console.log('Unable to fetch')
				}

				if (tasks) {
					return console.log(tasks)
				}

				return console.log('No tasks found')
			})

		// db.collection('users')
		// 	.updateOne(
		// 		{
		// 			_id: new ObjectID('5cfd4dd63045d231cf04a6c0')
		// 		},
		// 		{
		// 			$inc: {
		// 				age: 1
		// 			}
		// 		}
		// 	)
		// 	.then(result => {
		// 		console.log(result)
		// 	})
		// 	.catch(error => {
		// 		console.log(error)
		// 	})

		// db.collection('tasks')
		// 	.updateMany(
		// 		{ completed: false },
		// 		{
		// 			$set: {
		// 				completed: true
		// 			}
		// 		}
		// 	)
		// 	.then(result => {
		// 		console.log('Success!', result)
		// 	})
		// 	.catch(error => {
		// 		console.log('Error! ', error)
		// 	})

		// db.collection('users')
		// 	.deleteMany({
		// 		age: 35
		// 	})
		// 	.then(result => {
		// 		console.log(result)
		// 	})
		// 	.catch(error => {
		// 		console.log('Error! ', error)
		// 	})

		db.collection('tasks')
			.deleteOne({
				description: 'Clean the kitchen'
			})
			.then(result => {
				console.log(result)
			})
			.catch(error => {
				console.log(error)
			})
	}
)
