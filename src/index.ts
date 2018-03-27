import {bootstrap} from "vesper";
import {PostController} from "./controller/PostController";
import {Post} from "./entity/Post";

bootstrap({
    port: 3000,
    controllers: [
        PostController
    ],
    entities: [
        Post
    ],
    schemas: [__dirname + "/schema/**/*.graphql"]
}).then(() => {
    console.log("Your app is up and running on http://localhost:3000 . " +
        "You can use Playground in development mode on http://localhost:3000/playground");

}).catch(error => {
    console.error(error.stack ? error.stack : error);
});