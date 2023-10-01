import dotenv from 'dotenv';

dotenv.config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    cid_ipfs_users: process.env.CID_IPFS_USERS || null,
    cid_ipfs_hospitals: process.env.CID_IPFS_HOSPITALS || null,
    jwt_secret: process.env.JWT_SECRET,
};

export { config };
