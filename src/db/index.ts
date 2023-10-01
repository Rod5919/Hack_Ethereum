import fs from 'fs';
import path from 'path';

const dbUsersFile = path.join(__dirname, '../assets/db_users.json');
const dbHospitalFile = path.join(__dirname, '../assets/db_hospitals.json');

console.log(__dirname);

//const dbUsersFile = JSON.stringify(require('../assets/db_users.json')) ;
//const dbHospitalFile = JSON.stringify(require('../assets/db_hospitals.json')) ;

console.log(dbUsersFile)

export enum DB {
  USERS = "users",
  HOSPITALS = "hospitals",
}

export const read_from_ipfs = (db: DB): any => {
  try {
    const data = fs.readFileSync(db === DB.USERS ? dbUsersFile : dbHospitalFile, 'utf-8');
    const jsonData = JSON.parse(data);
    return jsonData[db] || null;
  } catch (error) {
    console.error('Error reading from the database:', error);
    return null;
  }
};

export const write_to_ipfs = (new_data: any, db: DB): void => {
  try {
    const dbFilePath = db === DB.USERS ? dbUsersFile : dbHospitalFile;
    console.log(dbFilePath);
    const data = fs.readFileSync(dbFilePath, 'utf-8');
    const jsonData = JSON.parse(data);
    jsonData.push(new_data);
    fs.writeFileSync(dbFilePath, JSON.stringify(jsonData, null, 2), 'utf-8');
    console.log(`Data written to ${db} in the database.`);
  } catch (error) {
    console.error('Error writing to the database:', error);
  }
};