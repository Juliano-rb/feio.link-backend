# Feio.link-backend
I'll use this as my starter code for personal express.js projects (under construction)

# What's included

- Typescript setup
  - ``build``, ``start`` and ``dev`` scripts
- Eslint
- Nodemon
- Jest
- Hello world controller
# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command


# migration commands:
1. Automatic generate new migration:
`npm run typeorm migration:generate -- -n MigrationName`
2. Run migrations::
`npm run typeorm migration:run`
