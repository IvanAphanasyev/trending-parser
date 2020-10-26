import { get } from "https";

const request = (url: string): Promise<Buffer> => {
   return new Promise((resolve, reject) => {
      get(url, (response) => {
         const arr: Buffer[] = [];
         response.on("error", (err) => {
            reject(err);
         });
         response.on("data", (chunk) => {
            arr.push(chunk);
         });
         response.on("end", () => {
            const buffer = Buffer.concat(arr);
            resolve(buffer);
         });
      });
   });
};
export { request };
