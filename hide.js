var quote = "";
var author = "";


function replace() {
  var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
  var x = document.getElementsByClassName("_2pie");
  // fetch_quote();
  var html = `${quote} by ${author}`;
  x[0].innerHTML = html;

  // this also hides the friends activities
  // feed.children().remove();
  // $('.ticker_stream').remove();
  // $('.ego_column').remove();
  // $('#pagelet_games_rhc').remove();
  // $('#pagelet_trending_tags_and_topics').remove();
  // $('#pagelet_canvas_nav_content').remove();
}

// function build_HTML(tag, html, attrs) {
//   if (typeof(html) != 'string') {
//     attrs = html;
//     html = null;
//   }
//   var h = '<' + tag;
//   for (attr in attrs) {
//     if(attrs[attr] === false) continue;
//     h += ' ' + attr + '="' + attrs[attr] + '"';
//   }
//   return h += html ? ">" + html + "</" + tag + ">" : "/>";
// }

function fetch_quote() {
  const url = "";
  fetch("https://talaikis.com/api/quotes/random/")
  .then(function(data) {
    let res = data.json();
    res.then(function(result) {
      quote = result.quote;
      author = result.author;
    })
  })
  .catch(function(error) {
    console.log(error);
  });
};
fetch_quote();
window.setInterval(replace, 100);
