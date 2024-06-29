// 程式碼寫在這裡
//while clicking + and - button, 
//the value in between change accordingly
//yet it never becomes smaller than 0

document.addEventListener("DOMContentLoaded", () => {
    const number = document.querySelector("#counter"); 
    const plus = document.querySelector("#plus");
    plus.addEventListener("click", () => {
        number.value = Number(number.value) + 1;
    })
    const minus = document.querySelector("#minus");
    minus.addEventListener("click", () => {
        let cv = Number(number.value);
        if (cv > 0) {
            number.value = cv - 1;
        }
    })
});