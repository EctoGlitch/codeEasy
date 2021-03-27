//array for kits and subscription data 
const kitAndSubs = [
    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/VDayKit.png?v=1611876047',
        name: "Two Hearts Valentine's Cocktail Kit",
        description: "1 cocktail kit with 2 unique ways to enjoy!",
        price: '$69.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/image_ed34ba4e-6038-44bb-8638-22d0521023f7.jpg?v=1612477489',
        name: "The Z Files: Episode 1",
        description: "Agents Wolf and Diana are CBI (Canadian Bureau of Investigation) officers haunted by an old cold case. For years, a murderer and hacker known as The Succubus...",
        price: '$79.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/RaspberryBontanicalKit.png?v=1605649188',
        name: "County Botanical Bliss Kit",
        description: "Try this festive treat with one of our featured moonshines. Simply mix an ounce or two of moonshine with one of County Bounty's delicious Lavender Lemon-Basil Sodas, and add a splash of Top Shelf Distillers Mint Bitters to taste.",
        price: '$47.95',
        rating: 'Not Rated'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/EXPLODEDCANADIANASAPPLEPIECOCKTAILKITPHOTO-01.jpg?v=1602006410',
        name: "Canadian As Apple Pie Kit",
        description: "The oldest and most traditional flavoured moonshine recipe, Apple Pie Moonshine has been crafted by moonshiners across North America for over two centuries...",
        price: '$57.95',
        rating: '4.5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/SAKURASIPPERCOCKTAILKITEXPLODED-SHOPIFYSQUARE-01.png?v=1601999501',
        name: "Sakura Sipper Kit",
        description: "The Sakura Sipper isn't just an elevated screwdriver... big citrus notes and the pairing of orange & cherry blossom bitters create an excellent balance of sweet and floral...",
        price: '$49.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/B7502.png?v=1606759616',
        name: "Truly Canadian Butter Tart Box",
        description: "Undeniably buttery and bursting with caramel flavours, our Ontario Reunion Butter Tart Moonshine has quickly become a local favourite and is now one of our most popular Ontario moonshines...",
        price: '$43.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/axe.png?v=1602003683',
        name: "Limited Edition Sap Sipper Kit",
        description: "There's no way you won't feel sharp with a hand-forged hatchet. An incredible cocktail kit with a handcrafted tool to add to his collection or as a collectors item for those who appreciate time- tested craftsmanship...",
        price: '$289.95',
        rating: '5/5'
    },

    {
        src: 'https://cdn.shopify.com/s/files/1/2256/4539/products/caesarkitnew.png?v=1606860516',
        name: "Spicy Caesar Kit",
        description: "These days, we are all looking for new ways to come together while staying apart. A great way to connect: send someone a spicy caesar kit with a personalized note...",
        price: '$51.95',
        rating: '4/5'
    }
]

//Empty array for push method
const kitAndSubsWrapperHolder = []

const $kitAndSubsWrapper = document.getElementById('kitAndSubsWrapper')

//iterates over kitAndSubs array of objects and pushes with template literal
for (i = 0; i < kitAndSubs.length; i++) {
    
    //template literal for each object in the array
    kitAndSubsWrapperHolder.push(`<div class="card" id="card"> 
                                    <img src="${kitAndSubs[i].src}" alt="${kitAndSubs[i].name}">
                                    <div class="descriptions descriptionsBlur">
                                        <h2>${kitAndSubs[i].name}</h2>
                                        <p>${kitAndSubs[i].description}</p>
                                        <h2>${kitAndSubs[i].price}</h2>
                                        <h2>${kitAndSubs[i].rating}</h2>
                                    </div> 
                                </div>`)

}

//push to DOM 
$kitAndSubsWrapper.innerHTML += kitAndSubsWrapperHolder.join('')