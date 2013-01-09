site.Router = Backbone.Router.extend({
  routes: {
    'home' : 'home',
    'about' : 'about',
    'contact': 'contact'
  },

  home: function(){

  }
});

$(function(){
  site.router = new site.Router();
  Backbone.history.start({pushState: false});
});