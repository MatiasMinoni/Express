const express = require ("express")
const app = express();
let visitas=0
app.get("/", (req, res) =>{
    res.send(`<p>La cantidad de visitas es ${++visitas}</p>`)

})
// contar visitas

// app.get("/visitas", (req, res) =>{
//     res.send(`<p>La cantidad de visitas es ${++visitas}</p>`)


// })
// const frase="<h1>Buenas tardes</h1>";

// app.get("/api/letras/:num", (req, res) =>{
//     const num=parseInt(req.params.num)
// if (isNaN(num)){
//     return res.send({error:"El parametro ingresado no es valido"})
// }
// if (num<1 || num > frase.lenght){
//     return res.send({error:"El parametro ingresado esta fuera de rango"
// })
// }
// res.send(frase[num - 1])
// })
// app.get("/api/palabras/:num", (req, res) =>{
//     const num=parseInt(req.params.num)
// if (isNaN(num)){
//     return res.send({error:"El parametro ingresado no es valido"})
// }
// const palabras= frase.split(" ")
// if (num<1 || num > palabras.lenght){
//     return res.send({error:"El parametro ingresado esta fuera de rango"
// })
// }
// res.send(palabras[num - 1])
// })

// Funcion para importar json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api/sumar/:num1/:num2", (req, res) =>{
    const {num1, num2} = req.params
    res.send({suma: Number(num1) +  Number(num2)})
}
)
app.get("/api/sumar", (req, res) =>{
    const {num1, num2} = req.query
    res.send({suma: Number(num1) +  Number(num2)})
}
)
app.get("/api/suma/:operacion", (req, res) =>{
    const {operacion} = req.params
    res.send({operacion:eval(operacion)})
}
)

app.post("/api/sumar", (req, res) =>{
    const {saveObject}=req.body;
    res.send(saveObject)
}
)

const palabras=["Frase", "Inicial"]
app.get("/api/frase", (req, res) =>{
    res.send({frase: palabras.join(" ")})   
   })
app.post("/api/frase", (req, res) =>{
    const {palabra, palabra1}=req.body
    palabras.push(palabra, palabra1)
    res.send({agregado: palabras })   
   })

app.delete("/api/frase", (req, res) =>{
    const palabra=palabras.splice(-1)
    // palabras.push(palabra)
    res.send({quedo: palabras, seborro:palabra})   
   })



app.get("/api/put/:a", (req, res) =>{

const a=req.params
    res.send({palabras:palabra(a)})})

app.post("/api/put/:a", (req, res) =>{
const {palabra}=req.body

palabras.push(palabra)
  
    res.send({agregada:palabra})
})


app.delete("/api/put", (req, res) =>{
res.send('ok delete bb')
})


// app.put("/api/:id", (req, res) =>{
//     let id=req.params.id;
//     let newObj= req.body;
//     updateObject(id, newObj)
//     res.send(newObject)
// }) 

const PORT=8080
const server= app.listen(PORT, () =>{
    console.log(`Server is running in ${PORT}`);
})
server.on("error", error=>console.log(error))
4