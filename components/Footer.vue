<template>
    <section class="Footer-Block">
        <section class="Footer-Block-us">
            <section class="Logo">
                <img class="Logo_img" src="/assets/Logo.png" alt="#">
                <img class="Logo_img" src="/assets/Nexcent.png" alt="#">
            </section>
            <p class="Footer-Block-us-text">
                Copyright © 2020 Nexcent ltd.<br>All rights reserved
            </p>
            <article class="Footer-Block-we">
                <button class="Footer-Block-we-Btn" id="btn1"></button>
                <button class="Footer-Block-we-Btn" id="btn2"></button>
                <button class="Footer-Block-we-Btn" id="btn3"></button>
                <button class="Footer-Block-we-Btn" id="btn4"></button>
            </article>
        </section>
        <section class="Links">
            <article class="Links-Col">
                <h2 class="Links-Col__Title">Company</h2>
                <a class="Links-Col__Link" href="#">About us</a>
                <a class="Links-Col__Link" href="#">Blog</a>
                <a class="Links-Col__Link" href="#">Contact us</a>
                <a class="Links-Col__Link" href="#">Pricing</a>
                <a class="Links-Col__Link" href="#">Testimonials</a>
            </article>
            <article class="Links-Col">
                <h2 class="Links-Col__Title">Support</h2>
                <a class="Links-Col__Link" href="#">Help center</a>
                <a class="Links-Col__Link" href="#">Terms of service</a>
                <a class="Links-Col__Link" href="#"> Legal</a>
                <a class="Links-Col__Link" href="#">Privacy policy</a>
                <a class="Links-Col__Link" href="#">Status</a>
            </article>
            <form class="Form" action="#">
                <h2 class="Form__Title">Stay up to date</h2>
                <section class="Inp-Blcok">
                    <input class="Inp-Block__Inp" type="email" value="Your email address">
                    <img src="/assets/Send.png" alt="#">
                </section>
            </form>
        </section>
    </section>
</template>
<style lang="scss">

@media screen and (min-width: 1200px) {
.Footer-Block{
    width: 100%;
    background-color: rgba(38, 50, 56, 1);
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    
    gap: 220px;
    align-items: center;
}

.Footer-Block-us{
    display: grid;
    padding: 30px;
    gap: 30px;
}

.Footer-Block-us-text{
    font-size: 14px;
    font-weight: 400;
    color: rgba(245, 247, 250, 1);
    font-family: Inter;
    line-height: 30px;
}

.Footer-Block-we{
    display: flex;
    gap: 10px;

}
.Footer-Block-we-Btn{
    width:32px;
    height:32px;    

    border: none;
    border-radius: 30px;
    background-color: #3B464C;
}

#btn1{
    background-image: url("/assets/SocialIcons.png");
    background-size: contain;
}

#btn2{
    background-image: url("/assets/Basketboll.png");
    background-size: contain;
}

#btn3{
    background-image: url("/assets/Twwter.png");
    background-size: contain;
}

#btn4{
    background-image: url("/assets/YouTube.png");
    background-size: contain;
}

.Links-Col{
    display: grid;
    justify-content: start;
    gap: 20px;
}

.Links-Col__Title{
    font-family: Inter;
    font-size:20px;
    font-weight: 600;
    color:rgba(255, 255, 255, 1);
}

.Links-Col__Link{
    font-family: Inter;
    font-size:14px;
    font-weight: 40;
    color:rgba(245, 247, 250, 1);
    text-decoration: none;
}

.Links-Col__Link:hover{
transform: scale(1.1);
transition: 0.1s;
color: rgba(76, 175, 79, 1);
}

.Links{
    display: flex;
    justify-content: center;
    gap: 90px;
}
.Form{
    display: grid;
    grid-template-rows: 40px;
}

.Form__Title{
    font-family: Inter;
    font-size:20px;
    font-weight:600;
    color: rgba(255, 255, 255, 1);
}

.Inp-Blcok{
    width:255px;
    height:40px;
    background-color: #515B60;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 8px;
}

.Inp-Block__Inp{
    width: 200px;
    background-color: #515B60;
    height: 30px;
    border: none;
    outline: none;
    font-family: Inter;
    font-weight:400;
    font-size:14px;
    color: rgba(217, 219, 225, 1);
}
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
.Footer-Block{
    width: 100%;
    background-color: rgba(38, 50, 56, 1);
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-evenly;
    
    gap: 20px;
    align-items: center;
}

.Footer-Block-us{
    display: grid;
    padding: 30px;
    gap: 30px;
}

.Footer-Block-us-text{
    font-size: 14px;
    font-weight: 400;
    color: rgba(245, 247, 250, 1);
    font-family: Inter;
    line-height: 30px;
}

.Footer-Block-we{
    display: flex;
    gap: 10px;

}
.Footer-Block-we-Btn{
    width:32px;
    height:32px;    

    border: none;
    border-radius: 30px;
    background-color: #3B464C;
}

#btn1{
    background-image: url("/assets/SocialIcons.png");
    background-size: contain;
}

#btn2{
    background-image: url("/assets/Basketboll.png");
    background-size: contain;
}

#btn3{
    background-image: url("/assets/Twwter.png");
    background-size: contain;
}

#btn4{
    background-image: url("/assets/YouTube.png");
    background-size: contain;
}

.Links-Col{
    display: grid;
    justify-content: start;
    gap: 20px;
}

.Links-Col__Title{
    font-family: Inter;
    font-size:20px;
    font-weight: 600;
    color:rgba(255, 255, 255, 1);
}

