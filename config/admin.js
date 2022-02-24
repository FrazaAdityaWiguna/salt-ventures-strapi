module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '88b0dcdcf47dab5c1b270bc67294ecc0'),
  },
});
