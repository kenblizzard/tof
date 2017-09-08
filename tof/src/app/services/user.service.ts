import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {
	

  constructor(private currentUser: User) { }

}
