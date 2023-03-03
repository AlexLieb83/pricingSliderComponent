import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useRef } from "react";

const PricingDetails = {
  1: {
    pageviews: "10k",
    monthly: 8,
    yearly: 72,
  },
  2: {
    pageviews: "50k",
    monthly: 12,
    yearly: 108,
  },
  3: {
    pageviews: "100k",
    monthly: 16,
    yearly: 144,
  },
  4: {
    pageviews: "500k",
    monthly: 24,
    yearly: 216,
  },
  5: {
    pageviews: "1M",
    monthly: 36,
    yearly: 324,
  },
};

function App() {
  const [pageviews, setPageviews] = useState(3);
  const [isMonthly, setIsMonthly] = useState(true);

  function handlePageviewInput(e) {
    setPageviews(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <h1>Simple, traffic-based pricing</h1>{" "}
        <p>
          Sign-up for our 30-day trial. <br /> No credit card required.
        </p>
        <p>Pageviews</p>
        <div className="card">
          <div className="slider-wrapper">
            <p>100k pageviews</p>
            <div className="range-wrapper">
              <input
                type="range"
                name="pageviews"
                id="pageviews"
                min="1"
                max="5"
                step="1"
                defaultValue={3}
                aria-label={
                  PricingDetails[pageviews][isMonthly ? "monthly" : "yearly"]
                }
                onInput={handlePageviewInput}
              />
              <p>$ /month</p>
            </div>
            <div className="billing-wrapper">
              <input type="checkbox" name="billingType" id="billingType" />
              <label htmlFor="billingType">
                <p>Monthly Billing</p>
                <div className="fake-checkbox"></div>
                <p>
                  Yearly Billing{" "}
                  <span>
                    25% <span>discount</span>
                  </span>
                </p>
              </label>
            </div>
            <div className="checkmark-wrapper">
              <div className="check-p">
                {/* <img src="" alt="" /> */}
                <p>Unlimited websites</p>
              </div>
              <div className="check-p">
                {/* <img src="" alt="" /> */}
                <p>100% data ownership</p>
              </div>
              <div className="check-p">
                {/* <img src="" alt="" /> */}
                <p>Email reports</p>
              </div>
            </div>
            <button className="btn">Start my trial</button>
          </div>
        </div>
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://alexliebhaber.netlify.app/">Alex Liebhaber</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
