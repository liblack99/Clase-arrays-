var imagenes = [];
imagenes["vaca"] = "vaca.png";
imagenes["cerdo"] = "cerdo.png";
imagenes["pollo"] = "pollo.png";

var coleccion = [];
coleccion.push(new granja("vaca", 100, 30));
coleccion.push(new granja("pollo" , 80, 50));
coleccion.push(new granja("cerdo", 120, 40));

for( var g of coleccion)
{
  g.mostrar();
}
for(var x in coleccion[0])
{
  console.log(x)
}
