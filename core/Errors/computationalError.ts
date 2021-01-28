export class ComputationalError extends Error {
    constructor(...params: Array<any>) {
        super(...params)
        this.name = "computational error"
        this.message = "there was a dependency problem or a computation problem which caused this error. Please check the vibe-core."
    }
}