(function () {
    var app = {
        tiendaList: [],
    }

    var loadData = function () {
        var xhttp = new XMLHttpRequest();
        var url = "https://cduranf1.pythonanywhere.com/tienda/";

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                var data = JSON.parse(this.responseText);
                displayTienda(data.results);
                app.tiendaList = data.results;
            }
        }
        xhttp.open('GET', url, true);
        xhttp.send();
    }

    var displayTienda = function (tiendas) {
        var tiendasContainer = document.getElementById("tiendasContainer");
        tiendasContainer.innerHTML = "";

        for (let tienda of tiendas) {
            var tiendaContainer = document.createElement("div");
            var card = document.createElement("div");
            var cardBody = document.createElement("div");
            var txtTiendaName = document.createElement("h3");
            var txtTiendaDireccion = document.createElement("p");
            var txtTiendaCiudad = document.createElement("p");
            var txtTiendaComuna = document.createElement("p");
            var txtTiendaTelefono = document.createElement("p");
            tiendaContainer.className = "col-lg-4 col-md-6 mb-4";
            card.className = "card h-100";
            cardBody.className = "card-body";
            txtTiendaName.innerHTML = '<a href="#">' + tienda.nombre + '</a>';
            txtTiendaCiudad.innerHTML = "<b>Ciudad: </b>" + tienda.ciudad;
            txtTiendaComuna.innerHTML = "<b>Comuna: </b>" + tienda.comuna;
            txtTiendaDireccion.innerHTML = "<b>Dirección: </b>" + tienda.direccion;
            txtTiendaTelefono.innerHTML = "<b>Teléfono: </b>" + tienda.telefono;
            // Agregar los hijos correspondientes
            tiendaContainer.appendChild(card);
            card.appendChild(cardBody);
            cardBody.appendChild(txtTiendaName);
            cardBody.appendChild(txtTiendaDireccion);
            cardBody.appendChild(txtTiendaCiudad);
            cardBody.appendChild(txtTiendaComuna);
            cardBody.appendChild(txtTiendaTelefono);
            // Agregar el contenedor al documento
            tiendasContainer.appendChild(tiendaContainer);
        }
    }

    /*     app.bearColorFilter.addEventListener( "change", function( e ) {
            var filteredBears = app.bearList.filter( function( bear ) {
                if( bear.color == app.bearColorFilter.value ) {
                    return bear;
                }
            } );
            displayProductos( filteredBears );
        } ); */

    loadData();
})();