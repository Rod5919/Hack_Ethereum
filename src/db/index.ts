import * as IPFS from 'ipfs-core'
import { config } from '../config'

const read_from_ipfs = async () => {
    const ipfs = await IPFS.create()
    const cid = config.cid_ipfs
    if (!cid) return null
    const data = await ipfs.cat(cid);
    return data
}

// Write
const write_to_ipfs = async (new_data: any) => {
    const ipfs = await IPFS.create()
    const data = read_from_ipfs()
    if (data) {
        new_data = { ...data, ...new_data }
    }
    const cid = await ipfs.add(JSON.stringify(new_data));
}