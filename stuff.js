col.className = "col-md-4"

col.innerHTML = `<div class="card mb-4 shadow-sm">
<svg class="bd-placeholder-img card-img-top" width="100%" height="225"
    xmlns="${image.photos}" preserveAspectRatio="xMidYMid slice"
    focusable="false" role="img" aria-label="Placeholder: Thumbnail">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#55595c" />
    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
        Thumbnail
    </text>
</svg>
<div class="card-body">
    <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
    </p>
    <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
                View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
                Edit
            </button>
        </div>
        <small class="text-muted">9 mins</small>
    </div>
</div>
</div>
</div>`
album.appendChild(col)
/*  data.array.forEach(images => `<div class="card mb-4 shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
            focusable="false" role="img" aria-label="Placeholder: Thumbnail">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
            </text>
        </svg>
        <div class="card-body">
            <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                        Edit
                    </button>
                </div>
                <small class="text-muted">9 mins</small>
            </div>
        </div>
    </div>
</div>`
             
            
        );*/







        console.log(body)

                    const row = document.querySelector(".row")

                    const col = document.createElement("div")
                    col.className = "col-3"

                    col.innerHTML = `
                        
                        <div class="card">
                            <img src="${body.results[0].picture.medium}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${body.results[0].name.first}</h5>
                                <p class="card-text">${body.results[0].location.city}</p>
                            </div>
                        </div>
                        `

                    row.appendChild(col)
