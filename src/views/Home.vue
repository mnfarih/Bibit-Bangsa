<template>
  <div class="home">

    <div class="pinned-to-top">
      <h1 class="bibit-bangsa" style="margin-left: 140px; margin-top: 20px; color:white;">Bibit Bangsa</h1>
    </div>
    
    <!-- Slideshow Start -->
    <div id="carouselExampleIndicators" class="carousel slide brund--style" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="https://picsum.photos/1920/800/?random=54" alt="First slide">
                <!-- <img class="d-block w-100" src="@/assets/img/slide2.jpg" alt="First slide"> -->
                <div class="carousel-caption d-none d-md-block">
                    <h5>One-Stop Shop Anti-Cyber Bullying Guides</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nunc vel orci lacinia aliquet.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="https://picsum.photos/1920/800/?random=55" alt="Second slide">
                <!-- <img class="d-block w-100" src="@/assets/img/slide1.jpg" alt="Second slide"> -->
                <div class="carousel-caption d-none d-md-block">>
                  <h5>One-Stop Shop Anti-Cyber Bullying Guides</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nunc vel orci lacinia
                        aliquet.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="https://picsum.photos/1920/800/?random=56" alt="Third slide">
                <!-- <img class="d-block w-100" src="@/assets/img/slide3.jpg" alt="Third slide"> -->
                <div class="carousel-caption d-none d-md-block">>
                  <h5>One-Stop Shop Anti-Cyber Bullying Guides</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nunc vel orci lacinia
                        aliquet.</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <!-- Slideshow End -->

    <!-- Guides Start -->
    <div class="container mt-5">
      
      <h1>Guides</h1>

      <div class="row">
        <div class="col-md-6 padding-40" @click="$router.push('/guide')">
          <div style="display: flex; justify-content: center;">
            <div class="guide-image guide1"></div>
          </div>
          <div class="guide-desc">
            <h3 class="mt-4">Word can also hurt</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius urna, nec ullamcorper ex. Etiam a
              cursus lectus, vitae porttitor metus.</p>
          </div>
        </div>
        <div class="col-md-6 padding-40">
          <div style="display: flex; justify-content: center;">
            <div class="guide-image guide2"></div>
          </div>
          <div class="guide-desc">
            <h3 class="mt-4">How to stop cyberbullying</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius urna, nec ullamcorper ex. Etiam a
              cursus lectus, vitae porttitor metus.</p>
          </div>
        </div>
        <div class="col-md-6 padding-40">
          <div style="display: flex; justify-content: center;">
            <div class="guide-image guide3"></div>
          </div>
          <div class="guide-desc">
            <h3 class="mt-4">Being Mature On Our Terms</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius urna, nec ullamcorper ex. Etiam a
              cursus lectus, vitae porttitor metus.</p>
          </div>
        </div>
        <div class="col-md-6 padding-40">
          <div style="display: flex; justify-content: center;">
            <div class="guide-image guide4"></div>
          </div>
          <div class="guide-desc">
            <h3 class="mt-4">Social Media and It's Harms</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius urna, nec ullamcorper ex. Etiam a
              cursus lectus, vitae porttitor metus.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Guides End --> 

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .pinned-to-top {
    position: absolute;
    z-index: 2;
  }

  .guide-image {
    height: 300px;
    width: 90%;

    background: #000;
    background-size: cover;
    background-position: center;

    border:1px solid rgb(182, 182, 182);
    border-radius: 15px;
  }

  .guide1 {
    background: url('~@/assets/img/guide1.jpeg');
    background-size: cover;
  }

  .guide2 {
    background: url('~@/assets/img/guide2.png');
    background-size: cover;
  }

  .guide3 {
    background: url('~@/assets/img/guide3.jpeg');
    background-size: cover;
  }

  .guide4 {
    background: url('~@/assets/img/guide4.jpeg');
    background-size: cover;
  }

  .padding-40 {
    padding: 40px;
    cursor: pointer;
  }
</style>