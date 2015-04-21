import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
    this.route('questions', {path: '/questions'});
    this.resource('question', { path: '/questions/:question_id' });
    // As a note these have nothing to do with retrieving a solution bound
    // to a question. They are only for setting up solution only endpoints
    this.route('solutions', {path: '/solutions'});
    this.resource('solution', { path: '/solutions/:solution_id' });
});
