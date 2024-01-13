interface IDataType {
    id: number;
    color: string;
    price: number;
    aksiya: number;
    count: number;
    img: string;
}

export interface IData {
    id: number;
    text: string;
    img: string;
    type: IDataType[]
}

export const data: IData[] = [
    {
        id: 1,
        text: "Bolalar uchun yumshoq o'yinchog'i, Lilo va Stitch sovg'a uchun, moviy va pushti ranglar",
        img: "https://e7.pngegg.com/pngimages/455/936/png-clipart-lilo-stitch-lilo-pelekai-drawing-stitch-love-miscellaneous.png",
        type: [
            {
                id: 1,
                color: "Ko'k",
                price: 120000,
                aksiya: 20,
                count: 5,
                img: "https://klike.net/uploads/posts/2022-08/1661856352_j-10.png",
            },
            {
                id: 2,
                color: "Pushti",
                price: 150000,
                aksiya: 10,
                count: 10,
                img: "https://gagaru.club/uploads/posts/2023-02/1676154160_gagaru-club-p-oboi-sticha-milie-pinterest-79.png",
            },
            {
                id: 3,
                color: "Qizil",
                price: 170000,
                aksiya: 30,
                count: 0,
                img: "https://webstockreview.net/images/stitch-clipart-lilo-and-stitch-4.jpg",
            },
        ]
    }
]