<template>
    <section class="Our-Clients">
        <article class="Our-Clients-title">
            <h2 class="Our-Clients-title__Title">Our Clients</h2>
            <p class="Our-Clients-title__Text">
                We have been working with some Fortune 500+ clients
            </p>
        </article>
        <article class="Our-Clients-logos">
            <img class="Our-Clients-logos__img" src="/assets/OurLogo1.png" alt="#">
            <img class="Our-Clients-logos__img" src="/assets/OurLogo2.png" alt="#">
            <img class="Our-Clients-logos__img" src="/assets/OurLogo3.png" alt="#">
            <img class="Our-Clients-logos__img" src="/assets/OurLogo4.png" alt="#">
            <img class="Our-Clients-logos__img" src="/assets/OurLogo5.png" alt="#">
            <img class="Our-Clients-logos__img" src="/assets/OurLogo6.png" alt="#">
            <img class="Our-Clients-logos__img" src="/assets/OurLogo3.png" alt="#">
        </article>
    </section>
</template>

<style lang="scss">
@media screen and (min-width:1200px) {
     .Our-Clients{
        padding-top: 50px;
        width: 100%;
        height: 190px;
    }

    .Our-Clients-title{
        display: grid;
        gap: 10px;
    }

    .Our-Clients-title{
        display: grid;
        justify-items: center;
    }

    .Our-Clients-logos{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: start;
        flex-wrap: wrap;
        flex-grow: 1;
        height: fit-content;
        padding-top: 50px;
        padding-bottom: 100px;
    }

    .Our-Clients-title__Title{
        font-family: Inter;
        font-weight: 600;
        font-size: 36px;
        color: rgba(77, 77, 77, 1);
    }
    
    .Our-Clients-title__Text{
        color: rgba(113, 113, 113, 1);
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
    }
}

@media screen and (min-width:992px) and (max-width:1199px) {
     .Our-Clients{
        padding-top: 50px;
        width: 100%;
        height: 190px;
    }

    .Our-Clients-title{
        display: grid;
        gap: 10px;
    }

    .Our-Clients-title{
        display: grid;
        justify-items: center;
    }

    .Our-Clients-logos{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: start;
        flex-wrap: wrap;
        flex-grow: 1;
        height: fit-content;
        padding-top: 50px;
        padding-bottom: 100px;
    }

    .Our-Clients-title__Title{
        font-family: Inter;
        font-weight: 600;
        font-size: 36px;
        color: rgba(77, 77, 77, 1);
    }
    
    .Our-Clients-title__Text{
        color: rgba(113, 113, 113, 1);
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
    }
}

@media screen and (min-width:768px) and (max-width:991px) {
     .Our-Clients{
        padding-top: 50px;
        width: 100%;
        height: 190px;
    }

    .Our-Clients-title{
        display: grid;
        gap: 10px;
    }

    .Our-Clients-title{
        display: grid;
        justify-items: center;
    }

    .Our-Clients-logos{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: start;
        flex-wrap: wrap;
        flex-grow: 1;
        height: fit-content;
        padding-top: 50px;
        padding-bottom: 100px;
    }

    .Our-Clients-title__Title{
        font-family: Inter;
        font-weight: 600;
        font-size: 26px;
        color: rgba(77, 77, 77, 1);
    }
    
    .Our-Clients-title__Text{
        color: rgba(113, 113, 113, 1);
        font-family: Inter;
        font-weight: 400;
        font-size: 12px;
    }
}

@media screen and (min-width:320px) and (max-width:767px) {
     .Our-Clients{
        padding-top: 50px;
        width: 100%;
        height: fit-content;

    }

    .Our-Clients-title{
        display: grid;
        gap: 10px;
    }

    .Our-Clients-title{
        display: grid;
        justify-items: center;
    }

    .Our-Clients-logos{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 60px;
        align-items: start;
        flex-wrap: wrap;
        flex-grow:1;
        height: fit-content;
        padding-top: 50px;
        padding-bottom: 100px;
    }

    .Our-Clients-title__Title{
        font-family: Inter;
        font-weight: 600;
        font-size: 16px;
        color: rgba(77, 77, 77, 1);
    }
    
    .Our-Clients-title__Text{
        color: rgba(113, 113, 113, 1);
        font-family: Inter;
        font-weight: 400;
        font-size: 10px;
    }

    .Our-Clients-logos__img{
        transform: scale(0.8);
    }

}
    
   
</style>