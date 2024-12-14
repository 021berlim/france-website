window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    const scrollPosition = window.scrollY;

    let blurValue = Math.min(scrollPosition / 50, 30); 
    let opacity = Math.min(scrollPosition / 300, 0.5); 

    navbar.style.backgroundColor = `rgba(10, 15, 20, ${opacity})`;
    navbar.style.backdropFilter = `blur(${blurValue}px)`; 

    if (scrollPosition > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });
  

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = this.hash;
    const $target = $(target);

    $('html, body').animate({
        scrollTop: $target.offset().top
    }, 800, 'swing', function() {
        // Remove o hash da URL após a navegação suave
        history.pushState("", document.title, window.location.pathname + window.location.search);
    });
});
 