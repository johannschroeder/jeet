(function() {
  var client, didResize, equalColumns, equalHeightColumns;

  if ($("html").hasClass("no-touch") && $(window).width() >= 1024) {
    $('.grid-toggle').click(function() {
      $(".landing-page").toggleClass("grid-visible");
      if (!$('body').hasClass("grid-visible")) {
        $('.grid-toggle').removeAttr('data-scroll-goto');
      } else {
        $('.grid-toggle').attr({
          'data-scroll-goto': 1
        });
      }
    });
    equalHeightColumns = function() {
      return $(".half, .third, .fourth, .third:before").matchHeight();
    };
    equalHeightColumns();
    didResize = null;
    $(window).resize(function() {
      didResize = true;
    });
    setInterval((function() {
      if (didResize) {
        didResize = false;
        equalHeightColumns();
      }
    }), 50);
    equalColumns = function() {
      return setTimeout(equalHeightColumns, 100);
    };
    $('.toggle-api').click(function() {
      return equalColumns();
    });
  }

  ZeroClipboard.config({
    debug: false
  });

  client = new ZeroClipboard($(".copy-btn"), {
    moviePath: "js/ZeroClipboard.swf"
  });

  $(".fancybox").fancybox({
    helpers: {
      media: true
    },
    aspectRatio: true,
    scrolling: "no"
  });

  $("#menu").slicknav({
    label: ""
  });

  $(".scrollTo-mobile").click(function() {
    return $("#menu").slicknav("close");
  });

  FastClick.attach(document.body);

  $.scrollIt();

  browserBlast();

  $.get("http://github.cache.mojotech.com/repos/mojotech/jeet/commits").done(function(commits) {
    $(".latest-commit-link").attr("href", commits[0].html_url);
    $(".latest-commit-link").html(commits[0].commit.message);
  });

  (function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments);
    };
    i[r].l = 1 * new Date();
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");

  ga("create", "UA-5925457-16", "jeet.gs");

  ga("send", "pageview");

}).call(this);
