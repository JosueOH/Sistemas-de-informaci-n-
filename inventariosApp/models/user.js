const login = (email, passwd, callback)=>{
  var err='';
  var bd_data=''; //simula la informacion proveniente de BD

  if (email == 'joe@doe.com' && passwd=='1234') {
    bd_data={
      //consultar en bd info faltante
      'email':email,
      'depto':'Ventas',
      'phone':'5555123'
    }
  } else {
    err={
      'mensaje':"Credenciales incorrectas"
    }
  }
  callback(err,bd_data);
}



exports.login = login;
