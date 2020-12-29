//My api Key
    let apiKey = {
        key : config.API_KEY  //coinmarketcap key go here
    }

    //GET fetch requisition
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+
    apiKey.key).then((response)=>{
        if(!response.ok) throw new Error ('Erro ao executar requisição, status '+response.status)
        return response.json()
    })
    .then((api)=>{
        let text = '';
        //get 10 coins and symbols
        for(let i = 0; i<10;i++){

            //show api information
            text = text + `
            
            <div class="media">
                <img src="coin.png" class="align-self-center mr-3" alt="coin image" width="100" height="60">
                <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                <p class="blockquote-footer">${api.data[i].first_historical_data}</p>
                </div>
            </div>
            `;

            document.getElementById("coins").innerHTML = text;
        }
    })
    .catch((error)=>{
        console.error(error.message)
    });