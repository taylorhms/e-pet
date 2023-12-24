import { User } from "./user";

export interface Service {
    id: number,
    user: User
}

export type Services = Service[];