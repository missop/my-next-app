interface User {
  id: string
  name: string
  age: string
}

interface IResponse<T> {
  code: string
  extra: any
  data: T
}
