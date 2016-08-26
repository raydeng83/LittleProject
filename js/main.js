var i=0;

$(document).ready(function() {
	var audiot = new Audio("sound/1.mp3");

	$('#volume-symbol').click(function(e) {
		$(this).toggleClass('glyphicon-volume-up glyphicon-volume-off');

		if ($(this).hasClass('glyphicon-volume-up')) {
			audiot.play();
		} else {
			audiot.pause();
		}
	});

	$('#right-arrow').click(function(){
		if (i<messages.length-1) {
			$('#main-text').text(messages[++i]);
			$('#main-text').addClass('animated fadeInRightBig');

			setTimeout(function() {
				$('#main-text').removeClass('animated fadeInRightBig');
			}, 1000);

			$('body').css('background-image', 'url(image/'+backgroundImageUrl[i]+')');

			// audiot.play();
			
		}
	});

	$('#left-arrow').click(function(){

		if (i>0){
			$('#main-text').text(messages[--i]);

			$('#main-text').addClass('animated fadeInLeftBig');

			setTimeout(function() {
				$('#main-text').removeClass('animated fadeInLeftBig');
			}, 1000);

			$('body').css('background-image', 'url(image/'+backgroundImageUrl[i]+')');

		}
	})
});

var messages = [
"This is a story between a woman and a man...",
"This isThis is message twoThis is message two message two",
"This isThis is message two message three",
"This is meThis is message twoThis is message twoThis is message twoThis is message twoThis is message twoThis is message twossage four",
"This is message This is message twoThis is message twoThis is message twofive"
]

var backgroundImageUrl = [
"",
"1.jpg",
"2.jpg",
"",
""
]
