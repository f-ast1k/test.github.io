function input(){
    var input_data = document.getElementById("1")
    var value_data = Number(input_data.value)
    if (value_data < 0) {
        input_data.value = 0
    }
}

function plus(){
    var input_data = document.getElementById("1");
    var value_data = Number(input_data.value);
    input_data.value = value_data + 1;
};

function minus(){
    var input_data = document.getElementById("1");
    var value_data = Number(input_data.value);
    if (value_data > 0) {
        input_data.value = value_data - 1
    }
    else {
        input_data.value = 0
    }
}

let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.text = "hello world"
tg.MainButton.color = "#143F6B";
tg.MainButton.show();
tg.MainButton.enable();