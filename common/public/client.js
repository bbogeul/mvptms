// JavaScript
if (Meteor.isClient) {
  Blog.config({
    blogIndexTemplate: 'blogList',
    blogShowTemplate: 'blogDetail',
    blogLatest: 'myLatest'
  });
}