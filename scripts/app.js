(function() {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
                .register('./service-worker.js')
                .then(function() {
                    console.log('Service Worker Registered');
        });
    }
})( );

(  function() {
    var app = {
        /* bearColorFilter: document.getElementById( "bearColorFilter" ), */
        productoList: [],
    }

    var loadData = function() {
        var xhttp = new XMLHttpRequest();
        var url = "http://127.0.0.1:8000/productos/";

        xhttp.onreadystatechange = function() {
            if( this.readyState == 4 && this.status == 200 ){
                console.log( this.responseText );
                var data = JSON.parse( this.responseText );
                displayProductos( data.results );
                app.productoList = data.results;
            }
        }
        xhttp.open( 'GET', url, true );
        xhttp.send();
    }

    var displayProductos = function( productos ) {
        var productosContainer = document.getElementById( "productosContainer");
        productosContainer.innerHTML = "";

        for( let producto of productos ) {
            var productoContainer = document.createElement( "div" );
            var txtproductoName = document.createElement( "h3" );
            var imgProducto = document.createElement( "img" );
            var txtProductoDescripcion = document.createElement( "p" );
            var txtProductoPrecio = document.createElement( "p" );
            var txtProductoTipo = document.createElement( "p" );
            productoContainer.className = "productoContainer";
            txtproductoName.innerHTML = producto.nombre; //Le tenia name, y la variable era nombre... ademas la api anterior traia problemas
            imgProducto.src = producto.imageUrl;
            imgProducto.alt = producto.nombre;
            txtProductoDescripcion.innerHTML = producto.descripcion;
            txtProductoPrecio.innerHTML = producto.precio;
            txtProductoTipo.innerHTML = "<b>Tipo Producto: </b>" + producto.tipo;
            // Agregar los hijos correspondientes
            productoContainer.appendChild( txtproductoName );
            productoContainer.appendChild( imgProducto );
            productoContainer.appendChild( txtProductoDescripcion );
            productoContainer.appendChild( txtProductoPrecio );
            productoContainer.appendChild( txtProductoTipo );
            // Agregar el contenedor al documento
            productosContainer.appendChild( productoContainer );
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
} ) ( );