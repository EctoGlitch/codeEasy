//holds data for ppe products
const ppe = [
    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/SHOPIFYSQUARE-50MLSPRAYHANDSANITIZER_UNSCENTED_-01.jpg?v=1602004752',
        name: "Hand Sanitizer Spray Bottle (50ml)",
        description: "One 50ml spray bottle of Top Shelf Hand Sanitizer...",
        price: '$3.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/SHOPIFYSQUARE-THREEPACKHANDSANITIZER-01.png?v=1602004999',
        name: "Hand Sanitizer (236ml) 3-Pack",
        description: "Three (3) 236ml bottles of Top Shelf Hand Sanitizer...",
        price: '$18.45',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/SHOPIFYSQUARE-946MLHANDSANITIZERNOSPRAYTOP-01.png?v=1602004996',
        name: "Hand Sanitizer (946ml)",
        description: "One (1) 946ml bottle of Top Shelf Hand Sanitizer...",
        price: '$20.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/SHOPIFYSQUARE-HANDSANITIZER4L-01.png?v=1602004997',
        name: "Hand Sanitizer (4 L)",
        description: "One (1) 4 L / 1.06 gallon container of Top Shelf Hand Sanitizer...",
        price: '$39.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/Mask-TopShelf-CorrectedBackground.jpg?v=1610651078',
        name: "Top Shelf Handmade Fabric Mask",
        description: "One (1) Fabric Mask with Top Shelf Distillers logo or Reunion Moonshine axes, made by The Skill Mill. The Skill...",
        price: '$9.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/3-pack-fx-600.png?v=1602004750',
        name: "Hand Sanitizer Spray & Refill Pack",
        description: "One spray bottle & two (2) 250ml bottles of Top Shelf Hand Sanitizer...",
        price: '$9.95',
        rating: '5/5'
    },
]

//Empty array for push method
const PPEWrapperHolder = []

const $PPEWrapper = document.getElementById('PPEWrapper')

//iterates over PPE array of objects and pushes with template literal
for (i = 0; i < ppe.length; i++) {
    
    //template literal for each object in the array
    PPEWrapperHolder.push(`<div class="card" id="card"> 
                                    <img src="${ppe[i].src}" alt="${ppe[i].name}">
                                    <div class="descriptions descriptionsBlur">
                                        <h2>${ppe[i].name}</h2>
                                        <p>${ppe[i].description}</p>
                                        <h2>${ppe[i].price}</h2>
                                        <h2>${ppe[i].rating}</h2>
                                    </div> 
                                </div>`)

}

//push to DOM 
$PPEWrapper.innerHTML += PPEWrapperHolder.join('')