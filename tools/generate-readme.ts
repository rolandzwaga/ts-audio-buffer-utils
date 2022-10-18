import fs from "fs";
import path from "path";

const readMePath = path.join(__dirname, "..", "README.md");

const readmeTemplate =
  "# ts-audio-buffer-utils\nBrowser-only Typescript port of [audio-buffer-utils](//github.com/audiojs/audio-buffer-utils)\n\n";

const contents = fs.readFileSync(path.join(__dirname, "..", "docs.json"), {
  encoding: "utf8",
});

const data = JSON.parse(contents);

const summary = (data.children as any[])
  .sort((a: any, b: any) => a.name - b.name)
  .flatMap((c) => c.children)
  .filter((c) => c.kindString === "Function")
  .map(createSummaryLine)
  .join("\n");

fs.writeFileSync(readMePath, `${readmeTemplate}\n${summary}`, {
  encoding: "utf8",
});

function createSummaryLine(child: any) {
  const name = child.name;
  return `${name}`;
}
