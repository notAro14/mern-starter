const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 4001;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../dist')));

  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`✨ Server is running on port ${PORT}.`));
