var quotes = {
quote0: '"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."- Martin Golding',
quote1: '"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program." - Linus Torvalds',
quote2: '"To iterate is human, to recurse divine." - L. Peter Deutsch',
quote3: '"Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves." - Alan Kay',
quote4: '"Measuring programming progress by lines of code is like measuring aircraft building progress by weight." - Bill Gates',
quote5: '"People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones." - Donald Knuth',
quote6: '"Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris." - Larry Wall',
quote7: '"The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability." - Randall E. Stross',
quote8: '"If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, \'We\'re sorry, here\'s a coupon for two more.\' " - Mark Minasi',
quote9: '"Beware of bugs in the above code; I have only proved it correct, not tried it." - Donald E. Knuth',
  randQuote: function() {
    var randNum = Math.floor(Math.random() * (10));
    return quotes["quote"+randNum];
  }
}


function genbtn() {
  var theQ = quotes.randQuote();
  return theQ;  
}

function q(a) {
 var q = a; document.getElementById("quotep").innerHTML = q;
}

function load() {
  var x = document.getElementById("quotep");
  x.innerHTML = "Press the button to get a quote about programming!"
}

$('.btn').on('click', function(ev) {
  var url = document.URL;
    ev.preventDefault();
    // Remove existing iframe
    $('#container iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-size', 'large')
        .attr('data-url', url)
        .attr('data-text', document.getElementById("quotep").innerHTML + " ...Get more cool quotes at " + url);
    $('#container').append(tweetBtn);
    twttr.widgets.load();
});
