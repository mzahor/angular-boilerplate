'use strict';

import express from 'express';
import morgan from 'morgan';

export default function testServer({ port, dir }) {

    const app = express();

    app.use(morgan('dev'));
    app.use(express.static(dir));

    app.get('/api/movies/', function(req, res) {
        res.send([
            {
                name: 'Superman',
            }, {
                name: 'Ironman',
            }
        ]);
    });

    return new Promise((res, rej) => {
        const server = app.listen(port, () => res(server));
    });

}
