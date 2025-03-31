import { GpaFormatterPipe } from './gpa-format.pipe';

describe('GpaFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new GpaFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
