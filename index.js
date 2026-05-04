const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server hidup 🚀');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Jalan di port ' + PORT);
});
