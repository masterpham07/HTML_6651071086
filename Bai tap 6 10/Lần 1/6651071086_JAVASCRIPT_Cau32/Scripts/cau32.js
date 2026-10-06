function display_random_image() {
    let images = [
        ["http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", 240, 160],
        ["http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", 320, 195],
        ["http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", 500, 343]
    ];
    let image = images[Math.floor(Math.random() * images.length)];
    let img = document.createElement("img");
    img.src = image[0];
    img.width = image[1];
    img.height = image[2];
    let box = document.getElementById("image");
    box.innerHTML = "";
    box.appendChild(img);
}
