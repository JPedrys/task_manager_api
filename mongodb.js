// CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb');

//const connectionURL =  'mongodb://127.0.0.1:27017';
const databaseName = 'task_manager';


MongoClient.connect(process.env.MONGODB_URL, {useNewURLParser: true}, (error, client) => 
{
    if (error)
    {
        return console.log('Unable to connect to the database!');
    }
    
    const db = client.db(databaseName);

    // db.collection('Users').deleteMany(
    //     {
    //         age: 25
    //     }
    // ).then((result) =>
    // {
    //     console.log(result)
    // }).catch((error) =>
    // {
    //     console.log(error);
    // })

    db.collection('Tasks').deleteOne(
        {
            description: 'Clean House'
        }
    ).then((result) =>
    {
        console.log(result);
    }).catch((error) =>
    {
        console.log(error);
    });
});
