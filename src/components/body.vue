<script setup>
import { ref } from 'vue';
var colors = ref(['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info']);
var color = ref();
import highSchoolImg from "../image/channels4_profile.jpg"
import collegeImg from "../image/National_Cheng_Kung_University_logo.svg.png"
import chickenLive from "../image/messageImage_1685025673792.jpg"
import ramen from "../image/messageImage_1685034530405.jpg"
import Bingo from '../image/346168769_926792961920849_6290047423726556787_n.png'

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
                    <h1>Southville International School and Colleges</h1>
                </div>
                <div class="col m-2 text-break lh-lg text-wrap">
                    <p>我國中高中在菲律賓就讀國際學校，期間除了培養英文能力以外，也結識不同國家的人才，累積與不同文化的人交流的經驗。國外就學的歷程，培養我開放活潑的個性，當進入一個新的陌生環境時我也能夠快速適應。且當時隻身國外，許多生活上的問題都必須自己解決。因此我很早就獨立學會照顧自己，這樣的特質使我面對生活上的挫折時比同年齡的人更成熟應對，不易被外界因素影響，也很願意接受挑戰。
                    </p>
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
                    <h1>國立成功大學 政治學系</h1>
                </div>
                <div class="col m-2 text-break lh-lg text-wrap">
                    <p>從菲律賓回台灣後就讀國立成功大學政治系，起初因國外教學方式與台灣填鴨式教育差異甚大而較不適應，但經過系上嚴謹且高強度的訓練後，我培養了撰寫學術性文章的技能，包括查找可靠資料來源，質化量化研究方法的使用，以及資料分析的邏輯。這四年的學習不僅僅學習了政治系四大領域國際關係、比較政治、政治理論、公共行政的範疇、我認為更重要的是培養了我思考與解決問題的能力。當面對同一件問題時，我能夠更深入探究背後的成因，並且使用科學方法進行驗證，我認為這樣的特質不論在哪個領域都很需要。
                    </p>
                    <!-- <p>除了課內學習 我還積極參與各種課外活動 我大學四年都參加成大服務團 到偏鄉國小舉辦營隊 陪伴小朋友並提供高品質的教案 我希望能夠在自己有能力的範圍內幫助別人 降低社會上的不平等
                        我也曾經擔任過成大新鮮人之夜的總召 成大新鮮人之夜是一個專門舉辦給大一</p> -->
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
        <div class="target " id="chicken" v-motion-slide-visible-once-left>
            <div class="row imgbox">
                <a href="https://fanciful-vacherin-50759d.netlify.app/" target="_blank"><img class="logo-work img-fluid"
                        :src="chickenLive" alt="ChickenLive"></a>
                <div class="hint">↑打開專案連結</div>
            </div>
            <div class="row bg-primary rounded-3 textbox"
                :class="{ 'bg-primary': color == 'bg-primary', 'bg-success': color == 'bg-success', 'bg-danger': color == 'bg-danger', 'bg-warning': color == 'bg-warning', 'bg-info': color == 'bg-info' }"
                style="--bs-bg-opacity: .1;">
                <div class="col m-2">
                    <h1>ChickenLive雞識人生</h1>
                </div>
                <div class="col m-2 text-break lh-lg text-wrap">
                    <p>為了實現出一個能夠即時互動的網站，我使用了websocket協定，它的特性在於建立連線後能夠保持連線，讓client
                        跟server能更有效的達成雙向溝通，所以在這個網站上client端執行的動作都會被傳送到server，並由server廣播給其他在線用戶，能夠做到即時連線、讀取、移動聊天等功能。此外，我還結合了WebRTC與Websocket，實現了配對視訊聊天的功能，當使用者按下配對按鈕後，Websocket會在後端建立不同性別佇列的資料結構，當兩端同時有使用者進行配對時，server會將兩邊佇列索引值為零者取出，並放入獨立ID的小房間來完成配對，若沒配對成功則會傳送等待的訊息給client。在配對成功後，WebRTC會擷取本地串流，並通過WebSocket作為Signaling
                        Channel，相互傳遞連線資訊，建立handshake，實現Peer-to-Peer connection。
                    </p>
                </div>
            </div>

        </div>
        <div class="target " id="chicken" v-motion-slide-visible-once-left>
            <div class="row imgbox">
                <a href="https://github.com/BNNCP/Ramen-Order-System" target="_blank"><img class="logo-work img-fluid"
                        :src="ramen" alt="Ramen Order System"></a>
                <div class="hint">↑打開專案連結</div>
            </div>
            <div class="row bg-primary rounded-3 textbox"
                :class="{ 'bg-primary': color == 'bg-primary', 'bg-success': color == 'bg-success', 'bg-danger': color == 'bg-danger', 'bg-warning': color == 'bg-warning', 'bg-info': color == 'bg-info' }"
                style="--bs-bg-opacity: .1;">
                <div class="col m-2">
                    <h1>拉麵訂餐系統</h1>
                </div>
                <div class="col m-2 text-break lh-lg text-wrap">
                    <p>這是一個拉麵訂餐系統，使用C# 、MS sql 和Ado.net
                        的技術開發CRUD功能。設計登入系統來判斷身份，區分客戶、員工和經理。經理具有查看拉麵訂單、客戶資料的權限。在此專案中，我在資料庫關聯了庫存、商品耗材、跟用戶訂單。因此，每單筆訂單都會在資料庫計算每碗拉麵消耗的庫存量，近一步幫助管理商店的原料庫存。
                    </p>
                </div>
            </div>
        </div>
        <div class="target " id="chicken" v-motion-slide-visible-once-left>
            <div class="row imgbox">
                <a href="https://github.com/BNNCP/BingoBingo" target="_blank"><img class="logo-work img-fluid" :src="Bingo"
                        alt="BingoBingo"></a>
                <div class="hint">↑打開專案連結</div>
            </div>
            <div class="row bg-primary rounded-3 textbox"
                :class="{ 'bg-primary': color == 'bg-primary', 'bg-success': color == 'bg-success', 'bg-danger': color == 'bg-danger', 'bg-warning': color == 'bg-warning', 'bg-info': color == 'bg-info' }"
                style="--bs-bg-opacity: .1;">
                <div class="col m-2">
                    <h1>BingoBingo</h1>
                </div>
                <div class="col m-2 text-break lh-lg text-wrap">
                    <p>此專案是我第一個嘗試開發的專案，用C#作為主要的開發語言，並藉由微軟的Windows form框架來完成。參考台灣彩券製作的Bingo Bingo
                        賓果賓果遊戲，可以產生隨機亂數，以及針對玩家輸入的數字進行簡單的條件判斷式。當玩家點擊開獎按鈕後系統會根據亂數產出的結果跟玩家的選項進行交叉比對，並依據玩法、獎項的不同去計算所獲得的金額。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#chicken {
    flex-direction: column;
}

p {
    font-size: 22px;
}

h1 {
    font-weight: bolder;
}

.container-fluid {
    background: #F0E5DE;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0;
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
    margin: 10rem 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    font-weight: bold;

}

.logo {
    width: 1000px;
    height: 200px;
}

.logo-work {
    width: 800px;
    height: 500px;
}

.row {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0.5rem;
}
</style>