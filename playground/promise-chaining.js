require('../src/db/mongoose')
const User = require('../src/models/user')

// 5d06b149cf2e6b6ff1832265

// User.findByIdAndUpdate('5d0953724ebe0f681a8e4b08', {
// 	age: 1
// })
// 	.then(user => {
// 		console.log(user)
// 		return User.countDocuments({ age: 1 })
// 	})
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(e => {
// 		console.log(e)
// 	})

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, {
		age
	})
	const count = await User.countDocuments({ age })
	return count
}

updateAgeAndCount('5d0953724ebe0f681a8e4b08', 2)
	.then(count => {
		console.log(count)
	})
	.catch(e => {
		console.log(e)
	})
