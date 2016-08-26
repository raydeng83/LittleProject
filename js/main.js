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
			var animated = getAnimation();

			i++
			// $('body').css('background-image', 'url(image/'+backgroundImageUrl[i]+')');

			$('#main-image').attr('src','image/main/'+(i+1)+'.jpg');
			$('#main-image').addClass('animated '+animated);

			$('#main-text').text(messages[i]);
			$('#main-text').addClass('animated '+animated);

			setTimeout(function() {
				$('#main-text').removeClass('animated '+animated);
				$('#main-image').removeClass('animated '+animated);

			}, 1000);

			// audiot.play();
		}
	});

	$('#left-arrow').click(function(){

		if (i>0){
			var animated = getAnimation();

			i--
			// $('body').css('background-image', 'url(image/'+backgroundImage[i]+')');
			$('#main-image').attr('src','image/main/'+(i+1)+'.jpg');
			$('#main-image').addClass('animated '+animated);

			$('#main-text').text(messages[i]);
			$('#main-text').addClass('animated '+animated);

			setTimeout(function() {
				$('#main-text').removeClass('animated '+animated);
				$('#main-image').removeClass('animated '+animated);
			}, 1000);

		}
	})
});

var messages = [
"This is a story between a woman and a man...",
"You may think of Prince and Princess...",
"Or Beauty and Beast...",
"This is meThis is message twoThis is message twoThis is message twoThis is message twoThis is message twoThis is message twossage four",
"This is message This is message twoThis is message twoThis is message twofive"
];

var backgroundImage = [
"",
"",
"",
"",
""
];

var mainImage = [
"1.jpg",
"2.jpg",
"3.jpg"
];

var getAnimation = function () {
	var animationTypes = ['fadeIn', 'fadeInDown', 'rotateIn', 'rotateInUpLeft', 'lightSpeedIn', 'flipInX', 'bounceIn'];

	return animationTypes[Math.floor(Math.random() * (animationTypes.length))];
}


