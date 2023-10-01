import dotenv from 'dotenv';

dotenv.config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    cid_ipfs: process.env.CID_IPFS || null,
    jwtSecret: process.env.JWT_SECRET,
};

export { config };

