/**
 * Copyright (c) 2018. トリナー(@toliner_), みやゆー(@yuu1111main), そるてぃ(@salty_7), Keitan(@0505Keitan). All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

let count = 0;
let popu = 0;
let popute = 0;
let poputepi = 0;
let poputepi2 = 0;
let poputepi2ltu = 0;
let start = new Date();
let hour = 0;
let min = 0;
let sec = 0;
let now = 0;
let datet = 0;
let time;
const team = ['ポ', 'プ', 'テ', 'ピ', 'ッ', 'ク'];
const team2 = ['ポ', 'プ', 'テ', 'ピ', 'ク'];
// ↓この辺最高に汚いのを少しマシにしたけどまだ汚い
const take = `
　　　　　　　　　　　　　　　　　　　　　　　　　-------　､　ｒへ------､
　　　　　　　　　　　　　　　　　　 ＿__､+''"~　八 　　　　　~''＜ つ　　　＼
　　　　　　　　　　　　　　 _､+''"~　 ./ ,:　　　　＾ 　 丶　　　　　ヽく＿＿　∧
　　　　　　 , -r-　　　　 / 　 　 　 / / -､　　　　'´￣!＼‘,　‘:,　 |　　　 ＼/
　　　　　／ .∧　　 ＼..ﾞ|/＿,,.｡*'/ /|,\/＼＿_／^ヽ /,,_　\`! 　 ',　|
　　　 ／　　　∧　　　 ＼　〈〉.　,　.|　ｙ''"ヽ______ 7´⌒ヽ _|　　ト;′
　　 〈　　　　　 ∧ （竹） .∨...　｜｜ ,r　ヽ 三三/　　‘:, Y!　 .|,′
　　　∨ 　 　 　 ∧　　　　∨...　|　.|八 °,!三三{.　° ﾉ 八　/---､
.　　　 ∨ 　 　 　 ∧　　　　∨....∨（.＾ 　　 ､_,､_, \`　　　,.ｨ^!./＿　　',
　　　　 ∨　　 ／三ﾐメ、　　∨　冫≧=‐------‐ｧ=≦/ .|/　　 } 　 !
.　　　 　 ∨三三三三圦__.＼＼/　＼|ｲ \`''＜:＼/:::::／　　|　　（＿__）
　　　 〈〉　　 ノ　ゞ三ｼ.　＼　＼;　　 { /　　　 ｀¨ﾍ⌒こフ　.∨ 〔､､､_）
　　　　　　　）　　　 　 　 　 ＼八　　\`^i､_ __　　　 ＼＼　　 .∨ ｀¨´
　　　　 ＜ﾍ＿/三＼＿／｜＼､.＼　/::/　 ）　　　　 \`'´　＿ ,∨､
　　　　|＼三三三三:／　　|.　　＼/^ゞク≦---‐=≦::::::「:::::::::|::::/
　　　　　　　　 　 　 　 　 　 　 　 /:::::::/:::::::/:::::::::;′:::::::::|::::::::::|:人
happy end!!
`;

function pptp() {
    const pipimi = document.getElementById('pipimi');
    pipimi.textContent = '';

    const popuko = document.getElementById('popuko');
    popuko.textContent = '';
    const result = document.getElementById('kekka');
    const button = document.getElementById('bkb');
    button.style.visibility = 'hidden';
    button.disabled = true;
    const pop = () => {
        now = new Date();
        datet = parseInt((now.getTime() - start.getTime()) / 1000);

        hour = parseInt(datet / 3600);
        min = parseInt((datet / 60) % 60);
        sec = datet % 60;

        const time = `${toZeroPadString(hour, 2)}時間${toZeroPadString(min, 2)}分${toZeroPadString(sec, 2)}秒`; // パターン2
        count++;
        if (pipimi.textContent.endsWith('ッ')) {
            pipimi.textContent += team2[getRandomInt(0, 4)];;
        } else {
            pipimi.textContent += team[getRandomInt(0, 5)];;
        }
        result.innerHTML = `ポプが出来た回数:${popu}
ポプテが出来た回数:${popute}
ポプテピが出来た回数:${poputepi}
ポプテピピが出来た回数:${poputepi2}
ポプテピピッが出来た回数:${poputepi2ltu}
経過時間:${time}
`;

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
            button.style.visibility = 'visible';
            clearInterval(pop);
            const text = pipimi.textContent;
            const count = document.getElementById('count');
            count.innerHTML = team.reduce((prev, x) => `${prev ? `${prev}\n` : ''}'${x}'の文字数:${countChar(text, x)}`);
            popuko.innerHTML = `${take}${count}文字目だよ
<a href="https://twitter.com/share?text=「ポ・プ・テ・ピ・ッ・ク」をランダムに出力して「ポプテピピック」が完成したら竹●房を破壊するやつを、${count}文字目、${time}で完成させました！(ポプテピピッまで完成した回数:${poputepi2ltu}%20https://toliner.github.io/gen_pptp/&hashtags=ポプテの破壊するJS" target="_blank">Twitterでシェアする</a>`;
        } else {
            requestAnimationFrame(pop);
        }
        // 最下部にスクロールする
        document.documentElement.scrollTop = document.body.scrollHeight;
    };
    requestAnimationFrame(pop);
}

function toZeroPadString(num, padCount) {
    return String(num).padStart(padCount, '0');
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const countChar = (str, seq) => str.split(seq).length - 1;
