var kaisuu = 0;
var pu = 0;
var te = 0;
var pi = 0;
var pi2 = 0;
var ltu = 0;
var start = new Date();
var hour = 0;
var min = 0;
var sec = 0;
var now = 0;
var datet = 0;
var time;
const team = ['ポ', 'プ', 'テ', 'ピ', 'ッ', 'ク'];
const team2 = ['ポ', 'プ', 'テ', 'ピ', 'ク'];
// ↓この辺最高に汚い
const take = '\
　　　　　　　　　　　　　　　　　　　　　　　　　-------　､　ｒへ------､ <br>\
　　　　　　　　　　　　　　　　　　 ＿__､+\'\'"~　八 　　　　　~\'\'＜ つ　　　＼ <br>\
　　　　　　　　　　　　　　 _､+\'\'"~　 ./ ,:　　　　＾ 　 丶　　　　　ヽく＿＿　∧ <br>\
　　　　　　 , -r-　　　　 / 　 　 　 / / -､　　　　\'´￣!＼‘,　‘:,　 |　　　 ＼/ <br>\
　　　　　／ .∧　　 ＼..ﾞ|/＿,,.｡*\'/ /|,\/＼＿_／^ヽ /,,_　`! 　 \',　| <br>\
　　　 ／　　　∧　　　 ＼　〈〉.　,　.|　ｙ\'\'"ヽ______ 7´⌒ヽ _|　　ト;′ <br>\
　　 〈　　　　　 ∧ （竹） .∨...　｜｜ ,r　ヽ 三三/　　‘:, Y!　 .|,′ <br>\
　　　∨ 　 　 　 ∧　　　　∨...　|　.|八 °,!三三{.　° ﾉ 八　/---､ <br>\
.　　　 ∨ 　 　 　 ∧　　　　∨....∨（.＾ 　　 ､_,､_, \`　　　,.ｨ^!./＿　　\', <br>\
　　　　 ∨　　 ／三ﾐメ、　　∨　冫≧=‐------‐ｧ=≦/ .|/　　 } 　 ! <br>\
.　　　 　 ∨三三三三圦__.＼＼/　＼|ｲ `\'\'＜:＼/:::::／　　|　　（＿__） <br>\
　　　 〈〉　　 ノ　ゞ三ｼ.　＼　＼;　　 { /　　　 ｀¨ﾍ⌒こフ　.∨ 〔､､､_） <br>\
　　　　　　　）　　　 　 　 　 ＼八　　`^i､_ __　　　 ＼＼　　 .∨ ｀¨´ <br>\
　　　　 ＜ﾍ＿/三＼＿／｜＼､.＼　/::/　 ）　　　　 `\'´　＿ ,∨､ <br>\
　　　　|＼三三三三:／　　|.　　＼/^ゞク≦---‐=≦::::::「:::::::::|::::/ <br>\
　　　　　　　　 　 　 　 　 　 　 　 /:::::::/:::::::/:::::::::;′:::::::::|::::::::::|:人<br>\
happy end!!\n\
'
    ;

function pptp() {
    document.getElementById("bkb").style.visibility = "hidden";
    var pipimi = document.getElementById('pipimi');
    pipimi.textContent = '';

    var popuko = document.getElementById('popuko');
    var kekka = document.getElementById('kekka');
    popuko.textContent = '';
    var pop = setInterval(function () {
        now = new Date();
        datet = parseInt((now.getTime() - start.getTime()) / 1000);

        hour = parseInt(datet / 3600);
        min = parseInt((datet / 60) % 60);
        sec = datet % 60;

        // 数値が1桁の場合、頭に0を付けて2桁で表示する指定
        if (hour < 10) { hour = "0" + hour; }
        if (min < 10) { min = "0" + min; }
        if (sec < 10) { sec = "0" + sec; }
        var time = hour + '時間' + min + '分' + sec + '秒'; // パターン2
        kaisuu++;
        if (pipimi.textContent.endsWith('ッ')) {
            pipimi.textContent += team2[getRandomInt(0, 4)];;
        } else {
            pipimi.textContent += team[getRandomInt(0, 5)];;
        }
        kekka.innerHTML = 'ポプが出来た回数:' + pu + '<br>ポプテ出来た回数:' + te + '<br>ポプテピ出来た回数:' + pi + '<br>ポプテピピ出来た回数:' + pi2 + '<br>ポプテピピッ出来た回数:' + ltu + '<br>経過時間:' + time
            ;

        if (pipimi.textContent.endsWith('ポプ')) {
            pu++;
        }
        if (pipimi.textContent.endsWith('ポプテ')) {
            te++;
        }
        if (pipimi.textContent.endsWith('ポプテピ')) {
            pi++;
        }
        if (pipimi.textContent.endsWith('ポプテピピ')) {
            pi2++;
        }
        if (pipimi.textContent.endsWith('ポプテピピッ')) {
            ltu++;
        }
        if (pipimi.textContent.endsWith('ポプテピピック')) {
            document.getElementById("bkb").style.visibility = "visible";
            clearInterval(pop);
            popuko.innerHTML = take + kaisuu + '文字目だよ<br><a href="https://twitter.com/share?text=「ポ・プ・テ・ピ・ッ・ク」をランダムに出力して「ポプテピピック」が完成したら竹●房を破壊するやつを、' + kaisuu + '文字目、' + time + 'で完成させました！(ポプテピピッまで完成した回数:' + ltu + ')%20http://miyayuu2.starfree.jp/urls/pptp2&hashtags=ポプテの破壊するJS" target="_blank">Twitterでシェアする</a>'　;
        }
        window.scrollByLines(1);
    }, 10);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}