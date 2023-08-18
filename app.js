window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById('search');
  const searchToggle = document.getElementById('searchToggle');
  const searchField = document.getElementById('searchField');

  searchToggle.addEventListener('click', () => {
    searchField.classList.toggle('hidden');
    search.classList.toggle('custom-border');
    search.classList.toggle('border-gray');
  });

  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');
  const body = document.querySelector('body');
  const links = menu.querySelectorAll('a'); 

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      burger.classList.remove('active');
      document.body.classList.remove('overflow-hidden');
    });
  });

  window.addEventListener('resize', () => {
    if(window.innerWidth > 1024){
      menu.classList.add('hidden');
      burger.classList.remove('active');
      body.classList.remove('overflow-hidden');
    }
    
  } )

  const slides = document.querySelectorAll('#slider .animate-flip-in-ver-left');
  const prevButton = document.getElementById('prev-btn');
  const nextButton = document.getElementById('next-btn');
  let currentSlideIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'flex';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  showSlide(currentSlideIndex);

  prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  });

  nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  });

  var macy = Macy({
    container: '#macy-container',
    trueOrder: true,
    waitForImages: false,
    margin: 42,
    columns: 3,
    breakAt: {
        1024:{
          margin:12,
        }
    }
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    transitionEffect: "fade"
  });

  let container = document.querySelector('#macy-container');
  let buttonAll = document.querySelector('#button-all');
  let images = container.querySelectorAll('img');

  buttonAll.addEventListener("click", () => {
    const bgContainer = document.querySelector('#container');
    bgContainer.style.display = "none";
    
    const imgFolderUrl = "img/";

    const imageFileNames = ["1project.jpg", "project2.jpg", "project3.jpg","project4.jpg","project5.jpg","project6.jpg","project7.jpg","project8.jpg","project9.jpg"];

    imageFileNames.forEach(fileName => {
      const imageUrl = imgFolderUrl + fileName;

      const imageDiv = document.createElement("div");
      imageDiv.innerHTML = `
        <a href="${imageUrl}" data-fancybox="gallery"  data-transition-effect="fade">
          <img src="${imageUrl}" class="h-full animate-flip-in-ver-left" />
        </a>
      `;
      container.appendChild(imageDiv);
    });
    macy.recalculate(true);
    });

    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add("animate-flip-in-ver-left");
          observer.unobserve(img);
        }
      });
    }

    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    images.forEach(img => {
      observer.observe(img);
    });

})