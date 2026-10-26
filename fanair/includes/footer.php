<?php
$basePath = isset($basePath) ? $basePath : "";
?>
  </main>

  <!-- ═══════════════════════════════════════
       11. REDESIGNED 4-COLUMN FOOTER
       ═══════════════════════════════════════ -->
  <footer class="footer-agency" id="footer">
    <div class="container">
      <div class="footer-agency__grid">
        <!-- Col 1: About -->
        <div>
          <a href="<?php echo $basePath; ?>index.php" class="navbar__logo" style="display: inline-block; margin-bottom: 20px;" title="Fan Air India - Industrial Air Handling & Ventilation Systems">
            <img src="<?php echo $basePath; ?>img/imageye___-_imgi_1_logo.avif" alt="Fan Air India Logo" title="Fan Air India Logo" style="height: 48px; object-fit: contain;">
          </a>
          <p style="color: rgba(255, 255, 255, 0.85); font-size: var(--fs-sm); line-height: 1.7; margin-bottom: 20px;">
            We Fan Air India Pvt. Ltd. as one of the leading and pioneer manufacturers, Engineers and Equipment & Services Providers of Air Management Equipment in the field of HVAC Industry & company was incorporated in the year 2016.
          </p>
        </div>

        <!-- Col 2: Hot Products -->
        <div>
          <h4 style="color: #FFFFFF; font-family: var(--font-tech); font-size: var(--fs-sm); margin-bottom: 20px;">Hot Products</h4>
          <ul style="display: flex; flex-direction: column; gap: 10px; font-size: var(--fs-sm); color: rgba(255, 255, 255, 0.8);">
            <li><a href="<?php echo $basePath; ?>forward-curved-centrifugal-fan.php" title="Forward Curved Centrifugal Fans">Forward Curved Centrifugal Fans</a></li>
            <li><a href="<?php echo $basePath; ?>axial-fan.php" title="Axial Flow Ventilation Fans">Axial Fans</a></li>
            <li><a href="<?php echo $basePath; ?>hvls-fans.php" title="High-Volume Low-Speed HVLS Fans">HVLS Fans</a></li>
            <li><a href="<?php echo $basePath; ?>smoke-exhaust-unit.php" title="Emergency Smoke Exhaust Units">Smoke Exhaust Unit</a></li>
            <li><a href="<?php echo $basePath; ?>backward-inclined-centrifugal-fan.php" title="Backward Inclined Centrifugal Fans">Backward Inclined Centrifugal Fans</a></li>
            <li><a href="<?php echo $basePath; ?>product.php" title="View Complete Product Catalog">More Products</a></li>
          </ul>
        </div>

        <!-- Col 3: Useful Links -->
        <div>
          <h4 style="color: #FFFFFF; font-family: var(--font-tech); font-size: var(--fs-sm); margin-bottom: 20px;">Useful Links</h4>
          <ul style="display: flex; flex-direction: column; gap: 10px; font-size: var(--fs-sm); color: rgba(255, 255, 255, 0.8);">
            <li><a href="<?php echo $basePath; ?>index.php" title="Fan Air India Home">Home</a></li>
            <li><a href="<?php echo $basePath; ?>company-profile.php" title="Company Profile & About Us">Company Profile</a></li>
            <li><a href="<?php echo $basePath; ?>contact.php" title="Contact Us & Inquiry">Contact Us</a></li>
            <li><a href="<?php echo $basePath; ?>site-map.php" title="Website Site Map">Site Map</a></li>
            <li><a href="<?php echo $basePath; ?>our-projects.php" title="Major Industrial Projects & Clients">Our Projects</a></li>
            <li><a href="<?php echo $basePath; ?>market-area.php" title="Locations & Supply Areas">Locations</a></li>
            <li><a href="<?php echo $basePath; ?>Form MGT-7A_Fanair_2023-24 - Copy.pdf" target="_blank" title="Form MGT-7A (2023-24)"><i class="fas fa-file-pdf" style="color:#D9251D; font-size: 12px; margin-right: 4px;"></i> Form MGT-7A (2023-24)</a></li>
            <li><a href="<?php echo $basePath; ?>img/Fanair MGT-7A_2024-25.pdf" target="_blank" title="Form MGT-7A (2024-25)"><i class="fas fa-file-pdf" style="color:#D9251D; font-size: 12px; margin-right: 4px;"></i> Form MGT-7A (2024-25)</a></li>
          </ul>
        </div>

        <!-- Col 4: Address & Contact Info -->
        <div>
          <h4 style="color: #FFFFFF; font-family: var(--font-tech); font-size: var(--fs-sm); margin-bottom: 20px;">Address</h4>
          <div class="footer-contact-list">
            <div class="footer-contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>A-09 Ghiloth Industrial Area<br>(RIICO) Tehsil-Neemrana, Distt.<br>Alwar, India-301706 (INDIA)</span>
            </div>
            <div class="footer-contact-item">
              <i class="fas fa-phone"></i>
              <a href="tel:+919811347199" title="Call Fan Air India: +91-9811347199">+91-9811347199</a>
            </div>
            <div class="footer-contact-item">
              <i class="fas fa-envelope"></i>
              <a href="mailto:saurabh.joshi@fanair.in" title="Email Fan Air India: saurabh.joshi@fanair.in">saurabh.joshi@fanair.in</a>
            </div>
            <div class="footer-social-row">
              <a href="#" class="footer-social-btn" aria-label="Twitter" title="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" class="footer-social-btn" aria-label="Facebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="footer-social-btn" aria-label="YouTube" title="YouTube"><i class="fab fa-youtube"></i></a>
              <a href="#" class="footer-social-btn" aria-label="LinkedIn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 24px; font-size: var(--fs-xs); color: rgba(255, 255, 255, 0.7); font-family: var(--font-tech);">
        <div>&copy; Fan Air India Pvt. Ltd., All Rights Reserved @<?php echo date('Y'); ?>.</div>
        <div>This site maintained by <a href="https://promopact.in/" target="_blank" rel="noopener" style="color: #D9251D; text-decoration: none;" title="Promopact Marketing India Pvt Ltd">Promopact Marketing India Pvt Ltd</a></div>
      </div>
    </div>
  </footer>

  <!-- ═══════════════════════════════════════
       FLOATING SIDEBARS (BOTH SIDES)
       ═══════════════════════════════════════ -->

  <!-- Right Side Floating Contact Bar -->
  <div class="floating-side-bar floating-bar-right">
    <div class="floating-btn btn-whatsapp" id="whatsappFloatingBtn" data-tooltip="WhatsApp Chat" onclick="toggleWhatsAppModal(true)" title="Chat on WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </div>
    <a href="tel:+919811347199" class="floating-btn btn-call" data-tooltip="Call Us" title="Call Us: +91-9811347199">
      <i class="fas fa-phone"></i>
    </a>
    <div class="floating-btn btn-email" id="emailFloatingBtn" data-tooltip="Email Us" onclick="toggleEmailModal(true)" title="Email Us">
      <i class="fas fa-envelope"></i>
    </div>
    <a href="#top" class="floating-btn btn-scroll-top" id="backToTop" data-tooltip="Scroll to Top" title="Back to Top">
      <i class="fas fa-chevron-up"></i>
    </a>
  </div>

  <!-- WhatsApp Interactive Modal Popup -->
  <div class="floating-modal" id="whatsappModal">
    <div class="floating-modal__content">
      <button class="floating-modal__close" onclick="toggleWhatsAppModal(false)">&times;</button>
      <div class="floating-modal__header">
        <div class="floating-modal__icon" style="background: #25D366; color: #fff;">
          <i class="fab fa-whatsapp"></i>
        </div>
        <div>
          <h4 style="font-size: 18px; margin: 0; color: #0F172A; font-weight: 700;">Direct WhatsApp Desk</h4>
          <span style="font-size: 12px; color: #64748B;">Fan Air India Technical Team</span>
        </div>
      </div>
      <form id="whatsappForm" method="POST" action="<?php echo $basePath; ?>send-mail.php">
        <input type="hidden" name="formSource" value="WhatsApp Inquiry Form">
        <input type="text" name="website" style="display:none;" tabindex="-1" autocomplete="off">
        <div class="floating-modal__group">
          <label for="wa_name">Your Name *</label>
          <input type="text" id="wa_name" name="whatsappName" required placeholder="e.g. Rahul Sharma">
        </div>
        <div class="floating-modal__group">
          <label for="wa_phone">Mobile Number *</label>
          <input type="tel" id="wa_phone" name="whatsappMobile" pattern="[0-9]{10}" required placeholder="10-digit Mobile (e.g. 9876543210)">
        </div>
        <button type="submit" class="floating-modal__btn" style="background: #25D366; color: #fff;">
          <i class="fab fa-whatsapp"></i>
          <span>Start WhatsApp Chat</span>
        </button>
      </form>
    </div>
  </div>

  <!-- Email Interactive Modal Popup -->
  <div class="floating-modal" id="emailModal">
    <div class="floating-modal__content">
      <button class="floating-modal__close" onclick="toggleEmailModal(false)">&times;</button>
      <div class="floating-modal__header">
        <div class="floating-modal__icon" style="background: #D9251D; color: #fff;">
          <i class="fas fa-envelope"></i>
        </div>
        <div>
          <h4 style="font-size: 18px; margin: 0; color: #0F172A; font-weight: 700;">Email Technical Support</h4>
          <span style="font-size: 12px; color: #64748B;">Direct response within 2 business hours</span>
        </div>
      </div>
      <form id="emailForm" method="POST" action="<?php echo $basePath; ?>send-mail.php">
        <input type="hidden" name="formSource" value="Email Technical Inquiry Form">
        <input type="text" name="website" style="display:none;" tabindex="-1" autocomplete="off">
        <div class="floating-modal__group">
          <label for="em_company">Company Name</label>
          <input type="text" id="em_company" name="companyName" placeholder="e.g. Acme HVAC Pvt. Ltd.">
        </div>
        <div class="floating-modal__group">
          <label for="em_name">Your Name *</label>
          <input type="text" id="em_name" name="name" required placeholder="e.g. Amit Kumar">
        </div>
        <div class="floating-modal__group">
          <label for="em_email">Email Address *</label>
          <input type="email" id="em_email" name="email" required placeholder="e.g. amit@industry.com">
        </div>
        <div class="floating-modal__group">
          <label for="em_phone">Mobile Number *</label>
          <input type="tel" id="em_phone" name="mobile" pattern="[0-9]{10}" required placeholder="10-digit Mobile (e.g. 9811347199)">
        </div>
        <div class="floating-modal__group">
          <label for="em_product">Products / Services</label>
          <input type="text" id="em_product" name="productService" placeholder="e.g. Axial Flow Fan, Centrifugal Fan, Ducting">
        </div>
        <div class="floating-modal__group">
          <label for="em_message">Message *</label>
          <textarea id="em_message" name="message" rows="3" required placeholder="Enter CFM, Static Pressure or Project Requirements..."></textarea>
        </div>
        <button type="submit" class="floating-modal__btn" style="background: #D9251D; color: #fff;">
          <i class="fas fa-paper-plane"></i>
          <span>Send Message</span>
        </button>
      </form>
    </div>
  </div>

  <!-- CDN & Master Script -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <script src="<?php echo $basePath; ?>assets/js/script.js"></script>
  <script>
    function toggleWhatsAppModal(show) {
      const waModal = document.getElementById('whatsappModal');
      if (waModal) {
        if (show) {
          waModal.classList.add('active');
          waModal.style.display = 'flex';
        } else {
          waModal.classList.remove('active');
          waModal.style.display = 'none';
        }
      }
    }

    function toggleEmailModal(show) {
      const emModal = document.getElementById('emailModal');
      if (emModal) {
        if (show) {
          emModal.classList.add('active');
          emModal.style.display = 'flex';
        } else {
          emModal.classList.remove('active');
          emModal.style.display = 'none';
        }
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      const waForm = document.getElementById('whatsappForm');
      const waModal = document.getElementById('whatsappModal');
      const emForm = document.getElementById('emailForm');
      const emModal = document.getElementById('emailModal');

      if (waModal) {
        waModal.addEventListener('click', function(e) {
          if (e.target === waModal) {
            toggleWhatsAppModal(false);
          }
        });
      }

      if (emModal) {
        emModal.addEventListener('click', function(e) {
          if (e.target === emModal) {
            toggleEmailModal(false);
          }
        });
      }
    });
  </script>
</body>
</html>
