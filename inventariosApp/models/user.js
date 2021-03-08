const login = (email, pass, callback)=>{
  var error= '';
  var bd_data= ''; // Simula la inf proveniente de la bd
  if (email== 'joe@doe.com' && pass== '1234') {
    //consultar en BD de datos info faltante
    bd_data={
      'email': email
      'depto': 'Ventas'
      'phone': '5544332211'
    }
  } else {
    error= {'mensaje': 'credenciales incorrectas'}
    callback.(err, bd_data);

  }

}

exports.login ) login;
