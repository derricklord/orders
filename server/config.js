module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'A hard to guess string',
  MONGO_URI: process.env.MONGO_URI || 'localhost/ordersSchema',
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'Facebook App Secret',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || '8Y54OAjCPQ-Pzt1m6hAm-8Iy'
};