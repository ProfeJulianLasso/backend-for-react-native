import { NewUserCommand } from '@domain';
import { IsEmail, IsString, Matches, MaxLength } from 'class-validator';

export class NewUserDto implements NewUserCommand {
  @IsString({ message: 'Name must be a string' })
  @MaxLength(100, { message: 'Name is too long' })
  name: string;

  @IsString({ message: 'Username must be a string' })
  username: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number',
  })
  password: string;

  @IsEmail({}, { message: 'Email must be a valid email' })
  @MaxLength(500, { message: 'Email is too long' })
  email: string;
}
