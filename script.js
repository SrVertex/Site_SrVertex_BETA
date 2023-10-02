document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    let currentIndex = 0;
    let interval;

    function showImage(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    function startAutoPlay() {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(nextImage, 5000);
    }

    startAutoPlay();

    carousel.addEventListener("mouseenter", function() {
        clearInterval(interval);
    });

    carousel.addEventListener("mouseleave", function() {
        startAutoPlay();
    });

    showImage(currentIndex);
});






















      




<div class="container px-4 py-5" id="featured-3">
<h2 class="pb-2 border-bottom">Columns with icons</h2>
<div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
  <div class="feature col">
    <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
      <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg>
    </div>
    <h3 class="fs-2 text-body-emphasis">Featured title</h3>
    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    <a href="#" class="icon-link">
      Call to action
      <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
    </a>
  </div>
  <div class="feature col">
    <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
      <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg>
    </div>
    <h3 class="fs-2 text-body-emphasis">Featured title</h3>
    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    <a href="#" class="icon-link">
      Call to action
      <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
    </a>
  </div>
  <div class="feature col">
    <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
      <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
    </div>
    <h3 class="fs-2 text-body-emphasis">Featured title</h3>
    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    <a href="#" class="icon-link">
      Call to action
      <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
    </a>
  </div>
</div>
</div>


<div class="container px-4 py-5" id="icon-grid">
<h2 class="pb-2 border-bottom">Icon grid</h2>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
  <div class="col d-flex align-items-start">
    <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"></use></svg>
    <div>
      <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
  </div>
  <div class="col d-flex align-items-start">
    <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#cpu-fill"></use></svg>
    <div>
      <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
  </div>
  <div class="col d-flex align-items-start">
    <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#calendar3"></use></svg>
    <div>
      <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
  </div>
  <div class="col d-flex align-items-start">
    <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#home"></use></svg>
    <div>
      <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
  </div>
  <div class="col d-flex align-items-start">
    <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#speedometer2"></use></svg>
    <div>
      <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
  </div>
  <div class="col d-flex align-items-start">
    <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#toggles2"></use></svg>
    <div>
      <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
  </div>
  <div class="col d-flex align-items-start">
    <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#geo-fill"></use></svg>
    <div>
      <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
  </div>
  <div class="col d-flex align-items-start">
    <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#tools"></use></svg>
    <div>
      <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
  </div>
</div>
</div>


















<section class="news__container">

<h3 class="news_recentes">&#9654; Novidades Recentes</h3>

<div class="news_left">
<img class="news_img" src="https://scontent.fldb10-1.fna.fbcdn.net/v/t39.30808-6/381233649_634432522146339_2097350601313259679_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeFfazQ_e1hIKQgNIa1AMrfrJJPWm5yuHUMkk9abnK4dQ_t_X_HSjnkgreh0wdYke9UsmhaON66YdEHlTnqNol8a&_nc_ohc=wnn9XBiwPZYAX8WL8Dv&_nc_ht=scontent.fldb10-1.fna&oh=00_AfCFSR8ALU9kcDbWNggRgEOZHh8aoJXmNdhLD4gEPu2jUg&oe=6518E247" alt="">
<div class="news_text_cotainer">
    <h1 class="news_title">Cultivador TT Em Desenvolvimento</h3>
    <h3 class="news_text">Mais um Modelo Chegando Para Comunidade Canavieira, TT FertiMAX vem de uma linha de cultivadores canavieiros para adubação via solo. O modelo será para Todas as Plataformas. Modelo 3d Base: Palito.</h3>
    <div class="btn_box">
        <a class="btn_saibaMais" href="https://www.facebook.com/story.php?story_fbid=pfbid02c6geqpF4k6kdd3CjBHZP7si2EdQq6Uq55F91ZCd7q8araK9pWqNLXsohfwGKLU2hl&id=100067387892910&mibextid=Nif5oz&paipv=0&eav=AfbqObFbzjiKClHN5eSpPGA2QYWxdVdL0sUSZLdG6hJ_81rBh0ngbGT5U3RzqZOprq4&_rdr">Saiba Mais</a>
    </div>
</div>
</div>

