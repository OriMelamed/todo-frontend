import httpClientService from '.HttpClientService';

class TaskService {
    resource = '/tasks';

    async getTasks() {
        return httpClientService.get(this.resource);
    } å
}

export const taskService = new TaskService();