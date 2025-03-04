const ISS_URL = 'https://api.wheretheiss.at/v1/satellites/25544';   // API link to ISS location

async function getData() {
    document.addEventListener('DOMContentLoaded', () => {
        fetch(ISS_URL)
            .then(response => response.json())
            .then(data => {
                const ISSContainer = document.getElementById('iss');
                ISSContainer.innerHTML = `<p>ISS Current Location: (${data.latitude}, ${data.longitude})</p>`
            })
            .catch(error => {
                console.error('Error fetching the ISS location:', error);
            });
    });
}
getData();
// set to update every 1 min
setInterval(()=> {
    getData();
}, 60000);
