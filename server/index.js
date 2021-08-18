const express = require('express')
const cors = require('cors')

const app = (express());

app.use(express.json());
app.use(cors());

const ctrl1 = (require('./controller.js'));
const ctrl2 = (require('./controller2.js'));

app.get('/api/social_media', ctrl1.getAllPOSTS);
app.post('/api/social_media', ctrl1.createPOST);
app.delete('/api/social_media/:id', ctrl1.deletePOST);

app.get('/api/social_media', ctrl2.getUsers);
app.post('/api/social_media', ctrl2.createUser);
app.delete('/api/social_media/:id', ctrl2.deleteUser);


app.listen(4004, () => console.log('Up and running on 4004!'));