const datos = [

    {
        dni: "12345678",
        nombre: "Garcia",

        ej1: "2",
        ej2: "1",
        ej3: "1.5",

        devolucion: "Buen manejo básico de arreglos y ciclos for.",

        observaciones: "Debe reforzar objetos y operaciones matemáticas.",

        correccionCompleta: `

    <h3>Ejercicio 1</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
      <li>Creó correctamente el arreglo notas.</li>
      <li>Utilizó correctamente un for.</li>
    </ul>

    <p><b>❌ Errores</b></p>

    <pre>
let promedio = sumaNotas
    </pre>

    <p>
    No calculó correctamente el promedio.
    </p>

    <h3>Ejercicio 2</h3>

    <p>
    Recorrió el arreglo pero no realizó la búsqueda del modelo Fiesta.
    </p>

    <h3>Ejercicio 3</h3>

    <pre>
numeros[i] = numeros[i] + numeros[i]
    </pre>

    <p>
    Duplicó los valores en vez de elevarlos al cuadrado.
    </p>

    `
    }, {
        dni: "49483422",
        nombre: "Garello Luisana Renata",

        ej1: 3,
        ej2: 2,
        ej3: 1,

        devolucion: "Buen manejo general de arreglos y ciclos for. Logró resolver parcialmente las tres actividades.",

        observaciones: "Debe reforzar operadores de comparación, template strings y uso correcto de variables dentro del for.",

        correccionCompleta: `

    <h3>Ejercicio 1 — 3/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>notas</code>.</li>
        <li>Utilizó correctamente un ciclo <code>for</code>.</li>
        <li>Sumó correctamente las notas.</li>
        <li>Mostró el resultado en HTML.</li>
    </ul>

    <pre>
for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i]
}
    </pre>

    <p><b>❌ Error menor</b></p>

    <p>
    Calculó el promedio dividiendo por <code>13</code> directamente:
    </p>

    <pre>
sumaNotas = sumaNotas/13
    </pre>

    <p>
    Era preferible utilizar:
    </p>

    <pre>
sumaNotas = sumaNotas / notas.length
    </pre>

    <p>
    para que funcione aunque cambie la cantidad de notas.
    </p>

    <hr>

    <h3>Ejercicio 2 — 2/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Recorrió el arreglo con un <code>for</code>.</li>
        <li>Intentó usar una condición <code>if</code>.</li>
    </ul>

    <p><b>❌ Errores</b></p>

    <p>
    En la condición utilizó:
    </p>

    <pre>
if (autos[i].modelo = "Fiesta")
    </pre>

    <p>
    Esto usa asignación (<code>=</code>) en vez de comparación (<code>==</code> o <code>===</code>).
    </p>

    <p>
    Además, el texto tiene errores en el uso de template strings:
    </p>

    <pre>
"\${(autos.marca)}"
    </pre>

    <p>
    Debería acceder al objeto correcto:
    </p>

    <pre>
\${autos[i].marca}
    </pre>

    <p>
    También faltó mostrar correctamente:
    </p>

    <ul>
        <li>la posición real,</li>
        <li>la marca correcta,</li>
        <li>el año correcto.</li>
    </ul>

    <hr>

    <h3>Ejercicio 3 — 1/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo.</li>
        <li>Utilizó un ciclo <code>for</code>.</li>
        <li>Intentó mostrar resultados en consola.</li>
    </ul>

    <p><b>❌ Errores</b></p>

    <pre>
numeros[i] * numeros[i]
console.log(numeros[i])
    </pre>

    <p>
    La operación está incompleta porque nunca guarda el resultado.
    </p>

    <p>
    Además, dentro del for declaró:
    </p>

    <pre>
for (let index = 0; index < numeros.length; index++)
    </pre>

    <p>
    pero luego utilizó <code>i</code>, variable que no existe en ese bloque.
    </p>

    <p>
    La solución correcta podía ser:
    </p>

    <pre>
console.log(numeros[index] * numeros[index])
    </pre>

    <hr>

`
    },{
    dni:"49483390",
    nombre:"Largayoli Santino",

    ej1:2,
    ej2:0.5,
    ej3:3,

    devolucion:"Muy buen manejo de ciclos for y operaciones matemáticas. Presenta dificultades en manipulación del DOM y recorrido de arreglos de objetos.",

    observaciones:"Debe reforzar querySelector, trabajo con HTML y lógica de recorrido de objetos.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 2/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>notas</code>.</li>
        <li>Utilizó correctamente un ciclo <code>for</code>.</li>
        <li>Calculó correctamente la suma de notas.</li>
        <li>Calculó correctamente el promedio utilizando <code>notas.length</code>.</li>
    </ul>

    <pre>
let promedio = sumaNotas / notas.length;
    </pre>

    <p><b>❌ Errores</b></p>

    <pre>
let elemento = queryselector("p")
    </pre>

    <p>
    La función correcta es:
    </p>

    <pre>
document.querySelector("p")
    </pre>

    <p>
    Además, el HTML no contiene ningún párrafo <code>&lt;p&gt;</code>, por lo tanto no podía mostrar el promedio correctamente.
    </p>

    <p>
    También faltó mostrar el valor del promedio en HTML.
    </p>

    <hr>

    <h3>Ejercicio 2 — 0.5/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Intentó realizar un recorrido con <code>for</code>.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
for (let autoI = 0; index < autoI.length; index++)
    </pre>

    <p>
    El ciclo tiene varios errores:
    </p>

    <ul>
        <li>Usa <code>index</code> sin declararlo.</li>
        <li><code>autoI</code> es un número, no un arreglo.</li>
        <li>No se realizó la búsqueda del modelo Fiesta.</li>
        <li>No se mostró información en HTML.</li>
    </ul>

    <p>
    Tampoco se mostraron:
    </p>

    <ul>
        <li>posición,</li>
        <li>marca,</li>
        <li>año.</li>
    </ul>

    <hr>

    <h3>Ejercicio 3 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Creó correctamente el arreglo.</li>
        <li>Utilizó correctamente el ciclo <code>for</code>.</li>
        <li>Elevó correctamente cada número al cuadrado.</li>
        <li>Mostró correctamente los resultados en consola.</li>
    </ul>

    <pre>
let cuadrado = numeros[i] ** 2;
console.log(cuadrado);
    </pre>

    <p>
    Muy buen uso del operador de potenciación.
    </p>

    <hr>


   
`
},{
    dni:"49483132",
    nombre:"López Festa Matilda",

    ej1:3,
    ej2:4,
    ej3:3,

    devolucion:"Muy buena resolución general del examen. Demostró buen manejo de arreglos, ciclos for y objetos.",

    observaciones:"Debe reforzar el cálculo dinámico del promedio utilizando notas.length en vez de un valor fijo.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 3/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>notas</code>.</li>
        <li>Utilizó correctamente un ciclo <code>for</code>.</li>
        <li>Sumó correctamente las notas.</li>
        <li>Mostró correctamente el promedio en HTML.</li>
    </ul>

    <pre>
for (let index = 0; index < notas.length; index++) {
   sumaNotas += notas[index]
}
    </pre>

    <p><b>❌ Error menor</b></p>

    <pre>
sumaNotas = sumaNotas/13
    </pre>

    <p>
    El promedio fue calculado correctamente, pero era preferible usar:
    </p>

    <pre>
sumaNotas = sumaNotas / notas.length
    </pre>

    <p>
    para que el programa funcione aunque cambie la cantidad de notas.
    </p>

    <hr>

    <h3>Ejercicio 2 — 4/4</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Recorrió correctamente el arreglo de objetos.</li>
        <li>Utilizó correctamente el <code>if</code>.</li>
        <li>Buscó correctamente el modelo Fiesta.</li>
        <li>Mostró correctamente posición, marca y año.</li>
        <li>Mostró correctamente el resultado en HTML.</li>
    </ul>

    <pre>
if (autos[index].modelo == 'Fiesta')
    </pre>

    <pre>
parrafoAct2.textContent = \`El auto se encuentra en el listado en la posición \${index}, de marca \${autos[index].marca} fabricado en el año \${autos[index].año}.\`
    </pre>

    <p>
    Muy buen manejo de objetos y template strings.
    </p>

    <hr>

    <h3>Ejercicio 3 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Recorrió correctamente el arreglo.</li>
        <li>Elevó correctamente cada número al cuadrado.</li>
        <li>Mostró correctamente los resultados en consola.</li>
    </ul>

    <pre>
numeros[index] = numeros[index] * numeros[index]
console.log(numeros[index])
    </pre>

    <p>
    Resolución correcta y prolija.
    </p>

    <hr>


`
}, {
    dni:"49873776",
    nombre:"Lopez Iparraguirre Santino",

    ej1:0.5,
    ej2:1,
    ej3:0.5,

    devolucion:"Intentó resolver las tres actividades, pero presenta dificultades importantes de sintaxis y lógica en JavaScript.",

    observaciones:"Debe reforzar creación de arreglos, uso correcto de for, sintaxis básica y manipulación del DOM.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 0.5/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Intentó crear un arreglo de notas.</li>
        <li>Intentó utilizar un ciclo <code>for</code>.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
let notas[8,7,5,10,5,6,6,6,7,7]
    </pre>

    <p>
    La creación del arreglo es incorrecta. Debía ser:
    </p>

    <pre>
let notas = [8,7,5,10,5,6,6,6,7,7]
    </pre>

    <p>
    El ciclo for también contiene errores:
    </p>

    <pre>
for (let notas = 0; notas < array.length; notas++)
    </pre>

    <ul>
        <li><code>array</code> no existe.</li>
        <li>Se reutilizó el nombre <code>notas</code> como contador.</li>
    </ul>

    <p>
    Tampoco se realizó correctamente:
    </p>

    <ul>
        <li>la suma de notas,</li>
        <li>el cálculo del promedio,</li>
        <li>la visualización en HTML.</li>
    </ul>

    <hr>

    <h3>Ejercicio 2 — 1/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Intentó recorrer el arreglo.</li>
        <li>Intentó mostrar un mensaje en HTML.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
for (let autos = 0; autos <1; array.length; autos++)
    </pre>

    <p>
    El for contiene errores de sintaxis y lógica:
    </p>

    <ul>
        <li><code>array</code> no existe.</li>
        <li>La condición del for es incorrecta.</li>
        <li>No se recorrió realmente el arreglo de autos.</li>
    </ul>

    <p>
    Además:
    </p>

    <pre>
elementop.textcontent(...)
    </pre>

    <p>
    Debía ser:
    </p>

    <pre>
elementop.textContent = ...
    </pre>

    <p>
    Tampoco se realizó la búsqueda real del modelo Fiesta utilizando el arreglo.
    </p>

    <hr>

    <h3>Ejercicio 3 — 0.5/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó el arreglo de números.</li>
        <li>Intentó realizar una función.</li>
    </ul>

    <p><b>❌ Errores</b></p>

    <pre>
function cuadrado(5)
    </pre>

    <p>
    La función tiene errores de sintaxis. No se puede colocar un número como parámetro.
    </p>

    <p>
    Además:
    </p>

    <ul>
        <li>no recorrió el arreglo con for,</li>
        <li>no elevó los números al cuadrado,</li>
        <li>no mostró resultados correctamente.</li>
    </ul>

    <hr>
`
} ,{
    dni:"49646775",
    nombre:"Lotto Renata",

    ej1:1,
    ej2:2,
    ej3:0.5,

    devolucion:"La estudiante demuestra una comprensión parcial de arreglos y objetos, pero presenta dificultades importantes en sintaxis y lógica de programación.",

    observaciones:"Debe reforzar creación de arreglos, acumuladores, uso de variables y resolución completa de consignas.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 1/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Intentó crear el arreglo de notas.</li>
        <li>Intentó utilizar un ciclo <code>for</code>.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
let notas = [
    matematica= 10,
    lengua= 6,
    Quimica= 5
]
    </pre>

    <p>
    El arreglo fue creado incorrectamente. Dentro de un arreglo deben colocarse solamente los valores:
    </p>

    <pre>
let notas = [10,6,5]
    </pre>

    <p>
    Además, el ciclo contiene errores:
    </p>

    <pre>
console.log = SumaNotas[i];
    </pre>

    <ul>
        <li><code>SumaNotas</code> no existe.</li>
        <li>No se realizó la suma de notas.</li>
        <li>No se calculó el promedio.</li>
        <li>No se mostró el resultado en HTML.</li>
    </ul>

    <hr>

    <h3>Ejercicio 2 — 2/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Mostró correctamente el mensaje esperado en HTML.</li>
        <li>La información mostrada es correcta.</li>
    </ul>

    <pre>
El auto se encuentra en el listado en la posición 1, de marca Ford fabricado en el año 2018.
    </pre>

    <p><b>❌ Errores</b></p>

    <p>
    Aunque el resultado mostrado es correcto, no realizó:
    </p>

    <ul>
        <li>el recorrido con <code>for</code>,</li>
        <li>la búsqueda del modelo Fiesta,</li>
        <li>la obtención dinámica de datos desde el arreglo.</li>
    </ul>

    <p>
    El texto fue escrito directamente en el HTML.
    </p>

    <hr>

    <h3>Ejercicio 3 — 0.5/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>numeros</code>.</li>
    </ul>

    <p><b>❌ Errores</b></p>

    <pre>
console.log(10,)
    </pre>

    <p>
    No recorrió el arreglo con un <code>for</code>.
    </p>

    <p>
    Tampoco elevó los números al cuadrado.
    </p>

    <hr>
`
}, {
    dni:"49483497",
    nombre:"Martinez Mangano Jesús Ignacio",

    ej1:3,
    ej2:2,
    ej3:3,

    devolucion:"Muy buen manejo de arreglos, ciclos for y operaciones matemáticas. Presenta dificultades en el trabajo con objetos y condiciones.",

    observaciones:"Debe reforzar búsqueda de elementos dentro de arreglos de objetos y visualización de resultados dinámicos.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>notas</code>.</li>
        <li>Utilizó correctamente un ciclo <code>for</code>.</li>
        <li>Sumó correctamente las notas.</li>
        <li>Calculó correctamente el promedio utilizando <code>notas.length</code>.</li>
        <li>Mostró correctamente el resultado en HTML.</li>
    </ul>

    <pre>
for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i];
}
    </pre>

    <pre>
