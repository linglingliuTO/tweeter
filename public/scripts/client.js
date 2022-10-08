/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(function () {

// loading database 

 

  const createTweetElement = (tweetData) => {
    /* Your code for creating the tweet element */
    const format_time = timeago.format(tweetData.created_at); 
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    
    const markup =
      `
 <div class="tweets-border">
  <div class="tweet-name">
      <div>${tweetData.user.name}</div>
      <div>${tweetData.user.handle}</div>
  </div>

     <p>${escape(tweetData.content.text)}</p> 
  <footer>
  <div>${format_time}</div>
  <div>

  <i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
</div>
</footer>
</div>
 `
    return markup
  }

  const renderTweets = function (data) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('.tweets-container').empty();
    for (tweetData of data) {
      const $tweet = createTweetElement(tweetData);
      $('.tweets-container').prepend($tweet);
    }

  }
 


  const loadtweets = function () {
    $.ajax('/tweets', { method: 'GET' })
      .then(function (data,status) {
        renderTweets(data)
  });
  }


  $( "#submit-tweet" ).submit(function( event ) {
   
        event.preventDefault();
     
        const submitted_Data = $(this).find('#tweet-text').val();
        if (submitted_Data === '') {
          alert('You have submitted an empty field')
          return 
        } 
        
        if (submitted_Data.length > 140) {
          alert('You have submitted more than 140 charaters')
          return 
        } 
        
          let data = $(this).serialize()
          $.post('/tweets', data)
            .then(() => {
              $(this).find('#tweet-text').val('');
              loadtweets();
            })
     
  });

  loadtweets()

})

