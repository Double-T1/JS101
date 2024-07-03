// 程式碼寫這裡
$().ready(() => {
    const form = $("#searchForm");
    const keyword = $("#searchKeyword");
    form.submit((e) => {
        e.preventDefault();

        const target = keyword.val();

        const API = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
        $.ajax({
            url: API
        }).done((data) => {
                const bikeList = $(".siteList"); 
                bikeList.empty();
                
                data
                    .filter((stop) => stop.ar.includes(target))
                    .forEach((stop) => {
                        const item = `<li class="list-group-item fs-5">
                                            <i class="fas fa-bicycle"></i>
                                            ${stop.sna.replace("YouBike2.0_", "")} (${stop.sbi})<br>
                                            <small class="text-muted">${stop.ar}</small>
                                        </li>`
                        
                        bikeList.append(item);
                    })
            })
    })
})