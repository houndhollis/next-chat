import { User } from "firebase/auth";

export interface IMessage {
  sender: string;
  photoURL: string;
  text: string;
  timestamp: {
    nanoseconds: number;
    seconds: number;
  }
}

export interface IChat {
  id : string;
  users: string[];
  userData: User[];
  timestamp: {
    nanoseconds: number;
    seconds: number;
  }
}