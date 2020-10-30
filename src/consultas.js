/* Todos los documentos de la colección inventory */
db.inventory.find({})

/* Todos los documentos de la colección inventory presentados con otra estructura */
db.inventory.find({}).pretty()

/* Número de documentos de la colección inventory */
db.inventory.find({}).count()

/* Documentos con qty= 75 y status= "D" */
db.inventory.find({qty: 75, status: "D"})

/* Documentos con qty= 75 y status= "D" con $and */
db.inventory.find({$and: [ {qty: 75, status: "D"}]})

/* Documentos con qty>45 y <60 */
db.inventory.find({qty: {$gt:45}, qty: {$lt: 60}}) 
/* no funciona porque el operador $and cuando esta implicito
 no funciona cuando se hacen varias consultas del mismo campo 
 (qty 2 veces, solo me muestra los menores de 60) */

/* Documentos con qty>45 y <60  presenetados con otra estructura */
db.inventory.find({
    $and: [ {qty: {$lt: 60}}, {qty: {$gt: 45}}]}).pretty()

    /* si quiero hacerlo con and implicito: */
    db.inventory.find({
        qty: {$gt: 45, $lt:60}}).pretty()

/* Muestra todos los documentos que tienen status A o B */
db.inventory.find({$or: [{status: "A"}, {status: "B"}]})

/* Muestra todos los documentos con un status distinto de D */
db.inventory.find({status: {$nin: [ "D" ]}})

/* Muestra todos los documentos con un status= C y qty >= 50 */
db.inventory.find({status: "C", qty: {$lte:50}})

/* Muestra todos los documentos con qty>50 y status distinto de C */
db.inventory.find({qty: {$gt: 50}, status: {$ne: "C"}})