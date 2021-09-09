<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Installation

```bash
$ npm install

```

## Configuring The Spotify Credentials

On the file ~/src/config/spotify.credentials.ts you must fill with the following informations:

***Remeber to remove the '.example' of the file***

```bash
credentials: 
   {
        client_id: '>>YOUR CLIENT ID HERE<<',
        client_secret: '>>YOUR CLIENT SECRET HERE<<',
        redirect_uri: 'http://localhost:3000/auth/callback',
        scope:['>>Your desired Scopes<<']
    }

    
```

You can get this information on the Spotify Developer Dashboard [See more here](https://developer.spotify.com/dashboard/login)

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# debug mode
$ npm run start:debug

# production mode
$ npm run start:prod
```



## Stay in touch

- Author - [Vinicios Biluca](https://gitlab.com/vinicios.biluca)

