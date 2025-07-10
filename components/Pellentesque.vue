<template>
    <dialog id="PopUp-Pellentesque" class="PopUp-Pellentesque">
        <section class="Error-Message" id="Error-Message">
            <h2 class="Error-Massage__Title">{{ Text }}</h2>
            <h2 class="Error-Massage__Title">{{ Text2 }}</h2>
            <h2 class="Error-Massage__Title">{{ Text3 }}</h2>
        </section>
        <form  class="Form-Pellentesque" id="Form-Pellentesque" method="dialog" @submit.prevent="handleSubmit">
            <article class="Form-Pellentesque__Article">
                <h2 class="Titl-Desc-Btn__Titl" >Get a Demo</h2>
                <button class="Btn-Close_Btn" @click="ClouseForm"></button>
            </article>
            <p class="Mini-Blocks-block-text__description">Get a demo of our product</p>
            <input class="Form-Pellentesque__inp" id="Inp-Name"     type="text" placeholder="Name" v-model="formData.name">
            <input class="Form-Pellentesque__inp" id="Inp-Email"    type="text"placeholder="Email" v-model="formData.email">
            <input class="Form-Pellentesque__inp" id="Inp-Phone"    type="number" placeholder="Phone" v-model="formData.phone">
            <button class="Pellentesque-Block__Button--green"  type="submit"   @click="Validation" >Send</button>
        </form>
    </dialog>
    <section class="Pellentesque-Block">
        <h2 class="Pellentesque-Block__Title">Pellentesque suscipit  <br> fringilla libero eu.</h2>
        <button class="Pellentesque-Block__Button--green"  @click="GetForm">
            Get a Demo
            <img src="/assets/ArrowRightWhite.png" alt="#">
        </button>
    </section>
</template>
<script>
import { reactive } from 'vue';

