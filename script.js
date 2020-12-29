//My api Key
    let apiKey = {
        key : config.API_KEY
    }

    //GET fetch requisition
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+
    apiKey.key).then((response)=>{
        if(!response.ok) throw new Error ('Erro ao executar requisição, status '+response.status)
        return response.json()
    })
    .then((api)=>{
        console.log(api)
    })
    .catch((error)=>{
        console.error(error.message)
    });