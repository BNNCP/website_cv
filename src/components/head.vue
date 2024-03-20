<script setup>
import { ref } from 'vue';
import gitImg from '../image/github-mark-367d5cb2-367d5cb2-367d5cb2.png'
import linkImg from '../image/LI-In-Bug-3c0149f2-3c0149f2-3c0149f2.png'
import me from '../image/0318_163000223-0-7b186212-7b186212.jpg'

const github = ref("https://github.com/BNNCP");
const lindIn = ref("https://www.linkedin.com/in/ben-chang-a58409177/");
const title = document.getElementById("titlebox");
// const minx = 0;
// const maxx = title.parentElement.clientWidth;
// const animateTxt = (n) => {
//     if (title.style.left == minx) {
//         animateTxt(abs(n));
//     }
//     else if (title.style.left == maxx) {
//         animateTxt(-abs(n));
//     }
//     title.style.left += n;
//     setInterval(animateTxt(n), 1000)
// }
// animateTxt(10);
</script>

<template>
    <section class="main">
        <div class="row">
            <h1 id="titlebox" style="font-weight: bolder; font-size: 50px; margin: 2rem; margin-left: 5rem; ">大中中的家</h1>
        </div>
        <div class="container-fluid">

            <div class="row">
                <div id="imgbox" class="col-4">
                    <img class="" :src="me" alt="???">
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
                            我是張秉中，國高中就讀於菲律賓國際學校，而後回台灣就讀成功大學。我的經驗著重在全端及系統開發，以及設計符合系統設計(Design Pattern)
                            的程式框架。在版本控管上，我主要透過GitHub 來幫助團隊能在CI/CD 原則下更有效的開發。
                        </p>
                        <br>
                        <p class="lh-base">
                            我是一位負責任、自我要求高的人，更是一個勇於學習新技術的人。我利用休閒時間自學，例如，觀看哈佛大學的CS50課程、在HackerRank上進行演算法相關的練習，來彌補程式基礎，同時提高解決問題的能力。為了更深入了解網路應用開發，我主動學習了WebSocket、WebRTC等技術，實現專案的即時通訊功能，為專題開發提供更多可能性。我相信不斷學習新技術能夠讓我在全端工程師的角色中保持競爭力，並為團隊帶來更多價值。
                        </p>
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

#titlebox {
    position: relative;
    -webkit-animation: moveX 5s linear 0s infinite alternate;
    -moz-animation: moveX 5s linear 0s infinite alternate;
    -o-animation: moveX 5s linear 0s infinite alternate;
    animation: moveX 5s linear 0s infinite alternate
}

@-webkit-keyframes moveX {
    from {
        left: 0;
    }

    to {
        left: 80%;
    }
}

@-moz-keyframes moveX {
    from {
        left: 0;
    }

    to {
        left: 80%;
    }
}

@-o-keyframes moveX {
    from {
        left: 0;
    }

    to {
        left: 80%;
    }
}

@keyframes moveX {
    from {
        left: 0;
    }

    to {
        left: 80%;
    }
}


.container-fluid {
    background-color: #F8F8F8;
    width: 80%;
    border-radius: 3rem;
}

.main {
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

#imgbox {
    margin-right: 3rem;
}

#imgbox>img {
    width: 90%;
    border-radius: 3rem;
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
    font-size: 40px;
    font-weight: bold;
}

#title {
    display: inline-block;
    text-align: end;
    font-size: 30px;
    font-weight: bold;
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
    font-size: 24px;
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

.linkTo>a {
    padding-left: 0.3rem;
}
</style>