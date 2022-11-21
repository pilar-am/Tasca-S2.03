
db.createCollection( 'botiga', {validator: {$jsonSchema: {bsonType: 'object',title:'botiga',required: [         'provincia'],properties: {nom: {bsonType: 'string'},empleats: {bsonType: 'array',items: {
title:'object',properties: {nom: {bsonType: 'string'},telefon: {bsonType: 'int'},repart_domicili: {bsonType: 'bool'},domicili: {bsonType: 'object',
title:'object',properties: {id_empleat: {bsonType: 'object',
title:'object',},data_hora: {bsonType: 'date'}}}}}},adreça: {bsonType: 'string'},CP: {bsonType: 'int'},id_localitat: {bsonType: 'string'},provincia: {bsonType: 'objectId'}}         }      }});  