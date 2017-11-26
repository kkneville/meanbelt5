export class Bid {
  constructor(
    public amt: number = 0,
    public item_id: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}  
