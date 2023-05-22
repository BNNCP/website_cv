<script setup>
import { ref } from 'vue';
var colors = ref(['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info']);
var color = ref();
const highSchoolImg = "../../dist/assets/channels4_profile.jpg"
const collegeImg = "../../dist/assets/National_Cheng_Kung_University_logo.svg.png"

function randomColors() {
    setInterval(() => {
        let id = Math.ceil(Math.random() * (colors.value.length - 1))
        color.value = colors.value[id];
    }, 2000)
};
randomColors();
</script>

<template>
    <div class="container-fluid">
        <section class="title" v-motion-slide-visible-once-top>
            <font-awesome-icon class="fa-2x" :icon="['fas', 'school']" flip />
            <h1>就學經歷</h1>
        </section>
        <div class="target " v-motion-slide-visible-once-left>
            <div class="row bg-primary rounded-3"
                :class="{ 'bg-primary': color == 'bg-primary', 'bg-success': color == 'bg-success', 'bg-danger': color == 'bg-danger', 'bg-warning': color == 'bg-warning', 'bg-info': color == 'bg-info' }"
                style="--bs-bg-opacity: .1;">
                <div class="col m-2">
                    <h2>Southville International School and Colleges</h2>
                </div>
                <div class="col m-2 text-break lh-lg text-wrap">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae doloribus laborum,
                        voluptatibus quae id, ipsa enim sequi vitae accusantium voluptatem quasi laudantium similique,
                        aperiam
                        quisquam in! Molestiae corrupti quis vitae earum alias sint cum perspiciatis doloremque atque
                        sapiente
                        in, officiis quasi et facilis autem, ab molestias soluta error nobis voluptatem repellat
                        reprehenderit!
                        Iste quam repellendus quas repudiandae velit aliquid quis maxime, odit explicabo numquam esse
                        voluptatem
                        eligendi accusantium voluptates tempore quod dignissimos! Perferendis hic voluptatibus dicta aliquam
                        aperiam libero necessitatibus voluptates! Molestiae laudantium quam in accusantium beatae, labore
                        adipisci asperiores totam quaerat error nobis dolorum. Fugit rem veritatis doloribus.</p>
                </div>
            </div>
            <div class="row">
                <img class="logo img-fluid" :src="highSchoolImg" alt="Southville International School and Colleges">
            </div>
        </div>
        <div class="target " v-motion-slide-visible-once-left>
            <div class="row bg-primary rounded-3"
                :class="{ 'bg-primary': color == 'bg-primary', 'bg-success': color == 'bg-success', 'bg-danger': color == 'bg-danger', 'bg-warning': color == 'bg-warning', 'bg-info': color == 'bg-info' }"
                style="--bs-bg-opacity: .1;">
                <div class="col m-2">
                    <h2>國立成功大學</h2>
                </div>
                <div class="col m-2 text-break lh-lg text-wrap">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae doloribus laborum,
                        voluptatibus quae id, ipsa enim sequi vitae accusantium voluptatem quasi laudantium similique,
                        aperiam
                        quisquam in! Molestiae corrupti quis vitae earum alias sint cum perspiciatis doloremque atque
                        sapiente
                        in, officiis quasi et facilis autem, ab molestias soluta error nobis voluptatem repellat
                        reprehenderit!
                        Iste quam repellendus quas repudiandae velit aliquid quis maxime, odit explicabo numquam esse
                        voluptatem
                        eligendi accusantium voluptates tempore quod dignissimos! Perferendis hic voluptatibus dicta aliquam
                        aperiam libero necessitatibus voluptates! Molestiae laudantium quam in accusantium beatae, labore
                        adipisci asperiores totam quaerat error nobis dolorum. Fugit rem veritatis doloribus.</p>
                </div>
            </div>
            <div class="row">
                <img class="logo img-fluid" :src="collegeImg" alt="National Cheng Kung University">
            </div>

        </div>
        <section class="title" v-motion-slide-visible-once-top>
            <font-awesome-icon class="fa-2x" icon="fa-solid fa-star" flip />
            <h1>作品專案</h1>
        </section>
        <div class="target " v-motion-slide-visible-once-left>
            <div class="row bg-primary rounded-3"
                :class="{ 'bg-primary': color == 'bg-primary', 'bg-success': color == 'bg-success', 'bg-danger': color == 'bg-danger', 'bg-warning': color == 'bg-warning', 'bg-info': color == 'bg-info' }"
                style="--bs-bg-opacity: .1;"> 
                <div class="col m-2">
                    <h2></h2>
                </div>
                <div class="col m-2 text-break lh-lg text-wrap">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae doloribus laborum,
                        voluptatibus quae id, ipsa enim sequi vitae accusantium voluptatem quasi laudantium similique,
                        aperiam
                        quisquam in! Molestiae corrupti quis vitae earum alias sint cum perspiciatis doloremque atque
                        sapiente
                        in, officiis quasi et facilis autem, ab molestias soluta error nobis voluptatem repellat
                        reprehenderit!
                        Iste quam repellendus quas repudiandae velit aliquid quis maxime, odit explicabo numquam esse
                        voluptatem
                        eligendi accusantium voluptates tempore quod dignissimos! Perferendis hic voluptatibus dicta aliquam
                        aperiam libero necessitatibus voluptates! Molestiae laudantium quam in accusantium beatae, labore
                        adipisci asperiores totam quaerat error nobis dolorum. Fugit rem veritatis doloribus.</p>
                </div>
            </div>
            <div class="row">
                <img class="logo img-fluid" :src="collegeImg" alt="National Cheng Kung University">
            </div>

        </div>
        <div class="target " v-motion-slide-visible-once-left>
            <div class="row bg-primary rounded-3"
                :class="{ 'bg-primary': color == 'bg-primary', 'bg-success': color == 'bg-success', 'bg-danger': color == 'bg-danger', 'bg-warning': color == 'bg-warning', 'bg-info': color == 'bg-info' }"
                style="--bs-bg-opacity: .1;">
                <div class="col m-2">
                    <h2></h2>
                </div>
                <div class="col m-2 text-break lh-lg text-wrap">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae doloribus laborum,
                        voluptatibus quae id, ipsa enim sequi vitae accusantium voluptatem quasi laudantium similique,
                        aperiam
                        quisquam in! Molestiae corrupti quis vitae earum alias sint cum perspiciatis doloremque atque
                        sapiente
                        in, officiis quasi et facilis autem, ab molestias soluta error nobis voluptatem repellat
                        reprehenderit!
                        Iste quam repellendus quas repudiandae velit aliquid quis maxime, odit explicabo numquam esse
                        voluptatem
                        eligendi accusantium voluptates tempore quod dignissimos! Perferendis hic voluptatibus dicta aliquam
                        aperiam libero necessitatibus voluptates! Molestiae laudantium quam in accusantium beatae, labore
                        adipisci asperiores totam quaerat error nobis dolorum. Fugit rem veritatis doloribus.</p>
                </div>
            </div>
            <div class="row">
                <img class="logo img-fluid" :src="collegeImg" alt="National Cheng Kung University">
            </div>

        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    background: #F0E5DE;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.title {
    width: 100%;
    margin: 13rem 0 0 0;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    font-weight: bold;
    background-color: #D9D4CF;
}

.title>h1 {
    font-weight: bold;
}


.target {
    width: 1000px;
    margin: 13rem 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    font-weight: bold;

}

.row {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0.5rem;
}
</style>