.Links-Col__Link{
    font-family: Inter;
    font-size:14px;
    font-weight: 40;
    color:rgba(245, 247, 250, 1);
    text-decoration: none;
}

.Links-Col__Link:hover{
transform: scale(1.1);
transition: 0.1s;
color: rgba(76, 175, 79, 1);
}

.Links{
    display: flex;
    justify-content: center;
    gap: 90px;
}
.Form{
    display: grid;
    grid-template-rows: 40px;
}

.Form__Title{
    font-family: Inter;
    font-size:20px;
    font-weight:600;
    color: rgba(255, 255, 255, 1);
}

.Inp-Blcok{
    width:255px;
    height:40px;
    background-color: #515B60;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 8px;
}

.Inp-Block__Inp{
    width: 200px;
    background-color: #515B60;
    height: 30px;
    border: none;
    outline: none;
    font-family: Inter;
    font-weight:400;
    font-size:14px;
    color: rgba(217, 219, 225, 1);
}
}

@media screen and (min-width: 768px) and (max-width: 991px) {
.Footer-Block{
    width: 100%;
    background-color: rgba(38, 50, 56, 1);
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 100px;
    align-items: center;
}

.Footer-Block-us{
    display: grid;
    padding: 30px;
    gap: 30px;
}

.Footer-Block-us-text{
    font-size: 14px;
    font-weight: 400;
    color: rgba(245, 247, 250, 1);
    font-family: Inter;
    line-height: 30px;
}

.Footer-Block-we{
    display: flex;
    gap: 10px;

}
.Footer-Block-we-Btn{
    width:32px;
    height:32px;    

    border: none;
    border-radius: 30px;
    background-color: #3B464C;
}

#btn1{
    background-image: url("/assets/SocialIcons.png");
    background-size: contain;
}

#btn2{
    background-image: url("/assets/Basketboll.png");
    background-size: contain;
}

#btn3{
    background-image: url("/assets/Twwter.png");
    background-size: contain;
}

#btn4{
    background-image: url("/assets/YouTube.png");
    background-size: contain;
}

.Links-Col{
    display: grid;
    justify-content: start;
    gap: 20px;
}

.Links-Col__Title{
    font-family: Inter;
    font-size:20px;
    font-weight: 600;
    color:rgba(255, 255, 255, 1);
}

.Links-Col__Link{
    font-family: Inter;
    font-size:14px;
    font-weight: 40;
    color:rgba(245, 247, 250, 1);
    text-decoration: none;
}

.Links-Col__Link:hover{
    transform: scale(1.1);
    transition: 0.1s;
    color: rgba(76, 175, 79, 1);
}

.Links{
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-evenly;
    gap: 100px;
}
.Form{
    display: grid;
    grid-template-rows: 40px;
}

.Form__Title{
    font-family: Inter;
    font-size:20px;
    font-weight:600;
    color: rgba(255, 255, 255, 1);
}

.Inp-Blcok{
    width:255px;
    height:40px;
    background-color: #515B60;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 8px;
}

.Inp-Block__Inp{
    width: 200px;
    background-color: #515B60;
    height: 30px;
    border: none;
    outline: none;
    font-family: Inter;
    font-weight:400;
    font-size:14px;
    color: rgba(217, 219, 225, 1);
}
}

@media screen and (min-width: 320px) and (max-width: 767px) {
.Footer-Block{
    width: 100%;
    background-color: rgba(38, 50, 56, 1);
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 100px;
    align-items: center;
}

.Footer-Block-us{
    display: grid;
    justify-items: center;
    padding: 30px;
    gap: 10px;
}

.Footer-Block-us-text{
    font-size: 14px;
    font-weight: 400;
    color: rgba(245, 247, 250, 1);
    font-family: Inter;
    line-height: 30px;
    text-align: center  ;
}

.Footer-Block-we{
    display: flex;
    gap: 10px;

}
.Footer-Block-we-Btn{
    width:32px;
    height:32px;    

    border: none;
    border-radius: 30px;
    background-color: #3B464C;
}

#btn1{
    background-image: url("/assets/SocialIcons.png");
    background-size: contain;
}

#btn2{
    background-image: url("/assets/Basketboll.png");
    background-size: contain;
}

#btn3{
    background-image: url("/assets/Twwter.png");
    background-size: contain;
}

#btn4{
    background-image: url("/assets/YouTube.png");
    background-size: contain;
}

.Links-Col{
    display: grid;
    justify-items: center;
    gap: 20px;
}

.Links-Col__Title{
    font-family: Inter;
    font-size:20px;
    font-weight: 600;
    color:rgba(255, 255, 255, 1);
}

.Links-Col__Link{
    font-family: Inter;
    font-size:14px;
    font-weight: 40;
    color:rgba(245, 247, 250, 1);
    text-decoration: none;
}

.Links-Col__Link:hover{
transform: scale(1.1);
transition: 0.1s;
color: rgba(76, 175, 79, 1);

}


.Links{
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-evenly;
    gap: 130px;
}
.Form{
    display: grid;
    justify-items: center;
    grid-template-rows: 40px;
}

.Form__Title{
    font-family: Inter;
    font-size:20px;
    font-weight:600;
    color: rgba(255, 255, 255, 1);
}

.Inp-Blcok{
    width:255px;
    height:40px;
    background-color: #515B60;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 8px;
}

.Inp-Block__Inp{
    width: 200px;
    background-color: #515B60;
    height: 30px;
    border: none;
    outline: none;
    font-family: Inter;
    font-weight:400;
    font-size:14px;
    color: rgba(217, 219, 225, 1);
}

.Logo_img{
    transform: scale(0.8);
}
}

</style>