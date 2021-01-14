import { Photo } from './photo';

export interface User {
    id: number;
    name: string;
    surname: string;
    username: string;
    birthday?: Date;
    age?: number;
    createdAt: Date;
    lastActive: Date;
    photoUrl?: string;
    photos?: Photo[];
}
