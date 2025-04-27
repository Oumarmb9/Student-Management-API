const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./dbConfig');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config(); 

const app = express();

app.use(express.json()); 

app.use('/students', studentRoutes);


connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});