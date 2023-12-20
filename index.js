import express from 'express';
import { MongoClient } from 'mongodb';

const port = 3000;
const app = express();
//connect to database
const uri = "mongodb+srv://Gilbert:V89EKOUwRu3x41sO@1.h0mvxrz.mongodb.net/users";

let db;

(async function () {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        //log in console that you have connected to MongoDB
        console.log('Connected to MongoDB.');
        
        db = client.db("users");
        //Creates a new collection in the db called users
        await db.createCollection("Users");
        //Add a username named Jay age 25 to the users database
        await db.collection('Users').insertOne({ name: "Jay", age: 25 });
        await db.collection('Users').insertOne({ name: "Xavier", age: 21 });

    } catch (err) {
        console.error('Error occurred while connecting to MongoDB:', err);
    }
})();

app.get('/', async (req, res) => {
    try {
        //Gets users in database
        const users = await db.collection('Users').find().toArray();

        res.send(users);
    } catch (err) {
        console.error('Error', err);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
