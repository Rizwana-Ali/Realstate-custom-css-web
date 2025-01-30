import React from 'react';
import Image from 'next/image';


const Home = () => {
    return (
        <div>
           <div className="banner"></div>
            <div className="hero">
        

<h1>Find Your Dream Home with Us</h1>  
<p>Discover the perfect property tailored to your lifestyle. Whether you’re looking for a cozy apartment <br/> a luxury estate or prime commercial space we’ve got you covered. Explore exceptional listings<br/> in your ideal location, backed by trusted expertise. Your next chapter<br/> starts here—let’s make it extraordinary!</p>

            </div>
            <div className="homes">
                <div className="home">
                    <Image src={"/home2.png"} width={400} height={400} alt="house 1" />
                    <h2>Crafted with Premium Quality</h2>
                    <p>Crafted with premium quality to ensure perfection in every detail.
                    Designed to deliver excellence with durability and timeless elegance.</p>
                </div>
                <div className="home">
                    <Image src={"/home3.jpg"} width={400} height={400}  alt="house 2" />
                    <h2>Designed for Modern Living</h2>
                    <p>Experience spaces tailored to your lifestyle with smart layouts and contemporary designs. From open floor plans to cutting-edge features every detail enhances modern living.</p>
                </div>
                <div className="home">
                    <Image src={"/home4.jpg"} width={400} height={400} alt="house 3" />
                    <h2>Exceptional Comfort & Style</h2>
                    <p>Indulge in a perfect blend of comfort and sophistication, designed to make every moment special. Thoughtfully curated interiors create a space that feels as good as it looks.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Home;

