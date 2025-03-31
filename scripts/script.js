const ISS_URL = 'https://api.wheretheiss.at/v1/satellites/25544';   // API link to ISS location

async function getData() {
    document.addEventListener('DOMContentLoaded', () => {
        let lat = 0;
        let long = 0;
        fetch(ISS_URL)
            .then(response => response.json())
            .then(data => {
                lat = data.latitude;
                long = data.longitude;
                const ISSContainer = document.getElementById('iss');
                ISSContainer.innerHTML = `<img src="/img/iss_png_black.png"><p>Current Location of the International Space Station:(${lat}, ${long})</p>`;
            })
            .catch(error => {
                console.error('Error fetching the ISS location:', error);
            });
// TODO: POTENTIAL CODE TO SHOW ADDRESS W LONG/LAT
        // const LOC_URL = `https://geocode.maps.co/reverse?lat=${lat}&lon=${long}&api_key=67ce05a7d3b19781579941kze831f15`;
        // fetch(LOC_URL)
        //     .then(response => response.json())
        //     .then(dat => {
        //         const ISSContainer = document.getElementById('iss');
        //         ISSContainer.innerHTML = `<p>Current Location of the International Space Station: ${dat.city}, ${dat.state}</p>`
        //     })
        //     .catch(error => {
        //         console.error('Error fetching location: ', error);
        //     });
    });
}
getData();
// set to update every 1 min
setInterval(() => {
    getData();
}, 60000);
