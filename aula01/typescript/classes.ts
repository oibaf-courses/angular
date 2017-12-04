// class RealEstate {
//     private area: number;

//     constructor(area:number) {
//         this.area = area;
//     };
// };

// class RealEstate2 {
//     constructor(private area:number) {};
// };

// class House extends RealEstate2 {
//     constructor(area:number) {
//         super(area);
//     };
// };


interface RealEstate {
    area:number;
    height?:number;
};

class House implements RealEstate{
    area: number;
};

