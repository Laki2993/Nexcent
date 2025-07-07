<template>
    <section class="Caring-Block">
        <section class="Caring-Text">
            <h2 class="Carin-Text__Title">Caring is the new marketing</h2>
            <p class="Carin-Text-Description">The Nexcent blog is the best place to read about the latest membership insights,<br> 
                trends and more. See who's joining the community, read about how our community<br> 
                are increasing their membership income and lot's more.
            </p>
        </section>
        <section class="Carin-Cards">
            <section class="Card" id="Card-1">
                <article class="Card-Info">
                    <h2 class="Card-Info__Title">Creating Streamlined <br> Safeguarding Processes with <br> OneRen</h2>
                <article class="Logos-Link">
                    <a class="Logos-Link__text" href="#">Readmore</a>
                    <img class="Logos-Link__img" src="/assets/Right.png" alt="#">
                </article>
                </article>
            </section>
            <section class="Card" id="Card-2">
                <article class="Card-Info">
                    <h2 class="Card-Info__Title">What are your safeguarding <br> responsibilities and how can <br> you manage them?</h2>
                <article class="Logos-Link">
                    <a class="Logos-Link__text" href="#">Readmore</a>
                    <img class="Logos-Link__img" src="/assets/Right.png" alt="#">
                </article>
                </article>
            </section>            
            <section class="Card" id="Card-3">
                <article class="Card-Info">
                    <h2 class="Card-Info__Title">Revamping the Membership<br> Model with Triathlon<br> Australia</h2>
                <article class="Logos-Link">
                    <a class="Logos-Link__text" href="#">Readmore</a>
                    <img class="Logos-Link__img" src="/assets/Right.png" alt="#">
                </article>
                </article>
            </section>
        </section>
    </section>
</template>
<style lang="scss">

@media screen and (min-width: 1200px) {
    .Caring-Block{
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    display: grid;
    gap: 20px;
    padding-bottom: 100px;
}

.Caring-Text{
    width: 100%;
    display: grid;
    justify-items: center;
    gap: 10px;
}

.Carin-Text__Title{
    font-size: 36px;
    font-weight: 600;
    color: rgba(77, 77, 77, 1);
    font-family: Inter;
}

.Carin-Text-Description{
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(113, 113, 113, 1);
    text-align: center;
}

.Carin-Cards{
    display: flex;
    justify-content: center;
    gap: 30px;
}

#Card-1{
    background-image: url("/assets/Carin1.png");
    background-size: cover;
}

#Card-2{
    background-image: url("/assets/Carin2.png");
    background-size: cover;
}

#Card-3{
    background-image: url("/assets/Carin3.png");
    background-size: cover;
}

.Card{
    width: 370px;
    height: 290px;
    display: flex;
    justify-content: center;
    align-items: end;
}

.Card-Info{
    width: 320px;
    background-color: #F5F7FA;
    display: grid;
    justify-items: center;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    top: 30px;
    box-shadow: 0px 3px 10px rgba(171, 190, 209, 0.527);
}

.Card-Info__Title{
    font-family: Inter;
    font-size:20px;
    font-weight:600;
    color: rgba(113, 113, 113, 1);
    text-align: center;
}
}

@media screen and  (min-width: 992px) and (max-width: 1199px) {
    .Caring-Block{
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    display: grid;
    gap: 20px;
    padding-bottom: 100px;
}

.Caring-Text{
    width: 100%;
    display: grid;
    justify-items: center;
    gap: 10px;
}

.Carin-Text__Title{
    font-size: 36px;
    font-weight: 600;
    color: rgba(77, 77, 77, 1);
    font-family: Inter;
}

.Carin-Text-Description{
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(113, 113, 113, 1);
    text-align: center;
}

.Carin-Cards{
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
    flex-grow: 1;
}

#Card-1{
    background-image: url("/assets/Carin1.png");
    background-size: cover;
}

#Card-2{
    background-image: url("/assets/Carin2.png");
    background-size: cover;
}

#Card-3{
    background-image: url("/assets/Carin3.png");
    background-size: cover;
}

.Card{
    width: 370px;
    height: 290px;
    display: flex;
    justify-content: center;
    align-items: end;
}

.Card-Info{
    width: 320px;
    background-color: #F5F7FA;
    display: grid;
    justify-items: center;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    top: 30px;
    box-shadow: 0px 3px 10px rgba(171, 190, 209, 0.527);
}

.Card-Info__Title{
    font-family: Inter;
    font-size:20px;
    font-weight:600;
    color: rgba(113, 113, 113, 1);
    text-align: center;
}
}
@media screen and  (min-width: 768px) and (max-width: 991px) {
    .Caring-Block{
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    display: grid;
    gap: 20px;
    padding-bottom: 100px;
}

.Caring-Text{
    width: 100%;
    display: grid;
    justify-items: center;
    gap: 10px;
}

.Carin-Text__Title{
    font-size: 26px;
    font-weight: 600;
    color: rgba(77, 77, 77, 1);
    font-family: Inter;
}

.Carin-Text-Description{
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(113, 113, 113, 1);
    text-align: center;
}

.Carin-Cards{
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
    flex-grow: 1;
}

#Card-1{
    background-image: url("/assets/Carin1.png");
    background-size: cover;
}

#Card-2{
    background-image: url("/assets/Carin2.png");
    background-size: cover;
}

#Card-3{
    background-image: url("/assets/Carin3.png");
    background-size: cover;
}

.Card{
    width: 370px;
    height: 290px;
    display: flex;
    justify-content: center;
    align-items: end;
}

.Card-Info{
    width: 320px;
    background-color: #F5F7FA;
    display: grid;
    gap: 5px;
    justify-items: center;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    top: 30px;
    box-shadow: 0px 3px 10px rgba(171, 190, 209, 0.527);
}

.Card-Info__Title{
    font-family: Inter;
    font-size:15px;
    font-weight:600;
    color: rgba(113, 113, 113, 1);
    text-align: center;
}

.Logos-Link__text{
    font-size: 15px;
}

}
@media screen and  (min-width: 320px) and (max-width: 767px) {
    .Caring-Block{
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    display: grid;
    gap: 20px;
    padding-bottom: 100px;
}

.Caring-Text{
    width: 100%;
    display: grid;
    justify-items: center;
    gap: 10px;
}

.Carin-Text__Title{
    font-size: 16px;
    font-weight: 600;
    color: rgba(77, 77, 77, 1);
    font-family: Inter;
}

.Carin-Text-Description{
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(113, 113, 113, 1);
    text-align: center;
}

.Carin-Cards{
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
    flex-grow: 1;
}

#Card-1{
    background-image: url("/assets/Carin1.png");
    background-size: cover;
}

#Card-2{
    background-image: url("/assets/Carin2.png");
    background-size: cover;
}

#Card-3{
    background-image: url("/assets/Carin3.png");
    background-size: cover;
}

.Card{
    width: 270px;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: end;
}

.Card-Info{
    width: 220px;
    background-color: #F5F7FA;
    display: grid;
    gap: 5px;
    justify-items: center;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    top: 30px;
    box-shadow: 0px 3px 10px rgba(171, 190, 209, 0.527);
}

.Card-Info__Title{
    font-family: Inter;
    font-size:13px;
    font-weight:600;
    color: rgba(113, 113, 113, 1);
    text-align: center;
}

.Logos-Link__text{
    font-size: 13px;
}

}



</style>