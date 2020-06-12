import { ENV } from '../src/env';

describe('envValue tests', () => {
  it('string value', () => {
    expect(typeof ENV.STR_VALUE).toBe('string');
    expect(ENV.STR_VALUE).toBe('I believe i can fly');
  });

  it('boolean value true', () => {
    expect(typeof ENV.BOOLEAN_TRUE1).toBe('boolean');
    expect(ENV.BOOLEAN_TRUE1).toBe(true);
    expect(typeof ENV.BOOLEAN_TRUE2).toBe('boolean');
    expect(ENV.BOOLEAN_TRUE2).toBe(true);
    expect(typeof ENV.BOOLEAN_TRUE3).toBe('boolean');
    expect(ENV.BOOLEAN_TRUE3).toBe(true);
    expect(typeof ENV.BOOLEAN_TRUE4).toBe('boolean');
    expect(ENV.BOOLEAN_TRUE4).toBe(true);
  });

  it('boolean value false', () => {
    expect(typeof ENV.BOOLEAN_FALSE1).toBe('boolean');
    expect(ENV.BOOLEAN_FALSE1).toBe(false);
    expect(typeof ENV.BOOLEAN_FALSE2).toBe('boolean');
    expect(ENV.BOOLEAN_FALSE2).toBe(false);
    expect(typeof ENV.BOOLEAN_FALSE3).toBe('boolean');
    expect(ENV.BOOLEAN_FALSE3).toBe(false);
    expect(typeof ENV.BOOLEAN_FALSE4).toBe('boolean');
    expect(ENV.BOOLEAN_FALSE4).toBe(false);
  });

  it('wrong boolean value', () => {
    expect(() => ENV.BOOLEAN_WRONG).toThrow('Unknown boolean value: WUT');
  });

  it('number value', () => {
    expect(typeof ENV.NUM_VALUE).toBe('number');
    expect(ENV.NUM_VALUE).toBe(120.0);
  });

  it('datetime value', () => {
    expect(typeof ENV.DATETIME_VALUE).toBe('object');
    expect(ENV.DATETIME_VALUE instanceof Date).toBeTruthy();
    expect(ENV.DATETIME_VALUE.getFullYear()).toBe(1991);
    expect(ENV.DATETIME_VALUE.getMonth()).toBe(4);
    expect(ENV.DATETIME_VALUE.getDate()).toBe(22);
  });

  it('date value', () => {
    expect(typeof ENV.DATE_VALUE).toBe('object');
    expect(ENV.DATE_VALUE instanceof Date).toBeTruthy();
    expect(ENV.DATE_VALUE.getFullYear()).toBe(1991);
    expect(ENV.DATE_VALUE.getMonth()).toBe(4);
    expect(ENV.DATE_VALUE.getDate()).toBe(22);
    expect(ENV.DATE_VALUE.getUTCHours()).toBe(0);
    expect(ENV.DATE_VALUE.getUTCMinutes()).toBe(0);
    expect(ENV.DATE_VALUE.getUTCSeconds()).toBe(0);
    expect(ENV.DATE_VALUE.toDateString()).toBe('Wed May 22 1991');
  });

  it('default value', () => {
    expect(typeof ENV.WITH_DEFAULT).toBe('string');
    expect(ENV.WITH_DEFAULT).toBe('VALUE');
    expect(typeof ENV.WITH_DEFAULT_BOOL).toBe('boolean');
    expect(ENV.WITH_DEFAULT_BOOL).toBe(true);
  });

  it('undefined string value', () => {
    expect(typeof ENV.UNDEF).toBe('string');
    expect(ENV.UNDEF).toBe('undefined');
  });

  it('add custom processor', () => {
    // envValue.registerProcessor(Moment, (v: string) => moment(v));
    // expect(typeof ENV.MOMENT).toBe('object');
    // expect(ENV.MOMENT instanceof Moment).toBeTruthy();
  });
});
