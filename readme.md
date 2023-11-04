
Minetest Lemmy infrastructure repo

# Themes

Themes are located in the `extra_themes` directory and the assets in `assets` (see `minetest-darkly.css` for an example)

# dev

Create a `.env` file:
```
GITHUB_CLIENTID=?
GITHUB_SECRET=?
CDB_CLIENTID=?
CDB_SECRET=?
LEMMY_DATABASE_URL=postgresql://postgres:?@postgres/postgres?sslmode=disable
POSTGRES_URL=postgresql://postgres:?@postgres/postgres?sslmode=disable
POSTGRES_PASSWORD=?
LEMMY_SMTP_PASSWORD=?
```

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

# License

* `/assets/default_obsidian.png` CC-BY-SA 3.0 https://github.com/minetest/minetest_game
