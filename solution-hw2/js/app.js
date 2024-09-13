function Roll(type, basePrice, glazing, packSize) {
    this.type = type;
    this.basePrice = basePrice;
    this.glazing = glazing;
    this.packSize = packSize;
    
    // calculate total price
    this.calculatePrice = () => {
        const glazingPrice = parseFloat(this.glazing);
        return (this.basePrice + glazingPrice) * this.packSize;
    }
}

const glazingOptions = [
    { glazing: 'original', priceAdaptation: 0.00 }, 
    { glazing: 'sugar', priceAdaptation: 0.00 },
    { glazing: 'vanilla', priceAdaptation: 0.50 },
    { glazing: 'chocolate', priceAdaptation: 1.50 }
]

const packSizeOptions = [
    { packSize: 1, priceAdaptation: 1 },
    { packSize: 3, priceAdaptation: 3 },
    { packSize: 6, priceAdaptation: 5 },
    { packSize: 12, priceAdaptation: 10 }
]

const basePrices = {
    'Original cinnamon roll': 2.49,
    'Apple cinammon roll': 3.49,
    'Raisin cinnamon roll': 2.99,
    'Walnut cinnamon roll': 3.49,
    'Double chocolate cinnamon roll': 3.99,
    'Strawberry cinnamon roll': 3.99
}

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
}

// add to cart functionality
let cartCount = 0;
let cartTotal = 0.00;

// update cart display
const updateCart = () => {
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-total').textContent = cartTotal;
}

// calculate price with glazing choice
function glazingChange(element) {
    // get value of selected glazing option
    const item = element.closest('.product-item');
    const name = item.querySelector('h3').textContent.trim();
    const basePrice = basePrices[name];

    // get packsize choice
    const sizeChoice = parseInt(item.querySelector('.pack-size input[type="radio"]:checked').value);

    // get glazing price
    const glazingPrice = glazingOptions[item.querySelector('select').value];
    
    const roll = new Roll(name, basePrice, glazingPrice, sizeChoice);
    const totalPrice = roll.calculatePrice();

    return totalPrice;
}

// add items to cart
const addToCart = (element) => {
    // find relevant product
    const item = element.closest('.product-item');
    const name = item.querySelector('h3').textContent.trim();
    const basePrice = basePrices[name];
    const sizeChoice = parseInt(item.querySelector('.pack-size input[type="radio"]:checked').value);
    const glazingPrice = glazingOptions[item.querySelector('select').value];

    const roll = new Roll(name, basePrice, glazingPrice, sizeChoice);
    const totalPrice = roll.calculatePrice();

    // update cart and total
    cartCount += sizeChoice;
    cartTotal += totalPrice;

    updateCart();
}