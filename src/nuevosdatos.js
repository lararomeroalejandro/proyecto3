/* Insertamos más datos en la colección */

db.inventory.insertMany([
    { item: "ebook", qty: 15, size: { h: 18, w: 30, uom: "cm" }, status: "B" },
    { item: "rotulador", qty: 75, size: { h: 10, w: 4, uom: "cm" }, status: "B" },
    { item: "revista", qty: 50, size: { h: 25, w: 5, uom: "cm" }, status: "C" },
    { item: "calculadora", qty: 23, size: { h: 15, w: 3, uom: "cm" }, status: "D" },
    { item: "borrador", qty: 80, size: { h: 6, w: 4, uom: "cm" }, status: "C" },
    { item: "portaminas", qty: 35, size: { h: 15, w: 3, uom: "cm" }, status: "D" },
 ]);