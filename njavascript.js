### ARRAYS ######

/// LENGTH
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);
// expected output: 4
==========================================================================================
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
==========================================================================================

/// SPLIT convertertir string en array
let str_campos_arr = str_campos.value.split(',');

==========================================================================================
/// REPLACE reemplaza carecteres
code = code.replace('&','5')

==========================================================================================
/// SUBSTRING QUITAR el ultimo caracter
str.substring(0, (str.length - 1));

==========================================================================================
/// JSON.parse
JSON.parse(obj_fields)

==========================================================================================
/// Función para hacer un FILTRO (FILER) exacto en un array de objetos

    let filter_response = getFilteredByKey(arr_objs, 'Emisor_Id', 'Valor')

    const getFilteredByKey = (array, key, value) => {
        return array.filter(function (e) {
            return e[key] == value;
        });
    }
==========================================================================================
/// Función para Obtener un MAXIMO (MAX) en un array de objetos

    let max_filter = getMax(arr_objs, 'MSCI_Id')

    const getMax = (arr, key) => {
        var max;
        for (var i = 0; i < arr.length; i++) {
            if (max == null || parseInt(arr[i][key]) > parseInt(max[key]))
                max = arr[i];
        }
        return max;
    }

==========================================================================================

/// CREAR UN ARRAY CON OBJETOS

let jsonObj = [];
for (let i = 0; i < num_reg; i++) {

	let item = {};

	item['Id'] = manag_id[i].value;
        item['Management_Solicitante_Id'] = manag_soliid[i].value;
	item['Management_Usuario_Id'] = manag_userid[i].value;
        item['Management_DateCreate'] = formatDate(mang_datecreate[i].value + " 23:59:59", "-t");
        item['Management_DateEnd'] = formatDate(fecha_end[i].value + " 23:59:59", "-t");

        jsonObj.push(item);
}
