export interface Product {
  ProductId: number,
  ColorIdx: number,
  ProductCode: string,
  ProductDescription: string,
  Price: number,
  VoDatum: string | null,
  IsHeavy: boolean,
  RestrictedLands:  string | null,
  IsFsk: boolean,
  IsOrdergruppeC: boolean,
}
