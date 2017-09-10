var quote = "quote";
var author = "author";

function replace() {
  var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
  var x = document.getElementsByClassName("_2pie");
  // fetch_quote();
  x[0].innerHTML = 'quote';

  // this also hides the friends activities
  // feed.children().remove();
  // $('.ticker_stream').remove();
  // $('.ego_column').remove();
  // $('#pagelet_games_rhc').remove();
  // $('#pagelet_trending_tags_and_topics').remove();
  // $('#pagelet_canvas_nav_content').remove();
}

function fetch_quote() {
  const url = "http://quotes.rest/qod.json";
  // $.get(url, function (data) {
  //   quote = (data.contents.quotes[0].quote);
  //   author = (data.contents.quotes[0].author);
  // });
  console.log(quote);
  console.log(author);
};

window.setInterval(replace, 100);
fetch_quote()
