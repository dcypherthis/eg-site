import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route(`free-lessons`, {
    path: `/:free_lesson_id`
  });

  this.route(`course-previews`, function () {
    this.route(`detail`, {
      path: `/:course_abstract_id`
    });
  });

  this.route(`signup`);
  this.route(`login`);
  this.route(`forgot-password`);
});

export default Router;
