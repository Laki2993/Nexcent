<template>
    <section class="Information-Block2">
        <img class="Information-Block2__img" src="/assets/Tesla.png" alt="#">
        <section class="Titl-Desc-Btn">
            <p class="Titl-Desc-Btn__Desc2">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus <br>
                tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida<br> 
                enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie<br> 
                mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse<br> 
                eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br> 
                vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum<br> 
                id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <article class="Titl-Desc-Btn__desc">
                <h1 class="Titl-Desc-Btn__Title">Tim Smith</h1>
                <p class="Titl-Desc-Btn__text">British Dragon Boat Racing Association</p>
            </article>
            <article class="Logos">
                <img src="/assets/TeslaLogo1.png" alt="#">
                <img src="/assets/TeslaLogo2.png" alt="#">
                <img src="/assets/OurLogo3.png" alt="#">
                <img src="/assets/TeslaLogo3.png" alt="#">
                <img src="/assets/TeslaLogo4.png" alt="#">
                <img src="/assets/TeslaLogo5.png" alt="#">
                <article class="Logos-Link">
                    <a class="Logos-Link__text" href="#">Meet all customers</a>
                    <img class="Logos-Link__img" src="/assets/Right.png" alt="#">
                </article>
            </article>
        </section>
    </section>
</template>

<style lang="scss">
@media screen and (min-width: 1200px) {
.Information-Block2{
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    gap: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: rgba(245, 247, 250, 1);  
}

.Titl-Desc-Btn__Desc2{
    font-family: Inter;
    font-size: 16px;
    font-weight: 500px;
    color: rgba(113, 113, 113, 1);
}

.Titl-Desc-Btn__desc{
    display: grid;
}

.Titl-Desc-Btn__text{
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    color: rgba(137, 147, 158, 1);
}

.Titl-Desc-Btn__Title{
  font-family: Inter;
  font-size: 20px;
  font-weight:600;
  line-height: 0px;
  color: rgba(76, 175, 79, 1);
}

.Logos-Link{
    display: flex;
    gap: 10px;
    align-items: center;
}
.Logos-Link:hover{
    transform: scale(1.1);
    transition: 0.3s;
}

.Logos-Link__text{
    color: rgba(76, 175, 79, 1);
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
}



.Logos{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
}
}
@media screen and (min-width: 992px) and (max-width: 1199px) {
.Information-Block2{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: center;
    gap: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: rgba(245, 247, 250, 1);  
}

.Titl-Desc-Btn__Desc2{
    font-family: Inter;
    font-size: 16px;
    font-weight: 500px;
    color: rgba(113, 113, 113, 1);
}

.Titl-Desc-Btn__desc{
    display: grid;
    gap: 20px;
}

.Titl-Desc-Btn__text{
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    color: rgba(137, 147, 158, 1);
}

.Titl-Desc-Btn__Title{
  font-family: Inter;
  font-size: 20px;
  font-weight:600;
  line-height: 0px;
  color: rgba(76, 175, 79, 1);
}
.Titl-Desc-Btn{
    display: grid;
    gap: 20px;
}

.Logos-Link{
    display: flex;
    gap: 10px;
    align-items: center;
}

.Logos-Link:hover{
    transform: scale(1.1);
    transition: 0.3s;
}

.Logos-Link__text{
    color: rgba(76, 175, 79, 1);
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
}

.Logos{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    flex-grow: 1;
    flex-wrap: wrap;
}
}
@media screen and (min-width: 768px) and (max-width: 991px) {
.Information-Block2{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: center;
    gap: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: rgba(245, 247, 250, 1);  
}

.Titl-Desc-Btn__Desc2{
    font-family: Inter;
    font-size: 14px;
    font-weight: 500px;
    color: rgba(113, 113, 113, 1);
    text-align: center;
}

.Titl-Desc-Btn__desc{
    display: grid;
    justify-items: center;
    gap: 20px;
}

.Titl-Desc-Btn__text{
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    color: rgba(137, 147, 158, 1);
}

.Titl-Desc-Btn__Title{
  font-family: Inter;
  font-size: 20px;
  font-weight:600;
  line-height: 0px;
  color: rgba(76, 175, 79, 1);
}
.Titl-Desc-Btn{
    display: grid;
    gap: 20px;
}

.Logos-Link{
    display: flex;
    gap: 10px;
    align-items: center;
}

.Logos-Link:hover{
    transform: scale(1.1);
    transition: 0.3s;
}

.Logos-Link__text{
    color: rgba(76, 175, 79, 1);
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
}

.Logos{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 60px;
    flex-grow: 1;
    flex-wrap: wrap;
}

.Information-Block2__img{
    transform: scale(0.8);
}
}

@media screen and (min-width: 320px) and (max-width: 767px) {
.Information-Block2{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: center;
    gap: 50px;

    padding-top: 100px;
    padding-bottom: 100px;
    background-color: rgba(245, 247, 250, 1);  
}

.Titl-Desc-Btn__Desc2{
    font-family: Inter;
    font-size: 14px;
    font-weight: 500px;
    color: rgba(113, 113, 113, 1);
    text-align: center;
    padding: 15px;
}

.Titl-Desc-Btn__desc{
    display: grid;
    justify-items: center;
    gap: 20px;
}

.Titl-Desc-Btn__text{
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    color: rgba(137, 147, 158, 1);
}

.Titl-Desc-Btn__Title{
  font-family: Inter;
  font-size: 20px;
  font-weight:600;
  line-height: 0px;
  color: rgba(76, 175, 79, 1);
}
.Titl-Desc-Btn{
    display: grid;
    gap: 20px;
}

.Logos-Link{
    display: flex;
    gap: 10px;
    align-items: center;
}

.Logos-Link:hover{
    transform: scale(1.1);
    transition: 0.3s;
}

.Logos-Link__text{
    color: rgba(76, 175, 79, 1);
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
}

.Logos{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 100px;
    flex-grow: 1;
    flex-wrap:wrap;
}

.Information-Block2__img{
    transform: scale(0.8);
}
}

</style>