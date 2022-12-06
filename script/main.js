let nubmerClick = 0;
let costnubmerClick = 0;
let opened = false;
let plusClick = 1;
let plusClick2 = 0;
let cost = 20;
let costTime = 40;
let allClick = 0;
let perContolInner = 0;

$('.restart__button').click(function () {
	nubmerClick = 0;
	costnubmerClick = 0;
	opened = false;
	plusClick = 1;
	plusClick2 = 0;
	cost = 20;
	costTime = 40;
	allClick = 0;
	perContolInner = 0;
	$('.h1').text('0');
	$('#perclick__header').text('0');
	$('#perclick__header2').text('0');
	$('#click').text('1');
	$('#cost').text('20');
	$('#costpre').text('40');

 });

$('.main__button').click(function () {
	allClick++;
	if(opened == false) {
		nubmerClick++;
		$('.h1').text(nubmerClick);
		$('#perclick__header').text(allClick);

	} else{
		allClick += plusClick2;
		nubmerClick += plusClick;
		$('.h1').text(nubmerClick);
		$('#perclick__header').text(allClick);
	}

	
 });

 
$('.buyClick__button').click(function () {
	if(nubmerClick >= cost){
	nubmerClick = nubmerClick - cost;
	plusClick++;
	plusClick2++;
	cost = cost * 2
	$('.h1').text(nubmerClick);
	$('#click').text(plusClick);
	$('#cost').text(cost);
	opened = true;
	}

 });

 $('#buypre__button').click(function () {
	if(nubmerClick >= costTime){
	nubmerClick = nubmerClick - costTime;
	costTime = costTime * 2
	$('.h1').text(nubmerClick);
	$('#costpre').text(costTime);
	opened = true;
	perContolInner++;
	$('#perclick__header2').text(perContolInner);
	setInterval(function perFuncional() {
		nubmerClick += perContolInner;
		$('.h1').text(nubmerClick);
	
	}, 1000);
	}

 });