<div class="news_right">
<div class="news_text_cotainerR">
    <h1 class="news_title">Liberacao Tanker 15000</h3>
    <h3 class="news_text">Jan Tanker Pack já esta disponível para todas as plataformas. Como os outros modelos nao foram aceitos separados, esta é uma atualização da Tanker 10500. De brinde ganharam a Versão 12000 que fiz de ultima hora. Nao esqueçam de avaliar com 🌟🌟🌟🌟🌟</h3>
    <div class="btn_box">
        <a class="btn_saibaMais" href="https://www.facebook.com/story.php?story_fbid=pfbid0aL8urjSrS8Svi3tcjhuvaRuSAkoTqDaX9piRtDTiAWSoaRiCziVh4DoL4MmJXLmUl&id=100067387892910&mibextid=Nif5oz&paipv=0&eav=Afb7MPYvbPAGNo1vFnvWEIBIq75Bt_OR0tk_hb3QRrgFKwgYeFwphstrvmIN0O_U33o&_rdr">Saiba Mais</a>
    </div>
</div>
<img class="news_img" src="https://scontent.fldb10-1.fna.fbcdn.net/v/t39.30808-6/369879144_617764700479788_3894026026504568783_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEVUzBFBJd0YRahaoEJP1z3RSWxyUyjIU5FJbHJTKMhTuI2glUzdyObJLEoyf3pRygP3B6SMSdsQUNxOy6KDSHz&_nc_ohc=7Zy3PalymywAX8ctxLe&_nc_ht=scontent.fldb10-1.fna&oh=00_AfCYM_u-h6TG_fBnq4YNlYaRddlazSmlK4KIGXLd-ydmCg&oe=65176842" alt="">
</div>

<div class="news_left">
<img class="news_img" src="https://scontent.fldb10-1.fna.fbcdn.net/v/t39.30808-6/363862929_604597695129822_6446767400689981155_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEqGfGVZwSzDtIMpa2o3UxpNPGlyQjjQzs08aXJCONDO4faKZtNkT9-SmldIowxQVs00BAL5DLgC91b7Y53t0h3&_nc_ohc=eCGf5wShZEUAX_ZWBPw&_nc_ht=scontent.fldb10-1.fna&oh=00_AfCWULvtB9a064TLjzxerWh4ByJHkhWqJfFj2_rFLDUSrQ&oe=65181E07" alt="">
<div class="news_text_cotainer">
    <h1 class="news_title">Atualizacao Valmet 880-980 Series Disponivel</h3>
    <h3 class="news_text">A Update do Valmet Series 880-980 já esta disponível para todas as plataformas e com diversas melhorias. Gostaríamos de pedir desculpas pela questão do Som alto, e se alguém avaliou mal por causa disso, considere reavaliar com 🌟🌟🌟🌟🌟 para apoiar a continuar a produção de mais Valmets para vocês!</h3>
    <div class="btn_box">
        <a class="btn_saibaMais" href="https://www.facebook.com/story.php?story_fbid=pfbid0ftk5EBHzztjZbrZJ8DX7zpXZZAxQ9vNAZYAeufFAnd3AiKybQoDVLdrPy7ajcKDml&id=100067387892910&mibextid=Nif5oz&paipv=0&eav=AfZoYo1n2_87dQSTa0SQianyUkH8ZRBNQVtsFyfLCEAAIkQcRgNtZKSiR5i6hL9zSec&_rdr">Saiba Mais</a>
    </div>
</div>
</div>

</section>





<!-- Sessão de Skills/Habilidades -->
<section class="skills">
<h3 class="skills__title" id="skills">&#9654; Skills De Programacao</h3>
<div class="skills__line">
        <div class="skills__box">
            <ul>
                <li class="skills__img"><img src="assets\htlm.png"></li>
                <li class="skills__name">Html</li>
            </ul>
        </div>

        <div class="skills__box">
            <ul>
                <li class="skills__img"> <img src="assets\js_icon.png" alt=""></li>
                <li class="skills__name">Javascript</li>
            </ul>
        </div>

        <div class="skills__box">
            <ul>
                <li class="skills__img"> <img src="assets\react_icon.png" alt=""> </li>
                <li class="skills__name">React</li>
            </ul>
        </div>

        <div class="skills__box">
            <ul>
                <li class="skills__img"> <img src="assets\css_icon.png" alt=""> </li>
                <li class="skills__name">CSS</li>
            </ul>
        </div>
</div>
</section>







