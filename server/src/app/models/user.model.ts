import {Document, Schema, Model, model} from 'mongoose';
import user from '../class/user.class';

export interface UserModel extends user, Document{
  getName: string;
}

export let  UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    sex: String,
    birthday: String
});


export const Users : Model<UserModel> = model<UserModel>("users", UserSchema)