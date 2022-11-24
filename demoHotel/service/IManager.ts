export interface IManager<T> {
    add(t: T): void;

    edit(id: number, t: T): void;

    remove(id: number): void;

    findById(id: number): number;

    findAll(): T[];
}