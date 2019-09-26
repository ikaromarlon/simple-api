const { DB_DRIVER, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

module.exports = () => {

  const envBaseMsg = ' env var not provided. Create a .env file in application root and set this var propertelly.';

  if (!DB_DRIVER) {
    console.log('DB_DRIVER' + envBaseMsg);
    process.exit(1);
  }
  if (!DB_HOST) {
    console.log('DB_HOST' + envBaseMsg);
    process.exit(1);
  }
  if (!DB_PORT) {
    console.log('DB_PORT' + envBaseMsg);
    process.exit(1);
  }
  if (!DB_NAME) {
    console.log('DB_NAME' + envBaseMsg);
    process.exit(1);
  }
  if (!DB_USER) {
    console.log('DB_USER' + envBaseMsg);
    process.exit(1);
  }
  if (!DB_PASS) {
    console.log('DB_PASS' + envBaseMsg);
    process.exit(1);
  }
}