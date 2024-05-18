module.exports = (app, route = "/api/v1/customer") => {
    app.use(route, require("./route"));
}