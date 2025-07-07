<template>
    <section class="Pixelgrade">
        <img class="Pixelgrade__img" src="/assets/PixBg.png" alt="#">
        <section class="Titl-Desc-Btn">
            <h1 class="Titl-Desc-Btn__Titl">The unseen of spending three <br> years at Pixelgrade</h1>
            <p class="Titl-Desc-Btn__Desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br> 
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br> 
            porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br> 
            quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <button class="Titl-Desc-Btn__Btn">Learn More</button>
        </section>
    </section>
</template>


<style lang="scss">

@media screen and (min-width: 1200px) {
    .Pixelgrade{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Titl-Desc-Btn__Titl{
        color: rgba(77, 77, 77, 1);
        font-size:36px;
        font-weight:600;
        font-family: Inter;
    }

    .Titl-Desc-Btn__Desc{
        color: rgba(113, 113, 113, 1);
        font-size:14px;
        font-weight:400;
        font-family: Inter; 
        line-height:20px;
    }


    .Titl-Desc-Btn__Btn{
        width: 150px;
        height: 50px;
        border-radius: 6px;
        background: rgba(76, 175, 79, 1);
        color: white;
        font-size: 16px;
        font-weight: 500;
        font-family: Inter; 
        border: none;
    }
    .Titl-Desc-Btn{
        display: grid;
        gap: 16px;
    }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
    .Pixelgrade{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Titl-Desc-Btn__Titl{
        color: rgba(77, 77, 77, 1);
        font-size:26px;
        font-weight:600;
        font-family: Inter;
    }

    .Titl-Desc-Btn__Desc{
        color: rgba(113, 113, 113, 1);
        font-size:12px;
        font-weight:400;
        font-family: Inter; 
        line-height:20px;
    }


    .Titl-Desc-Btn__Btn{
        width: 140px;
        height: 45px;
        border-radius: 6px;
        background: rgba(76, 175, 79, 1);
        color: white;
        font-size: 16px;
        font-weight: 500;
        font-family: Inter; 
        border: none;
    }
    .Titl-Desc-Btn{
        display: grid;
        gap: 16px;
    }
}


@media screen and (min-width: 768px) and (max-width: 991px) {
    .Pixelgrade{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-grow: 1;
        flex-wrap: wrap;
        align-items: center;
    }

    .Pixelgrade__img{
        transform: scale(0.8);
    }

    .Titl-Desc-Btn__Titl{
        color: rgba(77, 77, 77, 1);
        font-size:16px;
        font-weight:600;
        font-family: Inter;
    }

    .Titl-Desc-Btn__Desc{
        color: rgba(113, 113, 113, 1);
        font-size:10px;
        font-weight:400;
        font-family: Inter; 
        line-height:20px;
    }


    .Titl-Desc-Btn__Btn{
        width: 140px;
        height: 45px;
        border-radius: 6px;
        background: rgba(76, 175, 79, 1);
        color: white;
        font-size: 16px;
        font-weight: 500;
        font-family: Inter; 
        border: none;
    }
    .Titl-Desc-Btn{
        display: grid;
        gap: 16px;
    }

    .Pixelgrade__img{
        transform: scale(0.7);
    }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
    .Pixelgrade{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-grow: 1;
        flex-wrap: wrap;
        align-items: center;
    }

    .Pixelgrade__img{
        transform: scale(0.8);
    }

    .Titl-Desc-Btn__Titl{
        color: rgba(77, 77, 77, 1);
        font-size:14px;
        font-weight:600;
        font-family: Inter;
        text-align: center;
    }

    .Titl-Desc-Btn__Desc{
        color: rgba(113, 113, 113, 1);
        font-size:10px;
        font-weight:400;
        font-family: Inter; 
        line-height:20px;
        text-align: center;
        height: fit-content;
        max-width: 430px;
        min-width: 100px;
    }


    .Titl-Desc-Btn__Btn{
        width: 120px;
        height: 35px;
        border-radius: 6px;
        background: rgba(76, 175, 79, 1);
        color: white;
        font-size: 14px;
        font-weight: 500;
        font-family: Inter; 
        border: none;
    }
    .Titl-Desc-Btn{
        display: grid;
        justify-items: center;
        gap: 16px;
    }

    .Pixelgrade__img{
        transform: scale(0.7);
    }
}
    
</style>