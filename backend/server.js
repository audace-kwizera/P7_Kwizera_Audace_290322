const express = require('express');
const app = express();
const port = 3000;

/* Afficher la liste des messages */
app.get('/messages', (req, res) => {
    const messages =  [
        { id: 1, label: 'My very' },
        { id: 2, label: 'My First' },
        { id: 3, label: 'Messages' }
    ];
    res.send(messages);
});

app.listen(port, () => console.log('app running'))