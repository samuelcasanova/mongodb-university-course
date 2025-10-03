node ./src/app.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/01.initial_setup_and_aggregate.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/02.schema_validation.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/03.retrieving_documents.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/04.replacing_documents.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/05.advanced_querying_documents.js
#docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/06.deleting_documents.js
