import fs from "node:fs";
import path from "node:path";

const docsPath = path.join(__dirname, "..", "docs");

if (fs.existsSync(docsPath)) {
  fs.rmSync(docsPath, { recursive: true, force: true });
} else {
  fs.mkdirSync(docsPath);
}

const storybookPath = path.join(__dirname, "..", "packages", "pub-test-kaku", "storybook-static");
if (fs.existsSync(storybookPath)) {
  fs.cpSync(storybookPath, docsPath, { recursive: true });
}
