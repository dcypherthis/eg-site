import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

/* eslint array-callback-return: 0 */
Router.map(function () {
  this.route('free-lessons', { path: 'free-lesson/:free_lesson_id' });

  this.route('course-previews', function coursePreview() {
    this.route('detail', { path: '/:course_abstract_id' });
  });

  this.route('signup');
  this.route('login');
  this.route('forgot-password');

  this.route('license');

  this.route('account', function () {
    this.route('purchases');
  });

  this.route('reset-password', { path: 'password/reset' });

  this.route('course-purchase', {
    path: '/course-purchase/:course_abstract_id',
  });

  this.route('courses', function () {
    this.route('detail', { path: '/:purchased_course_id' }, function () {
      this.route('lesson', { path: '/lessons/:lesson_id' });
    });
  });
});

export default Router;
