
db.createCollection( 'comanda', {validator: {$jsonSchema: {bsonType: 'object',title:'comanda',properties: {data_hora: {bsonType: 'date'},quantitat: {bsonType: 'date'},preu: {bsonType: 'date'},repartiment_domicili: {bsonType: 'bool'},id_productes: {bsonType: 'array',items: {
title:'object',properties: {id_pizzes: {bsonType: 'object',
title:'object',},id_hamburgueses: {bsonType: 'object',
title:'object',},id_begudes: {bsonType: 'object',
title:'object',}}}}}         }      }});  