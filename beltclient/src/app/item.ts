export class Item {
  constructor(
    public complaint: string = "",
    public datetime: string = "",
    public date: string = "",
    public time: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}  
