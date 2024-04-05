import { BASE_URL } from "@/constants";

export class Service {
    static async isServiceAvailable() {
        try {
            const response = await fetch(`${BASE_URL}/projects`);
            return response.status === 200;
        } catch (error) {
            return false;
        }
    }
}