export interface IRider {
    id?: number,
    category?: string,
    firstName?: string,
    lastName?: string,
    licenseNo?: string
 
}

export class Rider implements IRider {
    constructor(public id?: number,
                public category?: string,
                public firstName?: string,
                public lastName?: string,
                public licenseNo?: string
    )
    {}
}