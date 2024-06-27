const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Opika",
    });

    // Ensure the database and User collection exist by creating a dummy user if necessary
    const db = mongoose.connection.db;
    const collections = await db.listCollections({ name: "users" }).toArray();
    if (collections.length === 0) {
      await db.collection("users").insertOne({
        name: "John Doe",
        email: "jane.doe@example.com",
        bio: "Experienced backend developer.",
        profilePicture: "https://example.com/dummy.jpg",
      });
      console.log("User collection created with a dummy document");
    } else {
      console.log("DB Already exists");
    }

    console.log(
      "Database connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
