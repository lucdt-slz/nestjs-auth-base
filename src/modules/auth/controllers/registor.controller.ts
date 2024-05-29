// import { ResponseModel } from '@model/response.model';
// import {
//   Body,
//   Controller,
//   HttpException,
//   HttpStatus,
//   Post,
//   Res,
// } from '@nestjs/common';
// import { Response } from 'express';
// import { UserService } from '@modules/user/user.service';
// import { assign } from 'lodash';
// import { LoginDto } from '../dto/login.dto';
// import { AuthService } from '../auth.service';

// @Controller('auth')
// export class LoginController {
//   constructor(
//     private readonly userService: UserService,
//     private readonly authService: AuthService,
//   ) {}
//   @Post('login')
//   async login(@Res() res: Response, @Body() userDto: LoginDto) {
//     const resData: ResponseModel<{ token: string }> = {
//       statusCode: HttpStatus.OK,
//       success: 'login-success',
//       data: null,
//     };
//     try {
//       const accountDb = await this.userService.findUserByEmail(userDto.email);
//       if (!accountDb) {
//         throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
//       }
//       console.log(this.authService.hashPassword(userDto.password));
//       const checkHashPassword = await this.authService.comparePassword(
//         userDto.password,
//         accountDb.password,
//       );
//       if (!checkHashPassword) {
//         throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
//       }

//       const token = await this.authService.createTokenAndRefreshToken(
//         accountDb.id,
//       );
//       assign(resData, {
//         data: {
//           token,
//         },
//       });
//     } catch (error) {
//       throw new HttpException(error.message, error.stats);
//     }
//     return res.status(HttpStatus.OK).json(resData);
//   }
// }
