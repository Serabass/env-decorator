import { envValue } from './env-value';
import './setenv';

export class ENV {
  @envValue
  public static STR_VALUE: string;

  @envValue
  public static BOOLEAN_TRUE1: boolean;

  @envValue
  public static BOOLEAN_TRUE2: boolean;

  @envValue
  public static BOOLEAN_TRUE3: boolean;

  @envValue
  public static BOOLEAN_TRUE4: boolean;

  @envValue
  public static BOOLEAN_FALSE1: boolean;

  @envValue
  public static BOOLEAN_FALSE2: boolean;

  @envValue
  public static BOOLEAN_FALSE3: boolean;

  @envValue
  public static BOOLEAN_FALSE4: boolean;

  @envValue
  public static BOOLEAN_WRONG: boolean;

  @envValue
  public static NUM_VALUE: number;

  @envValue
  public static DATETIME_VALUE: Date;

  @envValue
  public static DATE_VALUE: Date;

  @envValue
  public static WITH_DEFAULT: string = 'VALUE';

  @envValue
  public static UNDEF: string = 'undefined';

  @envValue
  public static WITH_DEFAULT_BOOL: boolean = true;
}