export default {
    data() {
        return {
            Text: '',
            Text2: '',
            Text3: '',
            formData: reactive({
                name: '',
                email: '',
                phone: '',
            }),
        };
    },
    methods: {
        GetForm() {
            const dialog_P = document.getElementById('PopUp-Pellentesque');
            dialog_P.showModal();
        },

        ClouseForm() {
            const dialog_P = document.getElementById('PopUp-Pellentesque');
            dialog_P.close();
            this.Text = '';
            this.Text2 = '';
            this.Text3 = '';
            this.resetInputStyles();
        },

        async Validation() {
            let flag1 = false;
            let flag2 = false;
            let flag3 = false;

            const Phone = document.getElementById('Inp-Phone');
            const Name = document.getElementById('Inp-Name');
            const EmailInput = document.getElementById('Inp-Email');
            const Email = this.formData.email; 

            this.Text = '';
            this.Text2 = '';
            this.Text3 = '';
            this.resetInputStyles();

            if (!this.formData.name) {
                this.showError('Error-Message', Name, 'Enter a name!', 'Text2');
                flag1 = false;
            } 
            else {
                this.Text2 = "";
                flag1 = true;
            }

            if (!Phone.value || Phone.value.length < 11) {
                this.showError('Error-Message', Phone, 'The number of characters must be at least 11!', 'Text');
                flag2 = false;
            } 
            else if (Phone.value.length > 11) {
                this.showError('Error-Message', Phone, 'The number of characters should not exceed 11!', 'Text');
                flag2 = false;
            } 
            else {
                this.Text = "";
                flag2 = true;
            }

             if (!Email) {
                this.showError('Error-Message', EmailInput, 'Please enter your email!', 'Text3');
                flag3 = false;
            } else if (!this.isValidEmail(Email)) {
                this.showError('Error-Message', EmailInput, 'Invalid email format!', 'Text3');
                flag3 = false;
            } else {
                this.Text3 = "";
                flag3 = true;
            }

            if (flag1 && flag2 && flag3) {
                try {
                    const response = await fetch('/api/telegram', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.formData),
                    });

                    const data = await response.json();

                    if (data.success) {
                        alert('Сообщение успешно отправлено!');
                        this.ClouseForm();
                    } else {
                        alert('Ошибка при отправке сообщения!');
                    }
                } catch (error) {
                    console.error('Ошибка:', error);
                    alert('Произошла ошибка при отправке данных.');
                }
            }
        },

        showError(messageId, element, message, textProperty) {
            document.getElementById("Error-Message").style.top = "-20px";
            if (element) {
                element.style.boxShadow = "0px 2px 7px 0px red";
            }
            this[textProperty] = message;
            setTimeout(() => {
                document.getElementById("Error-Message").style.top = "170px";
                if (element) {
                    element.style.boxShadow = "0px 2px 5px 1px rgba(0, 0, 0, 0.301)";
                }
            }, 2000);
        },

        resetInputStyles() {
            const Name = document.getElementById('Inp-Name');
            const Phone = document.getElementById('Inp-Phone');
            const EmailInput = document.getElementById('Inp-Email');

            const inputs = [Name, Phone, EmailInput];
            inputs.forEach(input => {
                if (input) {
                    input.style.boxShadow = "0px 2px 5px 1px rgba(0, 0, 0, 0.301)";
                }
            });
        },
          isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
    }
}
</script>
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

    .Error-Massage__Title{
        font-family: Inter;
        font-size: 18px;
        color: rgb(90, 90, 90);
        text-align: start;
    }

    dialog{
        background-color: #801f1f00;
        border: none;
        outline: none;
        justify-items: center;
        grid-template-rows: 340px  250px;
        align-content: center;
        width:100%;
        height: 100%;
        padding-top: 10px;
    }

    .Error-Message{
        position: relative;
        top: 120px;
        width: 300px;
        height: fit-content;
        padding: 20px;
        transition:0.3s;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        display: grid;
        gap: 20px;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 6px 4px rgba(0, 0, 0, 0.322);
    }
    .Form-Pellentesque__Article{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 80px;
    }

    .Btn-Close_Btn{
        width: 20px;
        height: 20px;
        background-color: rgba(255, 255, 255, 0);
        background-image: url(https://images.icon-icons.com/1769/PNG/512/4115230-cancel-close-cross-delete_114048.png);
        background-size: contain;
        border: none;
    }

    .Form-Pellentesque__inp{
        width: 300px;
        height: 50px;
        padding-left: 20px;
        border-radius: 5px;
        border: none;
        outline: none;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.301) ;
        transition: 0.3s;
    }

    .Form-Pellentesque{
        position: relative;
        width: 400px;
        height: 500px;
        padding: 20px;
        background-color: rgb(253, 253, 253);
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 10px;
        box-shadow: 0px 2px 6px 4px rgba(0, 0, 0, 0.322);
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

        .Pellentesque-Block__Button--green:active{
        width: 180px;
        height: 50px;
        border-radius: 5px;
        background-color: rgba(56, 142, 59, 1);
        border: none;
        align-items: center;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
    }
}

