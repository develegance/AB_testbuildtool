import shared from '../shared/shared';

const { ID } = shared;
const stars = [1, 2, 3, 4, 5]
  .map((star) => {
    return '<img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/star-1.png"/>';
  })
  .join('\n');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.3335 10L4.25016 7.08333L10.0835 12.9167L21.7502 1.25L24.6668 4.16667L10.0835 18.75L1.3335 10Z" fill="#ACD399" stroke="#ACD399" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;

const heroContent = ` <div class="${ID}-hero-section">
                        <div class="hero-content custom-hero-content">
                          <div class="content-text">
                            <h1>Regain your <span>health and energy</span> with the power of aloe vera</h1>
                          </div>
                        </div>
                        <div class="hero-content">
                          <div class="content-text">
                            <h1 class="custom-text">Regain your <span>health and energy</span> with the power of aloe vera</h1>
                            <ul class="content-check-lists">
                              <li class="check-list">
                                <div class="content-text-tick">${svg}</div>
                                <p>Premium aloe brand</p>
                              </li>
                              <li  class="check-list">
                                <div class="content-text-tick">${svg}</div>
                                <p>Over 20 years of research and expertise</p>
                              </li>
                              <li  class="check-list">
                                <div class="content-text-tick">${svg}</div>
                                <p>Natural ingredients sourced from Certified Organic Farms</p>
                              </li>
                              <li class="check-list">
                                  <p>All of this, to help you achieve better health and higher energy levels.</p>
                              </li>
                            </ul>
                          </div>
                          <div class="content-review">
                            <a class="regain-cta" href="https://us.univera.com/us/shop.html">SHOP BESTSELLERS</a>
                            <div class="review-content">
                              <div class="review-avatar">
                                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/image-3.png"/>
                              </div>
                              <div class="review-assets">
                                <div class="review-stars">${stars}</div>
                                <p class="review-text">I have been taking these products for almost 20 years now. They have made a huge difference in my energy and immune levels!</p>
                                <p class="reviewer">Angela Smith-Chitty McGee</p>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div class="image-container">
                          <div>
                            <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/My-project-1_adobe_express-1-e1656415616988.png"/>
                          </div>
                        </div>
                        <div class="mobile-content-review">
                            <a class="regain-cta" href="https://us.univera.com/us/shop.html">SHOP BESTSELLERS</a>
                            <div class="review-content">
                              <div class="review-avatar">
                                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/image-3.png"/>
                              </div>
                              <div class="review-assets">
                                <div class="review-stars">${stars}</div>
                                <p class="review-text">I have been taking these products for almost 20 years now. They have made a huge difference in my energy and immune levels!</p>
                                <p class="reviewer">Angela Smith-Chitty McGee</p>
                                </div>
                            </div>
                          </div>
                      </div>`;

export const heroSection = (selector) => {
  const heroStart = document.querySelector(selector);
  heroStart.insertAdjacentHTML('beforebegin', heroContent);
};
