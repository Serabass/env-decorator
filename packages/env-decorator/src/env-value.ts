import 'reflect-metadata';

let typeProcessors = new WeakMap<any, (v: string) => any>();

export function envValue(target: Function, propertyKey: string | symbol) {
  const propertyType = Reflect.getMetadata('design:type', target, propertyKey);
  const defaultValue = target[propertyKey];

  Object.defineProperty(target, propertyKey, {
    get() {
      const k = propertyKey as string;

      if (!(k in process.env)) // tslint:disable-line:no-process-env
        return defaultValue;

      const v = process.env[k]; // tslint:disable-line:no-process-env

      if (typeProcessors.has(propertyType)) {
        return typeProcessors.get(propertyType)(v);
      }

      return v;
    },
    enumerable: true,
  });
}

envValue.registerProcessor = function(type: any, fn: (v: string) => any) {
  typeProcessors.set(type, fn);
};

envValue.registerProcessor(Boolean, (v: string) => {
  switch (v.toLowerCase()) {
    case 'true':
    case '1':
    case 'on':
    case 'yes':
      return true;
    case 'false':
    case '0':
    case 'off':
    case 'no':
      return false;
    default:
      throw new Error(`Unknown boolean value: ${v}`);
    // ... throw an error, set false by default or do nothing
  }
});

envValue.registerProcessor(Date, (v: string) => new Date(v));
envValue.registerProcessor(Number, (v: string) => parseFloat(v));
