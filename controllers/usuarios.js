const {response,request}=require('express');

const usuariosGet=(req=request, res=response)=> {
    
    const {q,nombre='No name',apikey,page,limit}=req.query;
    
    res.json({
        msg:'get Api-controlador',
        q,nombre,apikey,page,limit
    })
  
  };

  const usuariosPost=(req,res=response)=>{
    //const body=req.body;
    const {nombre,edad}=req.body;
    
    res.json({
        msg:'post Api-controlador',
        nombre,edad
    })
  };

  const usuariosPut=(req,res=response)=>{

    //const id=req.params.id;
    const {id}=req.params;

    res.json({
        msg:'put Api-controlador',
        id
    })
  }
  
  const usuariosPatch=(req,res=response)=>{
    res.json({
        msg:'patch Api-controlador'
    })
  }

  const usuariosDelete=(req,res=response)=>{
    res.json({
        msg:'delete Api-controlador'
    })
  }

  module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
  }