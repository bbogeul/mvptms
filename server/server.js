if (Meteor.isServer) {
  Blog.config({
    adminRole: 'blogAdmin',
    authorRole: 'blogAuthor'
  });
     Blog.config({
    comments: {
      useSideComments: true,
      allowAnonymous: true
    }
  });
    
}