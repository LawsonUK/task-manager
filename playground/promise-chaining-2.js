require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d06b1c6fe3af97445236d80')
// 	.then(task => {
// 		console.log(`Task ${task.description} deleted!`)
// 		return Task.countDocuments({ completed: false })
// 	})
// 	.then(result => {
// 		console.log(`${result} incompleted tasks remain.`)
// 	})
// 	.catch(e => {
// 		console.log(e)
// 	})

const deleteTaskAndCount = async id => {
	const deletedTask = await Task.findByIdAndDelete(id)
	const count = await Task.countDocuments({ completed: false })
	return count
}

deleteTaskAndCount('5d095fc95c982729c631dbe0')
	.then(count => {
		console.log(count)
	})
	.catch(e => {
		console.log(e)
	})
