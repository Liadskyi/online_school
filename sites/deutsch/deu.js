let num = 1
function open_menu() {
	num++
	if (num%2==0) {
		$("#menu").css("opacity","100")
		$("#menu").css("animation-name","menu_animation")
		$("#m_item_container").css("animation-name","opacity")
		$("#menu").css("z-index","10")
		if (num%2==0) {
		$("#lang").css("z-index","9")
	}
	}
	else{
		$("#menu").css("animation-name","close_menu")
		$("#m_item_container").css("animation-name","opacity_off")
	}
}
function close_menu() {
	if (num%2==0) {
		num++
		$("#menu").css("animation-name","close_menu")
		$("#m_item_container").css("animation-name","opacity_off")
		}
	if (num3%2==0) {
		num3++
		$("#lang").css("animation-name","lang_close")
		$("#lang_block").css("animation-name","lang_block_close")
		}
}
let num2 = 1
function programes1(element) {
	$("#second").css("background","none")
	$("#third").css("background","none")
	$("#second").children().css("color","white")
	$("#third").children().css("color","white")
	element.style.background="white"
	$("#first").children().css("color","black")
	$("#program_textP").html('-Вы 1 на 1 с вашим преподавателем.<br>-Преподаватель будет уделять все внимание вам на ваших уроках.<br>-Преподаватель будет отвечать на ваши вопросы быстро и качественною.')
}
function programes2(element) {
	$("#first").css("background","none")
	$("#third").css("background","none")
	$("#first").children().css("color","white")
	$("#third").children().css("color","white")
	element.style.background="white"
	$("#second").children().css("color","black")
	$("#program_textP").html('-Вы занимаетесь в группе с 4 людьми<br>-Вы можете общатся и обсуждать вопросы с участниками группы<br>-Цена ниже чем у индивидкального курса')

}
function programes3(element) {
	$("#second").css("background","none")
	$("#first").css("background","none")
	$("#first").children().css("color","white")
	$("#second").children().css("color","white")
	element.style.background="white"
	$("#third").children().css("color","black")
	$("#program_textP").html("-Преподают учителя, которые умеют подавать материал детям<br>-Преподаватель заинтересует ребенка в изучении языка<br>-Обучения доступно детям с пяти лет")
}
function check_email() {
	let = email = $("#email")
	if (email.val().match("[A-z 0-9]{3}@gmail.com")) {
		$("#email_err").css("opacity","0")
		console.log(true)
	}
	else{
		$("#email_err").css("opacity","100")
	}
	 check_name()
}
function check_name() {
	let name = $("#name")
	if (name.val().match("[A-Z]{1}[a-z]{3}")) {
		$("#name_err").css("opacity","0")
		console.log(true)
	}
	else{
		$("#name_err").css("opacity","100")
	}
	check_num()
}
function check_num() {
	let nummer = $("#nummer")
	if (nummer.val().match("^\\+380[0-9]{9}")) {
		$("#nummer_err").css("opacity","0")
		console.log(true)
	}
	else{
		$("#nummer_err").css("opacity","100")
	}
}
function li1(li) {
	$("#photo").attr("src","../../photoes/online_deutsch.png");
	$("#fli").css("color","rgb(102, 255, 153)")
	$("#sli").css("color","black")
	$("#thli").css("color","black")
}
function li2(li) {
	$("#photo").attr("src","../../photoes/de_club.jpg");
	$("#fli").css("color","black")
	$("#sli").css("color","rgb(102, 255, 153)")
	$("#thli").css("color","black")
}
function li3(li) {
	$("#photo").attr("src","../../photoes/de_club.AVIF");
	$("#fli").css("color","black")
	$("#sli").css("color","black")
	$("#thli").css("color","rgb(102, 255, 153)")
}
setTimeout(changer,3000)
let i = 0
function changer() {
i++
if (i%3==0) {
	li1()
}
if (i%3==1) {
	li2()
}
if (i%3==2) {
	li3()
}
	setTimeout(changer,3000)
}
let first = 0
let second = 0
function value(el) {
	first=el.innerText
	$("#p1").css("background","rgb(102, 255, 153)")
	$("#p2").css("background","rgb(102, 255, 153)")
	$("#p3").css("background","rgb(102, 255, 153)")
	$("#p4").css("background","rgb(102, 255, 153)")
	el.style.background="#33cc33"
}
function type1() {
	second  = 12
	$("#t2").css("background","rgb(102, 255, 153)")
	$("#t3").css("background","rgb(102, 255, 153)")
	$("#t1").css("background","#33cc33")
}
function type2() {
	second = 10
	$("#t1").css("background","rgb(102, 255, 153)")
	$("#t3").css("background","rgb(102, 255, 153)")
	$("#t2").css("background","#33cc33")
}
function type3() {
	second = 15
	$("#t2").css("background","rgb(102, 255, 153)")
	$("#t1").css("background","rgb(102, 255, 153)")
	$("#t3").css("background","#33cc33")
}
function calc() {
	let sum = first*second
	document.getElementById('res').innerText=sum+" usd"
}
let num3 = 1
function open_lang() {
	num3++
	if (num3%2==0) {
	$("#lang").css("animation-name","lang_open")
	$("#lang").css("z-index","10")
	$("#lang_block").css("animation-name","lang_block_op")
	if (num%2==0) {
		$("#menu").css("z-index","9")
	}
	}
	else if (num3%2!=0) {
		$("#lang").css("animation-name","lang_close")
		$("#lang_block").css("animation-name","lang_block_close")
	}
}
