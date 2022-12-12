
## [UPDATE] 12th Dec. 2022 [Migrations]

Explaining the Sequelize Migrations using [sequelize-auto-migrations-v2](https://www.npmjs.com/package/sequelize-auto-migrations-v2).
### Commands:
- Create the database if it doesn't exist.
```bash
sequelize db:create
```
- Create the migration file according to the current models.
```bash
makemigration
```
- Apply migration files to the database.
```bash
sequelize db:migrate
```
- Run through seeders and fill the tables with data.
```bash
sequelize db:seed:all
```
###
**```makemigration```** *command creates:*
1. Migration file that contains a summary explaining the actions for which the migration is created, some basic info like revision number and migration name, migration commands array of action and params, and the up function that apply those actions.

2. `_current.json` file is created in the first time to hold all the tables and its schema in `json` format then new migrations update this file to adapt with the changes; at the end of the file we will find the revision number and that number represents the latest migration.

3. `_current_bak.json` this file is create in case that an existing `_current.json` file is being updated; it contains a backup from the last version before the update.

<img src="https://www.aiactive.com/templates/hexa_corp/images/s5_logo.png" alt="drawing" width="200"/>
