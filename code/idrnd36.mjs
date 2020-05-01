export const create_idrnd36 = (n, sep='-') =>
  Array.from(
    crypto.getRandomValues(new Uint32Array(n || 1)),
    v => v.toString(36),
  ).join(sep)


