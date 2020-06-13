#### Store generated/backup data into sqlite database

##### Adding a new migration:
```
 node node_modules/typeorm/cli.js migration:create -n [name of the migration]
```
##### Apply a new migration:
```
node node_modules/typeorm/cli.js migration:run
```
##### Revert a new migration:
```
node node_modules/typeorm/cli.js migration:revert
```