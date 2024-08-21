export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never
export type SelectedOptional<T, K extends keyof T> = Expand<Omit<T, K> & Partial<Pick<T, K>>>
