export const pipe = (...fns) => fns.reduce((f, g) => x => f(g(x)))
