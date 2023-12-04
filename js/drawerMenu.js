/* JS_drawer v1.0.0 ,2022 */
/* create by syo motoyama,2022*/

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

/* JS_drawer v1.0.0 ,2022 */
/* create by syo motoyama,2022*/

// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.querySelector('.drawer');
//     const drawerMenu = document.getElementById('headerNav');

//     // トグルボタンをクリックした際の処理
//     toggleButton.addEventListener('click', function (event) {
//         event.stopPropagation(); // クリックイベントが親要素に伝播しないようにします
//         drawerMenu.classList.toggle('open');
//         toggleButton.classList.toggle('close');
//     });

//     // ドキュメント内のアンカーリンクを取得します
//     const anchorLinks = document.querySelectorAll('a');
//     for (let i = 0; i < anchorLinks.length; i++) {
//         // アンカーリンクがクリックされた際の処理
//         anchorLinks[i].addEventListener('click', function () {
//             drawerMenu.classList.remove('open');
//             toggleButton.classList.remove('close');
//         });
//     }

//     // ドキュメント内をクリックした際の処理
//     document.addEventListener('click', function (event) {
//         const targetElement = event.target;

//         // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
//         if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
//             drawerMenu.classList.remove('open');
//             toggleButton.classList.remove('close');
//         }
//     });
// });