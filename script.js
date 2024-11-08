// Detail Product
var detailProduct = document.getElementById("detailProduct");
var SmallImg = document.getElementsByClassName("small-img");

    for (var i = 0; i < SmallImg.length; i++) {
        SmallImg[i].onclick = function() {
            detailProduct.src = this.getElementsByTagName("img")[0].src;
        }
    }