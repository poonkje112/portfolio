import { BASE_URL } from "@/constants";

export class Image {
    public path: string;
    public isCover: boolean;

    constructor(id: number, isCover: number) {
        this.path = `${BASE_URL}/images/${id}`;
        this.isCover = isCover === 1;
    }
}