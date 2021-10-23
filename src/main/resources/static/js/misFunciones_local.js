function traerInformacion(){
	$.ajax({    
    url : 'http://localhost/api/Custome/all',
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#resultado").empty();
        let miTabla = '<div class="container"><div  class= "row">';
		for (i=0; i<respuesta.length; i++){
			miTabla += `
			            	<div class="card m-2" >
								<div class="card-body" >
							 
								   <h5 class ="card-title">  ${respuesta[i].id} - ${respuesta[i].brand}</h5> 		
								   <h6 class ="card-subtitle mb-2 text-muted">  ${respuesta[i].name} </h6> 		
								   <p class= "card-text"> ${respuesta[i].model} <br> 		
														  ${respuesta[i].category.name}</p>
								   <button class="btn btn-primary" onclick="editarRegistro(${respuesta[i].id} )" >Editar</button>
								   <button  class="btn btn-danger" onclick="eliminarRegistro(${respuesta[i].id} )">Borrar</button>
								   
								</div>
							</div>
                       `
	
		}
        miTabla += '</div></div>';
	    $("#resultado").append(miTabla);    
        pintarSelect(0);
       
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}

function guardarInformacion(){
    let selected = $("#cat").children(":selected").attr("value");
	
	if (selected.length > 0) {
		let misDatos = {
			brand: $("#brand").val(),
			id_cat: selected,
			id: $("#id").val(),
			model: $("#model").val(),
			name: $("#name").val(),
			category: {id: selected}
			
		};
		let datosJson = JSON.stringify(misDatos); 
		$.ajax(    
		'http://localhost/api/Custome/save',
		{data: datosJson,
		type : 'POST',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		statusCode : {
			201 :  function() {
				
				alert("guardado! ");
				$("#brand").val("");
				$("#category").val("");
				$("#id").val("");
				$("#model").val("");
				$("#name").val("");
				traerInformacion();	
				}
			}
		});
	}
	else
	{
		alert('Debe escoger categoria');
    }
}

function editarRegistro (id){
	$.ajax({    
    url : 'http://localhost/api/Custome/'+id,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta+ "url" + "http://localhost/api/Custome/"+id);
        let miTabla = '<table>';
			$("#brand").val(respuesta.brand);
			$("#category").val(respuesta.category.id);
			$("#id").val(respuesta.id);
			$("#model").val(respuesta.model);
			$("#name").val(respuesta.name);
            $("#id").attr("readonly", true);
			pintarSelect(respuesta.category.id);
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}

function actualizarInformacion(){
    let selected = $("#cat").children(":selected").attr("value");
	let misDatos = {
	brand: $("#brand").val(),
        id: $("#id").val(),
        model: $("#model").val(),
        name: $("#name").val(),
        category : {id: selected}
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
    'http://localhost/api/Custome/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    statusCode : {
		201 :  function() {
			alert("Actualizado!");
			$("#brand").val("");
			$("#category").val("");
			$("#id").val("");
			$("#model").val("");
			$("#name").val("");
			$("#id").attr("readonly", false);
        	        traerInformacion();	
			}
		}
	});
}

function pintarSelect(id){
	$.ajax({    
    url : 'http://localhost/api/Category/all',
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#cat").empty();
		miSelect='<option id="" ></option>';
		for (i=0; i<respuesta.length; i++){
                  if (respuesta[i].id == id){
                      miSelect += '<option selected value='+ respuesta[i].id+ '>'+respuesta[i].name+'</option>';
                  }   
                  else {
                        miSelect += '<option value='+ respuesta[i].id+ '>'+respuesta[i].name+'</option>'; 		
                    }
		}
	    $("#cat").append(miSelect);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema en la carga del select:'+ status);
    }
});
	
}	
	
function eliminarRegistro(id){
	$.ajax({    
        url : 'http://localhost/api/Custome/'+id,
        type : 'DELETE',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",
  
    statusCode : {
	204 :  function() {
			alert("Eliminado el registro No:"+id);
        	        traerInformacion();	
			}
		}
	});
    
}
