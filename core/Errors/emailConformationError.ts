export class EmailConformationError extends Error {
    constructor(...params: Array<any>) {
        super(...params)
        this.name = "email conformation error"
        this.message = "email connected to your account was not confirmed"
    }
}