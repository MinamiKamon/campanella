// **************w2秒後に強制的に表示させる**************w
window.addEventListener('load', loading);// ローディングイベント開始設計

function loading() {

    const loadingBg = document.querySelector('.loading_bg');
    loadingBg.classList.add('active');

    setTimeout(function () {
        if (loadingBg.classList.contains(active)) {
        } else {
            loadingBg.classList.add(active);
        }
    }, 2000);
}
