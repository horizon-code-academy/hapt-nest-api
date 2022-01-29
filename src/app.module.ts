import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SubjectModule } from './subject/subject.module';
import { SessionModule } from './session/session.module';
import { ExamModule } from './exam/exam.module';
import { ExamTestModule } from './exam-test/exam-test.module';
import { SessionDateModule } from './session-date/session-date.module';

@Module({
  imports: [
    UserModule,
    SubjectModule,
    SessionModule,
    ExamModule,
    ExamTestModule,
    SessionDateModule,
  ],
})
export class AppModule {}
