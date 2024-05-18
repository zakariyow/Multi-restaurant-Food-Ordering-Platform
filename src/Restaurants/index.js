module.exports = (app, route = "/api/v1/restaurants") => {
    app.use(route, require("./route"));
}