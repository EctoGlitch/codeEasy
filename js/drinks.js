const drinks = [
    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/SHOPIFYSQUARE-TOPSHEFVODKA1.14L-01.png?v=1612451094',
        name: 'Top Shelf Vodka',
        description: "Our Ontario small batch vodka is distilled from a locally-sourced corn base and offers a smooth,light taste with a touch of sweetness, making it an...",
        price: '$42.75',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Gin1.14L.png?v=1612451057',
        name: 'Top Shelf Gin',
        description: 'Distilled in small batches in Perth, this Ontario craft gin captures the spirit of the prohibition era.Taking a classic London dry style with balanced...',
        price: '$43.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/SHOPIFYSQUARE-TOPSHELFMINT375ml-01.png?v=1612451134',
        name: 'Top Shelf Mint',
        description: 'Our uncomplicated interpretation of the classic liqueur which has witnessed the evolution of the cocktail from behind the bar over three centuries...',
        price: '$26.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Aromatic.png?v=1601997318',
        name: 'Top Shelf Artfully Blended Aromatic Bitters',
        description: 'A bouquet of herbs, orange peel & spices, Top Shelf Aromatic Bitters were crafted to enhance and complement the ingredients in your cocktail...',
        price: '$10.95',
        rating: 'Not Rated'
    },
    
    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Orange.png?v=1601994891',
        name: 'Top Shelf Just-Picked Orange Bitters',
        description: "Known as one of the earliest cocktail flavouring agents, orange bitters have been a staple on bars for over 150 years. With the birth of the Manhattan...",
        price: '$10.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Lemongrass.png?v=1601996977',
        name: 'Top Shelf Chopped & Cropped Lemongrass Bitters',
        description: 'A common flavour found in South-East Asian cuisine; Top Shelf Cropped & Chopped Lemongrass Bitters are the perfect way to add some subtle citrus zest...',
        price: '$10.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Lavender.png?v=1601404849',
        name: 'Top Shelf Pluckily Plucked Lavender Bitters',
        description: 'Flavoured with lavender, lemon peel and orris root, macerated in alcohol, Top Shelf Pluckily-Plucked Lavender Bitters are incredibly versatile...',
        price: '$10.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Cardamom.png?v=1601994433',
        name: "Top Shelf Skillfully Crushed Cardamom Bitters",
        description: "An aromatic seed pod popular in Indian cuisine, cardamom has a strong, unique taste with an intensely aromatic and resinous fragrance. This perfect blend...",
        price: '$10.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Rose_03744d38-fef4-49e3-8499-1abea9129d8e.png?v=1602603187',
        name: "Top Shelf Softly Stirred Rose Bitters",
        description: "Floral and sweet, Top Shelf Rose Bitters are right at home in your summertime gin & tonic and floral- forward cocktails...",
        price: '$10.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Blueberry.png?v=1601995657',
        name: "Top Shelf Freshly Pressed Blueberry Bitters",
        description: "A delicate balance of sweet and tart... we pair delicious fresh pressed blueberry juice with lavender and rose hips that make it all so simple to bring big...",
        price: '$10.95',
        rating: '1/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Coffee.png?v=1601996821',
        name: "Top Shelf Dark & Stormy Coffee Bitters",
        description: "The Ottawa-based roaster uses Colombian Supremo beans, Cacao Nibs, Black Peppercorns, Star Anise & Wild Cherry Bark to create a beautiful coffee flavour only...",
        price: '$10.95',
        rating: '4/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/CranberryBitters.png?v=1608244464',
        name: "Top Shelf Northern Harvest Spiced Cranberry Bitters",
        description: "Celebrate the season with something uniquely Top Shelf Distillers. These are holiday bitters that don't just stop at Christmas cocktails. Make use of them in...",
        price: '$11.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/CranberryBitters.png?v=1608244464',
        name: "Top Shelf Fresh & Floral Cherry Blossom Bitters",
        description: "Celebrate the season with something uniquely Top Shelf Distillers. These are holiday bitters that don't just stop at Christmas cocktails. Make use of them in your...",
        price: '$11.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/CherryBlossom.png?v=1601995746',
        name: "Top Shelf Fresh & Floral Cherry Blossom Bitters",
        description: "Top Shelf Cherry Blossom Bitters capture the revered floral aromatics of the ephemeral cherry blossom paired with the sweet and tart flavour of Ontario cherries...",
        price: '$10.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Allspice.png?v=1601996466',
        name: "Top Shelf Deftly-Ground Allspice Bitters",
        description: "The sweet, spicy and warming notes of Top Shelf Deftly-Ground Allspice Bitters add depth to classic cocktails like the Old Fashioned with its desirable blend of allspice corns, orange peel, dried ginger and cinchona bark.",
        price: '$10.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Chocolate.png?v=1602603333',
        name: "Top Shelf Spiced-Up Chocolate Bitters",
        description: "Vanilla-bean, cinnamon and the bitterness of wormwood accent the rich and dark cacao flavour in Top Shelf Spiced-Up Chocolate Bitters. Bitters are often referred to as the...",
        price: '$10.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Grapefruit.png?v=1601995293',
        name: "Top Shelf Hand-Squeezed Grapefruit Bitters",
        description: "Top Shelf Hand-Squeezed Grapefruit Bitters, a blend of grapefruit peel, mint leaves, and cinchona bark, will provide your next libation with sharp citrus tang and desirable bitter flavour...",
        price: '$10.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Mint.png?v=1601996719',
        name: "Top Shelf Deep-Infused Mint Bitters",
        description: "Perfect for the summertime sipper and cold season cocktails, mint breathes refreshing flavours on a hot- day and a warming sensation on cool winter nights. Our Deep-Infused Mint Bitters feature a blend of dried mint, orange and lemon peel and gentian root...",
        price: '$10.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/92d03aaa40c1747582e70d42d34db677.png?v=1601998507',
        name: "Top Shelf Bitters 3-Pack",
        description: "The pack includes: Pluckily-Plucked Lavender, Just-Picked Orange, Deep-Infused Mint. 3 X 50ml bottles.",
        price: '$29.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/BlackCurrantBitters1.png?v=1612381281',
        name: "Top Shelf Midnight Currant Bitters",
        description: "Black currants are a dark and tart berry with a very distinct earthy flavour you may recognize from cr&#232;me de cassis. We've paired this rich and fresh flavour with ginger for added spice and sweet cardamon to tie these deep flavours together.",
        price: '$13.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/15mlBittersSet.jpg?v=1613514086',
        name: "Top Shelf Fresh & Floral Cherry Blossom Bitters",
        description: "Featuring: Cherry Blossom, Aromatic, Lemongrass, Cardamom, Blueberry",
        price: '$19.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/100PROOF.jpg?v=1613602349',
        name: "Reunion 100 Proof Moonshine",
        description: "For those that love traditional, prohibition-era moonshine. Award winning Reunion 100 Proof Moonshine is whisky right off the still, no time spent in barrel...",
        price: '$36.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/MAPLE.jpg?v=1613601630',
        name: "Reunion Maple Moonshine",
        description: "Quality maple production is a source of tradition and pride for Perthites. Our 100% local Reunion Maple Moonshine is a tribute to their craft...",
        price: '$34.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/BUTTERTART.jpg?v=1613601984',
        name: "Reunion Butter Tart",
        description: "Undeniably buttery and bursting with caramel flavours, our Ontario Reunion Butter Tart Moonshine has quickly become a local favourite and is now one of our most popular Ontario moonshines! ...",
        price: '$36.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/2SizesApplePie.jpg?v=1613601381',
        name: "Reunion Apple Pie Moonshine",
        description: "Reunion Apple Pie Moonshine is handcrafted with our corn spirit and apple cider from Hall's Apple Market in Brockville, Ontario... ",
        price: '$36.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/CHERRY.jpg?v=1613602111',
        name: "Reunion Ontario Cherry Moonshine",
        description: "Handcrafted with Montmorency cherries from the orchards of Prince Edward County, Reunion Cherry Moonshine has a tart and crisp sweetness that is best enjoyed straight up over ice or mix with sparkling water...",
        price: '$34.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/RASPBERRY.jpg?v=1613601743',
        name: "Reunion Raspberry Moonshine",
        description: "We love letting all-natural flavours shine and adding shine to all-natural flavours. Sweet, tart and a luscious shade of dark red, Reunion Raspberry Moonshine bursts with pure pressed raspberry flavour and a kick of moonshine...",
        price: '$34.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/GINGERBREAD.jpg?v=1613601508',
        name: "Reunion Gingerbread Moonshine",
        description: "Reunion Gingerbread Moonshine is a sweet and spiced treat ideal for holiday libations. Packed full of the familiar gingerbread flavour we know and love from a beautiful blend of ginger, molasses and baking...",
        price: '$36.95',
        rating: '4.5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/IrishCreamCover.jpg?v=1614621078',
        name: "Reunion Irish Cream Moonshine",
        description: "Inspired by a classic Irish recipe, and determined to offer something different, our Irish cream Moonshine consists of an incredible small-batch blend of moonshine and Ontario cream.",
        price: '$36.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/FRENCHTOAST.jpg?v=1613601868',
        name: "Reunion French Toast Moonshine",
        description: "Featuring: Corn spirit, Water, Maple Syrup, Sugar, Natural Flavour, Caramel Colour...",
        price: '$36.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Seasonal3Pack.jpg?v=1613602112',
        name: "Seasonal Reunion Moonshine 200ml 3-Pack",
        description: "Featuring a 200ml bottle of our seasonal favourites. French Toast Moonshine, Butter Tart Moonshine and Gingerbread Moonshine.",
        price: '$43.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/4packNB_9ffd1713-8d7b-4084-991f-06cb6122b682.png?v=1606867990',
        name: "Seasonal Reunion Moonshine Minis 4-Pack",
        description: "The pack includes a variety of four 50 ml (1.7 oz) Reunion Moonshine minis. Featuring our Butter Tart, French Toast, Gingerbread and Maple Moonshine!",
        price: '$22.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/SHOPIFYSQUARE-BLENDEDWHISKY750ml-01.jpg?v=1602003068',
        name: "Perth Canadian Whisky",
        description: "For the first time in over a century, Canadian whisky has been mashed, distilled, barrel-aged and bottled in Perth, Ontario. We are incredibly proud to put Perth back on the list of Ontario's active whisky towns...",
        price: '$49.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/SherryCaskRelease.png?v=1607631925',
        name: "Perth Canadian Whisky Sherry Cask",
        description: "2 x 2 oz branded whisky glasses...",
        price: '$95.95',
        rating: '5/5'
    }
]

//Empty array for push method
const drinksWrapperHolder = []

const $drinksWrapper = document.getElementById('drinksWrapper')

//iterates over drinks array of objects and pushes with template literal
for (i = 0; i < drinks.length; i++) {
    
    drinksWrapperHolder.push(`<div class="card" id="card"> 
                                    <img src="${drinks[i].src}" alt="${drinks[i].name}">
                                    <div class="descriptions descriptionsBlur">
                                        <h2>${drinks[i].name}</h2>
                                        <p>${drinks[i].description}</p>
                                        <h2>${drinks[i].price}</h2>
                                        <h2>${drinks[i].rating}</h2>
                                    </div> 
                                </div>`)

}

//push to DOM 
$drinksWrapper.innerHTML += drinksWrapperHolder.join('')