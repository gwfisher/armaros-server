import express from 'express';

import ansible from 'node-ansible';
const { AdHoc, Playbook } = ansible;


const app = express();
const port = 3001;

app.get('/status', (req, res) => {
    var command = new AdHoc().hosts('domain').module('ping');
    var promise = command.exec();

    promise.then(function(result) {
        var pong = JSON.parse(result.output);

        res.send(pong);
    })
    
  });

app.listen(port, () => {
  console.log("Running")
});
