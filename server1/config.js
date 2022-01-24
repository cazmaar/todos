// import { database } from "pg/lib/defaults"

export const db = {
user:process.env.PG_USER,
host:process.env.PG_HOST,
password:process.env.PG_PASSWORD,
database:process.env.PG_DATABASE,
port: process.env.PG_PORT
}


// PG_USER=trbvxefaepqwkk
// PG_HOST=ec2-54-220-243-77.eu-west-1.compute.amazonaws.com
// PG_PASSWORD=866f70b4a5664665aad241352d47d576bc7767b671316d5eb2f1a695c92ec3d3
// PG_DATABASE=dfp02o10s6btk0
// PG_PORT=5432