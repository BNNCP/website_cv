<script setup>
import { ref } from 'vue';
import gitImg from '../../dist/assets/github-mark-367d5cb2.png'
import linkImg from '../../dist/assets/LI-In-Bug-3c0149f2.png'

const github = ref("https://github.com/BNNCP");
const lindIn = ref("https://www.linkedin.com/in/ben-chang-a58409177/");
</script>

<template>
    <section class="main">
        <div class="row">
            <h1>操你媽</h1>
        </div>
        <div class="container-fluid">

            <div class="row">
                <div id="imgbox" class="col-4 m-2">
                    <img class="img-fluid"
                        src="https://steamuserimages-a.akamaihd.net/ugc/2026089936703445813/3F19744D7A5D286CF6559CBA5B78865FDBABF780/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                        alt="我">

                </div>
                <div id="dialogue" class="col-6 m-2">
                    <div>
                        <p id="name" class="text-start">張秉中</p>
                        <p id="title" class="text-end">全端工程師</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis voluptates laboriosam
                            voluptatibus delectus nam nostrum eos, fuga id ipsum eligendi saepe voluptatem, earum libero,
                            temporibus quae explicabo omnis in ea. Adipisci, consequatur blanditiis? Soluta vero rerum
                            provident maxime ducimus neque beatae dicta sint asperiores inventore veniam eveniet aspernatur
                            eligendi officia, libero ipsa et nisi, cupiditate, modi sed quibusdam esse quod excepturi!
                            Mollitia aperiam cum a eos aliquam fuga cumque voluptatum ducimus, ipsam animi. Aspernatur
                            maiores dolor velit animi consequuntur. Alias aut quod quas temporibus autem corrupti illum,
                            maxime voluptatum, quae non accusamus commodi magnam veritatis voluptas? Harum natus molestiae
                            eos ea. Obcaecati corporis animi laborum. Blanditiis iste natus tenetur nesciunt, aperiam, atque
                            quo ipsam voluptas maxime nisi aliquam eveniet reiciendis, sit quidem culpa eligendi at. Quaerat
                            mollitia neque accusamus recusandae? Laboriosam incidunt debitis labore, non hic sed ab
                            voluptates cumque enim temporibus officiis culpa, vitae, omnis accusantium architecto quibusdam!
                        </p>
                    </div>
                </div>
            </div>
            <div class="row rowLink">
                <div class="col-1 linkTo">
                    <img :src="gitImg" alt="github">
                    <a :href="github" target="_blank">Github</a>
                </div>
                <div class="col-1 linkTo">
                    <img :src="linkImg" alt="github">
                    <a :href="lindIn" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
* {
    margin: 0;
}

.container-fluid {
    background-color: #F8F8F8;
    width: 80%;
    border-radius: 3rem;
}

.main {
    border-radius: 1rem;
    background-color: #F0E5DE;
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.row {
    margin: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
}


#imgbox>img {
    border-radius: 3rem;
    width: 100%;

    display: block;
    overflow: hidden;
}

#dialogue>div {
    display: flex;
    justify-content: space-between
}

#name {
    display: inline-block;
    font-size: 30px;
    font-weight: 1000;
}

#title {
    display: inline-block;
    text-align: end;
    font-size: 22px;
    font-weight: 1000;
    font-style: italic;
}

.rowLink {
    justify-content: left;
    margin-left: 7rem;
}

.linkTo {
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.linkTo>img {
    width: 35px;
}
</style>