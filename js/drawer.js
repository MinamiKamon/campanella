/* JS_drawer v1.0.0 ,2022 */
/* create by syo motoyama,2022*/

window.addEventListener('scroll', function () {
    if (window.scrollY >= 100) {
        document.getElementById('headerNav').style.display = 'block';
    } else {
        document.getElementById('headerNav').style.display = 'none';
    }
});

window.addEventListener('scroll', function () {
     const toggleButton = this.document.querySelector(".drawer");
    if (window.scrollY >= 100) {
        toggleButton.style.display = 'block';
    } else {
        toggleButton.style.display = 'none';
    }
});
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.drawer');
    var drawerMenu = document.getElementById('headerNav');
    var drawerMenumedia = document.querySelector('.headerNavmedia');

    // トグルボタンをクリックした際の処理
    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); // クリックイベントが親要素に伝播しないようにします
        drawerMenumedia.classList.toggle('open');
        toggleButton.classList.toggle('close');
    });

    // ドキュメント内のアンカーリンクを取得します
    var anchorLinks = document.querySelectorAll('a');
    for (let i = 0; i < anchorLinks.length; i++) {
        // アンカーリンクがクリックされた際の処理
        anchorLinks[i].addEventListener('click', function () {
            drawerMenumedia.classList.remove('open');
            toggleButton.classList.remove('close');
        });
    }

    // ドキュメント内をクリックした際の処理
    document.addEventListener('click', function (event) {
        var targetElement = event.target;

        // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
        if (drawerMenumedia.classList.contains('open') && !drawerMenumedia.contains(targetElement) && targetElement !== toggleButton) {
            drawerMenumedia.classList.remove('open');
            toggleButton.classList.remove('close');
        }
    });
});


