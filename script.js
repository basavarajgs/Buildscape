// ===== PROJECT DATA =====
var projects = {
  1: {
    title: 'Anugraha Nilaya',
    category: 'Residential', badgeClass: 'residential',
    desc: 'Anugraha Nilaya is a contemporary 4BHK triplex residential building that blends modern architecture with functional design. Featuring spacious layouts, premium finishes, and thoughtfully designed living spaces.',
    location: 'Channarayapatna, Karnataka', type: 'Residential',
    area: '3,000 sq. ft.', duration: '12 Months', status: 'Completed', client: 'Basavaraju G S',
    media: [
      { type: 'image', src: 'images/Project1-front.jpg', thumb: 'images/Project1-front.jpg' },
      { type: 'image', src: 'images/Project1-side.jpg', thumb: 'images/Project1-side.jpg' },
      { type: 'image', src: 'images/Project1-back.jpg', thumb: 'images/Project1-back.jpg' }
    ],
    highlights: [
      'Spacious <b>4BHK Triplex Residence</b> with thoughtfully planned layouts',
      'Premium satin-finish vitrified tile flooring throughout the home',
      'Modern modular kitchen with dedicated crockery/storage unit',
      'Elegant foyer area creating a welcoming entrance',
      'Dedicated study space for work or learning',
      'Private terrace sit-out for relaxation and outdoor living',
      'Architecturally designed open-well staircase',
      'Stunning <b>20-ft full-height living room window</b> for abundant natural light',
      'Three luxurious master bedrooms and one comfortable guest bedroom',
      'Two spacious balconies offering ventilation and outdoor views',
      'Separate utility room and store room for added convenience'
    ]
  },
  2: {
    title: 'Shree Lakshmi Devi Nilaya',
    category: 'Residential', badgeClass: 'residential',
    desc: 'Shree Lakshmi Devi Nilaya is a residential complex built for modern urban families. The project offers spacious apartments with ample natural light, modular kitchens, and dedicated parking.',
    location: 'Bangalore, Karnataka', type: 'Residential',
    area: '2,800 sq. ft.', duration: '12 Months', status: 'Completed', client: 'Chandan T',
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=150&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=150&q=60' }
    ],
    highlights: ['Modular kitchen and premium bathroom fittings', 'Dedicated covered parking', 'Power backup and 24/7 security', 'Quality materials and workmanship throughout']
  },
  3: {
    title: 'Palm Grove Residence',
    category: 'Residential', badgeClass: 'residential',
    desc: 'Palm Grove Residence is an elegant 3BHK independent house that blends traditional warmth with contemporary design.',
    location: 'Sarjapur Road, Bangalore', type: 'Independent House',
    area: '2,400 sq. ft.', duration: '10 Months', status: 'Completed', client: 'Private Client',
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=150&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=150&q=60' }
    ],
    highlights: ['3BHK with vastu-compliant floor plan', 'Eco-friendly and sustainable materials', 'Energy-efficient design with cross ventilation', 'Teak wood doors and windows throughout']
  },
  4: {
    title: 'TechPark Office Block',
    category: 'Commercial', badgeClass: 'commercial',
    desc: 'TechPark Office Block is a 5-storey Grade-A commercial office building with open floor plans, high-speed connectivity infrastructure, and energy-efficient glazing.',
    location: 'Electronic City, Bangalore', type: 'Commercial Office',
    area: '45,000 sq. ft.', duration: '28 Months', status: 'Completed', client: 'Corporate Developer',
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&q=60' }
    ],
    highlights: ['G+4 floors with flexible open floor plates', 'Central air conditioning and fire suppression', 'High-speed elevator with backup power', 'CCTV surveillance and access control', 'EV charging stations in basement parking']
  },
  5: {
    title: 'Metro Retail Complex',
    category: 'Commercial', badgeClass: 'commercial',
    desc: 'Metro Retail Complex is a large-scale commercial development featuring premium retail outlets, food court, and multi-level parking.',
    location: 'Koramangala, Bangalore', type: 'Retail & Commercial',
    area: '72,000 sq. ft.', duration: '32 Months', status: 'Completed', client: 'Commercial Developer',
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=150&q=60' }
    ],
    highlights: ['3 floors of premium retail and food court', 'Multi-level basement parking for 200+ vehicles', 'Escalators, lifts, and wide walkways', 'High-visibility LED facade and signage', 'Centralized HVAC and fire safety systems']
  }
};

// ===== GALLERY STATE =====
var currentMedia = [];
var currentIndex = 0;

function showMedia(index) {
  var item = currentMedia[index];
  var img = document.getElementById('modalMainImage');
  var vid = document.getElementById('modalMainVideo');
  vid.pause();
  if (item.type === 'video') {
    img.style.display = 'none'; vid.style.display = 'block'; vid.src = item.src;
  } else {
    vid.style.display = 'none'; vid.src = ''; img.style.display = 'block'; img.src = item.src;
  }
  document.querySelectorAll('.thumb').forEach(function(t, i) { t.classList.toggle('active', i === index); });
  currentIndex = index;
}

function shiftMedia(dir) {
  showMedia((currentIndex + dir + currentMedia.length) % currentMedia.length);
}

