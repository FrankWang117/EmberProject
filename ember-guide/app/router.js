import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
    this.route('howGenerateComponent');
    this.route('train');
    this.route('yield-example');
    this.route('component-guide', function () {
        this.route('generate');
        this.route('basis-use');
        this.route('lifecycle');
        this.route('passing-properties');
        this.route('customizing');
        this.route('handing-events');
        this.route('split');
        this.route('other');
    });
    this.route('object-guide', function () { });
    this.route('js-handbook', function () {
        this.route('es6');
    });
    this.route('bs-guide', function () {
        this.route('layout');
    });
    this.route('send-action', function () {
      this.route('stone-age');
      this.route('current-method');
    });
});

export default Router;