module.exports = ({ env }) => ({
    url: env("https://git.heroku.com/salt-ventures-strapi.git"),
    proxy: true,
    app: {
        keys: env.array("APP_KEYS", ["DATABASE_URL"]),
    },
});