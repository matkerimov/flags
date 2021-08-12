

// fetch("https://restcountries.eu/rest/v2/all")
//     .then(res => res.json())
//     .then(data => console.log(data))

let row = document.querySelector('.row')
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.map(el => el.name))

        data.forEach((el) => {
            row.innerHTML += `<div class="col-3">
<img src=${el.flag} alt="" class="img">  <br>
Country name: <b> ${el.name}</b> <br>
population: <b> ${el.population}</b> <br>
 area:    <b>${el.area}</b> <br>
 alphaCode : <b>${el.alpha2Code}</b> <br>
 capital city: <b> ${el.capital}</b>
</div>`
        })
    })












