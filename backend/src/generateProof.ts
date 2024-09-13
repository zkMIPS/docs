import axios from "axios";
const { exec } = require("child_process");

export const generateProof = async (inputNum: number, res: any) => {
  const command = `cd ../zkm-prover && PRIVATE_KEY=a38fbe7ce4d4e14a9cef370f84d48bcaa0c4e313c41cdc7e969b402df8c2242f SEG_SIZE=65536 CA_CERT_PATH=./tools/certs/ca.pem ELF_PATH=../iseven ARGS='${inputNum}' ENDPOINT=https://152.32.186.45:20002 RUST_LOG=info OUTPUT_DIR=/tmp/examples cargo run --example stage`;

  exec(command, async (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return res.status(500).send(`Error: ${error.message}`);
    }
    if (stderr) {
      const logContent = stderr;
      const regex =
        /GenerateProofResponse \{ status: (\d+), error_message: "(.*?)",\s*proof_id: "(.*?)",\s*download_url:\s*"(.*?)" \}/;
      const match = logContent.match(regex);
      let resData = {
        status: 0,
        error_message: "",
        proof_id: "",
        download_url: "",
      };
      if (match) {
        resData = {
          status: parseInt(match[1], 10),
          error_message: match[2],
          proof_id: match[3],
          download_url: match[4],
        };
      }
      if (resData.status != 2) {
        return res.send("false");
      }
      const url = resData.download_url;
      const proofData = await axios.get(url);
      return res.send(proofData.data);
    }
    return res.send("false");
  });
};
