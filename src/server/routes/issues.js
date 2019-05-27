const os = require("os");
const Repository = require('repository');
const { UserError } = require('errors.js');

const Mapper = require('issues/mapper');

function listIssues(req, res) {
    res.send(Repository.getIssues().map(Mapper.mapIssueToView));
}

function setIssueState(req, res) {
    const { id } = req.params;
    const newState = req.body.state;

    Repository.setState(id, newState).then( () => {
        res.sendStatus(204);
    }).catch( (err) => {
        if (err instanceof UserError) {
            res.send(err.json()).status(422);
        } else {
            res.sendStatus(500);
        }
    });

}


module.exports = function routes(app) {
    console.log("Initializing routes");

    app.get('/api/issues', listIssues);
    app.put('/api/issues/:id/state', setIssueState);

    // example endpoint from template
    app.get("/api/getUsername", (req, res) => res.send({ username: os.userInfo().username }));
};
