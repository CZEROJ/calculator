// Pass the compatibility option to the Node processes started by react-scripts.
const options = process.env.NODE_OPTIONS || "";
if (!options.split(/\s+/).includes("--openssl-legacy-provider")) {
  process.env.NODE_OPTIONS = `${options} --openssl-legacy-provider`.trim();
}

require("react-scripts/bin/react-scripts");
