export interface User {
    id: number;
    id_number: string;
    name: string;
    password: string;
    insurance_entity: string;
    blood_type: string;
    allergies: string[];
    underlying_diseases: string[];
    fingerprint: string;
    token?: string;
}