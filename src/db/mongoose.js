const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task_manager_api',
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// const userOne = new User({
//     name: 'Josh',
//     email: 'myemail@mead.io',
//     password: 'fantasticps'
// });

// userOne.save().then(() => 
// {
//     console.log(userOne);
// }).catch((error) =>
// {
//     console.log('Error', error);
// })


// const taskOne = new Task({
//     description: 'wash car'
// });

// taskOne.save().then(() =>
// {
//     console.log(taskOne);
// }).catch((error) =>
// {
//     console.log('Error!', error);
// });