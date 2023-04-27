const bikes = [
    {
        price: 24000 + "€",
        model: "RSV4 Factory 1100",
        brand: "Aprillia",
        img: "aprillia.jpg"
    },{
        price: 30700 + "€",
        model: "CBR1000RR",
        brand: "Honda",
        img: "fireblade.jpg"
    },{
        price: 37780 + "€",
        model: "M1000RR",
        brand: "BMW",
        img: "m1000rr.webp"
    },{
        price: 35490 + "€",
        model: "Streetfighter V4",
        brand: "Ducati",
        img: "streetfighter.jpeg"
    },{
        price: 44000 + "€",
        model: "V4R",
        brand: "Ducati",
        img: "v4r.jpg"
    },{
        price: 115000 + "€",
        model: "V4 Superleggera",
        brand: "Ducati",
        img: "superleggera.jpg"
    },{
        price: 29900 + "€",
        model: "Agusta Brutale 1000RR",
        brand: "MV",
        img: "brutale.jpg"
    },{
        price: 29900 + "€",
        model: "R1M",
        brand: "Yamaha",
        img: "r1m.jpg"
    },{
        price: 55000 + "€",
        model: "H2R",
        brand: "Kawasaki",
        img: "h2r.jpeg"
    }
];

const getBikes = () => {
    return bikes;
}

export default {
    getBikes
};
