/**
 * Module dependencies.
 */
import * as express from "express";
import * as path from "path";
import * as notFound from './controllers/utils/notfound'
import * as testapi from './controllers/api/test';

/**
 * Create Express server.
 */
const app = express();
const router: express.Router = express.Router();


/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
// app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

router.use('/toto', testapi.router);
// app.get('/*', notFound.send404);
app.use(router);

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

module.exports = app;