$(document).ready(function() {
	$('#tweet-controls').css('display', 'none');

	$('.tweet-compose').on('click', function() {
		$('#tweet-controls').css('display', 'block');
		$('.tweet-compose').css("height", "5em");
	});
	
	$('.tweet-compose').on('keydown', function() {
		var charLength = $(this).val().length + 1;
		var counter = 140 - charLength;
		$('#char-count').html(counter);
		if(counter < 11) {
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', '#999');
		}
		if(counter < 1) {
			$('button').prop('disabled', true);
		} else {
			$('button').prop('disabled', false);
		}
	});

	$('#tweet-submit').on('click', function() {
		var tweetMessage = $('#tweet-content').find('.tweet-compose').val();

		$('#stream').prepend(
			'<div class="tweet">'
				+ '<div class="content">'
					+ '<img class="avatar" src="img/alagoon.jpg" />'
					+'<strong class="fullname">My BFF</strong>'
					+'<span class="username">@mybff</span>'
					+'<p class="tweet-text">' + tweetMessage + '</p>'
					+'<div class="tweet-actions">'
						+'<ul>'
							+'<li><span class="icon action-reply"></span> Reply</li>'
							+'<li><span class="icon action-retweet"></span> Retweet</li>'
							+'<li><span class="icon action-favorite"></span> Favorite</li>'
							+'<li><span class="icon action-more"></span> More</li>'
						+'</ul>'
					+'</div>'
					+'<div class="stats">'
						+'<div class="retweets">'
							+'<p class="num-retweets">30</p>'
							+'<p>RETWEETS</p>'
						+'</div>'
						+'<div class="favorites">'
							+'<p class="num-favorites">6</p>'
							+'<p>FAVORITES</p>'
						+'</div>'
						+'<div class="users-interact">'
							+'<div>'
								+'<img src="img/alagoon.jpg" />'
								+'<img src="img/vklimenko.jpg" />'
							+'</div>'
						+'</div>'
						+'<div class="time">'
							+'1:04 PM - 19 Sep 13'
						+'</div>'
					+'</div>'
					+'<div class="reply">'
						+'<img class="avatar" src="img/alagoon.jpg" />'
						+'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>'
					+'</div>'
				+'</div>'
			+'</div>'//.tweet
			);
		});
		
		$('.tweet-actions li').css('display', 'none');
		$('.tweet').hover(function() {
			$(this).find('.tweet-actions li').css('display', 'inline-block')}, 
			function() {$(this).find('.tweet-actions li').css('display', 'none')
		});
		$('.stats').css('display', 'none');
		$('.tweet').on('click', function() {
			$('.stats').css('display', 'inline-block');
		})





});