let promedio = sumaNotas / notas.length
    </pre>

    <p>
    Resolución correcta y prolija.
    </p>

    <hr>

    <h3>Ejercicio 2 — 2/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Recorrió correctamente el arreglo utilizando <code>for</code>.</li>
        <li>Intentó utilizar una condición <code>if</code>.</li>
    </ul>

    <p><b>❌ Error conceptual</b></p>

    <pre>
if (autos[i].marca == "Fiesta")
    </pre>

    <p>
    Debía comparar el modelo:
    </p>

    <pre>
if (autos[i].modelo == "Fiesta")
    </pre>

    <p>
    Además:
    </p>

    <ul>
        <li>no mostró resultados en HTML,</li>
        <li>no mostró posición,</li>
        <li>no mostró marca ni año.</li>
    </ul>

    <hr>

    <h3>Ejercicio 3 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Recorrió correctamente el arreglo.</li>
        <li>Elevó correctamente cada número al cuadrado.</li>
        <li>Mostró correctamente los resultados en consola.</li>
    </ul>

    <pre>
console.log (numeros[i]*numeros[i])
    </pre>

    <p>
    Resolución correcta y eficiente.
    </p>

`
} ,{
    dni:"49542983",
    nombre:"Rosatti Camilo",

    ej1:1,
    ej2:1,
    ej3:0.5,

    devolucion:"Intentó resolver las actividades utilizando arreglos y ciclos, pero presenta dificultades importantes de sintaxis y lógica en JavaScript.",

    observaciones:"Debe reforzar acumuladores, sintaxis de for, querySelector y manipulación del DOM.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 1/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>notas</code>.</li>
        <li>Intentó utilizar un ciclo <code>for</code>.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
sumanotas += notas[i];
    </pre>

    <p>
    El contador del for se llama <code>index</code>, no <code>i</code>.
    </p>

    <p>
    Además:
    </p>

    <pre>
let sumanotas = [0]
    </pre>

    <p>
    La variable debía ser numérica:
    </p>

    <pre>
let sumanotas = 0
    </pre>

    <p>
    Tampoco se guardó correctamente el promedio:
    </p>

    <pre>
sumanotas/13
    </pre>

    <p>
    Esa operación no modifica ninguna variable.
    </p>

    <p>
    También hubo errores en:
    </p>

    <pre>
document.querySelector("notas")
    </pre>

    <p>
    Debía ser:
    </p>

    <pre>
document.querySelector("#notas")
    </pre>

    <p>
    Y:
    </p>

    <pre>
parrafo.textContent(sumanotas)
    </pre>

    <p>
    Debía utilizar:
    </p>

    <pre>
parrafo.textContent = sumanotas
    </pre>

    <hr>

    <h3>Ejercicio 2 — 1/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Intentó usar un <code>for</code>.</li>
        <li>Intentó utilizar una condición <code>if</code>.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
for (let i = 0 < autos.length, i++)
    </pre>

    <p>
    El ciclo for tiene errores de sintaxis y no funciona correctamente.
    </p>

    <p>
    Además:
    </p>

    <pre>
if (autos[i].modelo = "Fiesta")
    </pre>

    <p>
    Utilizó asignación (<code>=</code>) en vez de comparación.
    </p>

    <p>
    También:
    </p>

    <pre>
document.querySelector("autos")
    </pre>

    <p>
    Debía seleccionar correctamente el elemento HTML utilizando:
    </p>

    <pre>
document.querySelector("#parrafo2")
    </pre>

    <p>
    Aunque el mensaje mostrado es correcto, no se obtuvo dinámicamente desde el arreglo.
    </p>

    <hr>

    <h3>Ejercicio 3 — 0.5/3</h3>

    <p><b>❌ No resuelto</b></p>

    <p>
    Solamente se creó el arreglo:
    </p>

    <pre>
let numeros = [10,6,77,2,5]
    </pre>

    <p>
    Faltó:
    </p>

    <ul>
        <li>recorrer el arreglo,</li>
        <li>elevar los números al cuadrado,</li>
        <li>mostrar resultados.</li>
    </ul>

    <hr>
`
}, {
    dni:"49646782",
    nombre:"Sosa Jose Ignacio",

    ej1:3,
    ej2:1,
    ej3:3,

    devolucion:"Buen manejo general de arreglos y ciclos for. Resolvió correctamente los ejercicios 1 y 3, pero presentó dificultades en objetos y condiciones.",

    observaciones:"Debe reforzar comparación de strings, uso de textContent y recorrido de arreglos de objetos.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 3/3</h3>

    <p><b>✔ Muy buena resolución</b></p>

    <ul>
        <li>Creó correctamente el arreglo de notas.</li>
        <li>Utilizó correctamente un ciclo <code>for</code>.</li>
        <li>Calculó correctamente la suma.</li>
        <li>Calculó correctamente el promedio.</li>
        <li>Mostró correctamente el resultado en HTML.</li>
    </ul>

    <pre>
for (let index = 0; index < materias.length; index++) {
    sumnotas += materias[index];
}
    </pre>

    <pre>
let promedio = sumnotas / 13
    </pre>

    <p><b>❌ Error menor</b></p>

    <p>
    Era preferible utilizar:
    </p>

    <pre>
let promedio = sumnotas / materias.length
    </pre>

    <p>
    para que el cálculo funcione aunque cambie la cantidad de notas.
    </p>

    <hr>

    <h3>Ejercicio 2 — 1/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Intentó recorrer el arreglo.</li>
        <li>Intentó utilizar un <code>if</code>.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
if (autos[index].marca = fiesta)
    </pre>

    <p>
    Hay varios errores:
    </p>

    <ul>
        <li>Se comparó <code>marca</code> en vez de <code>modelo</code>.</li>
        <li>Se utilizó <code>=</code> en vez de <code>==</code> o <code>===</code>.</li>
        <li><code>fiesta</code> debería ser un string: <code>"Fiesta"</code>.</li>
    </ul>

    <p>
    Además:
    </p>

    <pre>
resultado.textcontent
    </pre>

    <p>
    Debía ser:
    </p>

    <pre>
resultado.textContent
    </pre>

    <p>
    El for tampoco recorrió correctamente todo el arreglo:
    </p>

    <pre>
for (let index = 0; index < 2; index++)
    </pre>

    <p>
    Debía utilizar:
    </p>

    <pre>
index < autos.length
    </pre>

    <hr>

    <h3>Ejercicio 3 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Recorrió correctamente el arreglo.</li>
        <li>Elevó correctamente cada número al cuadrado.</li>
        <li>Mostró correctamente los resultados en consola.</li>
    </ul>

    <pre>
console.log(numeros[index]*numeros[index]);
    </pre>

    <p>
    Resolución correcta y prolija.
    </p>

    <hr>


`
} , {
    dni:"50373012",
    nombre:"Urban Forteza Benicio",

    ej1:3,
    ej2:4,
    ej3:3,

    devolucion:"Excelente resolución del examen. Demostró muy buen manejo de arreglos, objetos, ciclos y manipulación del DOM.",

    observaciones:"Muy buen uso de métodos modernos como forEach, template strings y operadores matemáticos.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Creó correctamente el arreglo de notas.</li>
        <li>Utilizó correctamente una estructura repetitiva.</li>
        <li>Calculó correctamente la suma de notas.</li>
        <li>Calculó correctamente el promedio utilizando <code>notas.length</code>.</li>
        <li>Mostró correctamente el resultado en HTML.</li>
    </ul>

    <pre>
notas.forEach(nota =>{
    sumaTotalNotas += nota.nota
})
    </pre>

    <pre>
let promedioNotas = sumaTotalNotas / notas.length
    </pre>

    <p>
    Muy buen uso de <code>forEach</code> y objetos dentro del arreglo.
    </p>

    <hr>

    <h3>Ejercicio 2 — 4/4</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Recorrió correctamente el arreglo de objetos.</li>
        <li>Buscó correctamente el modelo Fiesta.</li>
        <li>Mostró correctamente posición, marca y año.</li>
        <li>Mostró correctamente el resultado en HTML.</li>
    </ul>

    <pre>
if(auto.modelo.toLowerCase() === "fiesta")
    </pre>

    <pre>
divAutos.innerHTML = \`<p>El auto se encuentra en el listado en la posición \${index}, de marca \${auto.marca} fabricado en el año \${auto.año}.</p>\`
    </pre>

    <p>
    Muy buen uso de:
    </p>

    <ul>
        <li><code>forEach</code>,</li>
        <li>template strings,</li>
        <li>comparación estricta (<code>===</code>),</li>
        <li>método <code>toLowerCase()</code>.</li>
    </ul>

    <hr>

    <h3>Ejercicio 3 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Recorrió correctamente el arreglo.</li>
        <li>Elevó correctamente cada número al cuadrado.</li>
        <li>Mostró correctamente los resultados en consola.</li>
    </ul>

    <pre>
console.log(numeros[i] ** 2)
    </pre>

    <p>
    Muy buen uso del operador de potenciación.
    </p>

    <hr>


`
} , {
    dni:"50348167",
    nombre:"Verdasco Romero Facundo",

    ej1:1.5,
    ej2:2,
    ej3:1,

    devolucion:"Intentó resolver las tres actividades utilizando arreglos y ciclos for, pero presenta dificultades importantes en acumuladores, manipulación del DOM y trabajo con objetos.",

    observaciones:"Debe reforzar acumuladores, uso correcto de variables, template strings y sintaxis de JavaScript.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 1/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>notas</code>.</li>
        <li>Utilizó un ciclo <code>for</code>.</li>
        <li>Intentó calcular un promedio.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
let sumaNotas = notas[i] + notas[i]
    </pre>

    <p>
    Esto no suma todas las notas. Solo duplica cada valor individual.
    </p>

    <p>
    La variable <code>sumaNotas</code> debería declararse fuera del for y acumular:
    </p>

    <pre>
sumaNotas += notas[i]
    </pre>

    <p>
    Además:
    </p>

    <pre>
parrafo.innerhtml
    </pre>

    <p>
    Debía ser:
    </p>

    <pre>
parrafo.innerHTML
    </pre>

    <p>
    También:
    </p>

    <pre>
sumaNotas/10
    </pre>

    <p>
    utiliza una variable que ya no existe fuera del for.
    </p>

    <hr>

    <h3>Ejercicio 2 — 2/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Intentó utilizar un ciclo <code>for</code>.</li>
        <li>Intentó utilizar una condición <code>if</code>.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
if (autos.marca == "Fiesta")
    </pre>

    <p>
    Debía acceder a un elemento del arreglo:
    </p>

    <pre>
autos[l].modelo == "Fiesta"
    </pre>

    <p>
    Además:
    </p>

    <pre>
document.querySelector("#p")
    </pre>

    <p>
    No existe ningún elemento con id <code>p</code>.
    </p>

    <p>
    También:
    </p>

    <pre>
"posición[l]"
    </pre>

    <p>
    no muestra el valor real del índice.
    </p>

    <p>
    Y los template strings fueron escritos como texto normal:
    </p>

    <pre>
\${autos[l].marca}
    </pre>

    <p>
    sin utilizar backticks.
    </p>

    <hr>

    <h3>Ejercicio 3 — 1/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo.</li>
        <li>Utilizó un ciclo <code>for</code>.</li>
    </ul>

    <p><b>❌ Error conceptual</b></p>

    <pre>
console.log += (index*index)
    </pre>

    <p>
    Esto no eleva los números del arreglo al cuadrado.
    </p>

    <p>
    Debía utilizar:
    </p>

    <pre>
console.log(numeros[index] * numeros[index])
    </pre>

    <p>
    o:
    </p>

    <pre>
console.log(numeros[index] ** 2)
    </pre>


`
} , {
    dni:"49646515",
    nombre:"Wilberger Hannah",

    ej1:1.5,
    ej2:1,
    ej3:0,

    devolucion:"La estudiante demuestra una comprensión inicial de arreglos y ciclos, pero presenta dificultades importantes en acumuladores, manipulación del DOM y resolución completa de consignas.",

    observaciones:"Debe reforzar variables acumuladoras, promedio, uso de textContent y estructuras repetitivas.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 1.5/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>notas</code>.</li>
        <li>Intentó utilizar un ciclo <code>for</code>.</li>
        <li>Intentó calcular un promedio.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
let sumaNotas = [];
    </pre>

    <p>
    La variable acumuladora debía ser numérica:
    </p>

    <pre>
let sumaNotas = 0;
    </pre>

    <p>
    Además:
    </p>

    <pre>
sumaNotas += notas[i] + " "
    </pre>

    <p>
    Esto convierte los valores en texto en vez de realizar una suma numérica.
    </p>

    <p>
    El promedio también fue calculado incorrectamente:
    </p>

    <pre>
let promedio = sumaNotas/notas
    </pre>

    <p>
    Debía utilizar:
    </p>

    <pre>
let promedio = sumaNotas / notas.length
    </pre>

    <p>
    También:
    </p>

    <pre>
parrafo.textContent + promedio
    </pre>

    <p>
    No modifica el contenido HTML. Debía ser:
    </p>

    <pre>
parrafo.textContent = promedio
    </pre>

    <p>
    Además, el HTML no contiene ningún elemento con id <code>parrafo</code>.
    </p>

    <hr>

    <h3>Ejercicio 2 — 1/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Intentó realizar un recorrido con <code>for</code>.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <p>
    El ciclo for quedó incompleto:
    </p>

    <pre>
for(let i = 0; i < autos.length; i++)
    </pre>

    <p>
    No se realizó:
    </p>

    <ul>
        <li>la búsqueda del modelo Fiesta,</li>
        <li>la condición <code>if</code>,</li>
        <li>la obtención dinámica de datos desde el arreglo.</li>
    </ul>

    <p>
    Además:
    </p>

    <pre>
parrafo2.textContent = prompt(...)
    </pre>

    <p>
    El texto fue ingresado manualmente mediante un prompt y no obtenido desde el arreglo de objetos.
    </p>

    <p>
    Tampoco existe un elemento con id <code>parrafo2</code> en el HTML.
    </p>

    <hr>

    <h3>Ejercicio 3 — 0/3</h3>

    <p><b>❌ No resuelto</b></p>

    <p>
    No se realizó el ejercicio 3.
    </p>

    <hr>

    <h3>Nota final: 2 / 10</h3>

    <p>
    La estudiante demuestra una comprensión inicial de arreglos y estructuras repetitivas, pero presenta dificultades importantes en acumuladores, operaciones matemáticas y manipulación del DOM. Se recomienda reforzar ejercicios básicos de JavaScript y resolución paso a paso de problemas.
    </p>

`
} , {
    dni:"49873549",
    nombre:"Armitano Benjamin",

    ej1:2.5,
    ej2:2.5,
    ej3:3,

    devolucion:"Muy buen manejo general de arreglos, ciclos y lógica de programación. Resolvió correctamente la mayoría de las actividades.",

    observaciones:"Debe reforzar manipulación del DOM y selección correcta de elementos HTML.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 2.5/3</h3>

    <p><b>✔ Muy buena resolución</b></p>

    <ul>
        <li>Creó correctamente el arreglo de notas.</li>
        <li>Utilizó correctamente un ciclo <code>for</code>.</li>
        <li>Calculó correctamente la suma de notas.</li>
        <li>Calculó correctamente el promedio utilizando <code>length</code>.</li>
    </ul>

    <pre>
for (let i = 0; i < sumanotas.length; i++) {
    sumaNotas += sumanotas[i];
}
    </pre>

    <pre>
let promedio = sumaNotas / sumanotas.length;
    </pre>

    <p><b>❌ Error menor</b></p>

    <p>
    No logró mostrar el resultado en HTML porque el selector estaba incorrecto:
    </p>

    <pre>
document.querySelector("resultado")
    </pre>

    <p>
    Correctamente detectó el error en el comentario, pero faltó corregirlo definitivamente:
    </p>

    <pre>
document.querySelector("#promedio")
    </pre>

    <hr>

    <h3>Ejercicio 2 — 2.5/4</h3>

    <p><b>✔ Muy buena resolución</b></p>

    <ul>
        <li>Recorrió correctamente el arreglo de objetos.</li>
        <li>Utilizó correctamente el <code>if</code>.</li>
        <li>Buscó correctamente el modelo fiesta.</li>
        <li>Mostró correctamente posición, marca y año.</li>
    </ul>

    <pre>
if (autos[i].modelo === "fiesta")
    </pre>

    <pre>
resultado.innerHTML = "el auto se encuentra en la posicion"
            + i + "de marca  " + autos[i].marca
            + " fabricado en el año " + autos[i].año
    </pre>

    <p><b>❌ Error menor</b></p>

    <p>
    El problema estuvo nuevamente en el selector:
    </p>

    <pre>
let resultado = document.querySelector("#resultado");
    </pre>

    <p>
    En el HTML no existe un elemento con id <code>resultado</code>.
    </p>

    <p>
    El elemento correcto era:
    </p>

    <pre>
<p id="auto"></p>
    </pre>

    <p>
    Por lo tanto debía utilizar:
    </p>

    <pre>
document.querySelector("#auto")
    </pre>

    <hr>

    <h3>Ejercicio 3 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Recorrió correctamente el arreglo.</li>
        <li>Elevó correctamente los números al cuadrado.</li>
        <li>Mostró correctamente los resultados en consola.</li>
    </ul>

    <pre>
let numerosalcuadrado = numeros[i] * numeros[i];
console.log(numerosalcuadrado);
    </pre>

    <p>
    Resolución correcta y prolija.
    </p>

    <hr>

    <h3>Nota final: 8 / 10</h3>

    <p>
    Muy buen examen. El estudiante demuestra una buena comprensión de arreglos, objetos y ciclos for. Además, identificó correctamente errores en los selectores HTML. Se recomienda seguir reforzando manipulación del DOM y conexión entre HTML y JavaScript.
    </p>

`
} , {
    dni:"49873703",
    nombre:"Rossi Valentino",

    ej1:3,
    ej2:3,
    ej3:3,

    devolucion:"Muy buen manejo general de arreglos, ciclos y manipulación del DOM. Resolvió correctamente los ejercicios 1 y 3.",

    observaciones:"Debe reforzar el recorrido de arreglos de objetos y el uso correcto de propiedades dentro de estructuras repetitivas.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Creó correctamente el arreglo de notas.</li>
        <li>Utilizó correctamente un ciclo <code>for</code>.</li>
        <li>Calculó correctamente la suma de notas.</li>
        <li>Calculó correctamente el promedio utilizando <code>Notas.length</code>.</li>
        <li>Mostró correctamente el resultado en HTML.</li>
    </ul>

    <pre>
for (let index = 0; index < Notas.length; index++) {
    sumaNotas = Notas[index] + sumaNotas
}
    </pre>

    <pre>
Promedionotas.innerHTML = "Tu promedio de notas es:" + " " + sumaNotas / (Notas.length)
    </pre>

    <p>
    Muy buena resolución y buen manejo del DOM mediante eventos.
    </p>

    <hr>

    <h3>Ejercicio 2 — 3/4</h3>
    <p><i>Puntos extra por usar el while valen!! :)</i></p>
    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Intentó recorrer el arreglo utilizando una estructura repetitiva.</li>
        <li>Intentó buscar el modelo Fiesta.</li>
        <li>Mostró correctamente marca, año y color en HTML.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
while ("Fiesta" != autos.modelo)
    </pre>

    <p>
    <code>autos</code> es un arreglo, por lo tanto:
    </p>

    <pre>
autos.modelo
    </pre>

    <p>
    no existe.
    </p>

    <p>
    Debía acceder al elemento usando:
    </p>

    <pre>
autos[index].modelo
    </pre>

    <p>
    Además:
    </p>

    <pre>
if (autos.modelo = "Fiesta")
    </pre>

    <p>
    utiliza asignación (<code>=</code>) en vez de comparación.
    </p>

    <p>
    El recorrido también puede generar un bucle infinito porque la condición del while nunca cambia correctamente.
    </p>

    <p>
    Aun así, se nota comprensión parcial de la lógica buscada.
    </p>

    <hr>

    <h3>Ejercicio 3 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Recorrió correctamente el arreglo.</li>
        <li>Elevó correctamente cada número al cuadrado.</li>
        <li>Mostró correctamente los resultados en HTML.</li>
    </ul>

    <pre>
Promedionotas.innerHTML += \`\${numeros[index] * numeros[index]} \`
    </pre>

    <p>
    Muy buena resolución utilizando eventos y template strings.
    </p>

    <hr>

    <h3>Nota final: 9 / 10</h3>

    <p>
    Muy buen examen. El estudiante demuestra una buena comprensión de arreglos, ciclos, eventos y manipulación del DOM. Se recomienda reforzar el acceso a propiedades dentro de arreglos de objetos y condiciones lógicas.
    </p>

`
} , {
    dni:"49481697",
    nombre:"Diaz Gatica Anna",

    ej1:1.5,
    ej2:0.5,
    ej3:0,

    devolucion:"La estudiante demuestra una comprensión parcial de arreglos y ciclos for, pero presenta dificultades importantes en manipulación del DOM y resolución completa de consignas.",

    observaciones:"Debe reforzar cálculo de promedio, template strings, innerHTML y trabajo con objetos.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 1.5/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>notas</code>.</li>
        <li>Utilizó correctamente un ciclo <code>for</code>.</li>
        <li>Calculó correctamente la suma de notas.</li>
        <li>Mostró correctamente la suma en HTML.</li>
    </ul>

    <pre>
for (let index = 0; index < notas.length; index++) {
    sumaNotas += notas[index]
}
    </pre>

    <p><b>❌ Errores importantes</b></p>

    <p>
    La consigna pedía calcular el promedio, pero solamente mostró la suma total:
    </p>

    <pre>
parrafo.textContent = "La suma total es: " + sumaNotas
    </pre>

    <p>
    Faltó:
    </p>

    <pre>
let promedio = sumaNotas / notas.length
    </pre>

    <p>
    Además:
    </p>

    <pre>
card.innerHTML =
    <div class="card2">
    </pre>

    <p>
    Eso produce error de sintaxis porque el HTML debe escribirse como string:
    </p>

    <pre>
card.innerHTML = \`
<div class="card2">
    <h1>\${sumaNotas}</h1>
</div>
\`
    </pre>

    <hr>

    <h3>Ejercicio 2 — 0.5/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
    </ul>

    <p><b>❌ No resuelto</b></p>

    <p>
    Faltó:
    </p>

    <ul>
        <li>recorrer el arreglo con <code>for</code>,</li>
        <li>buscar el modelo Fiesta,</li>
        <li>mostrar posición, marca y año,</li>
        <li>mostrar el resultado en HTML.</li>
    </ul>

    <hr>

    <h3>Ejercicio 3 — 0/3</h3>

    <p><b>❌ No resuelto</b></p>

    <p>
    No se realizó el ejercicio 3.
    </p>

    <hr>


`
} , {
    dni:"50018104",
    nombre:"Fortes Zerbarini Candelaria Carolina",

    ej1:0.5,
    ej2:0.5,
    ej3:0,

    devolucion:"La estudiante demuestra una comprensión inicial de arreglos y ciclos for, pero presenta dificultades importantes de sintaxis y lógica en JavaScript.",

    observaciones:"Debe reforzar acumuladores, variables de control en for y resolución completa de consignas.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 0.5/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó un arreglo de notas.</li>
        <li>Intentó utilizar un ciclo <code>for</code>.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <pre>
sumaNotas = [ ]
    </pre>

    <p>
    La variable acumuladora debía ser numérica:
    </p>

    <pre>
let sumaNotas = 0
    </pre>

    <p>
    Además, el for contiene errores:
    </p>

    <pre>
for (let i = 0; i < notas.length; index++)
    </pre>

    <ul>
        <li>Se declaró <code>i</code> pero luego se incrementa <code>index</code>.</li>
        <li><code>index</code> no existe.</li>
    </ul>

    <p>
    Tampoco se realizó:
    </p>

    <ul>
        <li>la suma de notas,</li>
        <li>el cálculo del promedio,</li>
        <li>la visualización dinámica en HTML.</li>
    </ul>

    <p>
    Solamente se mostró el arreglo en consola:
    </p>

    <pre>
console.log(notas)
    </pre>

    <hr>

    <h3>Ejercicio 2 — 0.5/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Intentó recorrer el arreglo con un <code>for</code>.</li>
    </ul>

    <p><b>❌ No resuelto</b></p>

    <p>
    Aunque realizó el recorrido:
    </p>

    <pre>
for (let index = 0; index < autos.length; index++)
    </pre>

    <p>
    faltó:
    </p>

    <ul>
        <li>buscar el modelo Fiesta,</li>
        <li>usar un <code>if</code>,</li>
        <li>mostrar posición, marca y año,</li>
        <li>mostrar resultados dinámicamente en HTML.</li>
    </ul>

    <p>
    El texto quedó escrito manualmente en el HTML y no conectado con JavaScript.
    </p>

    <hr>

    <h3>Ejercicio 3 — 0/3</h3>

    <p><b>❌ No resuelto</b></p>

    <p>
    No se realizó el ejercicio 3.
    </p>

    <hr>

    <h3>Nota final: 1 / 10</h3>

    <p>
    La estudiante demuestra una comprensión inicial de la estructura general de JavaScript, pero presenta dificultades importantes en sintaxis, acumuladores y lógica de programación. Se recomienda reforzar ejercicios básicos de arreglos y ciclos for paso a paso.
    </p>

`
} , {
    dni:"49873923",
    nombre:"Gelves Bastián",

    ej1:1,
    ej2:1,
    ej3:0,

    devolucion:"El estudiante intentó trabajar con arreglos y objetos, pero dejó las actividades incompletas y presenta dificultades importantes en lógica y resolución de consignas.",

    observaciones:"Debe reforzar ciclos for, acumuladores, manipulación del DOM y resolución completa de problemas.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 1/3</h3>

    <p><b>❌ No resuelto</b></p>

    <p>
    El ejercicio quedó comentado y sin completar:
    </p>

    <pre>
/*let notas= [1,2,3,4,5,6,7,8,9,10,10,8,9]
for (let i = 0; i < notas.length; i++) {
    const element = array[i];
    
}*/
    </pre>

    <p>
    Faltó:
    </p>

    <ul>
        <li>sumar las notas,</li>
        <li>calcular el promedio,</li>
        <li>mostrar el resultado en HTML.</li>
    </ul>

    <p>
    Además:
    </p>

    <pre>
array[i]
    </pre>

    <p>
    utiliza una variable <code>array</code> que no existe.
    </p>

    <hr>

    <h3>Ejercicio 2 — 1/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Pegó correctamente el arreglo de objetos.</li>
        <li>Mostró información relacionada al auto Fiesta.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <p>
    La consigna pedía:
    </p>

    <ul>
        <li>recorrer el arreglo con <code>for</code>,</li>
        <li>buscar el modelo Fiesta,</li>
        <li>obtener los datos dinámicamente desde el arreglo.</li>
    </ul>

    <p>
    Sin embargo, los datos fueron escritos manualmente:
    </p>

    <pre>
console.log("De marca ford")
    </pre>

    <p>
    Además, la posición indicada es incorrecta:
    </p>

    <pre>
posición 5
    </pre>

    <p>
    El índice real del Fiesta es:
    </p>

    <pre>
1
    </pre>

    <p>
    Tampoco se mostró el resultado en HTML.
    </p>

    <hr>

    <h3>Ejercicio 3 — 0/3</h3>

    <p><b>❌ No resuelto</b></p>

    <p>
    No se realizó el ejercicio 3.
    </p>

    <hr>

    <h3>Nota final: 2 / 10</h3>

    <p>
    El estudiante demuestra una comprensión inicial de arreglos y objetos, pero presenta dificultades importantes para resolver las consignas de forma dinámica utilizando ciclos y lógica de programación. Se recomienda reforzar ejercicios básicos de JavaScript y trabajo paso a paso.
    </p>

`
} , {
    dni:"49646802",
    nombre:"Gisler Vicente",

    ej1:2.5,
    ej2:0.5,
    ej3:0,

    devolucion:"Buen manejo de arreglos y ciclos for en el cálculo del promedio. Presenta dificultades en trabajo con objetos y faltó completar el ejercicio 3.",

    observaciones:"Debe reforzar manipulación del DOM, definición de arreglos de objetos y nombres correctos de propiedades.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 2.5/3</h3>

    <p><b>✔ Muy buena resolución</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>notas</code>.</li>
        <li>Utilizó correctamente un ciclo <code>for</code>.</li>
        <li>Calculó correctamente la suma de notas.</li>
        <li>Calculó correctamente el promedio utilizando <code>notas.length</code>.</li>
    </ul>

    <pre>
for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i];
}
    </pre>

    <pre>
