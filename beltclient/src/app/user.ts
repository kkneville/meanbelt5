export class User {
  constructor(
    public name: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}  
