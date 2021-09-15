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
        let cards = document.getElementsByClassName("card")[0]

        cards.innerHTML = ""
        
        let img = document.createElement("img") 

        img.innerHTML = `<div class="card">
        <img src="${data.photos}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p> 
        </div>
    </div>`
cards.appendChild(img)


          /* for(let i=0; i< cards.length;i++){
         cards[i].innerHtml=""
        

        
         img.src = data.photos[i].src.medium

         console.log(img.src)
         cards[i].appenChild(img) 
        } */
        
    })
}

loadImages("flower")
