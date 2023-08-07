type Url = string

type TProduct = {
  id: number
  name: string
  price: number
  image: Url
  attributes: string
}


type ProductResponse =  {
    command: string
    rowCount: number
	  oid: null
    rows: TProduct[]
    fields: []
    _parsers: []
    _types: {}
    RowCtor:null
    rowAsArray: boolean
}