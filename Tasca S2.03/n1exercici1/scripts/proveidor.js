
db.createCollection( 'proveidor', {validator: {$jsonSchema: {bsonType: 'object',title:'proveidor',properties: {nom: {bsonType: 'string'},adreça: {bsonType: 'object',
title:'object',properties: {carrer: {bsonType: 'string'},num: {bsonType: 'int'},ciutat: {bsonType: 'string'},CP: {bsonType: 'int'},pais: {bsonType: 'string'}}},telefon: {bsonType: 'string'},fax: {bsonType: 'string'},NIF: {bsonType: 'string'}}         }      }});  