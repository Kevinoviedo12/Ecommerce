
let productos = [
    //futbol
    {id: '1',  categoria:"futbol", name: "Pelota del mundial", price:25000,foto:'/public/pelota-mundial.JPG'},
    {id: '2',  categoria:"futbol", name: "Medias de futbol", price:1500,foto:'/public/medias.JPG'},
    {id: '3',  categoria:"futbol", name: "Botines nike", price:30000,foto:'/public/botines-nike.JPG'},
    {id: '4',  categoria:"futbol", name: "Guantes de arquero adidas", price:6300,foto:'/public/guantes.JPG'},

    //natacion
    {id: '5',  categoria:"natacion", name: "Gorro de natacion", price:1990,foto:'/public/gorro-natacion.PNG'},
    {id: '6',  categoria:"natacion", name: "Antiparras", price:3000,foto:'/public/antiparras.JPG'},
    {id: '5',  categoria:"natacion", name: "Malla de natacion", price:3400,foto:'/public/malla.JFIF'},
    {id: '6',  categoria:"natacion", name: "Ojotas negras de cuero", price:7100,foto:'/public/ojotas.JPG'},
    //tenis
    {id: '9',  categoria:"tenis", name: "Raqueta dunlop", price:50000,foto:'/public/raqueta.jpg'},
    {id: '10',  categoria:"tenis", name: "Muñequera nike", price:5400,foto:'/public/muñequera.jpg'},
    {id: '11',  categoria:"tenis", name: "Vincha nike", price:3800,foto:'/public/vincha.jpg'},
    {id: '12',  categoria:"tenis", name: "Pelotas de tenis", price:1000,foto:'/public/pelota-tenis.jpg'},

    //hockey
    {id: '13',  categoria:"hockey", name: "Palo de hockey Simbra", price:10000,foto:'/public/palo.jfif'},
    {id: '14',  categoria:"hockey", name: "Casco de arquero de hockey obo promite", price:13000,foto:'/public/casco-hockey.jfif'},
    {id: '15',  categoria:"hockey", name: "Guantes hockey adidas", price:1000,foto:'/public/guantes-hockey.jfif'},
    {id: '16',  categoria:"hockey", name: "Pelota hockey simbra", price:500,foto:'/public/pelota-hockey.jpg'},

    //boxeo
    {id: '17',  categoria:"boxeo", name: "Guante de boxeo adidas", price:15000,foto:'/public/guante-boxeo.jpg'},
    {id: '18',  categoria:"boxeo", name: "Vendas proyec", price:900,foto:'/public/vendas.jpg'},
    {id: '19',  categoria:"boxeo", name: "Protector bucal top guard", price:2900,foto:'/public/bucal.jfif'},
    {id: '20',  categoria:"boxeo", name: "Casco de boxeo Leone", price:5400,foto:'/public/casco-boxeo.jfif'},

]
 export  const gFetch = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
    },1000)
}) 
}  