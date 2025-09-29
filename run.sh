docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/initial_setup_and_aggregate.js
docker exec -it mongodb mongosh mongodb://admin:password@localhost:27017 --file /src/schema_validation.js

node ./src/app.js