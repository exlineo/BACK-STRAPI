module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6846191345ebf4fbd449e521e5478bae'),
  },
});
