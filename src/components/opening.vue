<template>
    <div class="none">
        <div class="opening">
            <img src="/website.gif" alt="">
            <div class="title">
                <span style="font-size: 22px; padding-bottom: 10px;">Маркетинговое агентство</span> <br>
                <span>seo и ppc <br> для бизнеса</span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.opening img{
    opacity: 0.5;
    width: 100%;
    filter: grayscale(1);
}
.opening{
    position: relative;
}
.title {
    position: absolute;
    top: 50%;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 5px;
    font-size: 34px;
    text-transform: uppercase;
    
}

@media screen and (max-width: 5200px) and (min-width: 610px) {
.none{
  display: none;
}
}
</style>