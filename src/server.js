const express = require('express');
const configuration = require("./config/db");
const env = require('dotenv');
const route = require('./routes/UserRoutes');
const courseRouter = require('./routes/CoursesRoute')

const app = express();
const PORT = 3000;

//ramizbawwab76

env.config();

configuration();
app.use(express.json());

app.use("/api/auth",route);
app.use('/api/course' , courseRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



