document.addEventListener('DOMContentLoaded', function () {
    const text = "これは滑らかに1文字ずつ表示されるテキストです。";
    const outputElement = document.getElementById('output');
    let index = 0;
    const delay = 100; // 文字を表示する間隔（ミリ秒）

    function displayNextCharacter() {
        if (index < text.length) {
            outputElement.textContent += text.charAt(index);
            index++;
            setTimeout(displayNextCharacter, delay);
        }
    }

    displayNextCharacter();
});
