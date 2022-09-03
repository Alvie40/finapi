const express = require('express');
const cors = require('cors');
const { v4: uuidV4 } = require('uuid');

const app = express();


app.get('/', (request, response) =>
    {
        response.json({ message: 'Hello World' });
    })



app.listen(3333, () => console.log('🚀Server at port 3333'));
