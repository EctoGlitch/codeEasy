const whatsNew = [
    {
        src: 'images/berrypack.png',
        name: "Berry Shine Spring Bundle",
        description: "The snow is melting and spring is in the air! You've earned some patio time, so enjoy it in style. Even if it is just your backyard...",
        price: '$47.95',
        rating: 'Not Rated'   
    },

    {
        src: 'images/TimFinnigan_2.jpg',
        name: "Tim Finnigan's Morning Wake Up Cocktail Kit",
        description: "Old Tim Finnigan would wake-up for this fine cocktail delight for sure! Pairing all of your Sunday morning favourites... Coffee, Cupcakes and Irish Cream, you don't want to miss out on this St Paddy's Day Cocktail Kit!",
        price: '$79.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/IrishBreezeCocktailKitContents.png?v=1614090912',
        name: 'Irish Breeze Cocktail Kit',
        description: "Feeling like a little Irish Breeze to brighten your winter spirits, Top Shelf Distillers has the perfect cocktail for you! With a nod to the whisky distilling heritage of Perth Ontario and a fresh crisp hint of mint and cucumber...",
        price: '$70.95',
        rating: 'Not Rated'
    },

]

//Empty array for push method
const whatsNewWrapperHolder = []

const $whatsNewWrapper = document.getElementById('whatsNewWrapper')

//iterates over whatsNew array of objects and pushes with template literal
for (i = 0; i < whatsNew.length; i++) {
    
    whatsNewWrapperHolder.push(`<div class="card" id="card"> 
                                    <img src="${whatsNew[i].src}" alt="${whatsNew[i].name}">
                                    <div class="descriptions descriptionsBlur">
                                        <h2>${whatsNew[i].name}</h2>
                                        <p>${whatsNew[i].description}</p>
                                        <h2>${whatsNew[i].price}</h2>
                                        <h2>${whatsNew[i].rating}</h2>
                                    </div> 
                                </div>`)

    //console.log(whatsNew[i].src + '\n' + whatsNew[i].name + '\n' + whatsNew[i].description + '\n' + whatsNew[i].price + '\n' + whatsNew[i].rating + '\n' + '\n')
}

//push to DOM 
$whatsNewWrapper.innerHTML += whatsNewWrapperHolder.join('')