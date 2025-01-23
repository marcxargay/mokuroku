export interface Category {
    name: string;
    values: Value[]
}

export interface Value {
    cat: string;
    jap: string;
}
export type Temari = Record<string, Category>