import Alpine from 'alpinejs';

Alpine.data("youbike", () => ({
  target: '',
  stations: [],
  search(e) {
    e.preventDefault();

    const API = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
    fetch(API)
      .then(res => res.json())
      .then(arr => {
        return arr.filter(addr => {
          return addr.ar.includes(this.target);
        })
      }).then(filtered => {
        this.target = "";
        this.stations = filtered.map(station => {
          return {
            address: station.ar,
            name: station.sna.replace("YouBike2.0_"," ")
          }
        })
      })
  }
}))

Alpine.start();