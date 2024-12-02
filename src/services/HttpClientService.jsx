import axios, { AxiosError, HttpStatusCode } from 'axios';

class HttpClientService {
    axiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3000',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async get(resource) {
        try {
            const response = await this.axiosInstance.get(resource);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }
}
