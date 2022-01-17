<template>
    <div>
    
        <div class="header mb-3">
            <div class="container">
                <h1 class="bibit-bangsa" style="padding: 20px 0; color:rgb(97, 97, 97); text-shadow: none;">Bibit Bangsa</h1>
            </div>
        </div>

        <div class="container">

            <div class="back-button" @click="$router.push('/')">
                <i class="fas fa-angle-left fa-2x"></i>
            </div>

            <div class="poster mt-5"></div>

            <h2 style="font-size: 220%; text-align: center; margin: 30px 0 20px;">Say No To Cyberbullying</h2>
            <div style="text-align: justify; width: 80%; margin: 0 auto;">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius urna, nec ullamcorper ex. Etiam a cursus lectus, vitae porttitor metus. Nunc vestibulum, dolor vel porta viverra, augue sapien posuere urna, quis lobortis risus sem dignissim orci. Ut velit tortor, porta nec volutpat at, vulputate et odio. Proin dui felis, maximus eget viverra non, bibendum in ante. Nullam eleifend lacus vitae commodo lacinia. Nunc ante elit, consectetur quis mollis et, pellentesque laoreet arcu. Ut sit amet purus eget dui semper aliquam. Ut vulputate est id tortor consequat lacinia.</p>
                <p>Suspendisse accumsan enim ac nibh tristique tempor. Aenean lobortis at mauris vitae placerat. Fusce id tellus sed arcu porta hendrerit. In semper, tellus sit amet iaculis egestas, elit turpis tempor sapien, id consequat massa lorem id augue. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vestibulum iaculis ex in pharetra. Phasellus fermentum posuere facilisis. Proin efficitur tristique neque, sed interdum leo molestie non. In vestibulum, tellus eget vehicula aliquam, nisl erat euismod orci, in malesuada dolor lorem ut eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas consequat at nunc vitae ultrices. Vivamus vehicula libero at augue fermentum, vel mattis ligula ullamcorper. Quisque quis luctus justo, eu dapibus purus. Nulla suscipit elit purus, at semper sapien volutpat eget.</p>
                <p>Suspendisse viverra et enim eget lobortis. Praesent volutpat dolor non neque rhoncus, vitae sodales ex tempus. Donec rhoncus ex sit amet metus vulputate tempor. Proin nec turpis non nunc varius consectetur. Morbi nisl massa, varius id blandit nec, semper non nulla. Maecenas mattis arcu sit amet arcu gravida tincidunt. Curabitur lacinia non sapien sed volutpat.</p>
                <p>Mauris feugiat lorem libero, quis hendrerit ipsum dictum ac. Aliquam at arcu feugiat magna auctor efficitur. Nunc iaculis vehicula diam quis mollis. Morbi vitae risus in ipsum vestibulum tincidunt. Nam sodales pharetra tortor in tincidunt. Duis fringilla aliquet vestibulum. Quisque elementum nisi ut tortor accumsan, et pretium nulla rhoncus. Nulla in condimentum quam, id sollicitudin nunc. Nulla tristique eu nisl quis porta. In varius odio lobortis massa lobortis tristique. Vivamus tempus purus dui, id pellentesque sem pellentesque ac. Morbi efficitur placerat felis et facilisis. Nulla arcu ex, blandit nec convallis quis, ultricies quis dolor.</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        mounted () {

        },
        methods : {

        }
    }
</script>

<style scoped>

    .header {
        background: linear-gradient(90deg, #1aa89c, #5dece0);
        /* padding: 40px 0; */
    }

    .poster {
        height: 500px;
        width: 100%;

        background: #000;
        background: url('~@/assets/img/poster1.jpeg');
        background-size: cover;
        background-position: center;
    }

    .back-button {
        width: 60px;
        height: 60px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #137560;
        color: white;
        border-radius: 200px;
        margin: 0 30px;

        cursor: pointer;
    }
</style>