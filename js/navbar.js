    navbar = document.getElementById('navbar');
    navElements = document.getElementById('nav-elements');
      
    window.addEventListener('scroll', function(){
      const scroll = this.document.documentElement.scrollTop;
    
      if (scroll > 10) {
        navbar.style.height = "70px";
        navElements.style.height = "24px";
        navbar.style.background = "#fdfedb";
      } else {
        navbar.style.height = "70px";
        navElements.style.height = "24px";
        navbar.style.background = "#fdfedb00"
      }
    });
