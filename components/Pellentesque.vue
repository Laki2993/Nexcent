<template>
    <section class="Pellentesque-Block">
        <h2 class="Pellentesque-Block__Title">Pellentesque suscipit  <br> fringilla libero eu.</h2>
        <button class="Pellentesque-Block__Button--green">
            Get a Demo
            <img src="/assets/ArrowRightWhite.png" alt="#">
        </button>
    </section>
</template>
<style lang="scss">
@media screen and (min-width: 1200px) {
    .Pellentesque-Block{
        width: 100%;
        display: grid;
        justify-items: center;
        gap: 20px;
        background-color: rgba(245, 247, 250, 1);
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .Pellentesque-Block__Title{
        font-family: Inter;
        font-size: 64px;
        font-weight: 600;
        color: rgba(38, 50, 56, 1);
        text-align: center;
    }

    .Pellentesque-Block__Button--green{
        width: 180px;
        height: 50px;
        border-radius: 5px;
        background-color: rgba(76, 175, 79, 1);
        border: none;
        align-items: center;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
    }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
    .Pellentesque-Block{
        width: 100%;
        display: grid;
        justify-items: center;
        gap: 20px;
        background-color: rgba(245, 247, 250, 1);
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .Pellentesque-Block__Title{
        font-family: Inter;
        font-size: 60px;
        font-weight: 600;
        color: rgba(38, 50, 56, 1);
        text-align: center;
    }

    .Pellentesque-Block__Button--green{
        width: 180px;
        height: 50px;
        border-radius: 5px;
        background-color: rgba(76, 175, 79, 1);
        border: none;
        align-items: center;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .Pellentesque-Block{
        width: 100%;
        display: grid;
        justify-items: center;
        gap: 20px;
        background-color: rgba(245, 247, 250, 1);
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .Pellentesque-Block__Title{
        font-family: Inter;
        font-size: 40px;
        font-weight: 600;
        color: rgba(38, 50, 56, 1);
        text-align: center;
    }

    .Pellentesque-Block__Button--green{
        width: 180px;
        height: 50px;
        border-radius: 5px;
        background-color: rgba(76, 175, 79, 1);
        border: none;
        align-items: center;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
    }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
    .Pellentesque-Block{
        width: 100%;
        display: grid;
        justify-items: center;
        gap: 50px;
        background-color: rgba(245, 247, 250, 1);
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .Pellentesque-Block__Title{
        font-family: Inter;
        font-size: 40px;
        font-weight: 600;
        color: rgba(38, 50, 56, 1);
        text-align: center;
    }

    .Pellentesque-Block__Button--green{
        width: 160px;
        height: 45px;
        border-radius: 5px;
        background-color: rgba(76, 175, 79, 1);
        border: none;
        align-items: center;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
    }
}
</style>    