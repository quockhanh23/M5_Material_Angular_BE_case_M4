import {User} from "./user";
import {StatusHome} from "./status-home";
import {Category} from "./category";

export interface Home {
  id?: string
  name?: string
  address?: string
  category?: Category
  bedroom?: string
  showerRoom?: string
  description?: string
  price?: string
  statusHome?: StatusHome
  user?: User
  numberOfTurns?: string
  area?: string
}
