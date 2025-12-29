module.exports = {
  apps: [
    {
      name: "rapid-socket",
      script: "dist/main.js",
      env_development: {
        NODE_ENV: "development",
        PORT: 3002,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3003,
      },
    },
  ],
};
