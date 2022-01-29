export default interface Subject {
  _id: string;
  name: string;
  field: string;
  nb_hour: number;
  price_hour: number;
  description?: string;
}
