let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text = "TELEGRAMM BUTTON";

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
	//при клике на основную кнопку отправляем данные в строковом виде
});

let p = document.createElement("p");
p.innerHTML = '${tg.initDataUnsafe}'


function showalert(){
	window.alert("hello world");
}
