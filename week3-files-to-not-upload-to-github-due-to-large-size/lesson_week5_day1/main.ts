
/** function overloading */
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") return a + b + "";
  if (typeof a === "number" && typeof b === "number") return a + b;
  return -1;
}
