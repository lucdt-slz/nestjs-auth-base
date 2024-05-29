import { RequestsModel, UserModel } from '@model/requests.model';
import { ResponseModel } from '@model/response.model';
import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { assign } from 'lodash';
import { Response } from 'express';
import { ServiceGuard } from '../guards/guards.service';
@UseGuards(AuthGuard('jwt'), ServiceGuard)
@Controller('auth')
export class GetProfileController {
  @Get('profile')
  getProfile(@Res() res: Response, @Req() req: RequestsModel) {
    const resData: ResponseModel<UserModel> = {
      statusCode: HttpStatus.OK,
      success: 'get-profile-success',
    };
    try {
      const { user } = req;
      const userCurrent: UserModel = user;

      assign(resData, {
        data: {
          ...userCurrent,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return res.status(HttpStatus.OK).json(resData);
  }
}
