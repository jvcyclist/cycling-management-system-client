export interface ICategory {
    id?: number,
    name?: string,
    gender?: string
 
}

export class Category implements ICategory {
    constructor(public id?: number,
                public name?: string,
                public gender?: string,
    )
    {}
}