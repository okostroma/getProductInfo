
// 1 способ

let productImages = window.asos.pdp.config.product.images;
let primaryImage = productImages.filter(i =>  i.isPrimary ? i : null)
let productCurrentPrice = window.asos.pdp.stockPrice[0].productPrice.current.text
let productPreviousPrice = window.asos.pdp.stockPrice[0].productPrice.previous.text


let getProductInfo = () => {
    let productInfo = {
        title: window.asos.pdp.config.product.name ,
        currentPrice: productCurrentPrice ,
        prevPrice: productPreviousPrice,
        images: window.asos.pdp.config.product.images,
        primaryImageUrl: primaryImage[0].url
    }

    return productInfo
}

getProductInfo();


// 2 способ
function findProductTitle(){
    let divWithInfo = document.querySelectorAll('h1')[0];
    if (divWithInfo.lengnth === 0) {
        console.warn('product hero block not found');
        return null;
    } 
    
    return divWithInfo.innerText
}

function findProductPrevPrice(){
    let productPrevPrice = document.getElementsByClassName('product-prev-price')[1];
    if (productPrevPrice.lengnth === 0) {
        console.warn('product-prev-price not found');
        return null;
    } 
    
    return productPrevPrice.innerText
}

function findProductCurrentPrice(){
    let productCurrentPrice = document.getElementsByClassName('product-price-discounted')[0];
    if (productCurrentPrice.lengnth === 0) {
        console.warn('product-price-discounted not found');
        return null;
    } 
    
    return productCurrentPrice.innerText
}


function findImagesSources(){
    let allImagesElements = [...document.querySelectorAll('.img')];
    let imagesSources = allImagesElements.map(i => i.currentSrc);

    return imagesSources
}

function find() { 


    const product = {
        title: findProductTitle(),
        currentPrice: findProductCurrentPrice(),
        prevPrice:findProductPrevPrice(),
        imagesUrls: findImagesSources()
    }

    return product
}

find();


// 3 способ jQuery

let productTitle = $('h1')[0].innerText;
let prevProductPrice = $('.product-prev-price')[1].innerText;
let currentProductPrice = $('.product-price-discounted')[0].innerText;
let allImagesUrls = [...$('.img')].map(i => i.currentSrc);

let productInformation = {
    title: productTitle,
    currentPrice: currentProductPrice,
    prevPrice: prevProductPrice,
    imagesUrls: allImagesUrls
}

console.log(productInformation)
