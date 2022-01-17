/// <reference path="user.d.ts"/>
export default async function handler(req: any, res: any) {
  const data: IResponse<User> = {
    data: {
      name: '',
      age: '',
      id: '1234',
    },
    code: '0',
    extra: {},
  }
  res.status(200).json(data)
}
