<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Abby Chen">

    <title>Bun Bun bake shop</title>

    <link rel="stylesheet" type="text/css" href="../src/App.css">
  </head>

  <body>
    <!-- navbar -->
    <nav>
      <div class="site-logo">
        <img src="assets/logo/logo-01.svg" alt="Bun Bake Shop Logo">
      </div>
      <ul class="nav-links">
        <li class="nav-item current"><a href=index.html>PRODUCTS</a></li>
        <li class="nav-item"><a href=#cart>CART</a></li>
      </ul>
    </nav>
    
    <header>
      <h1>Our hand-made cinnamon rolls</h1>
    </header>

    <!-- products and order capabilities -->
    <main>
      <section id="products">
        <div class="product-item">
          <!-- product image -->
          <img src="../assets/products/original-cinnamon-roll.jpg" alt="Original Cinnamon Roll">
          
          <!-- product title -->
          <h3>Original cinnamon roll</h3>
          
          <div class="product-content">
            <!-- left column -->
            <div class="left-column">
              <div class="glazing">
                <label for="original-glazing">Glazing:</label>
              </div>

              <p>Pack size:</p>
              
              <div class="price">
                <p>$2.49</p>
              </div>
            </div>
        
            <!-- right column -->
            <div class="right-column">
              <div class="glazing-dropdown">
                <label for="original-glazing"></label>
                <select id="original-glazing" name="original-glazing">
                  <option value="original">Keep original</option>
                  <option value="sugar">Sugar Milk</option>
                  <option value="vanilla">Vanilla Milk</option>
                  <option value="chocolate">Double Chocolate</option>
                </select>
              </div>
        
              <div class="pack-size">
                <input type="radio" id="original-size1" name="original-pack-size" value="1">
                <label for="original-size1">1</label><br>
                <input type="radio" id="original-size3" name="original-pack-size" value="3">
                <label for="original-size3">3</label><br>
                <input type="radio" id="original-size6" name="original-pack-size" value="6">
                <label for="original-size6">6</label><br>
                <input type="radio" id="original-size12" name="original-pack-size" value="12">
                <label for="original-size12">12</label><br>
              </div>
        
              <div class="cart-button">
                <button type="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div class="product-item">
          <!-- product image -->
          <img src="../assets/products/apple-cinnamon-roll.jpg" alt="Apple Cinnamon Roll">
          
          <!-- product title -->
          <h3>Apple cinnamon roll</h3>
          
          <div class="product-content">
            <!-- left column -->
            <div class="left-column">
              <div class="glazing">
                <label for="apple-glazing">Glazing:</label>
              </div>

              <p>Pack size:</p>
              
              <div class="price">
                <p>$3.49</p>
              </div>
            </div>
        
            <!-- right column -->
            <div class="right-column">
              <div class="glazing-dropdown">
                <label for="apple-glazing"></label>
                <select id="apple-glazing" name="apple-glazing">
                  <option value="original">Keep original</option>
                  <option value="sugar">Sugar Milk</option>
                  <option value="vanilla">Vanilla Milk</option>
                  <option value="chocolate">Double Chocolate</option>
                </select>
              </div>
        
              <div class="pack-size">
                <input type="radio" id="apple-size1" name="apple-pack-size" value="1">
                <label for="apple-size1">1</label><br>
                <input type="radio" id="apple-size3" name="apple-pack-size" value="3">
                <label for="apple-size3">3</label><br>
                <input type="radio" id="apple-size6" name="apple-pack-size" value="6">
                <label for="apple-size6">6</label><br>
                <input type="radio" id="apple-size12" name="apple-pack-size" value="12">
                <label for="apple-size12">12</label><br>
              </div>
        
              <div class="cart-button">
                <button type="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div class="product-item">
          <!-- product image -->
          <img src="../assets/products/raisin-cinnamon-roll.jpg" alt="Raisin Cinnamon Roll">

          <!-- product title -->
          <h3>Raisin cinnamon roll</h3>
          
          <div class="product-content">
            <!-- left column -->
            <div class="left-column">
              <div class="glazing">
                <label for="raisin-glazing">Glazing:</label>
              </div>

              <p>Pack size:</p>
              
              <div class="price">
                <p>$2.99</p>
              </div>
            </div>
        
            <!-- right column -->
            <div class="right-column">
              <div class="glazing-dropdown">
                <label for="raisin-glazing"></label>
                <select id="raisin-glazing" name="raisin-glazing">
                  <option value="original">Keep original</option>
                  <option value="sugar">Sugar Milk</option>
                  <option value="vanilla">Vanilla Milk</option>
                  <option value="chocolate">Double Chocolate</option>
                </select>
              </div>
        
              <div class="pack-size">
                <input type="radio" id="raisin-size1" name="raisin-pack-size" value="1">
                <label for="raisin-size1">1</label><br>
                <input type="radio" id="raisin-size3" name="raisin-pack-size" value="3">
                <label for="raisin-size3">3</label><br>
                <input type="radio" id="raisin-size6" name="raisin-pack-size" value="6">
                <label for="raisin-size6">6</label><br>
                <input type="radio" id="raisin-size12" name="raisin-pack-size" value="12">
                <label for="raisin-size12">12</label><br>
              </div>
        
              <div class="cart-button">
                <button type="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div class="product-item">
          <!-- product image -->
          <img src="../assets/products/walnut-cinnamon-roll.jpg" alt="Walnut Cinnamon Roll">

          <!-- product title -->
          <h3>Walnut cinnamon roll</h3>
          
          <div class="product-content">
            <!-- left column -->
            <div class="left-column">
              <div class="glazing">
                <label for="walnut-glazing">Glazing:</label>
              </div>

              <p>Pack size:</p>
              
              <div class="price">
                <p>$3.49</p>
              </div>
            </div>
        
            <!-- right column -->
            <div class="right-column">
              <div class="glazing-dropdown">
                <label for="walnut-glazing"></label>
                <select id="walnut-glazing" name="walnut-glazing">
                  <option value="original">Keep original</option>
                  <option value="sugar">Sugar Milk</option>
                  <option value="vanilla">Vanilla Milk</option>
                  <option value="chocolate">Double Chocolate</option>
                </select>
              </div>
        
              <div class="pack-size">
                <!-- quantity options -->
                <input type="radio" id="walnut-size1" name="walnut-pack-size" value="1">
                <label for="walnut-size1">1</label><br>
                <input type="radio" id="walnut-size3" name="walnut-pack-size" value="3">
                <label for="walnut-size3">3</label><br>
                <input type="radio" id="walnut-size6" name="walnut-pack-size" value="6">
                <label for="walnut-size6">6</label><br>
                <input type="radio" id="walnut-size12" name="walnut-pack-size" value="12">
                <label for="walnut-size12">12</label><br>
              </div>
        
              <div class="cart-button">
                <button type="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div class="product-item">
          <!-- product image -->
          <img src="../assets/products/double-chocolate-cinnamon-roll.jpg" alt="Double Chocolate Cinnamon Roll">

          <!-- product title -->
          <h3>Double chocolate cinnamon roll</h3>
          
          <div class="product-content">
            <!-- left column -->
            <div class="left-column">
              <div class="glazing">
                <label for="choco-glazing">Glazing:</label>
              </div>

              <p>Pack size:</p>
              
              <div class="price">
                <p>$3.99</p>
              </div>
            </div>
        
            <!-- right column -->
            <div class="right-column">
              <div class="glazing-dropdown">
                <label for="choco-glazing"></label>
                <select id="choco-glazing" name="choco-glazing">
                  <option value="original">Keep original</option>
                  <option value="sugar">Sugar Milk</option>
                  <option value="vanilla">Vanilla Milk</option>
                  <option value="chocolate">Double Chocolate</option>
                </select>
              </div>
        
              <div class="pack-size">
                <!-- quantity options -->
                <input type="radio" id="choco-size1" name="choco-pack-size" value="1">
                <label for="choco-size1">1</label><br>
                <input type="radio" id="choco-size3" name="choco-pack-size" value="3">
                <label for="choco-size3">3</label><br>
                <input type="radio" id="choco-size6" name="choco-pack-size" value="6">
                <label for="choco-size6">6</label><br>
                <input type="radio" id="choco-size12" name="choco-pack-size" value="12">
                <label for="choco-size12">12</label><br>
              </div>
        
              <div class="cart-button">
                <button type="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="product-item">
          <!-- product image -->
          <img src="../assets/products/strawberry-cinnamon-roll.jpg" alt="Strawberry Cinnamon Roll">

          <!-- product title -->
          <h3>Strawberry cinnamon roll</h3>
          
          <div class="product-content">
            <!-- left column -->
            <div class="left-column">
              <div class="glazing">
                <label for="strawb-glazing">Glazing:</label>
              </div>

                <p>Pack size:</p>
              
              <div class="price">
                <p>$3.99</p>
              </div>
            </div>
        
            <!-- right column -->
            <div class="right-column">
              <div class="glazing-dropdown">
                <label for="strawb-glazing"></label>
                <select id="strawb-glazing" name="strawb-glazing">
                  <option value="original">Keep original</option>
                  <option value="sugar">Sugar Milk</option>
                  <option value="vanilla">Vanilla Milk</option>
                  <option value="chocolate">Double Chocolate</option>
                </select>
              </div>
        
              <div class="pack-size">
                <!-- quantity options -->
                <input type="radio" id="strawb-size1" name="strawb-pack-size" value="1">
                <label for="strawb-size1">1</label><br>
                <input type="radio" id="strawb-size3" name="strawb-pack-size" value="3">
                <label for="strawb-size3">3</label><br>
                <input type="radio" id="strawb-size6" name="strawb-pack-size" value="6">
                <label for="strawb-size6">6</label><br>
                <input type="radio" id="strawb-size12" name="strawb-pack-size" value="12">
                <label for="strawb-size12">12</label><br>
              </div>
        
              <div class="cart-button">
                <button type="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>