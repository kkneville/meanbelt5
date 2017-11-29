export class User {
  constructor(
    public name: string = "",
    public level: number = 1,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}  
