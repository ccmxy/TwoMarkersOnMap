import Ember from 'ember';

export default Ember.Route.extend({
  //apparently this function doesn't need to be called "model"
  // but still must be referred to that way
  model(params) {
    window.parent.$("ul#nav navbar-nav").append("<li>" + "pizza.toppings[i]" + "</li>");
    var theListing = this.store.findRecord('listing', params.listing_id);
    //window.parent.$(".goesHere").text("test");

    return this.store.findRecord('listing', params.listing_id);
  }
});
