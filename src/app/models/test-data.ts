/**
 * Dados de teste.
 */

import { Departments } from "./department";
import { Roles } from "./role";
import { Services } from "./service";
import { Users } from "./user";

const roles: Roles = [
    { id: 1, name: 'admin' },
    { id: 2, name: 'gerente' },
    { id: 3, name: 'vendedor' }
];

const departments: Departments = [
    { id: 1, name: 'vendas' }
];

const users: Users = [
    { id: 1, name: 'Daniel Fonseca', email: 'daniel.fonseca@example.com', contact: '(91) 98765-4321', department: departments[0], role: roles[0] },
    { id: 2, name: 'Henrique Teixeira', email: 'henrique.teixeira@example.com', contact: '(91) 91234-5678', department: departments[0], role: roles[1] },
    { id: 3, name: 'Taylor Sousa', email: 'taylor.sousa@example.com', contact: '(91) 91011-1213', department: departments[0], role: roles[2] }
]

const services: Services = [
    { id: 1, user: users[0] },
    { id: 2, user: users[1] },
    { id: 3, user: users[2] },
]

export const testData = {
    roles, departments, users, services
};