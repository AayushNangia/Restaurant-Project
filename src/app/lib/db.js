import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

// Build the connection string from the individual DB_* vars in .env / .env.local.
// Uses the direct (non-SRV) form to skip the SRV DNS lookup that fails
// on networks blocking TCP port 53 (e.g. some routers/firewalls).
const { DB_USERNAME, DB_PASSWORD, DB_HOSTS, DB_OPTIONS } = process.env;

// --- debug logging: shows which env vars actually loaded ---
console.log("[db] loading env vars:", {
  DB_USERNAME: DB_USERNAME ?? "<undefined>",
  DB_PASSWORD: DB_PASSWORD ? "<set>" : "<undefined>",
  DB_HOSTS: DB_HOSTS ?? "<undefined>",
  DB_OPTIONS: DB_OPTIONS ?? "<undefined>",
});

if (!DB_USERNAME || !DB_PASSWORD || !DB_HOSTS) {
  console.error(
    "[db] MISSING env vars — DB_USERNAME/DB_PASSWORD/DB_HOSTS not all present.",
    "Make sure they are in .env.local and the dev server was restarted."
  );
  throw new Error(
    "Missing DB_USERNAME / DB_PASSWORD / DB_HOSTS. Add them to .env.local and restart the dev server."
  );
}

const user = encodeURIComponent(DB_USERNAME);
const pass = encodeURIComponent(DB_PASSWORD);
const options = DB_OPTIONS || "";

export const connectionStr = `mongodb://${user}:${pass}@${DB_HOSTS}/${options}`;

// Log the final URI with the password masked so it's safe to share.
const maskedStr = `mongodb://${user}:****@${DB_HOSTS}/${options}`;
console.log("[db] connectionStr:", connectionStr ? maskedStr : "<undefined>");
