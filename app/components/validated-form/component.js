import Ember from 'ember';
import BufferedProxy from 'ember-buffered-proxy/proxy';
import Validator from 'npm:validatorjs';

export default Ember.Component.extend({
  tagName: 'form',

  formValues: null,

  errors: {},

  rules: {},
  messages: {},

  didReceiveAttrs() {
    this._super(...arguments);
    let startingValues = this.getAttr(`startingValues`) || {};
    let formValues = BufferedProxy.create({content: startingValues});

    this.set(`formValues`, formValues);
  },

  resetForm() {
    this.get(`formValues`).discardBufferedChanges();
  },

  submit(ev) {
    ev.preventDefault();
    this.set(`errors`, {});

    const data = this.get(`formValues.buffer`);
    const val = new Validator(data, this.get(`rules`), this.get(`messages`));

    if (val.fails()) {
      this.set(`errors`, val.errors);
      this.sendAction(`onerror`, val.errors);
    } else {
      this.sendAction(`onsubmit`, data, this.resetForm.bind(this));
    }
  },
});
