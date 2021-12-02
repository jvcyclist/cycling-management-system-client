import { Journey } from "./journey.model";

export interface IUser {
    id?: number,
    username?: string,
    email?: string,
    accountStatus?: string,
    firstName?: string,
    lastName?: string
}

export class User implements IUser {
    constructor(public id?: number,
                public username?: string,
                public email?: string,
                public accountStatus?: string,
                public firstName?: string,
                public lastName?: string
    )
    {}
}