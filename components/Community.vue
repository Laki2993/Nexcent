<template>
    <section class="Community">
        <section class="Community-Block">
            <article class="Community-Block-Text">
                <h2 class="Community-Block__Title">Manage your entire community <br> in a single system</h2>
                <p class="Community-Block__Description">Who is Nextcent suitable for?</p>
            </article>        
        </section>
        <section class="Type-Community">
            <article class="Type-Community-Block">
                <img class="Type-Community-Block_Img" src="/assets/CommunityLogo1.png" alt="#">
                <h2 class="Type-Community-Block__Title">Membership <br> Organisations</h2>
                <p class="Type-Community-Block__Description">
                    Our membership management<br> 
                    software provides full automation of<br> 
                    membership renewals and payments
                </p>
            </article>
            <article class="Type-Community-Block">
                <img class="Type-Community-Block_Img" src="/assets/CommunityLogo2.png" alt="#">
                <h2 class="Type-Community-Block__Title">National <br> Associations</h2>
                <p class="Type-Community-Block__Description">
                    Our membership management<br> 
                    software provides full automation of<br> 
                    membership renewals and payments
                </p>
            </article>
            <article class="Type-Community-Block">
                <img class="Type-Community-Block_Img" src="/assets/CommunityLogo3.png" alt="#">
                <h2 class="Type-Community-Block__Title">Clubs And <br> Groups</h2>
                <p class="Type-Community-Block__Description">
                    Our membership management<br> 
                    software provides full automation of<br> 
                    membership renewals and payments</p>
            </article>
        </section>
    </section>
</template>

<style lang="scss">

@media screen and (min-width:1200px){
.Community-Block{
    display: block;
    justify-items: center;
    padding-top: 100px;
}

.Community-Block__Title{
    font-size:36px;
    font-weight: 600;
    font-family: Inter;
    color: rgba(77, 77, 77, 1);
    text-align: center;
}

.Community-Block-Text{
    display: grid;
    justify-items: center;
    gap: 20px;
}

.Community-Block__Description{
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    color: rgba(113, 113, 113, 1);
}

.Type-Community{
    display: flex;
    justify-content: space-evenly;
    gap: 100px;
    flex-wrap: wrap;
    flex-grow: 1;
}

.Type-Community-Block{
    display: grid;
    padding: 20px;
    justify-items: center;
    box-shadow: 0px 3px 4px rgba(171, 190, 209, 0.2);
    gap: 10px;
}

.Type-Community-Block__Title{
    font-size: 28px;
    font-weight:700;
    font-family: Inter;
    color: rgba(77, 77, 77, 1);    
    text-align: center;
}

.Type-Community-Block__Description{
    font-size: 14px;
    font-weight:400;
    font-family: Inter;
    color: rgba(113, 113, 113, 1);   
    text-align: center;
}

.Community{
    display: grid;
    gap: 20px;
}
}

@media screen and (min-width:992px) and (max-width: 1199px){
.Community-Block{
    display: block;
    justify-items: center;
    padding-top: 100px;
}

.Community-Block__Title{
    font-size:36px;
    font-weight: 600;
    font-family: Inter;
    color: rgba(77, 77, 77, 1);
    text-align: center;
}

.Community-Block-Text{
    display: grid;
    justify-items: center;
    gap: 20px;
}

.Community-Block__Description{
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    color: rgba(113, 113, 113, 1);
}

.Type-Community{
    display: flex;
    justify-content: space-evenly;
    gap: 100px;
    flex-wrap: wrap;
    flex-grow: 1;
}

.Type-Community-Block{
    display: grid;
    padding: 20px;
    justify-items: center;
    box-shadow: 0px 3px 4px rgba(171, 190, 209, 0.2);
    gap: 10px;
}

.Type-Community-Block__Title{
    font-size: 28px;
    font-weight:700;
    font-family: Inter;
    color: rgba(77, 77, 77, 1);    
    text-align: center;
}

.Type-Community-Block__Description{
    font-size: 14px;
    font-weight:400;
    font-family: Inter;
    color: rgba(113, 113, 113, 1);   
    text-align: center;
}

.Community{
    display: grid;
    gap: 20px;
}
}

@media screen and (min-width:768px) and (max-width: 991px){
.Community-Block{
    display: block;
    justify-items: center;
    padding-top: 100px;
}

.Community-Block__Title{
    font-size:26px;
    font-weight: 600;
    font-family: Inter;
    color: rgba(77, 77, 77, 1);
    text-align: center;
}

.Community-Block-Text{
    display: grid;
    justify-items: center;
    gap: 20px;
}

.Community-Block__Description{
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    color: rgba(113, 113, 113, 1);
}

.Type-Community{
    display: flex;
    justify-content: space-evenly;
    gap: 100px;
    flex-wrap: wrap;
    flex-grow: 1;
}

.Type-Community-Block{
    display: grid;
    padding: 20px;
    justify-items: center;
    box-shadow: 0px 3px 4px rgba(171, 190, 209, 0.2);
    gap: 10px;
}

.Type-Community-Block__Title{
    font-size: 18px;
    font-weight:700;
    font-family: Inter;
    color: rgba(77, 77, 77, 1);    
    text-align: center;
}

.Type-Community-Block__Description{
    font-size: 12px;
    font-weight:400;
    font-family: Inter;
    color: rgba(113, 113, 113, 1);   
    text-align: center;
}

.Community{
    display: grid;
    gap: 20px;
}
}

@media screen and (min-width:320px) and (max-width: 767px){
.Community-Block{
    display: block;
    justify-items: center;
}

.Community-Block__Title{
    font-size:26px;
    font-weight: 600;
    font-family: Inter;
    color: rgba(77, 77, 77, 1);
    text-align: center;
}

.Community-Block-Text{
    display: grid;
    justify-items: center;
    gap: 20px;
}

.Community-Block__Description{
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    color: rgba(113, 113, 113, 1);
}

.Type-Community{
    display: flex;
    justify-content: space-evenly;
    gap: 100px;
    flex-wrap: wrap;
    flex-grow: 1;
}

.Type-Community-Block{
    display: grid;
    padding: 20px;
    justify-items: center;
    box-shadow: 0px 3px 4px rgba(171, 190, 209, 0.2);
    gap: 10px;
}

.Type-Community-Block__Title{
    font-size: 18px;
    font-weight:700;
    font-family: Inter;
    color: rgba(77, 77, 77, 1);    
    text-align: center;
}

.Type-Community-Block__Description{
    font-size: 12px;
    font-weight:400;
    line-height: 20px;
    font-family: Inter;
    color: rgba(113, 113, 113, 1);   
    text-align: center;
}

.Community{
    display: grid;
    gap: 20px;
    padding-bottom: 100px;
}
}


</style>

