import { readFile, writeFile } from "fs/promises";

export default async function getBuildNumberAndIncrement(): Promise<string | undefined> {
    try {
        const filePath = new URL('../../public/buildnumber', import.meta.url);
        let buildNumber: any;
        try {
          buildNumber = await readFile(filePath, { encoding: "utf8" });
        } catch {
          buildNumber = await fetch("../../public/buildnumber").then((res) => {res.json()});
        }

        writeFile(filePath, (parseInt(buildNumber) + 1).toString())
        return(buildNumber);
      } catch (err) {
        console.error(err);
      }
}

