// 程式碼寫這裡
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("#searchForm");
    const keyword = document.querySelector("#searchKeyword");
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const target = keyword.value.trim();

        const API = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                const bikeList = document.querySelector(".siteList"); 
                bikeList.innerHTML = "";
                
                data
                    .filter((stop) => stop.ar.includes(target))
                    .forEach((stop) => {
                        const item = `<li class="list-group-item fs-5">
                                            <i class="fas fa-bicycle"></i>
                                            ${stop.sna.replace("YouBike2.0_", "")} (${stop.sbi})<br>
                                            <small class="text-muted">${stop.ar}</small>
                                        </li>`
                        
                        bikeList.insertAdjacentHTML("beforeend",item);
                    })
            })

    })
})