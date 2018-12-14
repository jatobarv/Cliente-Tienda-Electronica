var formulario = document.getElementById("register")

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('https://cduranf1.pythonanywhere.com/vendedor/', {
        method: 'POST',
        body: datos
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
})