// 1. 動態生成雲朵背景
const cloudLayer = document.getElementById('cloud-layer');
function createClouds() {
    for (let i = 0; i < 6; i++) {
        let cloud = document.createElement('div');
        cloud.className = 'cloud';
        let size = Math.random() * 60 + 40;
        cloud.style.width = size + 'px';
        cloud.style.height = (size * 0.6) + 'px';
        cloud.style.top = Math.random() * 80 + 'vh';
        cloud.style.left = Math.random() * 100 + 'vw';
        cloud.style.animationDuration = (Math.random() * 20 + 15) + 's';
        cloud.style.animationDelay = (Math.random() * 10) + 's';
        cloudLayer.appendChild(cloud);
    }
}
createClouds();

// 2. 模擬進度條邏輯
let width = 0;
const bar = document.getElementById('bar');
const statusText = document.getElementById('status');
const statuses = [
    "正在檢查客艙空間...",
    "準備起飛跑道...",
    "與塔台確認座標...",
    "即將進入付款通道...",
    "請稍候，飛行途中有些許波動..."
];

const progressTimer = setInterval(() => {
    if (width >= 95) {
        width = 95; // 停在 95% 模擬伺服器排隊
    } else {
        width += Math.random() * 2;
        bar.style.width = width + '%';
    }
    
    // 每增加一定進度隨機切換狀態文字
    if (Math.floor(width) % 20 === 0) {
        statusText.innerText = statuses[Math.floor(Math.random() * statuses.length)];
    }
}, 800);

// 3. 每隔 10 秒更換安撫文案
const messageBox = document.getElementById('message');
const messages = [
    "目前訂位人潮踴躍，機長正在努力排解塔台流量限制，請您留在網頁上。",
    "為了確保您的交易安全，我們正逐一引導旅客進入系統，感謝您的耐心等待。",
    "就快到了！長榮航空誠摯邀請您稍候片刻，開啟您的完美旅程。"
];
let msgIndex = 0;
setInterval(() => {
    msgIndex = (msgIndex + 1) % messages.length;
    messageBox.style.opacity = 0;
    setTimeout(() => {
        messageBox.innerText = messages[msgIndex];
        messageBox.style.opacity = 1;
    }, 500);
}, 10000);