export interface IMedicalCard {
    id?: number,
    rider_id?: number,
    validFromDate?: Date,
    validToDate?: Date,
    comment?: string
}

export class MedicalCard implements IMedicalCard {
    constructor(public id?: number,
                public rider_id?: number,        
                public validFrom?: Date,
                public validTo?: Date,
                public comment?: string
    )
    {}
}