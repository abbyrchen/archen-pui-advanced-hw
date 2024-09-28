// create react component for homepage

import React from 'react';
import '../../App.css';
import originalCinnamonRoll from '../../assets/products/original-cinnamon-roll.jpg';
import appleCinnamonRoll from '../../assets/products/apple-cinnamon-roll.jpg';
import raisinCinnamonRoll from '../../assets/products/raisin-cinnamon-roll.jpg';
import walnutCinnamonRoll from '../../assets/products/walnut-cinnamon-roll.jpg';
import chocolateCinnamonRoll from '../../assets/products/double-chocolate-cinnamon-roll.jpg';
import strawberryCinnamonRoll from '../../assets/products/strawberry-cinnamon-roll.jpg';
import NavBar from '../../components/navbar';
import Item from '../../components/item';

const Homepage = () => {
    return (
        <div>
            <NavBar />
            <header>
                <h1>Our hand-made cinnamon rolls</h1>
            </header>
            <main>
                <section id="products">
                <Item
                    image={originalCinnamonRoll}
                    name="Original cinnamon oll"
                    title="original"
                    price="$2.49"
                    glazingOptions={["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"]}
                    packSizes={[1, 3, 6, 12]}
                />
                <Item
                    image={appleCinnamonRoll}
                    name="Apple cinnamon roll"
                    title="apple"
                    price="$3.49"
                    glazingOptions={["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"]}
                    packSizes={[1, 3, 6, 12]}
                />
                <Item
                    image={raisinCinnamonRoll}
                    name="Raisin cinnamon roll"
                    title="raisin"
                    price="$2.99"
                    glazingOptions={["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"]}
                    packSizes={[1, 3, 6, 12]}
                />
                <Item
                    image={walnutCinnamonRoll}
                    name="Walnut cinnamon roll"
                    title="walnut"
                    price="$3.49"
                    glazingOptions={["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"]}
                    packSizes={[1, 3, 6, 12]}
                />
                <Item
                    image={chocolateCinnamonRoll}
                    name="Double chocolate cinnamon roll"
                    title="original"
                    price="$2.49"
                    glazingOptions={["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"]}
                    packSizes={[1, 3, 6, 12]}
                />
                <Item
                    image={strawberryCinnamonRoll}
                    name="Strawberry cinnamon roll"
                    title="strawberry"
                    price="$3.99"
                    glazingOptions={["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"]}
                    packSizes={[1, 3, 6, 12]}
                />
                </section>
            </main>
        </div>
    );
}

export default Homepage;