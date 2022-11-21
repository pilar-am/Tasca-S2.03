
db.createCollection( 'empleat', {validator: {$jsonSchema: {bsonType: 'object',title:'empleat',properties: {nom: {bsonType: 'string'}}         }      }});  