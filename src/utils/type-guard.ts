export function hasValue<T>(obj: T | void | null | undefined): obj is T {
  return typeof obj !== 'undefined' && obj !== null;
}
