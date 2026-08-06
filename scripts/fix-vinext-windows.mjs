import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

if (process.platform === "win32") {
  const cacheFile = fileURLToPath(
    new URL("../node_modules/vinext/dist/server/static-file-cache.js", import.meta.url),
  );
  const source = await readFile(cacheFile, "utf8");
  const original = "relativePath: path.relative(base, batch[j]),";
  const patched = 'relativePath: path.relative(base, batch[j]).replaceAll("\\\\", "/"),';

  if (source.includes(original)) {
    await writeFile(cacheFile, source.replace(original, patched), "utf8");
    console.log("Applied Vinext Windows static-asset compatibility fix.");
  } else if (!source.includes(patched)) {
    throw new Error("Vinext static-file cache changed; compatibility fix needs review.");
  }
}
