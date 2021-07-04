export const config = {
  "dev": {
    "username": "postgres",
    "password": "udagramfilataudev",
    "database": "udagramfilataudev",
    "host": "udagramfilataudev.cf0xq2bjobyp.us-west-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-west-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-afilatau-dev",
    "logging": "true"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
