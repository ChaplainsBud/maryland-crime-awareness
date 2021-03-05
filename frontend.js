
// fetch(
//     "https://services1.arcgis.com/UWYHeuuJISiGmgXx/arcgis/rest/services/Part1_Crime_2016_2015/FeatureServer/0/query?where=1%3D1&outFields=Weapon&outSR=4326&f=json")
// .then(response => response.json())   // .text() or .json()? 
// // .then(json => document.querySelector('p').innerHTML = `${json}`)

// .then(json => console.log(json['features']))


// fetch("https://opendata.maryland.gov/resource/2p5g-xrcb.json")
//     .then(response => response.text())
//     .then(json => document.querySelector('p').innerHTML = `${json}`)


// fetch('https://api.chucknorris.io/jokes/random')
//     .then(res => res.json())
//     .then(data => console.log(data.value))

// fetch('https://opendata.maryland.gov/resource/2p5g-xrcb.json?$select= murder')
// fetch('https://opendata.maryland.gov/resource/2p5g-xrcb.json?$where=murder > 340&&$select= murder')
    // fetch('https://opendata.maryland.gov/resource/2p5g-xrcb.json?$order=murder DESC')
    fetch('https://opendata.maryland.gov/resource/2p5g-xrcb.json?$select=jurisdiction,SUM(robbery)&&$group=jurisdiction&&$order=jurisdiction ASC')
    .then(res => res.json())
    .then(data => console.log(data))

    