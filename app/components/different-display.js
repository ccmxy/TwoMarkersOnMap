import Ember from 'ember';

export default Ember.Component.extend({
  showList: true,
  showThumbnail: false,
  showGallery: false,
  actions:{
    thumbnailFormShow() {
      this.set('showGallery', false),
      this.set('showList', false),
      this.set('showThumbnail', true);
    },
    listFormShow() {
      this.set('showGallery', false),
      this.set('showList', true),
      this.set('showThumbnail', false);
    },
    galleryFormShow() {
      this.set('showGallery', true),
      this.set('showList', false),
      this.set('showThumbnail', false);
    }
  }
});
