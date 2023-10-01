import * as IPFS from "ipfs-core";
import { config } from "../config";

export enum DB {
  USERS = "users",
  HOSPITALS = "hospitals",
}

export const read_from_ipfs = async (db: DB) => {
  const ipfs = await IPFS.create();
  const cid =
    db === DB.USERS ? config.cid_ipfs_users : config.cid_ipfs_hospitals;
  if (!cid) return null;
  const data = await ipfs.cat(cid);
  return JSON.parse(data.toString());
};

// Write
export const write_to_ipfs = async (new_data: any, db: DB) => {
  const ipfs = await IPFS.create();
  const cid =
    db === DB.USERS ? config.cid_ipfs_users : config.cid_ipfs_hospitals;
  if (!cid) return null;
  const data = read_from_ipfs(db);
  if (data) new_data = { ...data, ...new_data };
  if (db === DB.USERS)
    config.cid_ipfs_users = await ipfs
      .add(JSON.stringify(new_data))
      .then((res) => res.cid.toString());
  if (db === DB.HOSPITALS)
    config.cid_ipfs_hospitals = await ipfs
      .add(JSON.stringify(new_data))
      .then((res) => res.cid.toString());
};
