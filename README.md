Proyecto React - Tienda Flex 

El proyecto de react Tienda Flex esta pensando para un local que venda zapatillas. 
La funcionalidad de este proyecto esta dividido (por el momento) en 3 secciones: 

1. App => En este componente se declaran todas las rutas y se acomodan como deben aparecer los componentes

2. ItemList => Esta seccion tiene distintos componentes, entre ellos: 
*ItemListContainer: encargado de obtener los datos del JSON productos, filtrar los productos por su categoria y pasarlos a ItemList
*ItemList: se encarga de mapear la props que le pasa ItemListContainer
*Item: recupera y visualiza los datos que se traen del JSON. Ademas agrega un <Link> para que cuando el usuario haga click lo lleve a los detalles especificos del producto (esta ruta se especifico en App)
  
3. ItemDetail:
*ItemDetailContainer: trae el JSON productos y lo filtra por su id. El resultado lo guarda en un State y lo pasa por props a ItemDetail
*ItemDetail: Muestra los valores de los productos seleccionados en Item

