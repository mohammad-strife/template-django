$(".main-button").click(function () {
    $(this).toggleClass("spin");

    $(".sub-button").each(function (i) {
        var subButton = $(this);
        setTimeout(function () {
            subButton.toggleClass("spin");
        }, i * 100);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const selected = document.querySelector(".select-selected");
    const items = document.querySelector(".select-items");

    selected.addEventListener("click", function () {
        items.classList.toggle("select-hide");
    });

    items.addEventListener("click", function (e) {
        if (e.target.tagName === "DIV") {
            selected.textContent = e.target.textContent;
            items.classList.add("select-hide");
        }
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".custom-select")) {
            items.classList.add("select-hide");
        }
    });
});
