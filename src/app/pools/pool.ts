export class Pool {
    id: number;
    name: string;
    created: Date;

    constructor(
        name: string = 'Poule A',
        created: Date = new Date()) {
        this.name = name;
        this.created = created;
    }
}