function openModal(id) {
  var p = projects[id];
  if (!p) return;
  currentMedia = p.media; currentIndex = 0;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalLocation').textContent = p.location;
  document.getElementById('modalType').textContent = p.type;
  document.getElementById('modalArea').textContent = p.area;
  document.getElementById('modalDuration').textContent = p.duration;
  document.getElementById('modalStatus').textContent = p.status;
  document.getElementById('modalClient').textContent = p.client;
  var badge = document.getElementById('modalBadge');
  badge.textContent = p.category; badge.className = 'project-badge ' + p.badgeClass;
  var strip = document.getElementById('modalThumbnails');
  var html = '';
  for (var i = 0; i < p.media.length; i++) {
    var m = p.media[i];
    var playIcon = m.type === 'video' ? '<div class="play-icon"><i class="fas fa-play"></i></div>' : '';
    html += '<div class="thumb ' + (i === 0 ? 'active' : '') + '" onclick="showMedia(' + i + ')"><img src="' + (m.thumb || m.src) + '" alt=""/>' + playIcon + '</div>';
  }
  strip.innerHTML = html;
  var showArrows = p.media.length > 1;
  document.querySelectorAll('.media-arrow').forEach(function(a) { a.style.display = showArrows ? 'flex' : 'none'; });
  var ul = document.getElementById('modalHighlights');
  ul.innerHTML = p.highlights.map(function(h) { return '<li>' + h + '</li>'; }).join('');
  showMedia(0);
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalMainVideo').pause();
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') shiftMedia(1);
  if (e.key === 'ArrowLeft') shiftMedia(-1);
});

// ===== NAVBAR =====
window.addEventListener('scroll', function() {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  var btn = document.getElementById('backToTop');
  if (btn) btn.classList.toggle('show', window.scrollY > 400);
});

// ===== HAMBURGER =====
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('#navLinks a').forEach(function(link) {
  link.addEventListener('click', function() { document.getElementById('navLinks').classList.remove('open'); });
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var note = document.getElementById('formNote');
  note.textContent = 'Thank you! We will get back to you soon.';
  this.reset();
  setTimeout(function() { note.textContent = ''; }, 4000);
});

// ===== VIDEO TOUR =====
function playVideo(wrapper, url) {
  var iframe = document.createElement('iframe');
  iframe.src = url + '?autoplay=1';
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowFullscreen = true;
  wrapper.innerHTML = '';
  wrapper.appendChild(iframe);
}

// ===== QUOTE CALCULATOR =====
function calculateQuote() {
  var type = document.getElementById('calcType').value;
  var area = parseFloat(document.getElementById('calcArea').value);
  var floors = parseFloat(document.getElementById('calcFloors').value);
  var grade = document.getElementById('calcGrade').value;

  if (!area || area < 100) {
    alert('Please enter a valid plot area (minimum 100 sq. ft.)');
    return;
  }

  var ratePerSqft = { residential: 1800, commercial: 2200, renovation: 900, peb: 1400 };
  var gradeMultiplier = { basic: 1, standard: 1.3, premium: 1.7 };
  var baseRate = ratePerSqft[type] * gradeMultiplier[grade];
  var totalArea = area * floors;
  var estimated = baseRate * totalArea;
  var low = Math.round(estimated * 0.9);
  var high = Math.round(estimated * 1.1);

  function formatINR(num) {
    if (num >= 10000000) return '₹' + (num / 10000000).toFixed(2) + ' Cr';
    if (num >= 100000) return '₹' + (num / 100000).toFixed(2) + ' Lac';
    return '₹' + num.toLocaleString('en-IN');
  }

  document.getElementById('resultAmount').textContent = formatINR(low) + ' – ' + formatINR(high);

  var typeLabels = { residential: 'Residential', commercial: 'Commercial', renovation: 'Renovation', peb: 'PEB Structure' };
  var gradeLabels = { basic: 'Basic (Economy)', standard: 'Standard', premium: 'Premium' };
  var floorLabels = { 1: 'G', 2: 'G+1', 3: 'G+2', 4: 'G+3', 5: 'G+4+' };

  document.getElementById('resultBreakdown').innerHTML =
    '<div class="breakdown-item"><span>Construction Type</span><span>' + typeLabels[type] + '</span></div>' +
    '<div class="breakdown-item"><span>Plot Area</span><span>' + area + ' sq. ft.</span></div>' +
    '<div class="breakdown-item"><span>Floors</span><span>' + floorLabels[floors] + '</span></div>' +
    '<div class="breakdown-item"><span>Quality Grade</span><span>' + gradeLabels[grade] + '</span></div>' +
    '<div class="breakdown-item"><span>Rate per sq. ft.</span><span>₹' + Math.round(baseRate).toLocaleString('en-IN') + '</span></div>' +
    '<div class="breakdown-item"><span>Total Built-up Area</span><span>' + totalArea.toLocaleString('en-IN') + ' sq. ft.</span></div>';

  var result = document.getElementById('calcResult');
  result.style.display = 'block';
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== PROJECT FILTER =====
document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.project-card').forEach(function(card) {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== SCROLL REVEAL =====
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.service-card, .about-img-wrap, .about-content, .process-step, .team-card, .project-card').forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
