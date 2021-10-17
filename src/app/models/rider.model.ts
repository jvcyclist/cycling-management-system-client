export interface IRider {
    id?: number,
    category?: string,
    first_name?: string,
    last_name?: string,
    license_no?: string
 
}

export class Rider implements IRider {
    constructor(public id?: number,
                public category?: string,
                public first_name?: string,
                public last_name?: string,
                public license_no?: string
    )
    {}
}