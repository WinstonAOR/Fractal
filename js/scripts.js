let listaCompra = [];
let montoTotal = 0;
let contMojito = 0;
let contMargarita = 0;
let contDaiquiri = 0;
let contNegroni = 0;
let contOld = 0;
let contWhisky = 0;
let contManha = 0;
let contAperol = 0;
let tTrago = document.getElementById("tdTrago");
let tCantidad = document.getElementById("tdCantidad");
let tMonto = document.getElementById("tdMonto");
let tX = document.getElementById("tdX");
let tMontoT = document.getElementById("tdMontoT");
function addToCart(trago, precio){
    contador = document.getElementById("carrito").innerText;
    contadorValue = parseInt(contador);
    contadorCompra = contadorValue+1;
    let tragoCa = {};
    switch(trago){
        case 'Mojito': 
            contMojito += 1;
            tragoCa={
                "trago": trago,
                "cantidad":contMojito,
                "monto": precio
            }
            if(listaCompra.length != 0){
                if(existTra(trago,listaCompra)==true){
                    existT(trago, listaCompra, contMojito, tragoCa);
                }else{
                    listaCompra.push(tragoCa);
                }
                
            }else{
                listaCompra.push(tragoCa);
            }
            break;
        case 'Margarita':
            contMargarita += 1;
            tragoCa={
                "trago": trago,
                "cantidad":contMargarita,
                "monto": precio
            }
            if(listaCompra.length != 0){
                if(existTra(trago,listaCompra)==true){
                    existT(trago, listaCompra, contMargarita, tragoCa);
                }else{
                    listaCompra.push(tragoCa);
                }
            }else{
                listaCompra.push(tragoCa);
            }
            break;
        case 'Daiquiri':
            contDaiquiri += 1;
            tragoCa={
                "trago": trago,
                "cantidad":contDaiquiri,
                "monto": precio
            }
            if(listaCompra.length != 0){
                if(existTra(trago,listaCompra)==true){
                    existT(trago, listaCompra, contDaiquiri, tragoCa);
                }else{
                    listaCompra.push(tragoCa);
                }
            }else{
                listaCompra.push(tragoCa);
            }
            break;
        case 'Negroni':
            contNegroni += 1;
            tragoCa={
                "trago": trago,
                "cantidad":contNegroni,
                "monto": precio
            }
            if(listaCompra.length != 0){
                if(existTra(trago,listaCompra)==true){
                    existT(trago, listaCompra, contNegroni, tragoCa);
                }else{
                    listaCompra.push(tragoCa);
                }
            }else{
                listaCompra.push(tragoCa);
            }
            break;
        case 'Old Fashioned':
            contOld += 1;
            tragoCa={
                "trago": trago,
                "cantidad":contOld,
                "monto": precio
            }
            if(listaCompra.length != 0){
                if(existTra(trago,listaCompra)==true){
                    existT(trago, listaCompra, contOld, tragoCa);
                }else{
                    listaCompra.push(tragoCa);
                }
            }else{
                listaCompra.push(tragoCa);
            }
            break;
        case 'Whisky Sour':
            contWhisky += 1;
            tragoCa={
                "trago": trago,
                "cantidad":contWhisky,
                "monto": precio
            }
            if(listaCompra.length != 0){
                if(existTra(trago,listaCompra)==true){
                    existT(trago, listaCompra, contWhisky, tragoCa);
                }else{
                    listaCompra.push(tragoCa);
                }
            }else{
                listaCompra.push(tragoCa);
            }
            break;
        case 'Manhattan':
            contManha += 1;
            tragoCa={
                "trago": trago,
                "cantidad":contManha,
                "monto": precio
            }
            if(listaCompra.length != 0){
                if(existTra(trago,listaCompra)==true){
                    existT(trago, listaCompra, contManha, tragoCa);
                }else{
                    listaCompra.push(tragoCa);
                }
            }else{
                listaCompra.push(tragoCa);
            }
            break;
        case 'Aperol Spritz':
            contAperol += 1;
            tragoCa={
                "trago": trago,
                "cantidad":contAperol,
                "monto": precio
            }
            if(listaCompra.length != 0){
                if(existTra(trago,listaCompra)==true){
                    existT(trago, listaCompra, contAperol, tragoCa);
                }else{
                    listaCompra.push(tragoCa);
                }
            }else{
                listaCompra.push(tragoCa);
            }
            break;
    }
    console.log(listaCompra);
    document.getElementById("carrito").innerHTML=contadorCompra;
}

function existTra(trago, lista){
    for (let i=0; i< lista.length; i++){
        if(lista[i].trago == trago){
            return true;
        }
    }
    
}

function existT(trago, lista, contador, tragoCa){
    for (let i=0; i< lista.length; i++){
        if(lista[i].trago == trago){
            lista[i].cantidad = contador;
            break;
        }
    }
    
}

const dataModal = document.getElementById("exampleModal");
dataModal.addEventListener('show.bs.modal', event =>{
    var h6T = document.createElement("h6");
    var txtH6T = document.createTextNode("Bebida");
    var h6C = document.createElement("h6");
    var txtH6C = document.createTextNode("Cantidad");
    var h6M = document.createElement("h6");
    var txtH6M = document.createTextNode("Monto");
    var pX = document.createElement("p");
    var txtX = document.createTextNode("  ");
    pX.appendChild(txtX);
    h6T.appendChild(txtH6T);
    h6C.appendChild(txtH6C);
    h6M.appendChild(txtH6M);
    tTrago.appendChild(h6T);
    tX.appendChild(pX);
    tCantidad.appendChild(h6C);
    tMonto.appendChild(h6M);
    for (let i= 0; i < listaCompra.length; i++){
        var pT = document.createElement("p");
        var txtT = document.createTextNode(listaCompra[i].trago);
        pT.appendChild(txtT);
        var pX = document.createElement("p");
        var txtX = document.createTextNode(" x ");
        pX.appendChild(txtX);
        var pC = document.createElement("p");
        var txtC = document.createTextNode(listaCompra[i].cantidad);
        pC.appendChild(txtC);
        var pM = document.createElement("p");
        var txtM = document.createTextNode("$"+listaCompra[i].monto);
        montoTotal += parseInt(listaCompra[i].monto);
        pM.appendChild(txtM);
        tTrago.appendChild(pT);
        tX.appendChild(pX);
        tCantidad.appendChild(pC);
        tMonto.appendChild(pM);
    }
    var pMT = document.createElement("p");
    var txtMT = document.createTextNode("$"+montoTotal);
    pMT.appendChild(txtMT);
    tMontoT.appendChild(pMT);
})

const dataModalH = document.getElementById("exampleModal");
dataModalH.addEventListener('hide.bs.modal', event =>{
    precios = "";
    tTrago.innerHTML = "";
    tCantidad.innerHTML="";
    tMonto.innerHTML="";
    tX.innerHTML="";
    tMontoT.innerHTML="";
})