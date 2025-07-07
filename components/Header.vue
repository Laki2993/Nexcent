<template>
    <dialog id="PopUp">
        <section class="ModWin">
            <article class="Btn-Close">
                <button class="Btn-Close_Btn" @click="closeModal"></button>
            </article>
            <a class="ModWin_Link" href="#">Home</a>
            <a class="ModWin_Link" href="#">Service</a>
            <a class="ModWin_Link" href="#">Feature</a>
            <a class="ModWin_Link" href="#">Product</a>
            <a class="ModWin_Link" href="#">Testimonial</a>
            <a class="ModWin_Link" href="#">FAQ</a>
        </section>

    </dialog>
    <header id="header">
        <section class="Logo">
            <img class="Logo__Image" src="/assets/Logo.png" alt="#">
            <img class="Logo__Text" src="/assets/Logo-text.png" alt="#">
        </section>
        <nav class="Nav" id="Nav" @click="handleClick">
            <a class="Nav__Link" href="#">Home</a>
            <a class="Nav__Link" href="#">Service</a>
            <a class="Nav__Link" href="#">Feature</a>
            <a class="Nav__Link" href="#">Product</a>
            <a class="Nav__Link" href="#">Testimonial</a>
            <a class="Nav__Link" href="#">FAQ</a>
        </nav>

        <section class="Header-Btns">
            <button class="Header-Btns__Btn--white">Login</button>
            <button class="Header-Btns__Btn--green">Sign up</button>
        </section>
    </header>
</template>

<style lang="scss">

@media  (min-width: 1200px){
    header{
        width: 100%;
        height: 85px;
        align-items: center;
        display: flex;
        justify-content: space-around;
    }
    
    .Nav{
        &__Link{
            color: rgba(24, 25, 31, 1);
            text-decoration: none;
            margin: 0 1rem;
            font-size: 16px;
            font-family: Inter;
            font-weight: 400;
        }
    }
    
    .Logo{
        display: flex;
        gap: 10px;
    }
    
    .Header-Btns{
        display: flex;
    
        &__Btn--white{
            width: 90px;
            height: 40px;
            border-radius: 6px;
            background: rgba(76, 175, 79, 0);
            color: rgba(76, 175, 79, 1);
            font-size: 14px;
            font-weight: 500;
            border: none;
            font-family: Inter;
            font-weight: 500;
        }
    
        &__Btn--green{
            width: 90px;
            height: 40px;
            border-radius: 6px;
            background: rgba(76, 175, 79, 1);
            color: white;
            font-size: 14px;
            font-weight: 500;
            font-family: Inter; 
            border: none;
        }
    }
}

@media  (min-width: 992px) and (max-width: 1200px){
    header{
        width: 100%;
        height: 80px;
        align-items: center;
        display: flex;
        justify-content: space-around;
    }
    
    .Nav{
        &__Link{
            color: rgba(24, 25, 31, 1);
            text-decoration: none;
            margin: 0 1rem;
            font-size: 14px;
            font-family: Inter;
            font-weight: 400;
        }
    }
    
    .Logo{
        display: flex;
        gap: 5px;
    }
    
    .Header-Btns{
        display: flex;
    
        &__Btn--white{
            width: 80px;
            height: 35px;
            border-radius: 6px;
            background: rgba(76, 175, 79, 0);
            color: rgba(76, 175, 79, 1);
            font-size: 14px;
            font-weight: 500;
            border: none;
            font-family: Inter;
            font-weight: 500;
        }
    
        &__Btn--green{
            width: 80px;
            height: 35px;
            border-radius: 6px;
            background: rgba(76, 175, 79, 1);
            color: white;
            font-size: 14px;
            font-weight: 500;
            font-family: Inter; 
            border: none;
        }
    }

    .Logo__Image,.Logo__Text{
        transform: scale(0.9);
    }
}

