import { BASE_URL } from "@/constants";

export class Image {
    public path: string;

    constructor(id: number) {
        this.path = `${BASE_URL}/images/${id}`;
    }
}