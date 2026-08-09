/**
 * Te Ao Maori: Māori Dünyası
 * Web Uygulaması Etkileşim Kodları (JavaScript)
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobil Menü Toggles ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinksList = document.querySelectorAll('nav a');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Menü linklerine tıklandığında menüyü kapat
    navLinksList.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- 1. Header Scroll Efekti ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- 2. Navigasyon Aktif Link Takibi ---
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // --- 3. Mitoloji & Tarih Sekme Geçişleri ---
  const mythTabs = document.querySelectorAll('.myth-tab');
  const mythContents = document.querySelectorAll('.myth-content');

  mythTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Aktif tab sınıfını temizle ve yenisine ekle
      mythTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // İçerikleri gizle ve ilgili içeriği göster
      const targetTab = tab.getAttribute('data-tab');
      mythContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === targetTab) {
          content.classList.add('active');
        }
      });
    });
  });

  // --- 4. Geleneksel Yemek: Hāngī Etkileşimli Adımları ---
  const hangiSteps = document.querySelectorAll('.hangi-step');
  const steamContainer = document.getElementById('hangi-steam');

  hangiSteps.forEach(step => {
    step.addEventListener('click', () => {
      // Aktif adımı değiştir
      hangiSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');

      // Eğer 4. adım seçildiyse buhar animasyonunu aktif et
      const stepNum = step.getAttribute('data-step');
      if (stepNum === '4') {
        steamContainer.classList.add('visible');
      } else {
        steamContainer.classList.remove('visible');
      }
    });
  });

  // --- 5. Harita ve Zaman Çizelgesi Görünüm Geçişleri ---
  const btnMap = document.getElementById('btn-map');
  const btnTimeline = document.getElementById('btn-timeline');
  const mapView = document.getElementById('map-view');
  const timelineView = document.getElementById('timeline-view');

  btnMap.addEventListener('click', () => {
    btnMap.classList.add('active');
    btnTimeline.classList.remove('active');
    mapView.style.display = 'grid';
    timelineView.style.display = 'none';
  });

  btnTimeline.addEventListener('click', () => {
    btnTimeline.classList.add('active');
    btnMap.classList.remove('active');
    mapView.style.display = 'none';
    timelineView.style.display = 'block';
  });

  // --- 6. İnteraktif Harita Konum Bilgileri ---
  const mapDots = document.querySelectorAll('.map-dot');
  const locTitle = document.getElementById('loc-title');
  const locSub = document.getElementById('loc-sub');
  const locDesc = document.getElementById('loc-desc');

  const locationData = {
    waitangi: {
      title: "Waitangi",
      subtitle: "Milletin Doğum Yeri",
      description: "Waitangi, Yeni Zelanda'nın kurucu belgesi kabul edilen 'Waitangi Antlaşması'nın (Te Tiriti o Waitangi) 1840 yılında Māori şefleri ile İngiliz Krallığı arasında imzalandığı tarihi yerdir."
    },
    rotorua: {
      title: "Rotorua",
      subtitle: "Jeotermal Kalp ve Kültür Merkezi",
      description: "Sıcak kaplıcaları, çamur havuzları ve gayzerleriyle ünlü Rotorua, Te Arawa kabilesinin yurdudur. Māori kültürünün canlı olarak yaşatıldığı ve ziyaretçilere geleneksel danslar ile Hāngī ziyafetlerinin sunulduğu ana merkezdir."
    },
    hokianga: {
      title: "Hokianga",
      subtitle: "Kupe'nin Karaya Çıktığı Yer",
      description: "Efsanevi kaşif Kupe'nin Te Ao Maori'ye ilk ayak bastığı yer olduğu kabul edilen Hokianga Körfezi, Māori halkı için manevi olarak en kutsal giriş kapılarından biridir."
    },
    milford: {
      title: "Piopiotahi (Milford Sound)",
      subtitle: "Büyüleyici Yeşil Doğa",
      description: "Māori dilinde 'yeşil ötleğen kuşu' anlamına gelen Piopiotahi, bu fiyordun muazzam güzelliğini keşfeden ilk Māori'ler için değerli bir pounamu (yeşil yeşim taşı) arama ve avlanma bölgesidir."
    }
  };

  mapDots.forEach(dot => {
    dot.addEventListener('click', () => {
      // Aktif noktayı güncelle
      mapDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      // Bilgi kartını güncelle
      const locKey = dot.getAttribute('data-location');
      const data = locationData[locKey];

      if (data) {
        // Yumuşak geçiş hissi için kartı hafifçe soldur ve değiştir
        const card = document.getElementById('location-card');
        card.style.opacity = 0;
        
        setTimeout(() => {
          locTitle.textContent = data.title;
          locSub.textContent = data.subtitle;
          locDesc.textContent = data.description;
          card.style.opacity = 1;
        }, 200);
      }
    });
  });

  // --- 7. Görsel Galeri Filtreleme ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Aktif buton sınıfını güncelle
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hide');
          // Animasyonlu görünme efekti
          item.style.opacity = 0;
          setTimeout(() => {
            item.style.opacity = 1;
          }, 50);
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  // Modalları kapatmak için genel dış tık kontrolü
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  // --- 8. Maskot İnteraktif 3D Tilt Hareketi ---
  const heroContainer = document.querySelector('.hero-container');
  const mascotImg = document.querySelector('.mascot-img');

  if (heroContainer && mascotImg) {
    heroContainer.addEventListener('mousemove', (e) => {
      const rect = heroContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Maksimum 12 derece dönüş
      const rotateX = ((centerY - y) / centerY) * 12;
      const rotateY = ((x - centerX) / centerX) * 12;
      
      mascotImg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;
    });

    heroContainer.addEventListener('mouseleave', () => {
      mascotImg.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

});

// --- 8. Modal Açma/Kapama Fonksiyonları (Global Erişim) ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Sayfa kaydırmasını devre dışı bırak
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Sayfa kaydırmasını tekrar aç
  }
}
