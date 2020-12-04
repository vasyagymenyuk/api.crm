const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const { User } = require('../database/models/index');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_USER,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (pld, done) => {
      try {
        const user = await User.findOne({ where: { id: pld.uid } });

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
      }
    })
  );
};
