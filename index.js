document.addEventListener('DOMContentLoaded', function () {
    const text = "Reflection of the year, And into the future.";
    const outputElement = document.getElementById('output');
    let index = 0;
    const delay = 40; // 文字を表示する間隔（ミリ秒）

    function displayNextCharacter() {
        if (index < text.length) {
            outputElement.textContent += text.charAt(index);
            index++;
            setTimeout(displayNextCharacter, delay);
        }
    }

    displayNextCharacter();
});
