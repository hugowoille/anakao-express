    navbar = document.getElementById('navbar');
    navElements = document.getElementById('nav-elements');
      
    window.addEventListener('scroll', function(){
      const scroll = this.document.documentElement.scrollTop;
    
      if (scroll > 10) {
        navbar.style.height = "7vh";
        navElements.style.height = "2vh";
        navbar.style.background = "#fdfedb";
      } else {
        navbar.style.height = "10vh";
        navElements.style.height = "3vh";
        navbar.style.background = "#fdfedb00"
      }
    });
