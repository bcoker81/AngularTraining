export class Project {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public imageUrl: string,
    public contractThypeId: number,
    public contractSignedOn: Date,
    public budget: number,
    public isActive: boolean,
    public editing: boolean
  ) {}
}
