// roll object
function Roll(type, basePrice, glazing, packSize) {
    this.type = type;
    this.basePrice = basePrice;
    this.glazing = glazing;
    this.packSize = packSize;

    // calculate total price
    this.calculatePrice = () => {
        const glazingPrice = parseFloat(this.glazing);
        return (this.basePrice + glazingPrice) * this.packSize;
    };
}

// list of objects for glazing options and price adaptations
const glazingOptions = [
    { glazing: 'original', priceAdaptation: 0.00 }, 
    { glazing: 'sugar', priceAdaptation: 0.00 },
    { glazing: 'vanilla', priceAdaptation: 0.50 },
    { glazing: 'chocolate', priceAdaptation: 1.50 }
];

// object for glazing value to formal name
const glazingNames = {
    'original': 'Original',
    'sugar': 'Sugar Milk',
    'vanilla': 'Vanilla Milk',
    'chocolate': 'Double Chocolate'
};

// list of objects for pack size options and price adaptations
const packSizeOptions = [
    { packSize: 1, priceAdaptation: 1 },
    { packSize: 3, priceAdaptation: 3 },
    { packSize: 6, priceAdaptation: 5 },
    { packSize: 12, priceAdaptation: 10 }
];

// roll base prices
const basePrices = {
    'Original cinnamon roll': 2.49,
    'Apple cinnamon roll': 3.49,
    'Raisin cinnamon roll': 2.99,
    'Walnut cinnamon roll': 3.49,
    'Double chocolate cinnamon roll': 3.99,
    'Strawberry cinnamon roll': 3.99
};

// populates options of dropdown fields with objects
const populateDropdown = () => {
    const glazingDropdown = document.querySelectorAll('.glazing-dropdown select');
    
    // loop through each dropdown item
    glazingDropdown.forEach(dropdown => {
        dropdown.innerHTML = '';

        // replace each dropdown with object
        glazingOptions.forEach(option => {
            const glazingOption = document.createElement('option');
            glazingOption.value = option.priceAdaptation;
            glazingOption.textContent = option.glazing;

            dropdown.appendChild(glazingOption);
        }); 
    });
};

// add to cart functionality
let cartCount = 0;
let cartTotal = 0.00;
let cartItems = [];

// update cart display
const updateCart = () => {
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
};

// calculate price with glazing choice
function glazingChange(element) {
    // get value of selected glazing option
    const item = element.closest('.product-item');
    const name = item.querySelector('h3').textContent.trim();
    const basePrice = basePrices[name];

    // get packsize choice
    const sizeChoice = parseInt(item.querySelector('.pack-size input[type="radio"]:checked').value);

    // get glazing price
    const glazingChoice = item.querySelector('select').value;
    const glazingOption = glazingOptions.find(option => option.glazing === glazingChoice);
    const glazingPrice = glazingOption.priceAdaptation;
    
    const roll = new Roll(name, basePrice, glazingPrice, sizeChoice);
    const totalPrice = roll.calculatePrice();

    const priceView = item.querySelector('.price p');
    priceView.textContent = `$${totalPrice.toFixed(2)}`;

    return totalPrice;
}

// show cart popup
const cartPopup = (name, glazing, packSize, price) => {
    const popup = document.getElementById('cart-popup');
    const popupMsg = document.getElementById('cart-popup-msg');

    // update pop up message
    popupMsg.innerHTML = `Added to cart: <br><br> <strong>${name}</strong> <br> ${glazing} glazing <br> Pack of ${packSize} <br> Price: $${price.toFixed(2)}`;

    // display block for 3 seconds
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
};

// add items to cart
const addToCart = (element) => {
    // find relevant product and price
    const item = element.closest('.product-item');
    const name = item.querySelector('h3').textContent.trim();
    const basePrice = basePrices[name];

    // find size and glazing choice
    const sizeChoice = parseInt(item.querySelector('.pack-size input[type="radio"]:checked').value);
    const glazingChoice = item.querySelector('select').value;
    const glazingOption = glazingOptions.find(option => option.glazing === glazingChoice);
    const glazingPrice = glazingOption.priceAdaptation;

    const roll = new Roll(name, basePrice, glazingPrice, sizeChoice);
    const totalPrice = roll.calculatePrice();

    // update cart and total
    cartCount += sizeChoice;
    cartTotal += totalPrice;
    updateCart();

    // call cart popup message
    glazingName = glazingNames[glazingChoice];
    cartPopup(name, glazingName, sizeChoice, totalPrice);
};

// triggers events after clicking add to cart
document.querySelectorAll('.cart-button button').forEach(button => {
    button.addEventListener('click', () => addToCart(button));
})