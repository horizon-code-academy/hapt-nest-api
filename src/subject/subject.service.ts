import { Injectable } from '@nestjs/common';
import Subject from './subject.interface';
import { subject } from '../../test/fake/subject.fake';

@Injectable()
export class SubjectService {
  getSubject(): Subject {
    return subject;
  }
}
