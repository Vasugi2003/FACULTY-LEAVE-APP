const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/leaverequest', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected successfully');
}).catch((err) => {
  console.log('Error connecting to database:', err);
});
