
export function isEmail(v: string) {
  return /\S+@\S+\.\S+/.test(v);
}

export function isNotEmpty(v: string) {
  return v.trim().length > 0;
}
