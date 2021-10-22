export interface IAddress {
    id?: number,
    homeNo?: string,
    zipCode?: string,
    street? : string,
    city?: string,
    voivodian?: string

}

export class Address implements IAddress {
    constructor(public id?: number,
                public homeNo?: string,
                public street?: string,
                public zipCode?: string,
                public city?: string,
                public voivodian?: string
    )
    {}
}