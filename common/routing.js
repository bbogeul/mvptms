
Router.map(function(){
    // Specify a different template than 'home'
this.route('home', {
  path: '/',
  layoutTemplate: 'layout',
   action: function() {
    // this is an instance of RouteController
    // access to:
    //  this.params
    //  this.wait
    //  this.render
    //  this.stop
    //  this.redirect


    // render yieldTemplates
    this.render('header', {to: 'menu'});
    this.render('footer', {to: 'footer'});
    this.render('home');
       
  }
});
    this.route('about', {
  path: '/about-mvptms',
  layoutTemplate: 'layout',
   action: function() {
    // this is an instance of RouteController
    // access to:
    //  this.params
    //  this.wait
    //  this.render
    //  this.stop
    //  this.redirect


    // render yieldTemplates
    this.render('header', {to: 'menu'});
    this.render('footer', {to: 'footer'});
    this.render('about');
       
  }
});
   
});