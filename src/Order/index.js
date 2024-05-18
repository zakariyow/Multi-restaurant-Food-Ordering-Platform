module.exports = (app, route = "/api/v1/order") => {
    app.use(route, require("./route"));
}