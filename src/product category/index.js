module.exports = (app, route = "/api/v1/productCategory") => {
    app.use(route, require("./route"));
}