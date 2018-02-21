$(function(){
    $("#headerSection").load("header.html");
    $("#home").load("pages/home.html");
    $("#aboutMe").load("pages/about.html");
    $("#timeline").load("pages/timeline.html");
    $("#skillSets").load("pages/skills.html");
    $("#project").load("pages/project.html");
    $("#blog").load("pages/blog.html");
    $("#contactMe").load("pages/contact.html");
    $("#footerSection").load("footer.html");
});

function viewMorePosts(){
    $('#more_post').css('display','block');
    $('#view_post').css('display','none');
}

function showLess(){
    $('#view_post').css('display','block');
    $('#more_post').css('display','none');
}

/** Twitter Script **/
    window.twttr = (function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0],
	    t = window.twttr || {};
	  if (d.getElementById(id)) return t;
	  js = d.createElement(s);
	  js.id = id;
	  js.src = "https://platform.twitter.com/widgets.js";
	  fjs.parentNode.insertBefore(js, fjs);

	  t._e = [];
	  t.ready = function(f) {
	    t._e.push(f);
	  };

	  return t;
	}(document, "script", "twitter-wjs"));
/** End Twitter Script **/