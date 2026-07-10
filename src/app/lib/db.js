import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');
 
export const connectionStr = `mongodb://aayush:aayush@ac-wz9eoey-shard-00-00.7y6mymh.mongodb.net:27017,ac-wz9eoey-shard-00-01.7y6mymh.mongodb.net:27017,ac-wz9eoey-shard-00-02.7y6mymh.mongodb.net:27017/restoDB?ssl=true&authSource=admin`;