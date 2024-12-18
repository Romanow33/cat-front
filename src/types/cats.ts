export interface Cat {
    id: number,
    name: string,
    age: number,
    deleteAt: null,
    userEmail: string,
    breed: {
        id: number,
        name: string
    }
}

export interface Breed {
    name: string;
    id: number
}

export interface UpdateCatInput {
    name?: string;
    id?: number;
    age?: number
}

export interface CreateCatInput {
    name: string;
    age: number;
    breed: number
}