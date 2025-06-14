export const stringifyISODate = (date: Date | undefined): string => {
  return `${date?.toISOString()}`;
};

export function stringifyObjectDates<T>(obj: T): T {
  if (obj instanceof Date) {
    return obj.toISOString() as any;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => stringifyObjectDates(item)) as any;
  }
  if (obj && typeof obj === 'object') {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = stringifyObjectDates(value);
    }
    return result;
  }
  return obj;
}
