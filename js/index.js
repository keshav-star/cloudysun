const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "94725f4f44msh7dc95d0b632c1eap170390jsnb550e4dffd23",
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
};

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            
            fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=${lat}&lon=${lon}`, options)
                .then(response => response.json())
                .then(response => giveData(response))
                .catch(err => console.error(err));

        }
        )
    }
})

function giveData(data) {
    let cityName = data.city_name
    let temperature = data.data[0].temp;
    let time = data.data[0].timestamp_local;
    let updatedTime = time.slice(0,4)+" "+time.slice(5,7)+" "+time.slice(8,10)

    document.getElementById("city").innerText=cityName
    document.getElementById("temp").innerText=temperature

    console.log(cityName,temperature,updatedTime)
}
