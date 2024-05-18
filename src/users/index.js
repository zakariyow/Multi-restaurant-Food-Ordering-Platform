module.exports = (app, route = "/api/v1/user") => {
    app.use(route, require("./route"));
}