let promedio = sumaNotas / notas.length;
    </pre>

    <p><b>❌ Error menor</b></p>

    <p>
    El HTML no contiene un elemento con id:
    </p>

    <pre>
promedio
    </pre>

    <p>
    por lo tanto el resultado no podía mostrarse correctamente.
    </p>

    <hr>

    <h3>Ejercicio 2 — 0.5/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Intentó recorrer el arreglo de objetos con un <code>for</code>.</li>
        <li>Intentó utilizar una condición <code>if</code>.</li>
        <li>Intentó mostrar información dinámica en HTML.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <p>
    Faltó declarar el arreglo:
    </p>

    <pre>
let autos = [...]
    </pre>

    <p>
    Además:
    </p>

    <pre>
autos[i].nombre === "fiesta"
    </pre>

    <p>
    La propiedad correcta era:
    </p>

    <pre>
autos[i].modelo
    </pre>

    <p>
    También:
    </p>

    <pre>
autos[i].anio
    </pre>

    <p>
    debía ser:
    </p>

    <pre>
autos[i].año
    </pre>

    <p>
    Y el HTML tampoco contiene un elemento con id:
    </p>

    <pre>
resultadoAuto
    </pre>

    <hr>

    <h3>Ejercicio 3 — 0/3</h3>

    <p><b>❌ No resuelto</b></p>

    <p>
    No se realizó el ejercicio 3.
    </p>

    <hr>



