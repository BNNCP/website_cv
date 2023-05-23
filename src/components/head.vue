<script setup>
import { ref } from 'vue';
import gitImg from '../image/github-mark-367d5cb2-367d5cb2-367d5cb2.png'
import linkImg from '../image/LI-In-Bug-3c0149f2-3c0149f2-3c0149f2.png'
import me from '../image/0318_163000223-0-7b186212-7b186212.jpg'

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
                <div id="imgbox" class="col-4">
                    <img class="img-fluid" :src="me" alt="???">
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
                <div id="dialogue" class="col-6 border-start">
                    <div>
                        <p id="name" class="text-start">張秉中</p>
                        <p id="title" class="text-end">全端工程師</p>
                    </div>
                    <div class="text-body">
                        <p class="lh-base">
                            您好，我是張秉中，國高中就讀於菲律賓國際學校，而後回台灣就讀成功大學政治學系。畢業後出於個人興趣和規劃，開始學習全端工程師相關知識，期望能夠在這個領域發揮自己的才能和熱情。
                        </p>
                        <br>
                        <p class="lh-base">
                            我是一位負責任、自我要求高的人，更是一個勇於學習新技術的人。在全端工程師訓練班上課期間，除了學習課堂上的內容之外，我利用課餘時間自學，例如，觀看哈佛大學的CS50課程、在HackerRank上進行演算法相關的練習，來彌補程式基礎，同時提高解決問題的能力。為了更深入了解網路應用開發，我主動學習了WebSocket、WebRTC等技術，實現專案的即時通訊功能，為專題開發提供更多可能性。我相信不斷學習新技術能夠讓我在全端工程師的角色中保持競爭力，並為團隊帶來更多價值。
                        </p>
                        <br>
                        <p class="lh-base">
                            雖然我非本科系畢業，但過去我在成功大學政治系的學習過程中，培養了扎實的研究、分析和溝通能力，我也擔任過社團活動總召與幹部，這些經驗使我能夠從多個角度看待問題並提供全面的解決方案，我相信這些能力也能應用在全端工程師的職位上，並將有助於我與團隊成員合作。
                        </p>
                        <br>
                        <p class="lh-base">我期待有機會加入貴公司，並將我所學與我的責任感、自我要求和學習精神相結合，為團隊帶來價值。</p>
                    </div>
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
    justify-content: center;
    align-items: center;
}


#imgbox>img {
    border-radius: 3rem;
    width: 70%;

    display: block;
    overflow: hidden;
}

#dialogue {
    padding-left: 5rem;
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
    justify-content: flex-start;

}

.text-body {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
}

.text-body>p {
    text-align: justify;
    font-size: 16px;
}

.linkTo {
    margin: 0.5rem 3rem 0 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.linkTo>img {
    width: 35px;
}
</style>