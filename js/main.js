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
"First, turn on the music by clicking the symbol on top-left... and then proceed",
"This is a story about a girl...",
"And a cat...",
"On August 30th, 1984, a baby was born to this world...",
"in a city from the far mystery east...",
"and it turned out she is a girl.",
"Then she was raised up in a happy family.",
"where she went to school like other kids...",
"and play like other kids",
"She is such a princess that everybody loves her so much.",
"Around the age of 18, she passed college entrance exam with excellent performance...",
"and started her college life majored in Medicine Science.",
"She travelled to a city (town) at south and spent her five years there...",
"There were stories happening during that time...",
"By the time she graduated, she made an important decision.",
"She decided to come to USA!!!",
"So she packed herself, walked cross continents, sailed through oceans...",
"and then she arrived at Boston...",
"where she continued to pursue her medical career in Psychoanalysis.",
"It was challenging. She came her by herself; English is not her first language; school system in USA is different; and many more... ",
"but she didn't give up and she worked hard...",
"while she also had fun with different activities...",
"such as car racing...",
"or, maybe motorbiking...",
"and most importantly, she had a new companion....",
"The wonderful cutie --- Yuki ~~",
"They had so much fun together...",
"They became so close to each other...",
"They are now a family...",
"Sometimes she could be like this",
"but it's OK and that's the way life is...",
"The story has come here so far...",
"and it continues...",
"Happy Birthday, my princess... Wish you be happy and beautiful, as always...",
"~ The End ~"
];

var backgroundImage = [
"",
"",
"",
"",
""
];

var getAnimation = function () {
	var animationTypes = ['fadeIn', 'fadeInDown', 'rotateIn', 'rotateInUpLeft', 'lightSpeedIn', 'flipInX', 'bounceIn','slideInDown','zoomInDown','tada', 'flipInY'];

	return animationTypes[Math.floor(Math.random() * (animationTypes.length))];
}