`
} , {
    dni:"49873779",
    nombre:"Ingelhorn Kenny Nicolás",

    ej1:1.5,
    ej2:1,
    ej3:3,

    devolucion:"Buen manejo de ciclos y operaciones matemáticas en el ejercicio 3. Presenta dificultades en variables, acumuladores y trabajo con objetos.",

    observaciones:"Debe reforzar diferencia entre mayúsculas/minúsculas, acumuladores y definición de arreglos de objetos.",

    correccionCompleta: `

    <h3>Ejercicio 1 — 1.5/3</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Creó correctamente el arreglo <code>notas</code>.</li>
        <li>Intentó utilizar un acumulador.</li>
        <li>Intentó calcular el promedio.</li>
        <li>Mostró el resultado dinámicamente utilizando <code>document.write()</code>.</li>
    </ul>

    <pre>
document.write(\`<h3>Promedio del Trimestre: \${promedio.toFixed(2)}</h3>\`);
    </pre>

    <p>
    Aunque actualmente se recomienda utilizar <code>innerHTML</code> o <code>textContent</code>, el uso de <code>document.write()</code> funciona para mostrar contenido dinámico.
    </p>

    <p><b>❌ Errores importantes</b></p>

    <pre>
let SumaNotas = 0;
let promedio = sumaNotas / notas.length;
    </pre>

    <p>
    La variable fue declarada como:
    </p>

    <pre>
SumaNotas
    </pre>

    <p>
    pero luego se utilizó:
    </p>

    <pre>
sumaNotas
    </pre>

    <p>
    En JavaScript las mayúsculas importan:
    </p>

    <pre>
SumaNotas ≠ sumaNotas
    </pre>

    <p>
    Además, el promedio se calculó antes de realizar la suma total de notas.
    </p>

    <p>
    También:
    </p>

    <pre>
for (let i = 0; i < SumaNotas.length; i++)
    </pre>

    <p>
    es incorrecto porque:
    </p>

    <ul>
        <li><code>SumaNotas</code> es un número, no un arreglo.</li>
        <li><code>array</code> no existe.</li>
    </ul>

    <hr>

    <h3>Ejercicio 2 — 1/4</h3>

    <p><b>✔ Lo que hizo bien</b></p>

    <ul>
        <li>Intentó recorrer un arreglo de objetos.</li>
        <li>Intentó buscar el modelo Fiesta.</li>
        <li>Intentó mostrar información dinámica.</li>
    </ul>

    <p><b>❌ Errores importantes</b></p>

    <p>
    Faltó declarar el arreglo:
    </p>

    <pre>
let autos = [...]
    </pre>

    <p>
    Además:
    </p>

    <pre>
autos[i].modelo === "fiesta"
    </pre>

    <p>
    En el arreglo original el modelo es:
    </p>

    <pre>
"Fiesta"
    </pre>

    <p>
    JavaScript diferencia mayúsculas y minúsculas.
    </p>

    <p>
    Aun así, la estructura general de la lógica estaba bien planteada.
    </p>

    <hr>

    <h3>Ejercicio 3 — 3/3</h3>

    <p><b>✔ Excelente resolución</b></p>

    <ul>
        <li>Recorrió correctamente el arreglo.</li>
        <li>Elevó correctamente los números al cuadrado.</li>
        <li>Mostró correctamente los resultados en consola.</li>
    </ul>

    <pre>
let resultadoCuadrado = numeros[i] * numeros[i];
console.log(\`El número \${numeros[i]} elevado al cuadrado es: \${resultadoCuadrado}\`);
    </pre>

    <p>
    Muy buena resolución y buen uso de template strings.
    </p>

    <hr>


`
}

]