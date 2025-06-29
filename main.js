// Main entry point for the application
import './style.css';

// DOM elements
const app = document.querySelector('#app');

// Create the main application structure
function createApp() {
  app.innerHTML = `
    <div class="container">
      <div class="card">
        <h1>Welcome to Your Vite App</h1>
        <p>This is a modern web application built with Vite. Fast, lightweight, and ready for development!</p>
        <button class="button" id="getStarted">Get Started</button>
        
        <div class="features">
          <div class="feature">
            <div class="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Powered by Vite's instant hot module replacement</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>Beautiful UI with smooth animations and effects</p>
          </div>
          <div class="feature">
            <div class="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Works perfectly on all devices and screen sizes</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Event handlers
function setupEventListeners() {
  const getStartedBtn = document.querySelector('#getStarted');
  
  getStartedBtn.addEventListener('click', () => {
    // Add a simple interaction
    getStartedBtn.textContent = 'Welcome! 🎉';
    getStartedBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
    
    setTimeout(() => {
      getStartedBtn.textContent = 'Get Started';
      getStartedBtn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }, 2000);
  });
}

// Initialize the application
function init() {
  createApp();
  setupEventListeners();
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

console.log('Vite app initialized successfully!');