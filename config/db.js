const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://henri:AgAaKwAAAQcjJjKC@cluster0.3nya8.mongodb.net/mern-project",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB" + err));
