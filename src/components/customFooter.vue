<template>
    <div id="footer">
        
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 class="bibit-bangsa" style="color: white;">Bibit Bangsa</h1>
                </div>
                <div class="col-md-6">
                    <h4>Our Social Media</h4>
                    <div style="display: flex; flex-direction: row;">
                        <div class="socmed" @click="goTo('facebook')">
                            <i class="fab fa-facebook-f fa-2x"></i>
                        </div>
                        <div class="socmed" @click="goTo('twitter')">
                            <i class="fab fa-twitter fa-2x"></i>
                        </div>
                        <div class="socmed" @click="goTo('instagram')">
                            <i class="fab fa-instagram fa-2x"></i>
                        </div>
                    </div>
                </div>
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
            goTo (link) {
                window.open(`https://www.${link}.com`);
            }
        }
    }
</script>

<style scoped>
    #footer {
        background: linear-gradient(90deg, #1aa89c, #5dece0);
        padding: 40px 0;
    }

    .socmed {
        width: 75px;
        height: 75px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #137560;
        color: white;
        border-radius: 200px;
        margin: 0 20px;

        cursor: pointer;
    }
</style>