@media  (min-width: 768px) and (max-width: 991px){
    header{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    
    .Nav{
        &__Link{
            color: rgba(24, 25, 31, 1);
            text-decoration: none;
            margin: 0 1rem;
            font-size: 12px;
            font-family: Inter;
            font-weight: 400;
        }
    }
    
    .Logo{
        display: flex;
    }
    
    .Header-Btns{
        display: flex;
    
        &__Btn--white{
            width: 70px;
            height: 30px;
            border-radius: 6px;
            background: rgba(76, 175, 79, 0);
            color: rgba(76, 175, 79, 1);
            font-size: 13px;
            font-weight: 500;
            border: none;
            font-family: Inter;
            font-weight: 500;
        }
    
        &__Btn--green{
            width: 70px;
            height: 30px;
            border-radius: 3px;
            background: rgba(76, 175, 79, 1);
            color: white;
            font-size: 13px;
            font-weight: 500;
            font-family: Inter; 
            border: none;
        }
    }

    .Logo__Image,.Logo__Text{
        transform: scale(0.7);
    }
}

@media  (min-width: 320px) and (max-width: 767px){
    header{
        width: 100%;
        height: 70px;
        align-items: center;
        display: flex;
        justify-content: space-around;
    }
    
    .Nav{
        position: relative;
        z-index: 1;
        width: 20px;
        height: 17px;
        overflow: hidden;
        background-color: rgb(199, 199, 199);
        border-radius: 2px;
        display: grid;
        gap: 4px;
        padding-top: 2px;
        justify-content: center;
        position: relative;

        &__Link{
            pointer-events: none;
            color: rgb(0, 0, 0);
            text-decoration: none;
            margin: 0 1rem;
            font-size: 2px;
            border-radius: 5px;
            background-color: black;
            font-family: Inter;
            font-weight: 400;
        }
    }
    
    .Logo{
        display: flex;
        justify-content: start;
    }
    
    .Header-Btns{
        display: flex;
    
        &__Btn--white{
            width: 50px;
            height: 20px;
            border-radius: 6px;
            background: rgba(76, 175, 79, 0);
            color: rgba(76, 175, 79, 1);
            font-size: 10px;
            font-weight: 500;
            border: none;
            font-family: Inter;
            font-weight: 500;
        }
    
        &__Btn--green{
            width: 50px;
            height: 20px;
            border-radius: 3px;
            background: rgba(76, 175, 79, 1);
            color: white;
            font-size: 10px;
            font-weight: 500;
            font-family: Inter; 
            border: none;
        }
    }

    .Logo__Image,.Logo__Text{
        transform: scale(0.7);
    }


    dialog{
        width: 100%;
        height: 300px;
        display: none;
        justify-content: center;
        border: none;
        background-color: rgba(0, 0, 255, 0);
    }

    .ModWin{
        padding: 10px;
        position: relative;
        top: 70px;
        left: 20px;
        width:100px ;
        box-sizing: border-box;
        height: 200px;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        display: grid;
        gap: 10px ;
        justify-items: center;
        align-items: center;
    }

    .Btn-Close{
        width: 100%;
        display: flex;
        justify-content: end;
    }

    .Btn-Close_Btn{
        width: 20px;
        height: 20px;
        background-color: rgba(255, 255, 255, 0);
        background-image: url(https://images.icon-icons.com/1769/PNG/512/4115230-cancel-close-cross-delete_114048.png);
        background-size: contain;
        border: none;
    
    }

    .ModWin_Link{
        font-family: Inter;
        font-size: 10px;
        font-weight: 500;
        color: black;
        text-decoration: none;
    }
} 
</style>

<script>
export default {
      methods: {
    handleClick() {
      if (window.innerWidth < 768) {
        const dialog = document.getElementById('PopUp');
        if (dialog) {
          dialog.showModal(); 
          dialog.style.display = 'flex';
        }
      }

    },
    closeModal() {
      const dialog = document.getElementById('PopUp');
      if (dialog) {
        dialog.close(); 
        dialog.style.display = 'none';
      }
    },
  },
};


</script>