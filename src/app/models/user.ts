import { Department } from "./department";
import { Role } from "./role";

export interface User {
    id: number,
    name: string,
    email: string,
    contact: string,
    password?: string,
    department: Department,
    role: Role
}
