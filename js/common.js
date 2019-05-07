$(function () {
  $("#headerSection").load("pages/header.html");
  $("#home").load("pages/home.html");
  $("#aboutMe").load("pages/about.html");
  $("#timeline").load("pages/timeline.html");
  $("#skillSets").load("pages/skills.html");
  $("#project").load("pages/project.html");
  $("#blog").load("pages/blog.html");
  $("#contactMe").load("pages/contact.html");
  $("#footerSection").load("pages/footer.html");
});

function viewMorePosts() {
  $('#more_post').css('display', 'block');
  $('#view_post').css('display', 'none');
}

function showLess() {
  $('#view_post').css('display', 'block');
  $('#more_post').css('display', 'none');
}