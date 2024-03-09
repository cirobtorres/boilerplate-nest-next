# DJANGO - NEXT.JS BOILERPLATE

## Getting Started

1. Clone this repository:

   ```bash
   git clone git@github.com:cirobtorres/boilerplate-nest-next.git

   # or

   git clone git@github.com:cirobtorres/boilerplate-nest-next.git <repository_name>
   ```

2. Rename **.env.local.example** to **.env.local** and **.env.example** to **.env** and set up your keys.

3. At the root of the project type:

   ```bash
   docker-compose up --build

   # or:

   docker-compose up -d --build # flag --detach
   ```

   #### Obs.: To stop containers, **ctrl + c** on terminal or, in case you have detached:

   ```bash
   docker-compose down
   ```

## Acessing PGADMIN4:

1. Use command below to copy postgres NAME:

```bash
docker container ls
```

2. URL: [http://localhost:5050/browser/](http://localhost:5050/browser/)

3. At .env (api-nest folder), set your login credentials:
   PGADMIN_DEFAULT_EMAIL="change-me"
   PGADMIN_DEFAULT_PASSWORD="change-me"

4. Inside pgadmin4, click add new server:

   - General:
     - Name = Whatever you want
   - Connection:
     - Host name/address = **<your_project's_name>-database-1** or your custom postgres' container_name
     - Username = your **POSTGRES_USER**
     - Password = your **POSTGRES_PASSWORD**

5. Save

## Installed Packages:

### Nest:

1. [typeorm]()
2. [@nestjs/typeorm]()
3. [pg]() typeorm driver for postgresql
4. [@nestjs/config]() locate .env files

### Next:

1. [NextJS](https://nextjs.org/docs/getting-started/installation#automatic-installation)
2. [NextAuthJS](https://next-auth.js.org/getting-started/example)
3. [Tailwindcss](https://tailwindcss.com/docs/installation)
4. [Tailwind Scrollbar](https://adoxography.github.io/tailwind-scrollbar/getting-started)
5. [Typescript](https://www.typescriptlang.org/download)
6. [Eslint](https://eslint.org/docs/latest/use/command-line-interface#miscellaneous)
7. [Prettier](https://prettier.io/docs/en/install)
8. [Framer Motion](https://www.framer.com/motion/introduction/##installation)
9. [React Icons](https://react-icons.github.io/react-icons/)
