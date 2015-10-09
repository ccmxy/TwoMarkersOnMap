import Ember from 'ember';

export default Ember.Component.extend({
  areDetailsShowing: false,
  actions: {
    detailsShow: function(){
      this.set('areDetailsShowing', true);
    },
    detailsHide: function() {
      this.set('areDetailsShowing', false);
    },
  delete(listing) {
      if (confirm('Are you sure you want to delete this listing?')) {
        this.sendAction('destroyListing', listing);
      }
    }
  }
});
