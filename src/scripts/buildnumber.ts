import { readFile, writeFile } from "fs/promises";

export default async function getBuildNumberAndIncrement(): Promise<string | undefined> {
    try {
        const filePath = new URL('../../public/buildnumber', import.meta.url);
        const contents = await readFile(filePath, { encoding: "utf8" });

        writeFile(filePath, (parseInt(contents) + 1).toString())
        return(contents);
      } catch (err) {
        console.error(err);
      }
}

