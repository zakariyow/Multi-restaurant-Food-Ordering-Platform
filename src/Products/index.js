module.exports = (app, route = "/api/v1/product") => {
    app.use(route, require("./route"));
}