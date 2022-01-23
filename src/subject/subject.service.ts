import { HttpException, Injectable } from '@nestjs/common';
import Subject from './subject.interface';
import { subjectList } from '../../test/fake/subject.fake';

@Injectable()
export class SubjectService {
  getSubject(id: string): Subject {
    const result = subjectList.find((u) => u._id === id);
    if (result) return result;
    else throw new HttpException('Not found', 404);
  }

  getSubjects(name: string, phone: string, role: string): Subject[] {
    if (name || phone || role)
      return subjectList.filter(
        (u) =>
          u.phone === phone ||
          (u.firstName + ' ' + u.lastName).includes(name) ||
          u.roles.includes(role),
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
