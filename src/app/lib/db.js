import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

// Connection string is loaded from .env.local (MONGODB_URI).
// Uses the direct (non-SRV) form to skip the SRV DNS lookup that fails
// on networks blocking TCP port 53 (e.g. Ayush's router/firewall).
export const connectionStr = process.env.MONGODB_URI;
