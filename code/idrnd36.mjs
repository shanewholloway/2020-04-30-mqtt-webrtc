export const create_crnd36 = (n, sep='-') =>
  Array.from(
    crypto.getRandomValues(new Uint32Array(n || 1)),
    v => v.toString(36),
  ).join(sep)


export const create_rnd36 = () =>
  Math.random().toString(36).slice(2)
