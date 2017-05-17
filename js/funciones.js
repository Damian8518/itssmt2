$(document).ready(function()
{
	$(".treeview-menu li a" ).on( "click", function() 
	{
		$("#Titulo").text($( this ).attr("completo"));	
	});
	$("#recuerdame").iCheck({
		checkboxClass: 'icheckbox_square-blue',
	    radioClass: 'iradio_square-blue',
	    increaseArea: '20%' // optional
	}); 
	if($("#ControlUsuarios").length)
	{	
		var usuarios=$("#ControlUsuarios").bootgrid(
		{
			rowCount:[10, 25,30,40, 50, -1],
		    padding:3,
			labels: 
		    {
	    		noResults: "Sin resultados",
	    		search: "Buscar...",
	    		infos: "Mostrando del {{ctx.start}} al {{ctx.end}} de {{ctx.total}} registros",
	    		all:"Todos"
			},
			formatters: 
			{
		        "commands": function(column, row)
		        {
					return "<button type=\"button\" class=\"btn btn-xs btn-info command-edit\" data-row-id=\"" + row.id + "\" data-toggle='tooltip' title='Editar'><span class=\"fa fa-pencil\"></span></button> " + 
					"<button type=\"button\" class=\"btn btn-xs btn-warning command-bloquear\" data-row-id=\"" + row.id + "\" data-toggle='tooltip' title='Permisos'><span class=\"fa fa-list-ol\"></span></button> "+ 
					"<button type=\"button\" class=\"btn btn-xs btn-danger command-delete\" data-row-id=\"" + row.id + "\" data-toggle='tooltip' title='Eliminar'><span class=\"fa fa-trash-o\"></span></button>";
			    }
			}
		}).on("loaded.rs.jquery.bootgrid", function()
		{
		    
		    usuarios.find(".command-edit").on("click", function(e)
		    {
		        $('#ModalUsuarios').modal();
		    }).end().find(".command-delete").on("click", function(e)
		    {
		        alert("You pressed delete on row: " + $(this).data("row-id"));
		    }).end().find(".command-bloquear").on("click", function(e)
		    {
		        $('#ModalPrivilegios').modal();
		    });
		});
	}
	if($("#addUsuarios").length)
	{
		$("#addUsuarios").on("click", function(event)
		{
			event.preventDefault();
			$('#ModalUsuarios').modal();	
		});
	}
	if($("#usuarior").length)
	{
		$("#usuarior").on("click", function(event)
		{
			$("#usu1,#usu2,#usu3,#usu4,#usu5,#usu6").val("");
			$('#ModalUsuarios').modal('hide');	
		});
	}
});