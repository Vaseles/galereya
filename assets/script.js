const massive = ["assets/img/pin (1).jpg", "assets/img/pin (2).jpg", "assets/img/pin (3).jpg", "assets/img/pin (4).jpg", "assets/img/pin (5).jpg", "assets/img/pin (6).jpg", "assets/img/pin (7).jpg", "assets/img/pin (8).jpg", "assets/img/pin (9).jpg"];


const pins = document.querySelectorAll(".pin");
//кидаем каждому имэджу по фото
for (let i = 0; i<pins.length; i++) {
	$(pins[i]).attr("src", massive[i]);
}

//выбираем фото
$(document).ready(function(){
	$(".img1").click(function() {
		$(".galery__img").attr("src", massive[0]);
	});
	$(".img2").click(function() {
		$(".galery__img").attr("src", massive[1]);
	});
	$(".img3").click(function() {
		$(".galery__img").attr("src", massive[2]);
	});
	$(".img4").click(function() {
		$(".galery__img").attr("src", massive[3]);
	});
	$(".img5").click(function() {
		$(".galery__img").attr("src", massive[4]);
	});
	$(".img6").click(function() {
		$(".galery__img").attr("src", massive[5]);
	});
	$(".img7").click(function() {
		$(".galery__img").attr("src", massive[6]);
	});
	$(".img8").click(function() {
		$(".galery__img").attr("src", massive[7]);
	});
	$(".img9").click(function() {
		$(".galery__img").attr("src", massive[8]);
	});
});

//делаем супер эффекты
//brightness
let cout = 100;
$(document).ready(function() {
	$(".minus__brightness").click(function() {
		if (cout>20) {
			cout-=10;
		}
		$(".galery__home").css("filter",`brightness(${cout}%)`);
	});
	$(".plus__brightness").click(function() {
		if (cout<100) {
			cout+=10
		} 
		$(".galery__home").css("filter",`brightness(${cout}%)`);
	});
});

//gray
let gray = 0;
$(document).ready(function() {
	$(".minus__gray").click(function() {
		if (gray>20) {
			gray-=10;
		}
		$(".galery__home").css("filter",`grayscale(${gray}%)`);
	});
	$(".plus__gray").click(function() {
		if (gray<100) {
			gray+=10
		} 
		$(".galery__home").css("filter",`grayscale(${gray}%)`);
	});

	//sepia
	let sepia = 0;
	$(".minus__sepia").click(function(){
		if (sepia>0) {
			sepia-=10;
		}
		$(".galery__home").css("filter", `sepia(${sepia}%)`);
	});
	$(".plus__sepia").click(function() {
		if ( sepia<100 ) {
			sepia+=10;
		}
		$(".galery__home").css("filter", `sepia(${sepia}%)`);
	});
});