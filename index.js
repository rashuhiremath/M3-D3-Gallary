let loadImages = (query) => {
    fetch("https://api.pexels.com/v1/search?query=your-query" + query, {
        method: "GET",
        headers: {
            Authorization: "563492ad6f91700001000001f2c3decf70614e56914721be82fc4060",

        },
    })

    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
}

loadImages("flower")
