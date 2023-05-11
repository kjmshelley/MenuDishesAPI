class API {
    #baseURL = "https://ooh-menu-api.onrender.com";
    #controller = null;

    constructor(baseURL, controller) {
        this.#baseURL = baseURL;
        this.#controller = controller || (new AbortController());
    }

    #formatParams(params) {
        let u = '';
        if (typeof params === "object" && Object.keys(params).length > 0) {
            u += '?';
            for (let v in params) {
                u += `${v}=${params[v]}&`;
            }
        }

        return u;
    }

    async #apiBase(url, method, body) {
        const options = {
            method,
            mode: "same-origin",
            //cache: "no-cache",
            cache: "no-store",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json"
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer",
            signal: this.#controller.signal
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        return await fetch(url, options);
    }

    async get(url, params) {
        try {
            const response = await this.#apiBase(`${this.#baseURL}${url}${this.#formatParams(params)}`, "GET");
            const results = await response.json();
            if (results.status !== "SUCCESS") {
                throw Error(results.status);
            }
            return results.data;
        } finally {}
    }

    async post(url, body) {
        try {
            const response = await this.#apiBase(`${this.#baseURL}${url}`, "POST", body);
            const results = await response.json();
            if (results.status !== "SUCCESS") {
                throw Error(results.status);
            }
            return results.data;
        } finally {}
    }

    async patch(url, body) {
        try {
            const response = await this.#apiBase(`${this.#baseURL}${url}`, "PATCH", body);
            const results = await response.json();
            if (results.status !== "SUCCESS") {
                throw Error(results.status);
            }
            return results.data;
        } finally {}
    }

    async put(url, body) {
        try {
            const response = await this.#apiBase(`${this.#baseURL}${url}`, "PUT", body);
            const results = await response.json();
            if (results.status !== "SUCCESS") {
                throw Error(results.status);
            }
        } finally {}
    }

    async del(url, body) {
        try {
            const response = await this.#apiBase(`${this.#baseURL}${url}`, "DELETE", body);
            const results = await response.json();
            if (results.status !== "SUCCESS") {
                throw Error(results.status);
            }
        } finally {}
    }
}