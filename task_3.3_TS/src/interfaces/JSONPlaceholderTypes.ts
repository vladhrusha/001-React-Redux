interface IUser {
  userId: number,
  id: number,
  name: string,
  username: string
}
export interface IUsers extends Array<IUser>{}

interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
export interface ITodos extends Array<ITodo>{}

export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string
}
export interface IPosts extends Array<IPost>{}

export interface IProps {
  users: IUsers,
  todos: ITodos,
  posts: IPosts
}

export interface IPostsProps {
  posts: IPosts
}
export interface IUsersProps {
  users: IUsers
}
export interface ITodosProps {
  todos: ITodos
}


