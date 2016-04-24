import Ember from 'ember';

export function newest([items]/*, hash*/) {
  const data = items.sortBy(items, (item) => {
    return Ember.get(item, 'created-at');
  });

  return Ember.get(data, 'firstObject');
}

export default Ember.Helper.helper(newest);
