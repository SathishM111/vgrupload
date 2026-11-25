import {Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
// import "./App.css";
// import Frentmenu from "../ui/Frentmenu";


const slides = [
  {
    tag: "Fresh & Delicious",
    title: "ITALIAN PIZZA",
    description:
      "Taste our delicious Italian pizza, made with fresh ingredients and lots of love.",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=90",
  },
  {
    tag: "Hot & Cheesy",
    title: "CHEESE PIZZA",
    description:
      "Enjoy every bite of our crispy pizza with melted cheese and rich flavor.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=90",
  },
  {
    tag: "Made With Love",
    title: "SPECIAL PIZZA",
    description:
      "Discover your favorite pizza with fresh toppings and amazing taste.",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=1000&q=90",
  },
];


function App() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
const navigate = useNavigate();
  return (
    <div className="restaurant">
      <main className="hero">
        <div className="pizza-image">
          <img src={slide.image} alt={slide.title} />
        </div>

        <section className="hero-content">
          <p className="tagline">{slide.tag}</p>
          <h1>{slide.title}</h1>
          <p className="description">{slide.description}</p>
            {/* <Login></Login> */}
            <div className="buttons">
              <button
                className="order-btn"
                onClick={() => alert("Thank you! Please contact us to order.")}
              >
                Order Now
              </button>
              <div >
                <button onClick={() => navigate('/Home')}>
                  Login</button>
              </div>

              <button

                className="menu-btn"
                onClick={() => Navigate("/Home")}
              >
                Login Now
              </button> 
            </div>
          </section>

          <div className="slider-dots">
            {slides.map((item, index) => (
              <button
                key={item.title}
                className={active === index ? "dot active" : "dot"}
                onClick={() => setActive(index)}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
      </main>

      <footer className="footer">
        <div className="contact-item">
          <span className="footer-icon">☎</span>
          <div>
            <h3>000 (123) 456 7890</h3>
            <p>Call us for your order</p>
          </div>
        </div>

        <div className="contact-item">
          <span className="footer-icon">⌖</span>
          <div>
            <h3>198 West 21th Street</h3>
            <p>Suite 721, New York NY 10016</p>
          </div>
        </div>

        <div className="contact-item">
          <span className="footer-icon">◷</span>
          <div>
            <h3>Open Monday-Friday</h3>
            <p>8:00am - 9:00pm</p>
          </div>
        </div>

        <div className="social">
          <a href="https://twitter.com" aria-label="Twitter">𝕏</a>
          <a href="https://facebook.com" aria-label="Facebook">f</a>
          <a href="https://instagram.com" aria-label="Instagram">◎</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
