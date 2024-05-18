module.exports = (app, route = "/api/v1/orderItem") => {
    app.use(route, require("./route"));
}