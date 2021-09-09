/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { AppModuleV1 } from '../v1/app.v1.module';

const APPLICATION_PREFIX_V1 = 'jukeapi/v1';

const routes: Routes = [
  {
    path: `/${APPLICATION_PREFIX_V1}`,
    children: [
      {
        path: '/',
        module: AppModuleV1,
      },
    ],
  },
];

@Module({
  imports: [RouterModule.forRoutes(routes), AppModuleV1],
})
export class AppRouter {}
