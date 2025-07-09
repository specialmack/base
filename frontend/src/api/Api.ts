import { sampleLogging } from "@base/common";

const baseUrl = `http://localhost:3088`;

class Api {
  constructor() {}

  async pingBackend(): Promise<string> {
    console.log("PING");
    sampleLogging();

    const requestUrl = `${baseUrl}/ping`;

    return fetch(requestUrl, {
      method: "GET",
    }).then((response) => {
      return response.text() as Promise<string>;
    });
  }
}

export const API = new Api();
