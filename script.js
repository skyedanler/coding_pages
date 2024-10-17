let imgElement1 = document.getElementById('header-img1');
let imgElement2 = document.getElementById('header-img2');
let imgUrl;

if (document.body.classList.contains('halloween')) {
    imgUrl = './images/spooky_ghost.png';
}

if (document.body.classList.contains('christmas')) {
    imgUrl = './images/santa_hat.png';
}

imgElement1.src = imgUrl;
imgElement2.src = imgUrl;