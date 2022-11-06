var buttons = document.querySelector(".btn-list");

function clossesItem(item, className) {
    var node = item;
    while (node) {
        if (node.classList.contains(className)) {
            return node;
        }
        
        node = node.parentElement;
    }
    return null;
}

buttons.addEventListener("click", function(e) {
    var target = e.target;
    var button = clossesItem(target, "btn");
    if (button === null || button.classList.contains("is-active")) {
        return;
    }
    e.preventDefault();
    var filtarname = button.getAttribute("data-filter");
    var prevBtnActive = buttons.querySelector(".btn.is-active");
    prevBtnActive.classList.remove("is-active");
    button.classList.add("is-active")
});

document.querySelector(".burger").addEventListener("click", function(e) {
    var target = e.target;
    if (target.classList.contains("icon-menu-1")) {
        target.classList.remove("icon-menu-1");
        target.classList.add("icon-cancel");
    } else {
        target.classList.remove("icon-cancel");
        target.classList.add("icon-menu-1");
    }

    $(".burger, .nav-menu").toggleClass("active-menu");
    $("body").toggleClass("openmenu");
    console.log(e.target)
});

$(".content").click((e) => {
    var menu = document.querySelector(".nav-menu");
    if (menu.classList.contains("active-menu")) {
        $(".burger").removeClass("icon-cancel");
        $(".burger").addClass("icon-menu-1");
        $(".burger, .nav-menu").toggleClass("active-menu");
        $("body").toggleClass("openmenu");
    } else {
        return;
    }
});

$(".btn-more").click((e) => {
    alert(document.querySelector(".btn-more").getAttribute("href"));
    console.log(e.getAttribute);
    // document.location.href = "https://www.cyberforum.ru/javascript/thread1888126.html";
});