@media screen and (min-width: 990px) and (max-width: 1199px) {

    .Error-Massage__Title{
        font-family: Inter;
        font-size: 18px;
        color: rgb(90, 90, 90);
        text-align: start;
    }

        .Error-Message{
        position: relative;
        top: 120px;
        width: 300px;
        height: fit-content;
        padding: 20px;
        transition:0.3s;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        display: grid;
        gap: 20px;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 6px 4px rgba(0, 0, 0, 0.322);
    }

    .Form-Pellentesque{
        position: relative;
        width: 400px;
        height: 500px;
        padding: 20px;
        background-color: rgb(255, 255, 255);
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 10px;
        box-shadow: 0px 2px 6px 4px rgba(0, 0, 0, 0.322);
    }

        dialog{
        background-color: #801f1f00;
        border: none;
        outline: none;
        justify-items: center;
        grid-template-rows: 340px  250px;
        align-content: center;
        width:100%;
        height: 100%;
        padding-top: 50px;
    }

    .Form-Pellentesque__Article{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 110px;
    }

    .Btn-Close_Btn{
        width: 20px;
        height: 20px;
        background-color: rgba(255, 255, 255, 0);
        background-image: url(https://images.icon-icons.com/1769/PNG/512/4115230-cancel-close-cross-delete_114048.png);
        background-size: contain;
        border: none;
    }

    .Form-Pellentesque__inp{
        width: 300px;
        height: 50px;
        padding-left: 20px;
        border-radius: 5px;
        border: none;
        outline: none;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.301) ;
        transition: 0.3s;
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

        .Pellentesque-Block__Button--green:active{
        background-color: rgba(56, 142, 59, 1);
    }




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

        .Pellentesque-Block__Button--green:active{ 
        background-color: rgba(56, 142, 59, 1);
    }
}

@media screen and (min-width: 768px) and (max-width: 992px) {

    .Error-Massage__Title{
        font-family: Inter;
        font-size: 18px;
        color: rgb(90, 90, 90);
        text-align: start;
    }

        .Error-Message{
        position: relative;
        top: 120px;
        width: 300px;
        height: fit-content;
        padding: 20px;
        transition:0.3s;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        display: grid;
        gap: 20px;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 6px 4px rgba(0, 0, 0, 0.322);
    }

    .Form-Pellentesque{
        position: relative;
        width: 300px;
        height: 350px;
        padding: 20px;
        background-color: rgb(255, 255, 255);
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 10px;
        box-shadow: 0px 2px 6px 4px rgba(0, 0, 0, 0.322);
    }

        dialog{
        background-color: #801f1f00;
        border: none;
        outline: none;
        justify-items: center;
        grid-template-rows: 340px  250px;
        align-content: center;
        width:100%;
        height: 100%;
        padding-top: 50px;
    }

    .Form-Pellentesque__Article{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 76px;
        padding-right: 20px;
    }

    .Btn-Close_Btn{
        width: 20px;
        height: 20px;
        background-color: rgba(255, 255, 255, 0);
        background-image: url(https://images.icon-icons.com/1769/PNG/512/4115230-cancel-close-cross-delete_114048.png);
        background-size: contain;
        border: none;
    }

    .Form-Pellentesque__inp{
        width: 200px;
        height: 40px;
        padding-left: 20px;
        border-radius: 5px;
        border: none;
        outline: none;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.301) ;
        transition: 0.3s;
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

        .Pellentesque-Block__Button--green:active{
        width: 180px;
        height: 50px;
        border-radius: 5px;
        background-color: rgba(56, 142, 59, 1);
        border: none;
        align-items: center;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
    }




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

        .Pellentesque-Block__Button--green:active{
        background-color: rgba(56, 142, 59, 1);
    }
}

@media screen and (min-width:320px) and (max-width:767px) {

    .Titl-Desc-Btn__Titl{
        font-size: 20px;
    }

    .Mini-Blocks-block-text__description{
        font-size: 15px;
    }

    .Error-Massage__Title{
        font-family: Inter;
        font-size: 12px;
        color: rgb(90, 90, 90);
        text-align: start;
    }

        .Error-Message{
        position: relative;
        top: 350px;
        width: 100px;
        height: fit-content;
        padding: 20px;
        transition:0.3s;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        display: grid;
        gap: 20px;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 6px 4px rgba(0, 0, 0, 0.322);
    }

    .Form-Pellentesque{
        position: relative;
        width: 250px;
        height: 350px;
        padding: 20px;
        background-color: rgb(255, 255, 255);
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 10px;
        box-shadow: 0px 2px 6px 4px rgba(0, 0, 0, 0.322);
    }

    dialog{
        background-color: #ff000000;
        border: none;
        outline: none;
        justify-items: center;
        padding-left: 20px;
        grid-template-rows: 140px  250px;
        align-content: center;
        width:100%;
        height: 100%;
        padding-top: 0px;
    }

    dialog[open] { /*  Добавляем стили для открытого диалога  */
        display: grid; /*  или display: block;  */
    }

    .Form-Pellentesque__Article{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 85px;
        padding-right: 20px;
    }

    .Btn-Close_Btn{
        width: 20px;
        height: 20px;
        background-color: rgba(255, 255, 255, 0);
        background-image: url(https://images.icon-icons.com/1769/PNG/512/4115230-cancel-close-cross-delete_114048.png);
        background-size: contain;
        border: none;
    }

    .Form-Pellentesque__inp{
        width: 190px;
        height: 40px;
        padding-left: 20px;
        border-radius: 5px;
        border: none;
        outline: none;
        font-family: Inter;
        font-size: 15px;
        font-weight: 600;
        box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.301) ;
        transition: 0.3s;
    }





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
        width: 130px;
        height: 35px;
        border-radius: 5px;
        background-color: rgba(76, 175, 79, 1);
        border: none;
        align-items: center;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
    }

        .Pellentesque-Block__Button--green:active{
        background-color: rgba(56, 142, 59, 1);
    }
}
</style>    