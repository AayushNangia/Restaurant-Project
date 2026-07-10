import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');
<<<<<<< HEAD
 
export const connectionStr = `mongodb://aayush:aayush@ac-wz9eoey-shard-00-00.7y6mymh.mongodb.net:27017,ac-wz9eoey-shard-00-01.7y6mymh.mongodb.net:27017,ac-wz9eoey-shard-00-02.7y6mymh.mongodb.net:27017/restoDB?ssl=true&authSource=admin`;
=======

// Connection string is loaded from .env.local (MONGODB_URI).
// Uses the direct (non-SRV) form to skip the SRV DNS lookup that fails
// on networks blocking TCP port 53 (e.g. Ayush's router/firewall).
export const connectionStr = process.env.MONGODB_URI;
>>>>>>> 598e274bab4eac2cdd11c5682fc305a8fc500cf0
