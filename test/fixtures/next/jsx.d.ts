// Minimal JSX typings so the fixture type-checks without installing React
declare namespace JSX {
  interface Element {
    type: string;
  }
  interface IntrinsicElements {
    [name: string]: Record<string, unknown>;
  }
}
