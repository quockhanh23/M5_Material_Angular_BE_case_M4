import {User} from "./user";
import {Home} from "./home";

export interface Comment {
  id?: string,
  content?: string
  time?: string
  home?: Home
  user?: User
}
