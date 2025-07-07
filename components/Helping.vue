<template>
    <section class="Helping"> 
        <article class="Text">
            <h2 class="Text__title">Helping a local </h2>
            <h2 class="Text__title--green">business reinvent itself</h2>
            <p class="Text__description">We reached here with our hard work and dedication</p>
        </article>
        <section class="Mini-Blocks-conteiner">
            <article class="Mini-Blocks-block">
                <img class="Mini-Blocks-block__img" src="/assets/HelpingLogo1.png" alt="#">
                <article class="Mini-Blocks-block-text">
                    <h2 class="Mini-Blocks-block-text__title">2,245,341</h2>
                    <p class="Mini-Blocks-block-text__description">Members</p>
                </article>
            </article>
            <article class="Mini-Blocks-block">
                <img class="Mini-Blocks-block__img" src="/assets/HelpingLogo2.png" alt="#">
                <article class="Mini-Blocks-block-text">
                    <h2 class="Mini-Blocks-block-text__title">46,328</h2>
                    <p class="Mini-Blocks-block-text__description">Clubs</p>
                </article>
            </article>
            <article class="Mini-Blocks-block">
                <img class="Mini-Blocks-block__img" src="/assets/HelpingLogo3.png" alt="#">
                <article class="Mini-Blocks-block-text">
                    <h2 class="Mini-Blocks-block-text__title">828,867</h2>
                    <p class="Mini-Blocks-block-text__description">Event Bookings</p>
                </article>
            </article>            
            <article class="Mini-Blocks-block">
                <img class="Mini-Blocks-block__img" src="/assets/HelpingLogo4.png" alt="#">
                <article class="Mini-Blocks-block-text">
                    <h2 class="Mini-Blocks-block-text__title">1,926,436</h2>
                    <p class="Mini-Blocks-block-text__description">Payments</p>
                </article>
            </article>
        </section>
    </section>
</template>
<style lang="scss">

@media screen and (min-width: 1200px) {
    .Helping{
        width: 100%;
        height: fit-content;
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: #F5F7FA;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content:space-evenly;
    }

    .Mini-Blocks-block{
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .Mini-Blocks-block-text__title{
        font-size:28px;
        font-weight:700;
        font-family: Inter;
        color: rgba(77, 77, 77, 1);
    }

    .Mini-Blocks-block-text__description{
        font-size:16px;
        font-weight:400;
        font-family: Inter;
        color: rgba(113, 113, 113, 1);
    }

    .Mini-Blocks-conteiner{
        display: grid;
        grid-template-columns: 250px 250px;
        grid-template-rows: 100px ;
        align-items: center;
    }

    .Text__title{
        font-weight: 600;
        font-size: 36px;
        font-family: Inter;
        color: rgba(77, 77, 77, 1);
    }

    .Text__title--green{
        font-weight: 600;
        font-size: 36px;
        font-family: Inter;
        color: rgba(76, 175, 79, 1);
    }

    .Text__description{
        font-weight: 400;
        font-size: 16px;
        font-family: Inter;
        color: rgba(24, 25, 31, 1);     
    }

    .Text{
        display: grid;
        gap: 5px;
    }        
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
    .Helping{
        width: 100%;
        height: fit-content;
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: #F5F7FA;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content:space-evenly;
    }

    .Mini-Blocks-block__img{
        transform: scale(0.9);
    }

    .Mini-Blocks-block{
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .Mini-Blocks-block-text__title{
        font-size:28px;
        font-weight:700;
        font-family: Inter;
        color: rgba(77, 77, 77, 1);
    }

    .Mini-Blocks-block-text__description{
        font-size:16px;
        font-weight:400;
        font-family: Inter;
        color: rgba(113, 113, 113, 1);
    }

    .Mini-Blocks-conteiner{
        display: grid;
        grid-template-columns: 250px 250px;
        grid-template-rows: 100px ;
        align-items: center;
    }

    .Text__title{
        font-weight: 600;
        font-size: 36px;
        font-family: Inter;
        color: rgba(77, 77, 77, 1);
    }

    .Text__title--green{
        font-weight: 600;
        font-size: 36px;
        font-family: Inter;
        color: rgba(76, 175, 79, 1);
    }

    .Text__description{
        font-weight: 400;
        font-size: 16px;
        font-family: Inter;
        color: rgba(24, 25, 31, 1);     
    }

    .Text{
        display: grid;
        gap: 5px;
    }        
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .Helping{
        width: 100%;
        height: fit-content;
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: #F5F7FA;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        flex-grow: 1;
        justify-content:center; 
    }

    .Mini-Blocks-block__img{
        transform: scale(0.8);
    }

    .Mini-Blocks-block{
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .Mini-Blocks-block-text__title{
        font-size:18px;
        font-weight:700;
        font-family: Inter;
        color: rgba(77, 77, 77, 1);
    }

    .Mini-Blocks-block-text__description{
        font-size:12px;
        font-weight:400;
        font-family: Inter;
        color: rgba(113, 113, 113, 1);
    }

    .Mini-Blocks-conteiner{
        display: grid;
        grid-template-columns: 250px 250px;
        grid-template-rows: 100px ;
        align-items: center;
    }

    .Text__title{
        font-weight: 600;
        font-size: 26px;
        font-family: Inter;
        color: rgba(77, 77, 77, 1);        
        display: flex;
        justify-content: center;
    }

    .Text__title--green{
        font-weight: 600;
        font-size: 26px;
        font-family: Inter;
        color: rgba(76, 175, 79, 1);   
        display: flex;
        justify-content: center;
    }

    .Text__description{
        font-weight: 400;
        font-size: 14px;
        font-family: Inter;
        color: rgba(24, 25, 31, 1);     
    }

    .Text{
        display: grid;
        gap: 5px;
    }        
}

@media screen and (min-width: 320px) and (max-width: 767px) {
    .Helping{
        width: 100%;
        height: fit-content;
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: #F5F7FA;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        flex-grow: 1;
        justify-content:center; 
    }

    .Mini-Blocks-block__img{
        transform: scale(0.8);
    }

    .Mini-Blocks-block{
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .Mini-Blocks-block-text__title{
        font-size:18px;
        font-weight:700;
        font-family: Inter;
        color: rgba(77, 77, 77, 1);
    }

    .Mini-Blocks-block-text__description{
        font-size:12px;
        font-weight:400;
        font-family: Inter;
        color: rgba(113, 113, 113, 1);
    }

    .Mini-Blocks-conteiner{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-template-rows: 100px;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .Text__title{
        font-weight: 600;
        font-size: 26px;
        font-family: Inter;
        color: rgba(77, 77, 77, 1);        
        display: flex;
        justify-content: center;
    }

    .Text__title--green{
        font-weight: 600;
        font-size: 26px;
        font-family: Inter;
        color: rgba(76, 175, 79, 1);   
        display: flex;
        justify-content: center;
    }

    .Text__description{
        font-weight: 400;
        font-size: 14px;
        font-family: Inter;
        color: rgba(24, 25, 31, 1);  
        display: flex;
        justify-content: center;  
        text-align: center; 
    }

    .Text{
        display: grid;
        gap: 5px;
    }   
    

}

    
</style>