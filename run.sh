npx ts-node ./src/node-app/app.ts
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/mongosh-scripts/01.initial_setup.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/mongosh-scripts/02.schema_validation.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/mongosh-scripts/03.retrieving_documents.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/mongosh-scripts/04.advanced_querying_documents.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/mongosh-scripts/05.aggregating.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/mongosh-scripts/06.replacing_documents.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/mongosh-scripts/07.indexing.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/mongosh-scripts/08.deleting_documents.js