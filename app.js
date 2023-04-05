const express = require('express');
const clienteNegocio = require("./negocio/cliente_negocio");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/clientes', (req, res) => {    
    //Obtem os dados request
    //Trata a funcionalidade de negocio
    const listaClientes = clienteNegocio.listar();
    //Gera o response adequadamente
    res.json(listaClientes);  
})

app.get('/api/clientes/:id', (req, res) => {    
    //Obtem os dados request (e da URI)
    const id = req.params.id;
    console.log("ID:", id);
    //Trata a funcionalidade de negocio
    const cliente = clienteNegocio.buscarPorId(id);
    //Gera o response adequadamente  
    res.json(cliente);
})

app.post('/api/clientes', (req, res) => {    
    //Obtem os dados request
    const cliente = req.body;
    //Trata a funcionalidade de negocio
    const clienteInserido = clienteNegocio.inserir(cliente);
    //Gera o response adequadamente  
    res.status(201).json(clienteInserido);
})

app.put('/api/clientes/:id', (req, res) => {    
    //Obtem os dados request
    //Trata a funcionalidade de negocio
    //Gera o response adequadamente  
    res.send("Atualizar Cliente");
})

app.delete('/api/clientes/:id', (req, res) => {    
    //Obtem os dados request
    //Trata a funcionalidade de negocio
    //Gera o response adequadamente  
    res.send("Deletar Cliente");
})

app.listen (3000, () => { 
    console.log("Iniciando o servidor...");
})