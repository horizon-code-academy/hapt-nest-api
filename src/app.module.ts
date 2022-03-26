import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SubjectModule } from './subject/subject.module';
import { SessionModule } from './session/session.module';
import { ExamModule } from './exam/exam.module';
import { ExamTestModule } from './exam-test/exam-test.module';
import { SessionDateModule } from './session-date/session-date.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CurrentUserInterceptor } from './auth/user.interceptor';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/haptdb'),
    UserModule,
    SubjectModule,
    SessionModule,
    ExamModule,
    ExamTestModule,
    SessionDateModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInterceptor,
    },
  ],
})
export class AppModule {}
