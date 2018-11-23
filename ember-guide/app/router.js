import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
  this.route("howGenerateComponent");
  this.route('train');
  this.route('yield-example');
  this.route('component-guide', function() {
    this.route('generate');
  });
});

export default Router;
