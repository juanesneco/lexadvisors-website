// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNavigation = document.querySelector('.main-navigation');

if (mobileMenuToggle && mainNavigation) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mainNavigation.classList.toggle('mobile-open');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = mainNavigation.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      mainNavigation.classList.remove('mobile-open');
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !mainNavigation.contains(e.target)) {
      mobileMenuToggle.classList.remove('active');
      mainNavigation.classList.remove('mobile-open');
    }
  });
}

// Contact form validation and feedback
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = '#bfa046';
      return;
    }
    // Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = '#bfa046';
      return;
    }
    // Simulate successful submission
    formMessage.textContent = 'Thank you for your message! We will be in touch soon.';
    formMessage.style.color = '#0a2342';
    contactForm.reset();
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header scroll effect
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      siteHeader.style.background = 'rgba(255, 255, 255, 0.98)';
      siteHeader.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      siteHeader.style.background = 'rgba(255, 255, 255, 0.95)';
      siteHeader.style.boxShadow = 'none';
    }
  });
} 

// Footer Loading Functionality
function loadFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    // Determine the correct path to footer.html based on current page location
    const currentPath = window.location.pathname;
    const isInServicesDir = currentPath.includes('/services/');
    const footerPath = isInServicesDir ? '../footer.html' : 'footer.html';
    
    fetch(footerPath)
      .then(response => response.text())
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  }
}

// CV Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Load footer
  loadFooter();
  
  const cvPopup = document.getElementById('cv-popup');
  const cvContent = document.getElementById('cv-content');
  const closeButton = document.querySelector('.cv-popup-close');
  const overlay = document.querySelector('.cv-popup-overlay');

  // Handle clickable team cards
  document.addEventListener('click', function(e) {
    const clickableCard = e.target.closest('.clickable');
    if (clickableCard) {
      const cvFile = clickableCard.getAttribute('data-cv');
      if (cvFile) {
        loadCV(cvFile);
        showPopup();
      }
    }
  });

  // Close popup when clicking close button or overlay
  if (closeButton) {
    closeButton.addEventListener('click', hidePopup);
  }
  
  if (overlay) {
    overlay.addEventListener('click', hidePopup);
  }

  // Close popup with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cvPopup.classList.contains('active')) {
      hidePopup();
    }
  });

  function showPopup() {
    cvPopup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function hidePopup() {
    cvPopup.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  function loadCV(cvFile) {
    const cvPath = `files/cv/${cvFile}-cv.html`;
    
    fetch(cvPath)
      .then(response => {
        if (!response.ok) {
          throw new Error('CV not found');
        }
        return response.text();
      })
      .then(html => {
        cvContent.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading CV:', error);
        cvContent.innerHTML = `
          <div class="cv-popup-content">
            <div class="cv-header">
              <h2>CV Not Available</h2>
            </div>
            <div class="cv-section">
              <p>The CV for this team member is not currently available.</p>
            </div>
          </div>
        `;
      });
  }
}); 