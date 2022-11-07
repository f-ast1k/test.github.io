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

var category_section = document.querySelector(".content");
var product_items = category_section.querySelectorAll(".product");
var product = category_section.querySelector(".products");
buttons.addEventListener("click", function(e) {

    var target = e.target;
    var button = clossesItem(target, "btn");
    if (button === null || button.classList.contains("is-active")) {
        return;
    }
    e.preventDefault(); 

    var removeChildren = (item) => {
        while (item.firstChild) {
            item.removeChild(item.firstChild);
        }
    }

    var updateChildren = (item, children) => {
        // var child = document.querySelector(".product-not");
        // category_section.removeChild();
        removeChildren(item);
        for (var i = 0; i < children.length; i += 1) {
            item.appendChild(children[i]);
        }
    }  

    var filtarname = button.getAttribute("data-filter");
    var prevBtnActive = buttons.querySelector(".btn.is-active");
    prevBtnActive.classList.remove("is-active");
    button.classList.add("is-active")

    var filterValue = button.getAttribute("data-filter");
    if (filterValue === "0") {
        updateChildren(product, product_items);
        return;
    }

    var filteredItems = [];
    for (var i = 0; i < product_items.length; i += 1) {
        var current = product_items[i];
        if (current.getAttribute("data-filter") === filterValue) {
            filteredItems.push(current);
        }
    }
    if (filteredItems.length === 0) {
        if (document.querySelector(".product-not") === null) {
            $(".products").before("<div class='product-not'>Товаров не найдено</div>");
        }
        updateChildren(product, filteredItems);
        return;
    }
    if (category_section.querySelector(".product-not")) {
        var not = category_section.querySelector(".product-not");
        category_section.removeChild(not);
    }
    
    updateChildren(product, filteredItems);

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

// $(".btn-more").click((e) => {
//     alert(document.querySelector(".btn-more").getAttribute("href"));
//     console.log(e.getAttribute);
//     // document.location.href = "https://www.cyberforum.ru/javascript/thread1888126.html";
// });
