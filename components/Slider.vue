<template>
<section class="Slider">
    <section class="Slider-Slide">
        <article class="Slider-Slide-Block1">
            <h1 class="Slider-Slide-Block1__Title">Lessons and insights</h1>
            <h1 class="Slider-Slide-Block1__Title--green">from 8 years</h1>
            <p class="Slider-Slide-Block1__Text">Where to grow your business as a photographer: site or social media?</p>
             <button class="Slider-Slide-Block1__Btn--green">Register</button>
        </article>
        <article class="Slider-Slide-Block2">
            <div class="Slider-Slide-Block2__img" id="img"></div>
        </article>
    </section>
    <article class="Load-Bar">
        <div class="Load-Bar__circle" id="Cirk1"></div>
        <div class="Load-Bar__circle" id="Cirk2"></div>
        <div class="Load-Bar__circle" id="Cirk3"></div>
    </article>
</section>
</template>
<style lang="scss">

    @media screen and (min-width: 1200px) {
        .Slider-Slide-Block1{
       
        display: grid;
        align-items: center;
        grid-template-rows:100px  60px 100px 60px;
        justify-content: space-around;


        &__Title{
            font-family: Inter;
            font-weight: 600;
            font-size: 64px;
            color: rgba(77, 77, 77, 1);
        }

        &__Title--green{
            font-family: Inter;
            font-weight: 600;
            font-size: 64px;
            color: rgba(76, 175, 79, 1);
        }

        &__Text{
            font-family: Inter;
            font-weight: 400;
            font-size: 24px;
            color: rgba(77, 77, 77, 1);
        }

        &__Text--green{
            font-family: Inter;
            font-weight: 400;
            font-size: 16px;
            color: rgba(113, 113, 113, 1)   ;
        }

        &__Btn--green{
            width:130px;
            height: 50px;
            border-radius: 6px;
            background: rgba(76, 175, 79, 1);
            color: white;
            font-size: 16px;
            font-weight: 500;
            font-family: Inter;
            border: none;
        }

        &__Btn--green:active{
            width:130px;
            height: 50px;
            border-radius: 6px;
            background: rgba(56, 142, 59, 1);
            color: white;
            font-size: 16px;
            font-weight: 500;
            font-family: Inter;
            border: none;
        }
    }

    .Slider-Slide{
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .Slider{
        background-color: rgba(245, 247, 250, 1);
        padding-bottom: 20px;
        display: block;
        flex-wrap: wrap;
        flex-grow: 1;
    }

    .Load-Bar{
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .Load-Bar__circle{
        width:10px;
        height:10px;
        background-color: rgba(76, 175, 79, 0.623);
        border-radius: 50px;
    }

    .Slider-Slide-Block2{
        width: 391px;
        height: 510px;
        overflow: hidden;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .Slider-Slide-Block2__img{
        position: relative;
        transition: 0.3s;
        width: 391px;
        height: 400px;
        background-image: url(/assets/people1.png);
        background-size: cover;
         animation-name: slide;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: 30s;
    }

    #img1{
        position: relative;
        transition: 0.3s;
       
    }

    @keyframes slide{
        0%{
        background-image: url(/assets/people1.png);
            left: 0px;
        }
        10%{
        background-image: url(/assets/people1.png);
            left:0px;
        }
        19%{
        background-image: url(/assets/people1.png);
        }
        20%{
        background-image: url(/assets/people1.png);

            left: 400px;
        }
        20%{
            background-image: url(/assets/people1-violet.png);
        }
        30%{
           left: 0px;
           background-image: url(/assets/people1-violet.png);
        }
        40%{
           left: 0px;
           background-image: url(/assets/people1-violet.png);
        }
        50%{
            left: 400px;
            background-image: url(/assets/people1-violet.png);
        }
        59%{
            background-image: url(/assets/people1-yellow.png);
        }
        60%{
            background-image: url(/assets/people1-yellow.png);
        }
        70%{
            left: 0px;
            background-image: url(/assets/people1-yellow.png);

        }
        80%{
            left: 0px;
            background-image: url(/assets/people1-yellow.png);

        }
        90%{
            left: 400px;
            background-image: url(/assets/people1-yellow.png);

        }
        99%{
        background-image: url(/assets/people1.png);
        }
        100%{
            background-image: url(/assets/people1.png);
            left: 0px;
        }
        }
    



    #Cirk1{
        animation-name: c1;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(4, jump-end);
    }

    @keyframes c1{
        0%{
        background-color: rgb(76, 175, 79);
        }
        20%{
        background-color: rgb(95, 219, 99);
        }
        21%{
        background-color: rgba(76, 175, 79, 0.623);
        }
        100%{
        background-color: rgba(76, 175, 79, 0.623);
        }
    }
        #Cirk2{
        animation-name: c2;
        animation-duration: 30s;
        animation-timing-function: steps(4, jump-end);
        animation-iteration-count: infinite;
    }

    @keyframes c2{
        0%{
        background-color: rgba(76, 175, 79, 0.623);

        }
        40%{
        background-color: rgb(95, 219, 99);
        }
        41%{
        background-color: rgba(76, 175, 79, 0.623);
        }
        100%{
        background-color: rgba(76, 175, 79, 0.623);
        }
    }

    #Cirk3{
        animation-name: c3;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(4, jump-end);
    }

    @keyframes c3{
        0%{
        background-color: rgba(76, 175, 79, 0.623);

        }
        80%{
        background-color: rgb(95, 219, 99);
        
        }
        81%{
        background-color: rgb(95, 219, 99);
        
        }
        100%{
        background-color: rgb(95, 219, 99);
        
        }
    }
    }

        @media screen and (min-width: 992px) and (max-width: 1199px) {
        .Slider-Slide-Block1{
       
        display: grid;
        align-items: center;
        grid-template-rows:100px  60px 100px 60px;
        justify-content: space-around;


        &__Title{
            font-family: Inter;
            font-weight: 600;
            font-size: 44px;
            color: rgba(77, 77, 77, 1);
        }

        &__Title--green{
            font-family: Inter;
            font-weight: 600;
            font-size: 44px;
            color: rgba(76, 175, 79, 1);
        }

        &__Text{
            font-family: Inter;
            font-weight: 400;
            font-size: 14px;
            color: rgba(77, 77, 77, 1);
        }

        &__Text--green{
            font-family: Inter;
            font-weight: 400;
            font-size: 16px;
            color: rgba(113, 113, 113, 1)   ;
        }

           &__Btn--green{
            width:130px;
            height: 50px;
            border-radius: 6px;
            background: rgba(76, 175, 79, 1);
            color: white;
            font-size: 16px;
            font-weight: 500;
            font-family: Inter;
            border: none;
        }

        &__Btn--green:active    {
            background: rgba(56, 142, 59, 1);
        }


    }

    .Slider-Slide{
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .Slider{
        background-color: rgba(245, 247, 250, 1);
        padding-bottom: 20px;
        display: block;
        flex-wrap: wrap;
        flex-grow: 1;
    }

    .Load-Bar{
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .Load-Bar__circle{
        width:10px;
        height:10px;
        background-color: rgba(76, 175, 79, 0.623);
        border-radius: 50px;
    }

    .Slider-Slide-Block2{
        width: 391px;
        height: 510px;
        overflow: hidden;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .Slider-Slide-Block2__img{
        position: relative;
        transition: 0.3s;
        width: 291px;
        height: 300px;
        background-image: url(/assets/people1.png);
        background-size: cover;
         animation-name: slide;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: 30s;
    }

    #img1{
        position: relative;
        transition: 0.3s;
       
    }

    @keyframes slide{
        0%{
        background-image: url(/assets/people1.png);
            left: 0px;
        }
        10%{
        background-image: url(/assets/people1.png);
            left:0px;
        }
        19%{
        background-image: url(/assets/people1.png);
        }
        20%{
        background-image: url(/assets/people1.png);

            left: 410px;
        }
        20%{
            background-image: url(/assets/people1-violet.png);
        }
        30%{
           left: 0px;
           background-image: url(/assets/people1-violet.png);
        }
        40%{
           left: 0px;
           background-image: url(/assets/people1-violet.png);
        }
        50%{
            left: 410px;
            background-image: url(/assets/people1-violet.png);
        }
        59%{
            background-image: url(/assets/people1-yellow.png);
        }
        60%{
            background-image: url(/assets/people1-yellow.png);
        }
        70%{
            left: 0px;
            background-image: url(/assets/people1-yellow.png);

        }
        80%{
            left: 0px;
            background-image: url(/assets/people1-yellow.png);

        }
        90%{
            left: 410px;
            background-image: url(/assets/people1-yellow.png);

        }
        99%{
        background-image: url(/assets/people1.png);
        }
        100%{
            background-image: url(/assets/people1.png);
            left: 0px;
        }
        }
    



    #Cirk1{
        animation-name: c1;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(4, jump-end);
    }

    @keyframes c1{
        0%{
        background-color: rgb(76, 175, 79);
        }
        20%{
        background-color: rgb(95, 219, 99);
        }
        21%{
        background-color: rgba(76, 175, 79, 0.623);
        }
        100%{
        background-color: rgba(76, 175, 79, 0.623);
        }
    }
        #Cirk2{
        animation-name: c2;
        animation-duration: 30s;
        animation-timing-function: steps(4, jump-end);
        animation-iteration-count: infinite;
    }

    @keyframes c2{
        0%{
        background-color: rgba(76, 175, 79, 0.623);

        }
        40%{
        background-color: rgb(95, 219, 99);
        }
        41%{
        background-color: rgba(76, 175, 79, 0.623);
        }
        100%{
        background-color: rgba(76, 175, 79, 0.623);
        }
    }

    #Cirk3{
        animation-name: c3;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(4, jump-end);
    }

    @keyframes c3{
        0%{
        background-color: rgba(76, 175, 79, 0.623);

        }
        80%{
        background-color: rgb(95, 219, 99);
        
        }
        81%{
        background-color: rgb(95, 219, 99);
        
        }
        100%{
        background-color: rgb(95, 219, 99);
        
        }
    }
    }
    

     @media screen and (min-width: 768px) and (max-width: 991px) {
        .Slider-Slide-Block1{
       
        display: grid;
        align-items: center;
        grid-template-rows:50px  40px 50px 60px;
        justify-content: space-around;


        &__Title{
            font-family: Inter;
            font-weight: 600;
            font-size: 34px;
            color: rgba(77, 77, 77, 1);
        }

        &__Title--green{
            font-family: Inter;
            font-weight: 600;
            font-size: 34px;
            color: rgba(76, 175, 79, 1);
        }

        &__Text{
            font-family: Inter;
            font-weight: 400;
            font-size: 10px;
            color: rgba(77, 77, 77, 1);
        }

        &__Text--green{
            font-family: Inter;
            font-weight: 400;
            font-size: 16px;
            color: rgba(113, 113, 113, 1)   ;
        }

           &__Btn--green{
            width:130px;
            height: 50px;
            border-radius: 6px;
            background: rgba(76, 175, 79, 1);
            color: white;
            font-size: 16px;
            font-weight: 500;
            font-family: Inter;
            border: none;
        }

        &__Btn--green:active{
            background: rgba(76, 175, 79, 1);
        }
    }

    .Slider-Slide{
        width: 100%;
        height: 300px;
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content: space-around;
        align-items: center;
    }

    .Slider{
        background-color: rgba(245, 247, 250, 1);
        padding-bottom: 20px;
        display: block;
        flex-wrap: wrap;
        flex-grow: 1;
    }

    .Load-Bar{
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .Load-Bar__circle{
        width:5px;
        height:5px;
        background-color: rgba(76, 175, 79, 0.623);
        border-radius: 50px;
    }

    .Slider-Slide-Block2{
        width: 291px;
        height: 310px;
        overflow: hidden;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .Slider-Slide-Block2__img{
        position: relative;
        transition: 0.3s;
        width: 191px;
        height: 200px;
        background-image: url(/assets/people1.png);
        background-size: cover;
         animation-name: slide;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: 30s;
    }

    #img1{
        position: relative;
        transition: 0.3s;
       
    }

    @keyframes slide{
        0%{
        background-image: url(/assets/people1.png);
            left: 0px;
        }
        10%{
        background-image: url(/assets/people1.png);
            left:0px;
        }
        19%{
        background-image: url(/assets/people1.png);
        }
        20%{
        background-image: url(/assets/people1.png);

            left: 410px;
        }
        20%{
            background-image: url(/assets/people1-violet.png);
        }
        30%{
           left: 0px;
           background-image: url(/assets/people1-violet.png);
        }
        40%{
           left: 0px;
           background-image: url(/assets/people1-violet.png);
        }
        50%{
            left: 410px;
            background-image: url(/assets/people1-violet.png);
        }
        59%{
            background-image: url(/assets/people1-yellow.png);
        }
        60%{
            background-image: url(/assets/people1-yellow.png);
        }
        70%{
            left: 0px;
            background-image: url(/assets/people1-yellow.png);

        }
        80%{
            left: 0px;
            background-image: url(/assets/people1-yellow.png);

        }
        90%{
            left: 410px;
            background-image: url(/assets/people1-yellow.png);

        }
        99%{
        background-image: url(/assets/people1.png);
        }
        100%{
            background-image: url(/assets/people1.png);
            left: 0px;
        }
        }
    



    #Cirk1{
        animation-name: c1;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(4, jump-end);
    }

    @keyframes c1{
        0%{
        background-color: rgb(76, 175, 79);
        }
        20%{
        background-color: rgb(95, 219, 99);
        }
        21%{
        background-color: rgba(76, 175, 79, 0.623);
        }
        100%{
        background-color: rgba(76, 175, 79, 0.623);
        }
    }
        #Cirk2{
        animation-name: c2;
        animation-duration: 30s;
        animation-timing-function: steps(4, jump-end);
        animation-iteration-count: infinite;
    }

    @keyframes c2{
        0%{
        background-color: rgba(76, 175, 79, 0.623);

        }
        40%{
        background-color: rgb(95, 219, 99);
        }
        41%{
        background-color: rgba(76, 175, 79, 0.623);
        }
        100%{
        background-color: rgba(76, 175, 79, 0.623);
        }
    }

    #Cirk3{
        animation-name: c3;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(4, jump-end);
    }

    @keyframes c3{
        0%{
        background-color: rgba(76, 175, 79, 0.623);

        }
        80%{
        background-color: rgb(95, 219, 99);
        
        }
        81%{
        background-color: rgb(95, 219, 99);
        
        }
        100%{
        background-color: rgb(95, 219, 99);
        
        }
    }
    }

     @media screen and (min-width: 320px) and (max-width: 767px) {
        .Slider-Slide-Block1{
       
        display: grid;
        align-items: center;
        grid-template-rows:50px  40px 50px 60px;
        justify-content: space-around;


        &__Title{
            font-family: Inter;
            font-weight: 600;
            font-size: 24px;
            color: rgba(77, 77, 77, 1);
        }

        &__Title--green{
            font-family: Inter;
            font-weight: 600;
            font-size: 24px;
            color: rgba(76, 175, 79, 1);
        }

        &__Text{
            font-family: Inter;
            font-weight: 400;
            font-size: 8px;
            color: rgba(77, 77, 77, 1);
        }

        &__Text--green{
            font-family: Inter;
            font-weight: 400;
            font-size: 16px;
            color: rgba(113, 113, 113, 1)   ;
        }

           &__Btn--green{
            width:130px;
            height: 50px;
            border-radius: 6px;
            background: rgba(76, 175, 79, 1);
            color: white;
            font-size: 16px;
            font-weight: 500;
            font-family: Inter;
            border: none;
        }

        &__Btn--green:active{
            background: rgba(56, 142, 59, 1);
        }
    }

    .Slider-Slide{
        width: 100%;
        height: 300px;
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content: space-around;
        align-items: center;
    }

    .Slider{
        background-color: rgba(245, 247, 250, 1);
        padding-bottom: 20px;
        display: block;
        flex-wrap: wrap;
        flex-grow: 1;
    }

    .Load-Bar{
        display: none;
        justify-content: center;
        gap: 10px;
    }

    .Load-Bar__circle{
        width:5px;
        height:5px;
        background-color: rgba(76, 175, 79, 0.623);
        border-radius: 50px;
    }

    .Slider-Slide-Block2{
        width: 291px;
        height: 310px;
        overflow: hidden;
        display: none;
        justify-content: start;
        align-items: center;
    }

    .Slider-Slide-Block2__img{
        position: relative;
        transition: 0.3s;
        width: 191px;
        height: 200px;
        background-image: url(/assets/people1.png);
        background-size: cover;
         animation-name: slide;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: 30s;
    }

    #img1{
        position: relative;
        transition: 0.3s;
       
    }

    @keyframes slide{
        0%{
        background-image: url(/assets/people1.png);
            left: 0px;
        }
        10%{
        background-image: url(/assets/people1.png);
            left:0px;
        }
        19%{
        background-image: url(/assets/people1.png);
        }
        20%{
        background-image: url(/assets/people1.png);

            left: 410px;
        }
        20%{
            background-image: url(/assets/people1-violet.png);
        }
        30%{
           left: 0px;
           background-image: url(/assets/people1-violet.png);
        }
        40%{
           left: 0px;
           background-image: url(/assets/people1-violet.png);
        }
        50%{
            left: 410px;
            background-image: url(/assets/people1-violet.png);
        }
        59%{
            background-image: url(/assets/people1-yellow.png);
        }
        60%{
            background-image: url(/assets/people1-yellow.png);
        }
        70%{
            left: 0px;
            background-image: url(/assets/people1-yellow.png);

        }
        80%{
            left: 0px;
            background-image: url(/assets/people1-yellow.png);

        }
        90%{
            left: 410px;
            background-image: url(/assets/people1-yellow.png);

        }
        99%{
        background-image: url(/assets/people1.png);
        }
        100%{
            background-image: url(/assets/people1.png);
            left: 0px;
        }
        }
    



    #Cirk1{
        animation-name: c1;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(4, jump-end);
    }

    @keyframes c1{
        0%{
        background-color: rgb(76, 175, 79);
        }
        20%{
        background-color: rgb(95, 219, 99);
        }
        21%{
        background-color: rgba(76, 175, 79, 0.623);
        }
        100%{
        background-color: rgba(76, 175, 79, 0.623);
        }
    }
        #Cirk2{
        animation-name: c2;
        animation-duration: 30s;
        animation-timing-function: steps(4, jump-end);
        animation-iteration-count: infinite;
    }

    @keyframes c2{
        0%{
        background-color: rgba(76, 175, 79, 0.623);

        }
        40%{
        background-color: rgb(95, 219, 99);
        }
        41%{
        background-color: rgba(76, 175, 79, 0.623);
        }
        100%{
        background-color: rgba(76, 175, 79, 0.623);
        }
    }

    #Cirk3{
        animation-name: c3;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(4, jump-end);
    }

    @keyframes c3{
        0%{
        background-color: rgba(76, 175, 79, 0.623);

        }
        80%{
        background-color: rgb(95, 219, 99);
        
        }
        81%{
        background-color: rgb(95, 219, 99);
        
        }
        100%{
        background-color: rgb(95, 219, 99);
        
        }
    }
    }
    
     

    

    
   
</style>