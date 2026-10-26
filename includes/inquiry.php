<!-- ---------------------------------------
     8. INQUIRY SECTION (REDESIGNED CLEAN & BALANCED)
     --------------------------------------- -->
<section class="section section--alt" id="inquiry">
  <div class="container">
    <div class="section__header text-center">
      <div class="hud-badge">Get System Quote</div>
      <h2 class="section__title">Request Custom <span class="text-gradient-red">HVAC Technical Quotation</span></h2>
      <p class="section__desc">For top-quality HVAC air management solutions, calculate your CFM requirements or submit your project details below.</p>
    </div>

        <!-- 2-Column Balanced Grid: Left Info & Image, Right Form -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: stretch;" class="inquiry-main-grid">
      <!-- Left Column: Sales Info & Visual Card -->
      <div class="inquiry-left-col" style="display: flex; flex-direction: column; gap: 20px; height: 100%;">
        <div class="inquiry-img-card" style="position: relative; border-radius: 20px; overflow: hidden; flex: 1 1 0; min-height: 280px; box-shadow: 0 15px 35px rgba(0,0,0,0.08); border: 1px solid #E2E8F0;">
          <img src="img/cnc-laser-mfg-visual.avif" alt="Fan Air Technical Sales Engineering" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;">
          <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.85) 100%);"></div>
          <div style="position: absolute; bottom: 20px; left: 20px; right: 20px; color: #ffffff;">
            <span style="display: inline-block; padding: 4px 10px; border-radius: 999px; background: #D9251D; font-family: var(--font-tech); font-size: 11px; font-weight: 700; margin-bottom: 6px; text-transform: uppercase;">
              Sales & Technical Engineering
            </span>
            <h3 style="font-size: 20px; font-weight: 800; color: #ffffff; margin: 0;">Direct Project Consultation</h3>
          </div>
        </div>

        <div class="glass-card" style="padding: 24px; display: flex; align-items: center; gap: 16px; border-radius: 18px; flex-shrink: 0;">
          <div style="width: 48px; height: 48px; border-radius: 14px; background: rgba(217,37,29,0.1); border: 1px solid rgba(217,37,29,0.2); display: flex; align-items: center; justify-content: center; color: #D9251D; font-size: 20px; flex-shrink: 0;">
            <i class="fas fa-phone"></i>
          </div>
          <div>
            <strong style="color: var(--brand-blue); font-family: var(--font-tech); font-size: 11px; display: block; letter-spacing: 0.05em; margin-bottom: 2px;">DIRECT SALES HOTLINE</strong>
            <a href="tel:+919811347199" style="font-size: 18px; color: var(--slate-charcoal); font-weight: 800;">+91-9811347199</a>
          </div>
        </div>

        <div class="glass-card" style="padding: 24px; display: flex; align-items: center; gap: 16px; border-radius: 18px; flex-shrink: 0;">
          <div style="width: 48px; height: 48px; border-radius: 14px; background: rgba(17,17,17,0.06); border: 1px solid rgba(17,17,17,0.15); display: flex; align-items: center; justify-content: center; color: var(--slate-charcoal); font-size: 20px; flex-shrink: 0;">
            <i class="fas fa-envelope"></i>
          </div>
          <div>
            <strong style="color: var(--brand-blue); font-family: var(--font-tech); font-size: 11px; display: block; letter-spacing: 0.05em; margin-bottom: 2px;">EMAIL ENGINEERING DEPT</strong>
            <a href="mailto:saurabh.joshi@fanair.in" style="font-size: 16px; color: var(--slate-charcoal); font-weight: 800;">saurabh.joshi@fanair.in</a>
          </div>
        </div>
      </div>

      <!-- Right Column: Quotation Form -->
      <div class="glass-card cyber-form" style="padding: 32px; border-radius: 20px;">
        <h3 style="font-size: 22px; font-weight: 800; color: var(--slate-charcoal); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          <i class="fas fa-paper-plane" style="color: #D9251D; font-size: 18px;"></i> Send Project Quotation Signal
        </h3>
        
        <form id="inquiry-form" action="#" method="POST">
          <div class="form-group">
            <input type="text" id="name" name="name" placeholder=" " required>
            <label for="name">Your Full Name *</label>
          </div>
          <div class="form-group">
            <input type="email" id="email" name="email" placeholder=" " required>
            <label for="email">Corporate Email Address *</label>
          </div>
          <div class="form-group">
            <input type="tel" id="mobile" name="mobile" placeholder=" " required>
            <label for="mobile">Mobile Number *</label>
          </div>
          <div class="form-group">
            <select id="product" name="product" required>
              <option value="" disabled selected hidden></option>
              <option value="forward-curved">Forward Curved Centrifugal Fans</option>
              <option value="backward-inclined">Backward Inclined Centrifugal Fans</option>
              <option value="axial">Axial Fans</option>
              <option value="jet">Jet Fans</option>
              <option value="inline">Inline Fans</option>
              <option value="fan-section">Fan Sections</option>
            </select>
            <label for="product">Equipment Category *</label>
          </div>
          <div class="form-group">
            <textarea id="message" name="message" placeholder=" " rows="3"></textarea>
            <label for="message">Technical Requirements & Airflow CFM Notes</label>
          </div>
          <button type="submit" class="btn-cyber btn-cyber--primary btn-sheen-effect" style="width: 100%; border-radius: 12px; padding: 16px;">
            <span>Send Quotation Signal</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
