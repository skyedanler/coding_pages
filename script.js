let imgElement1 = document.getElementById('header-img1');
let imgElement2 = document.getElementById('header-img2');
let imgUrl;

function imgChange (seasonClass, seasonImg) {
    if (document.body.classList.contains(seasonClass)) {
        imgUrl = seasonImg;
        imgElement1.src = imgUrl;
        imgElement2.src = imgUrl;
    }
}

let halloweenImgs = imgChange('halloween', './images/spooky_ghost.png');
let christmasImgs = imgChange('christmas', './images/santa_hat.png');

const currentYear = new Date().getFullYear();

document.getElementById('copyright').innerHTML = `Skye Danler ${currentYear} &copy`