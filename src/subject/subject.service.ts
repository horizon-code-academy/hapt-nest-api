import { HttpException, Injectable } from '@nestjs/common';
import Subject from './subject.interface';
import { subjectList } from '../../test/fake/subject.fake';
import { type } from 'os';

@Injectable()
export class SubjectService {
  getSubject(id: string): Subject {
    const result = subjectList.find((u) => u._id === id);
    if (result) return result;
    else throw new HttpException('Not found', 404);
  }

  getSubjects(name: string, field: string, description: string): Subject[] {
    if (name || field || description)
      return subjectList.filter(
        (u) =>
          u.field === field ||
          u.name.includes(name) ||
          u.description.includes(description),
      );
    else return subjectList;
  }

  createSubject(subject: Partial<Subject>): Subject {
    return subject as Subject;
  }

  updateSubject(subject: Partial<Subject>): Subject {
    return subject as Subject;
  }

  deleteSubject(id: string): void {
    console.log('DELETED ' + id);
  }
}
