import { ActionData } from "../types";

export type NextFn = () => Promise<any>;

export type MiddlewareFn<TContext = {}> = (
  action: ActionData<TContext>,
  next: NextFn,
) => Promise<any>;

export interface MiddlewareInterface<TContext = {}> {
  use: MiddlewareFn<TContext>;
}
export interface MiddlewareClass<TContext = {}> {
  new (...args: any[]): MiddlewareInterface<TContext>;
}

export type Middleware<TContext = {}> = MiddlewareFn<TContext> | MiddlewareClass<TContext>;
