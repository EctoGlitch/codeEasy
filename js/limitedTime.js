const limited = [
    {
        src: 'images/berrypack.png',
        name: "Berry Shine Spring Bundle",
        description: "The snow is melting and spring is in the air! You've earned some patio time, so enjoy it in style. Even if it is just your backyard...",
        price: '$47.95',
        rating: 'Not Rated',

    },

    {
        src: 'images/NYECocktailKit.png',
        name: "Midnight Gruvi Cocktail Kit",
        description: "T1 x Vintage Glass from our consignment collection partner Vanity Vintage. Glassware will vary kit to kit...",
        price: '$48.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/IrishBreezeCocktailKitContents.png?v=1614090912',
        name: 'Irish Breeze Cocktail Kit',
        description: "Feeling like a little Irish Breeze to brighten your winter spirits, Top Shelf Distillers has the perfect cocktail for you! With a nod to the whisky distilling heritage of Perth Ontario and a fresh crisp hint of mint and cucumber, you'll be transported to the costal shores of Ireland in no time...",
        price: '$70.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/2ShotGlasses.png?v=1612809912',
        name: "Top Shelf 2oz Shot Glass Set of 2",
        description: 'Top Shelf 2oz Shot Glass Set of 2',
        price: '$11.95',
        rating: 'Not Rated'
    },
    
    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/BlackCurrantBitters1.png?v=1612381281',
        name: "Top Shelf Midnight Currant Bitters",
        description: "Made with only the best Ontario-grown currants and natural botanicals, limited edition Midnight Currant Bitters are an excellent addition to gin & tonic and sparkling wine cocktails...",
        price: '$13.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/NYECocktailKit.png?v=1608578846',
        name: 'Midnight Gruvi Cocktail Kit',
        description: 'This kit features:  1 x 375 Top Shelf Gin 2 x GRUVI non-alcoholic Dry Secco 1 x 50ml Top Shelf Midnight Currant Bitters (This unique holiday flavour is made with local Black Currant fruit & l...',
        price: '$48.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/FRENCHTOAST.jpg?v=1613601868',
        name: 'Reunion French Toast Moonshine',
        description: 'Ingredients: Corn spirit, Water, Maple Syrup, Sugar, Natural Flavour, Caramel Colour Alcohol: 25%. Volume: 750 ml.',
        price: '$36.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Seasonal3Pack.jpg?v=1613602112',
        name: 'Seasonal Reunion Moonshine 200ml 3-Pack',
        description: 'Featuring a 200ml bottle of our seasonal favourites. French Toast Moonshine, Butter Tart Moonshine and Gingerbread Moonshine.',
        price: '$43.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/image_f7344187-e05b-4cce-993a-15e3f27df6ec.jpg?v=1602004531',
        name: 'Handmade Cedar Coaster 2-Pack',
        description: "Show your support for Top Shelf Distillers with your own stylish coaster handmade and laser-etched in Cedar. Made by artisans in Ottawa, ON. This limited run of coasters are available in packs of two...",
        price: '$9.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/IrishCreamCover.jpg?v=1614621078',
        name: 'Reunion Irish Cream Moonshine',
        description: "Inspired by a classic Irish recipe, and determined to offer something different, our Irish cream Moonshine consists of an incredible small-batch blend of moonshine and Ontario cream...",
        price: '$36.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/SherryCaskRelease.png?v=1607631925',
        name: 'Perth Canadian Whisky Sherry Cask Finish',
        description: "Perth, Ontario has a deep and storied connection to Canadian whisky. European migration to Ontario brought a lot of new things with it but we consider whisky production to be the frontrunner...",
        price: '$95.95',
        rating: '5/5'
    },

    {
        src:  'https://cdn.shopify.com/s/files/1/2256/4539/products/GINGERBREAD.jpg?v=1613601508',
        name: 'Reunion Gingerbread Moonshine',
        description: 'Reunion Gingerbread Moonshine is a sweet and spiced treat ideal for holiday libations. Packed full of the familiar gingerbread flavour we know and love from a beautiful blend of ginger, molasses and baking spices, we encourage you...',
        price: '$36.95',
        rating: '4.5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/4packNB_9ffd1713-8d7b-4084-991f-06cb6122b682.png?v=1606867990',
        name: 'Seasonal Reunion Moonshine Minis 4-Pack',
        description: 'The pack includes a variety of four 50 ml (1.7 oz) Reunion Moonshine minis. Featuring our Butter Tart, French Toast, Gingerbread and Maple Moonshine!',
        price: '$22.95',
        rating: '5/5'
    },

]

//Empty array for push method
const limitedWrapperHolder = []

const $limitedWrapper = document.getElementById('limitedWrapper')

//iterates over limited array of objects and pushes with template literal
for (i = 0; i < limited.length; i++) {
    
    limitedWrapperHolder.push(`<div class="card" id="card"> 
                                    <img src="${limited[i].src}" alt="${limited[i].name}">
                                    <div class="descriptions descriptionsBlur">
                                        <h2>${limited[i].name}</h2>
                                        <p>${limited[i].description}</p>
                                        <h2>${limited[i].price}</h2>
                                        <h2>${limited[i].rating}</h2>
                                    </div> 
                                </div>`)

}

//push to DOM 
$limitedWrapper.innerHTML += limitedWrapperHolder.join('')