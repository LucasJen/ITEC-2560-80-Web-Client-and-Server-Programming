let apodTitle = document.querySelector('#apod-title')
let apodExplanation = document.querySelector('#apod-explanation')
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')

let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=3EftbdrbWyEgAPhOAxF9CAGLP0CbP7yD7v3eRbbc&date=2020-01-23'


// Fetch can fetch many different kinds of resources
// have to convert the response injson
// could be slow for large responses

// returns a Promise - placeholder for future results
fetch(apodApiUrl)
    .then( response => { // response is the raw response date, not json yet
        return response.json()
    })
    .then( data => { // takes the returned response.json() as data
        console.log(data) //outputs data to console
        let title = data.title
        apodTitle.innerHTML = title 

        let explanation = data.explanation
        apodExplanation.innerHTML = data.explanation

        let mediaType = data.media_type
        let url = data.url

        if (mediaType === 'image'){
            apodImage.src = url
            apodImage.style.display = 'block'
        }

        else if (mediaType === 'video') {
            apodVideo.src = url
            apodVideo.style.display = 'block'
        }

        else {
            alert('Unkown media type!')
        }

    })  // the then function is called if the Promise is successful
    .catch( erros => {
        console.log(error)
        apodExplanation.innerHTML = 'Sorry, could not fetc the astronomy picture'
    }) // if something goes wrong then catch is called ( wrong url, no internet)



