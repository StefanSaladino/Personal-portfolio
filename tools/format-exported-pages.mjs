import { constants } from "node:fs";
import { access, cp, readdir } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const sourceFolder = path.resolve(process.argv[2] || ".");
const outputFolder = path.resolve(
  process.argv[3] ||
    path.join(
      path.dirname(sourceFolder),
      `${path.basename(sourceFolder)}-formatted-review`,
    ),
);

await access(sourceFolder, constants.R_OK);

try {
  await access(outputFolder);
  throw new Error(
    `The output folder already exists: ${outputFolder}\nChoose a new output folder so the deployment files are never overwritten.`,
  );
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

await cp(sourceFolder, outputFolder, {
  recursive: true,
  errorOnExist: true,
  force: false,
});

const htmlFiles = [];

async function collectHtmlFiles(folder) {
  const entries = await readdir(folder, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(folder, entry.name);
    if (entry.isDirectory()) await collectHtmlFiles(entryPath);
    if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(entryPath);
  }
}

await collectHtmlFiles(outputFolder);

if (htmlFiles.length === 0) {
  throw new Error(`No HTML pages were found in ${sourceFolder}`);
}

const npxCommand = process.platform === "win32" ? "npx.cmd" : "npx";
const prettier = spawnSync(
  npxCommand,
  ["--yes", "prettier@3.6.2", "--write", ...htmlFiles],
  { stdio: "inherit" },
);

if (prettier.status !== 0) {
  throw new Error(
    "Prettier could not format the exported pages. Confirm that Node.js and npm are installed, then try again.",
  );
}

console.log(`Formatted ${htmlFiles.length} HTML pages.`);
console.log(`Readable review copy: ${outputFolder}`);
console.log("Keep using the original deployment ZIP for Cloudflare Pages.");
