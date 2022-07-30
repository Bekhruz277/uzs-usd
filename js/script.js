const uzs = document.querySelector("#uzs"),
    usd = document.querySelector("#usd");

uzs.addEventListener("input", (e) => {
    console.log(e);
    const request = new XMLHttpRequest();

    request.open("GET", "json/current.json");
    request.send()

    request.addEventListener("load", () => {
        if(request.status === 200) {
            const data = JSON.parse(request.response)
            usd.value = (+uzs.value / data.current.usd).toFixed(2)
        }
    })
})

usd.addEventListener("input", (e) => {
    const request = new XMLHttpRequest()

    request.open("GET", "json/current.json")
    request.send()

    request.addEventListener("load", () => {
        if(request.status === 200) {
            const data = JSON.parse(request.response)
            uzs.value = (+usd.value * data.current.usd).toFixed(1)
        } else {
            uzs.value = "erro"
        }
    })
})
