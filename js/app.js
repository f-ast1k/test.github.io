let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text = "TELEGRAMM BUTTON";

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
	//при клике на основную кнопку отправляем данные в строковом виде
});

function showalert(){
	window.alert('$tg.initDataUnsafe.first_name');
}
