<template>
    <section class="Information-Block">
        <img class="Information-Block__img" src="/assets/Pana.png" alt="#">
        <section class="Titl-Desc-Btn">
            <h1 class="Titl-Desc-Btn__Titl">How to design your site footer like <br> we did</h1>
            <p class="Titl-Desc-Btn__Desc">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt<br> 
                molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at <br>
                libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta<br> 
                nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer<br> 
                in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi<br> 
                ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <button class="Titl-Desc-Btn__Btn">Learn More</button>
        </section>
    </section>
</template>

<style lang="scss">
@media screen and (min-width: 1200px) {
    .Information-Block{
        display: flex;
        justify-content: center;
        gap: 20px;
        padding-top: 100px;
        padding-bottom: 100px;
    }
}
@media screen and (min-width: 992px) and (max-width: 1199px) {
    .Information-Block{
        display: flex;
        justify-content: center;
        gap: 20px;
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .Information-Block__img{
        transform: scale(0.9);
    }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
    .Information-Block{
        display: flex;
        justify-content: center;
        gap: 20px;
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .Information-Block__img{
        transform: scale(0.9);
    }
}
@media screen and (min-width: 320px) and (max-width: 767px) {
    .Information-Block{
        display: flex;
        justify-content: center;
        gap: 20px;
        padding-top: 100px;
        padding-bottom: 100px;
        flex-wrap: wrap;
        flex-grow: 1;
    }

    .Information-Block__img{
        transform: scale(0.6);
    }
}

</style>