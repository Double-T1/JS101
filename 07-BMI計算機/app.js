// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
document.addEventListener("DOMContentLoaded",() => {
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
        const h = Number(document.querySelector("#bodyHeight").value)/100;
        const w = Number(document.querySelector("#bodyWeight").value);
        const BMI = w / (h**2);
        document.querySelector("#resultText").textContent = BMI.toFixed(2); //toFIxed converts the element into a string
    })
});