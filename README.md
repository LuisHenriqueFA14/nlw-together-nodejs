<h1 align="center">nlw-together-nodejs</h1>

##### This project was developed in [Rocketseat](https://www.rocketseat.com.br/)'s nlw-together.

### What is that ?

This is a project that is the API of [NLW Valoriza](https://github.com/rocketseat-education/nlw-06-nodejs).

### Stack

- TypeScript
- TypeORM
- JWT
- uuid
- Express

### How to use

##### Install the dependencies:
```
yarn
# or
npm i
```

##### Run the typeorm migrations:

```
yarn typeorm migration:run
# or
npm run typeorm migration:run
```

##### Set you environment keys:

`.env`
```
JWT_SECRET_TOKEN=
```

##### Run the code

```
yarn start
# or
npm run start
```

### Routes

- POST
	- `/tags`: Create a new tag (admin only)
	- `/users`: Create a new user
	- `/login`: Authenticate an user
	- `/compliments`: Send a compliment
- GET
	- `/users/compliment/sent`: List of all sent compliments
	- `/users/compliment/received`: List of all received compliments
	- `/tag`: List of tags
	- `/users`: List of users

For more information, read the [rules page](./RULES.md).
