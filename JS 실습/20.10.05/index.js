

function show() {
    let leftbar = document.getElementById('leftbar');
    let box = document.getElementById('box');

    box.addEventListener("click", () => {
        leftbar.style.display="block";
    });
}