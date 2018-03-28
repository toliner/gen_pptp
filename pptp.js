var kaisuu = 0;
var popu = 0;
var popute = 0;
var poputepi = 0;
var poputepi2 = 0;
var poputepi2ltu = 0;
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
    let pipimi = document.getElementById('pipimi');
    pipimi.textContent = '';

    let popuko = document.getElementById('popuko');
    let kekka = document.getElementById('kekka');
    let button = document.getElementById('bkb');
    button.disabled = true;
    popuko.textContent = '';
    let pop = setInterval(function () {
        now = new Date();
        datet = parseInt((now.getTime() - start.getTime()) / 1000);

        hour = parseInt(datet / 3600);
        min = parseInt((datet / 60) % 60);
        sec = datet % 60;

        // 数値が1桁の場合、頭に0を付けて2桁で表示する指定
        if (hour < 10) { hour = "0" + hour; }
        if (min < 10) { min = "0" + min; }
        if (sec < 10) { sec = "0" + sec; }
        let time = hour + '時間' + min + '分' + sec + '秒'; // パターン2
        kaisuu++;
        if (pipimi.textContent.endsWith('ッ')) {
            pipimi.textContent += team2[getRandomInt(0, 4)];;
        } else {
            pipimi.textContent += team[getRandomInt(0, 5)];;
        }
        kekka.innerHTML = 'ポプが出来た回数:' + popu + '<br>ポプテ出来た回数:' + popute + '<br>ポプテピ出来た回数:' + poputepi + '<br>ポプテピピ出来た回数:' + poputepi2 + '<br>ポプテピピッ出来た回数:' + poputepi2ltu + '<br>経過時間:' + time
            ;

        if (pipimi.textContent.endsWith('ポプ')) {
            popu++;
        }
        if (pipimi.textContent.endsWith('ポプテ')) {
            popute++;
        }
        if (pipimi.textContent.endsWith('ポプテピ')) {
            poputepi++;
        }
        if (pipimi.textContent.endsWith('ポプテピピ')) {
            poputepi2++;
        }
        if (pipimi.textContent.endsWith('ポプテピピッ')) {
            poputepi2ltu++;
        }
        if (pipimi.textContent.endsWith('ポプテピピック')) {
            button.disabled = false;
            document.getElementById("bkb").style.visibility = "visible";
            clearInterval(pop);
            let result = pipimi.textContent;
            let count = document.getElementById("count");
            count.innerHTML += '\'ポ\'の文字数:' + countChar(result, 'ポ') + '<br>';
            count.innerHTML += '\'プ\'の文字数:' + countChar(result, 'プ') + '<br>';
            count.innerHTML += '\'テ\'の文字数:' + countChar(result, 'テ') + '<br>';
            count.innerHTML += '\'ピ\'の文字数:' + countChar(result, 'ピ') + '<br>';
            count.innerHTML += '\'ッ\'の文字数:' + countChar(result, 'ッ') + '<br>';
            count.innerHTML += '\'ク\'の文字数:' + countChar(result, 'ク') + '<br>';
            popuko.innerHTML = take + kaisuu + '文字目だよ<br><a href="https://twitter.com/share?text=「ポ・プ・テ・ピ・ッ・ク」をランダムに出力して「ポプテピピック」が完成したら竹●房を破壊するやつを、' + kaisuu + '文字目、' + time + 'で完成させました！(ポプテピピッまで完成した回数:' + poputepi2ltu + ')%20https://toliner.github.io/gen_pptp/&hashtags=ポプテの破壊するJS" target="_blank">Twitterでシェアする</a>'　;
        }
        window.scrollByLines(1);
    }, 10);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function countChar(str, seq) {
    return str.split(seq).length - 1;
}