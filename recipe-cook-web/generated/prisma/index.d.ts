
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model api_keys
 * 
 */
export type api_keys = $Result.DefaultSelection<Prisma.$api_keysPayload>
/**
 * Model migrations
 * 
 */
export type migrations = $Result.DefaultSelection<Prisma.$migrationsPayload>
/**
 * Model recipes
 * 
 */
export type recipes = $Result.DefaultSelection<Prisma.$recipesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Api_keys
 * const api_keys = await prisma.api_keys.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Api_keys
   * const api_keys = await prisma.api_keys.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.api_keys`: Exposes CRUD operations for the **api_keys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_keys
    * const api_keys = await prisma.api_keys.findMany()
    * ```
    */
  get api_keys(): Prisma.api_keysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipes`: Exposes CRUD operations for the **recipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipes.findMany()
    * ```
    */
  get recipes(): Prisma.recipesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    api_keys: 'api_keys',
    migrations: 'migrations',
    recipes: 'recipes',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "api_keys" | "migrations" | "recipes" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      api_keys: {
        payload: Prisma.$api_keysPayload<ExtArgs>
        fields: Prisma.api_keysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.api_keysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.api_keysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keysPayload>
          }
          findFirst: {
            args: Prisma.api_keysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.api_keysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keysPayload>
          }
          findMany: {
            args: Prisma.api_keysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keysPayload>[]
          }
          create: {
            args: Prisma.api_keysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keysPayload>
          }
          createMany: {
            args: Prisma.api_keysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.api_keysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keysPayload>
          }
          update: {
            args: Prisma.api_keysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keysPayload>
          }
          deleteMany: {
            args: Prisma.api_keysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.api_keysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.api_keysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keysPayload>
          }
          aggregate: {
            args: Prisma.Api_keysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi_keys>
          }
          groupBy: {
            args: Prisma.api_keysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Api_keysGroupByOutputType>[]
          }
          count: {
            args: Prisma.api_keysCountArgs<ExtArgs>
            result: $Utils.Optional<Api_keysCountAggregateOutputType> | number
          }
        }
      }
      migrations: {
        payload: Prisma.$migrationsPayload<ExtArgs>
        fields: Prisma.migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.migrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findFirst: {
            args: Prisma.migrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findMany: {
            args: Prisma.migrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[]
          }
          create: {
            args: Prisma.migrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          createMany: {
            args: Prisma.migrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.migrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          update: {
            args: Prisma.migrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          deleteMany: {
            args: Prisma.migrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.migrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.migrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          aggregate: {
            args: Prisma.MigrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMigrations>
          }
          groupBy: {
            args: Prisma.migrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MigrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.migrationsCountArgs<ExtArgs>
            result: $Utils.Optional<MigrationsCountAggregateOutputType> | number
          }
        }
      }
      recipes: {
        payload: Prisma.$recipesPayload<ExtArgs>
        fields: Prisma.recipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          findFirst: {
            args: Prisma.recipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          findMany: {
            args: Prisma.recipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>[]
          }
          create: {
            args: Prisma.recipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          createMany: {
            args: Prisma.recipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.recipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          update: {
            args: Prisma.recipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          deleteMany: {
            args: Prisma.recipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.recipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          aggregate: {
            args: Prisma.RecipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipes>
          }
          groupBy: {
            args: Prisma.recipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipesCountArgs<ExtArgs>
            result: $Utils.Optional<RecipesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    api_keys?: api_keysOmit
    migrations?: migrationsOmit
    recipes?: recipesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    api_keys: number
    recipes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_keys?: boolean | UsersCountOutputTypeCountApi_keysArgs
    recipes?: boolean | UsersCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApi_keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_keysWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model api_keys
   */

  export type AggregateApi_keys = {
    _count: Api_keysCountAggregateOutputType | null
    _avg: Api_keysAvgAggregateOutputType | null
    _sum: Api_keysSumAggregateOutputType | null
    _min: Api_keysMinAggregateOutputType | null
    _max: Api_keysMaxAggregateOutputType | null
  }

  export type Api_keysAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Api_keysSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Api_keysMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    key: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Api_keysMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    key: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Api_keysCountAggregateOutputType = {
    id: number
    user_id: number
    key: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Api_keysAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Api_keysSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Api_keysMinAggregateInputType = {
    id?: true
    user_id?: true
    key?: true
    created_at?: true
    updated_at?: true
  }

  export type Api_keysMaxAggregateInputType = {
    id?: true
    user_id?: true
    key?: true
    created_at?: true
    updated_at?: true
  }

  export type Api_keysCountAggregateInputType = {
    id?: true
    user_id?: true
    key?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Api_keysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_keys to aggregate.
     */
    where?: api_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     */
    orderBy?: api_keysOrderByWithRelationInput | api_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: api_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned api_keys
    **/
    _count?: true | Api_keysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Api_keysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Api_keysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_keysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_keysMaxAggregateInputType
  }

  export type GetApi_keysAggregateType<T extends Api_keysAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_keys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_keys[P]>
      : GetScalarType<T[P], AggregateApi_keys[P]>
  }




  export type api_keysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_keysWhereInput
    orderBy?: api_keysOrderByWithAggregationInput | api_keysOrderByWithAggregationInput[]
    by: Api_keysScalarFieldEnum[] | Api_keysScalarFieldEnum
    having?: api_keysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_keysCountAggregateInputType | true
    _avg?: Api_keysAvgAggregateInputType
    _sum?: Api_keysSumAggregateInputType
    _min?: Api_keysMinAggregateInputType
    _max?: Api_keysMaxAggregateInputType
  }

  export type Api_keysGroupByOutputType = {
    id: number
    user_id: number
    key: string
    created_at: Date | null
    updated_at: Date | null
    _count: Api_keysCountAggregateOutputType | null
    _avg: Api_keysAvgAggregateOutputType | null
    _sum: Api_keysSumAggregateOutputType | null
    _min: Api_keysMinAggregateOutputType | null
    _max: Api_keysMaxAggregateOutputType | null
  }

  type GetApi_keysGroupByPayload<T extends api_keysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Api_keysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_keysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_keysGroupByOutputType[P]>
            : GetScalarType<T[P], Api_keysGroupByOutputType[P]>
        }
      >
    >


  export type api_keysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    key?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_keys"]>



  export type api_keysSelectScalar = {
    id?: boolean
    user_id?: boolean
    key?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type api_keysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "key" | "created_at" | "updated_at", ExtArgs["result"]["api_keys"]>
  export type api_keysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $api_keysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "api_keys"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      key: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["api_keys"]>
    composites: {}
  }

  type api_keysGetPayload<S extends boolean | null | undefined | api_keysDefaultArgs> = $Result.GetResult<Prisma.$api_keysPayload, S>

  type api_keysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<api_keysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Api_keysCountAggregateInputType | true
    }

  export interface api_keysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['api_keys'], meta: { name: 'api_keys' } }
    /**
     * Find zero or one Api_keys that matches the filter.
     * @param {api_keysFindUniqueArgs} args - Arguments to find a Api_keys
     * @example
     * // Get one Api_keys
     * const api_keys = await prisma.api_keys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends api_keysFindUniqueArgs>(args: SelectSubset<T, api_keysFindUniqueArgs<ExtArgs>>): Prisma__api_keysClient<$Result.GetResult<Prisma.$api_keysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api_keys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {api_keysFindUniqueOrThrowArgs} args - Arguments to find a Api_keys
     * @example
     * // Get one Api_keys
     * const api_keys = await prisma.api_keys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends api_keysFindUniqueOrThrowArgs>(args: SelectSubset<T, api_keysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__api_keysClient<$Result.GetResult<Prisma.$api_keysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keysFindFirstArgs} args - Arguments to find a Api_keys
     * @example
     * // Get one Api_keys
     * const api_keys = await prisma.api_keys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends api_keysFindFirstArgs>(args?: SelectSubset<T, api_keysFindFirstArgs<ExtArgs>>): Prisma__api_keysClient<$Result.GetResult<Prisma.$api_keysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_keys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keysFindFirstOrThrowArgs} args - Arguments to find a Api_keys
     * @example
     * // Get one Api_keys
     * const api_keys = await prisma.api_keys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends api_keysFindFirstOrThrowArgs>(args?: SelectSubset<T, api_keysFindFirstOrThrowArgs<ExtArgs>>): Prisma__api_keysClient<$Result.GetResult<Prisma.$api_keysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Api_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_keys
     * const api_keys = await prisma.api_keys.findMany()
     * 
     * // Get first 10 Api_keys
     * const api_keys = await prisma.api_keys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const api_keysWithIdOnly = await prisma.api_keys.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends api_keysFindManyArgs>(args?: SelectSubset<T, api_keysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_keysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api_keys.
     * @param {api_keysCreateArgs} args - Arguments to create a Api_keys.
     * @example
     * // Create one Api_keys
     * const Api_keys = await prisma.api_keys.create({
     *   data: {
     *     // ... data to create a Api_keys
     *   }
     * })
     * 
     */
    create<T extends api_keysCreateArgs>(args: SelectSubset<T, api_keysCreateArgs<ExtArgs>>): Prisma__api_keysClient<$Result.GetResult<Prisma.$api_keysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Api_keys.
     * @param {api_keysCreateManyArgs} args - Arguments to create many Api_keys.
     * @example
     * // Create many Api_keys
     * const api_keys = await prisma.api_keys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends api_keysCreateManyArgs>(args?: SelectSubset<T, api_keysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Api_keys.
     * @param {api_keysDeleteArgs} args - Arguments to delete one Api_keys.
     * @example
     * // Delete one Api_keys
     * const Api_keys = await prisma.api_keys.delete({
     *   where: {
     *     // ... filter to delete one Api_keys
     *   }
     * })
     * 
     */
    delete<T extends api_keysDeleteArgs>(args: SelectSubset<T, api_keysDeleteArgs<ExtArgs>>): Prisma__api_keysClient<$Result.GetResult<Prisma.$api_keysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api_keys.
     * @param {api_keysUpdateArgs} args - Arguments to update one Api_keys.
     * @example
     * // Update one Api_keys
     * const api_keys = await prisma.api_keys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends api_keysUpdateArgs>(args: SelectSubset<T, api_keysUpdateArgs<ExtArgs>>): Prisma__api_keysClient<$Result.GetResult<Prisma.$api_keysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Api_keys.
     * @param {api_keysDeleteManyArgs} args - Arguments to filter Api_keys to delete.
     * @example
     * // Delete a few Api_keys
     * const { count } = await prisma.api_keys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends api_keysDeleteManyArgs>(args?: SelectSubset<T, api_keysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_keys
     * const api_keys = await prisma.api_keys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends api_keysUpdateManyArgs>(args: SelectSubset<T, api_keysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Api_keys.
     * @param {api_keysUpsertArgs} args - Arguments to update or create a Api_keys.
     * @example
     * // Update or create a Api_keys
     * const api_keys = await prisma.api_keys.upsert({
     *   create: {
     *     // ... data to create a Api_keys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_keys we want to update
     *   }
     * })
     */
    upsert<T extends api_keysUpsertArgs>(args: SelectSubset<T, api_keysUpsertArgs<ExtArgs>>): Prisma__api_keysClient<$Result.GetResult<Prisma.$api_keysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Api_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keysCountArgs} args - Arguments to filter Api_keys to count.
     * @example
     * // Count the number of Api_keys
     * const count = await prisma.api_keys.count({
     *   where: {
     *     // ... the filter for the Api_keys we want to count
     *   }
     * })
    **/
    count<T extends api_keysCountArgs>(
      args?: Subset<T, api_keysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_keysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_keysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Api_keysAggregateArgs>(args: Subset<T, Api_keysAggregateArgs>): Prisma.PrismaPromise<GetApi_keysAggregateType<T>>

    /**
     * Group by Api_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends api_keysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_keysGroupByArgs['orderBy'] }
        : { orderBy?: api_keysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, api_keysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_keysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the api_keys model
   */
  readonly fields: api_keysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_keys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_keysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the api_keys model
   */
  interface api_keysFieldRefs {
    readonly id: FieldRef<"api_keys", 'Int'>
    readonly user_id: FieldRef<"api_keys", 'Int'>
    readonly key: FieldRef<"api_keys", 'String'>
    readonly created_at: FieldRef<"api_keys", 'DateTime'>
    readonly updated_at: FieldRef<"api_keys", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * api_keys findUnique
   */
  export type api_keysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
    /**
     * Filter, which api_keys to fetch.
     */
    where: api_keysWhereUniqueInput
  }

  /**
   * api_keys findUniqueOrThrow
   */
  export type api_keysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
    /**
     * Filter, which api_keys to fetch.
     */
    where: api_keysWhereUniqueInput
  }

  /**
   * api_keys findFirst
   */
  export type api_keysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
    /**
     * Filter, which api_keys to fetch.
     */
    where?: api_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     */
    orderBy?: api_keysOrderByWithRelationInput | api_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_keys.
     */
    cursor?: api_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_keys.
     */
    distinct?: Api_keysScalarFieldEnum | Api_keysScalarFieldEnum[]
  }

  /**
   * api_keys findFirstOrThrow
   */
  export type api_keysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
    /**
     * Filter, which api_keys to fetch.
     */
    where?: api_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     */
    orderBy?: api_keysOrderByWithRelationInput | api_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_keys.
     */
    cursor?: api_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_keys.
     */
    distinct?: Api_keysScalarFieldEnum | Api_keysScalarFieldEnum[]
  }

  /**
   * api_keys findMany
   */
  export type api_keysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
    /**
     * Filter, which api_keys to fetch.
     */
    where?: api_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     */
    orderBy?: api_keysOrderByWithRelationInput | api_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing api_keys.
     */
    cursor?: api_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     */
    skip?: number
    distinct?: Api_keysScalarFieldEnum | Api_keysScalarFieldEnum[]
  }

  /**
   * api_keys create
   */
  export type api_keysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
    /**
     * The data needed to create a api_keys.
     */
    data: XOR<api_keysCreateInput, api_keysUncheckedCreateInput>
  }

  /**
   * api_keys createMany
   */
  export type api_keysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many api_keys.
     */
    data: api_keysCreateManyInput | api_keysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * api_keys update
   */
  export type api_keysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
    /**
     * The data needed to update a api_keys.
     */
    data: XOR<api_keysUpdateInput, api_keysUncheckedUpdateInput>
    /**
     * Choose, which api_keys to update.
     */
    where: api_keysWhereUniqueInput
  }

  /**
   * api_keys updateMany
   */
  export type api_keysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update api_keys.
     */
    data: XOR<api_keysUpdateManyMutationInput, api_keysUncheckedUpdateManyInput>
    /**
     * Filter which api_keys to update
     */
    where?: api_keysWhereInput
    /**
     * Limit how many api_keys to update.
     */
    limit?: number
  }

  /**
   * api_keys upsert
   */
  export type api_keysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
    /**
     * The filter to search for the api_keys to update in case it exists.
     */
    where: api_keysWhereUniqueInput
    /**
     * In case the api_keys found by the `where` argument doesn't exist, create a new api_keys with this data.
     */
    create: XOR<api_keysCreateInput, api_keysUncheckedCreateInput>
    /**
     * In case the api_keys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_keysUpdateInput, api_keysUncheckedUpdateInput>
  }

  /**
   * api_keys delete
   */
  export type api_keysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
    /**
     * Filter which api_keys to delete.
     */
    where: api_keysWhereUniqueInput
  }

  /**
   * api_keys deleteMany
   */
  export type api_keysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_keys to delete
     */
    where?: api_keysWhereInput
    /**
     * Limit how many api_keys to delete.
     */
    limit?: number
  }

  /**
   * api_keys without action
   */
  export type api_keysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
  }


  /**
   * Model migrations
   */

  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    migration: number
    batch: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
    _all?: true
  }

  export type MigrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: migrationsWhereInput
    orderBy?: migrationsOrderByWithAggregationInput | migrationsOrderByWithAggregationInput[]
    by: MigrationsScalarFieldEnum[] | MigrationsScalarFieldEnum
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }

  export type MigrationsGroupByOutputType = {
    id: number
    migration: string
    batch: number
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    migration?: boolean
    batch?: boolean
  }, ExtArgs["result"]["migrations"]>



  export type migrationsSelectScalar = {
    id?: boolean
    migration?: boolean
    batch?: boolean
  }

  export type migrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "migration" | "batch", ExtArgs["result"]["migrations"]>

  export type $migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      migration: string
      batch: number
    }, ExtArgs["result"]["migrations"]>
    composites: {}
  }

  type migrationsGetPayload<S extends boolean | null | undefined | migrationsDefaultArgs> = $Result.GetResult<Prisma.$migrationsPayload, S>

  type migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['migrations'], meta: { name: 'migrations' } }
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends migrationsFindUniqueArgs>(args: SelectSubset<T, migrationsFindUniqueArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Migrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends migrationsFindFirstArgs>(args?: SelectSubset<T, migrationsFindFirstArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends migrationsFindManyArgs>(args?: SelectSubset<T, migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
     */
    create<T extends migrationsCreateArgs>(args: SelectSubset<T, migrationsCreateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Migrations.
     * @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migrations = await prisma.migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends migrationsCreateManyArgs>(args?: SelectSubset<T, migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
     */
    delete<T extends migrationsDeleteArgs>(args: SelectSubset<T, migrationsDeleteArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends migrationsUpdateArgs>(args: SelectSubset<T, migrationsUpdateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends migrationsDeleteManyArgs>(args?: SelectSubset<T, migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends migrationsUpdateManyArgs>(args: SelectSubset<T, migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
     */
    upsert<T extends migrationsUpsertArgs>(args: SelectSubset<T, migrationsUpsertArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: migrationsGroupByArgs['orderBy'] }
        : { orderBy?: migrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the migrations model
   */
  readonly fields: migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the migrations model
   */
  interface migrationsFieldRefs {
    readonly id: FieldRef<"migrations", 'Int'>
    readonly migration: FieldRef<"migrations", 'String'>
    readonly batch: FieldRef<"migrations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations create
   */
  export type migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }

  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many migrations.
     */
    data: migrationsCreateManyInput | migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * migrations update
   */
  export type migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to update.
     */
    limit?: number
  }

  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }

  /**
   * migrations delete
   */
  export type migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to delete.
     */
    limit?: number
  }

  /**
   * migrations without action
   */
  export type migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
  }


  /**
   * Model recipes
   */

  export type AggregateRecipes = {
    _count: RecipesCountAggregateOutputType | null
    _avg: RecipesAvgAggregateOutputType | null
    _sum: RecipesSumAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  export type RecipesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type RecipesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type RecipesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    ingredients: string | null
    instructions: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RecipesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    ingredients: string | null
    instructions: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RecipesCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    ingredients: number
    instructions: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RecipesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type RecipesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type RecipesMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    ingredients?: true
    instructions?: true
    created_at?: true
    updated_at?: true
  }

  export type RecipesMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    ingredients?: true
    instructions?: true
    created_at?: true
    updated_at?: true
  }

  export type RecipesCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    ingredients?: true
    instructions?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RecipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to aggregate.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipes
    **/
    _count?: true | RecipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipesMaxAggregateInputType
  }

  export type GetRecipesAggregateType<T extends RecipesAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipes[P]>
      : GetScalarType<T[P], AggregateRecipes[P]>
  }




  export type recipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipesWhereInput
    orderBy?: recipesOrderByWithAggregationInput | recipesOrderByWithAggregationInput[]
    by: RecipesScalarFieldEnum[] | RecipesScalarFieldEnum
    having?: recipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipesCountAggregateInputType | true
    _avg?: RecipesAvgAggregateInputType
    _sum?: RecipesSumAggregateInputType
    _min?: RecipesMinAggregateInputType
    _max?: RecipesMaxAggregateInputType
  }

  export type RecipesGroupByOutputType = {
    id: number
    user_id: number
    title: string
    ingredients: string
    instructions: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: RecipesCountAggregateOutputType | null
    _avg: RecipesAvgAggregateOutputType | null
    _sum: RecipesSumAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  type GetRecipesGroupByPayload<T extends recipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipesGroupByOutputType[P]>
            : GetScalarType<T[P], RecipesGroupByOutputType[P]>
        }
      >
    >


  export type recipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    ingredients?: boolean
    instructions?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipes"]>



  export type recipesSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    ingredients?: boolean
    instructions?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type recipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "ingredients" | "instructions" | "created_at" | "updated_at", ExtArgs["result"]["recipes"]>
  export type recipesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $recipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipes"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      ingredients: string
      instructions: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["recipes"]>
    composites: {}
  }

  type recipesGetPayload<S extends boolean | null | undefined | recipesDefaultArgs> = $Result.GetResult<Prisma.$recipesPayload, S>

  type recipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipesCountAggregateInputType | true
    }

  export interface recipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipes'], meta: { name: 'recipes' } }
    /**
     * Find zero or one Recipes that matches the filter.
     * @param {recipesFindUniqueArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recipesFindUniqueArgs>(args: SelectSubset<T, recipesFindUniqueArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recipesFindUniqueOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recipesFindUniqueOrThrowArgs>(args: SelectSubset<T, recipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindFirstArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recipesFindFirstArgs>(args?: SelectSubset<T, recipesFindFirstArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindFirstOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recipesFindFirstOrThrowArgs>(args?: SelectSubset<T, recipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipes.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipesWithIdOnly = await prisma.recipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recipesFindManyArgs>(args?: SelectSubset<T, recipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipes.
     * @param {recipesCreateArgs} args - Arguments to create a Recipes.
     * @example
     * // Create one Recipes
     * const Recipes = await prisma.recipes.create({
     *   data: {
     *     // ... data to create a Recipes
     *   }
     * })
     * 
     */
    create<T extends recipesCreateArgs>(args: SelectSubset<T, recipesCreateArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {recipesCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipes = await prisma.recipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recipesCreateManyArgs>(args?: SelectSubset<T, recipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipes.
     * @param {recipesDeleteArgs} args - Arguments to delete one Recipes.
     * @example
     * // Delete one Recipes
     * const Recipes = await prisma.recipes.delete({
     *   where: {
     *     // ... filter to delete one Recipes
     *   }
     * })
     * 
     */
    delete<T extends recipesDeleteArgs>(args: SelectSubset<T, recipesDeleteArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipes.
     * @param {recipesUpdateArgs} args - Arguments to update one Recipes.
     * @example
     * // Update one Recipes
     * const recipes = await prisma.recipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recipesUpdateArgs>(args: SelectSubset<T, recipesUpdateArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {recipesDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recipesDeleteManyArgs>(args?: SelectSubset<T, recipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipes = await prisma.recipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recipesUpdateManyArgs>(args: SelectSubset<T, recipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipes.
     * @param {recipesUpsertArgs} args - Arguments to update or create a Recipes.
     * @example
     * // Update or create a Recipes
     * const recipes = await prisma.recipes.upsert({
     *   create: {
     *     // ... data to create a Recipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipes we want to update
     *   }
     * })
     */
    upsert<T extends recipesUpsertArgs>(args: SelectSubset<T, recipesUpsertArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipes.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends recipesCountArgs>(
      args?: Subset<T, recipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipesAggregateArgs>(args: Subset<T, RecipesAggregateArgs>): Prisma.PrismaPromise<GetRecipesAggregateType<T>>

    /**
     * Group by Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipesGroupByArgs['orderBy'] }
        : { orderBy?: recipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipes model
   */
  readonly fields: recipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recipes model
   */
  interface recipesFieldRefs {
    readonly id: FieldRef<"recipes", 'Int'>
    readonly user_id: FieldRef<"recipes", 'Int'>
    readonly title: FieldRef<"recipes", 'String'>
    readonly ingredients: FieldRef<"recipes", 'String'>
    readonly instructions: FieldRef<"recipes", 'String'>
    readonly created_at: FieldRef<"recipes", 'DateTime'>
    readonly updated_at: FieldRef<"recipes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * recipes findUnique
   */
  export type recipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes findUniqueOrThrow
   */
  export type recipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes findFirst
   */
  export type recipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * recipes findFirstOrThrow
   */
  export type recipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * recipes findMany
   */
  export type recipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * recipes create
   */
  export type recipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The data needed to create a recipes.
     */
    data: XOR<recipesCreateInput, recipesUncheckedCreateInput>
  }

  /**
   * recipes createMany
   */
  export type recipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipes.
     */
    data: recipesCreateManyInput | recipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipes update
   */
  export type recipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The data needed to update a recipes.
     */
    data: XOR<recipesUpdateInput, recipesUncheckedUpdateInput>
    /**
     * Choose, which recipes to update.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes updateMany
   */
  export type recipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipes.
     */
    data: XOR<recipesUpdateManyMutationInput, recipesUncheckedUpdateManyInput>
    /**
     * Filter which recipes to update
     */
    where?: recipesWhereInput
    /**
     * Limit how many recipes to update.
     */
    limit?: number
  }

  /**
   * recipes upsert
   */
  export type recipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The filter to search for the recipes to update in case it exists.
     */
    where: recipesWhereUniqueInput
    /**
     * In case the recipes found by the `where` argument doesn't exist, create a new recipes with this data.
     */
    create: XOR<recipesCreateInput, recipesUncheckedCreateInput>
    /**
     * In case the recipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipesUpdateInput, recipesUncheckedUpdateInput>
  }

  /**
   * recipes delete
   */
  export type recipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter which recipes to delete.
     */
    where: recipesWhereUniqueInput
  }

  /**
   * recipes deleteMany
   */
  export type recipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to delete
     */
    where?: recipesWhereInput
    /**
     * Limit how many recipes to delete.
     */
    limit?: number
  }

  /**
   * recipes without action
   */
  export type recipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    api_keys?: boolean | users$api_keysArgs<ExtArgs>
    recipes?: boolean | users$recipesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_keys?: boolean | users$api_keysArgs<ExtArgs>
    recipes?: boolean | users$recipesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      api_keys: Prisma.$api_keysPayload<ExtArgs>[]
      recipes: Prisma.$recipesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api_keys<T extends users$api_keysArgs<ExtArgs> = {}>(args?: Subset<T, users$api_keysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_keysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipes<T extends users$recipesArgs<ExtArgs> = {}>(args?: Subset<T, users$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.api_keys
   */
  export type users$api_keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_keys
     */
    select?: api_keysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_keys
     */
    omit?: api_keysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keysInclude<ExtArgs> | null
    where?: api_keysWhereInput
    orderBy?: api_keysOrderByWithRelationInput | api_keysOrderByWithRelationInput[]
    cursor?: api_keysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Api_keysScalarFieldEnum | Api_keysScalarFieldEnum[]
  }

  /**
   * users.recipes
   */
  export type users$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipes
     */
    omit?: recipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipesInclude<ExtArgs> | null
    where?: recipesWhereInput
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    cursor?: recipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Api_keysScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    key: 'key',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Api_keysScalarFieldEnum = (typeof Api_keysScalarFieldEnum)[keyof typeof Api_keysScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    migration: 'migration',
    batch: 'batch'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const RecipesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    ingredients: 'ingredients',
    instructions: 'instructions',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RecipesScalarFieldEnum = (typeof RecipesScalarFieldEnum)[keyof typeof RecipesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const api_keysOrderByRelevanceFieldEnum: {
    key: 'key'
  };

  export type api_keysOrderByRelevanceFieldEnum = (typeof api_keysOrderByRelevanceFieldEnum)[keyof typeof api_keysOrderByRelevanceFieldEnum]


  export const migrationsOrderByRelevanceFieldEnum: {
    migration: 'migration'
  };

  export type migrationsOrderByRelevanceFieldEnum = (typeof migrationsOrderByRelevanceFieldEnum)[keyof typeof migrationsOrderByRelevanceFieldEnum]


  export const recipesOrderByRelevanceFieldEnum: {
    title: 'title',
    ingredients: 'ingredients',
    instructions: 'instructions'
  };

  export type recipesOrderByRelevanceFieldEnum = (typeof recipesOrderByRelevanceFieldEnum)[keyof typeof recipesOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type api_keysWhereInput = {
    AND?: api_keysWhereInput | api_keysWhereInput[]
    OR?: api_keysWhereInput[]
    NOT?: api_keysWhereInput | api_keysWhereInput[]
    id?: IntFilter<"api_keys"> | number
    user_id?: IntFilter<"api_keys"> | number
    key?: StringFilter<"api_keys"> | string
    created_at?: DateTimeNullableFilter<"api_keys"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"api_keys"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type api_keysOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: api_keysOrderByRelevanceInput
  }

  export type api_keysWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: api_keysWhereInput | api_keysWhereInput[]
    OR?: api_keysWhereInput[]
    NOT?: api_keysWhereInput | api_keysWhereInput[]
    user_id?: IntFilter<"api_keys"> | number
    created_at?: DateTimeNullableFilter<"api_keys"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"api_keys"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "key">

  export type api_keysOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: api_keysCountOrderByAggregateInput
    _avg?: api_keysAvgOrderByAggregateInput
    _max?: api_keysMaxOrderByAggregateInput
    _min?: api_keysMinOrderByAggregateInput
    _sum?: api_keysSumOrderByAggregateInput
  }

  export type api_keysScalarWhereWithAggregatesInput = {
    AND?: api_keysScalarWhereWithAggregatesInput | api_keysScalarWhereWithAggregatesInput[]
    OR?: api_keysScalarWhereWithAggregatesInput[]
    NOT?: api_keysScalarWhereWithAggregatesInput | api_keysScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"api_keys"> | number
    user_id?: IntWithAggregatesFilter<"api_keys"> | number
    key?: StringWithAggregatesFilter<"api_keys"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"api_keys"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"api_keys"> | Date | string | null
  }

  export type migrationsWhereInput = {
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    id?: IntFilter<"migrations"> | number
    migration?: StringFilter<"migrations"> | string
    batch?: IntFilter<"migrations"> | number
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _relevance?: migrationsOrderByRelevanceInput
  }

  export type migrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    migration?: StringFilter<"migrations"> | string
    batch?: IntFilter<"migrations"> | number
  }, "id">

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    OR?: migrationsScalarWhereWithAggregatesInput[]
    NOT?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"migrations"> | number
    migration?: StringWithAggregatesFilter<"migrations"> | string
    batch?: IntWithAggregatesFilter<"migrations"> | number
  }

  export type recipesWhereInput = {
    AND?: recipesWhereInput | recipesWhereInput[]
    OR?: recipesWhereInput[]
    NOT?: recipesWhereInput | recipesWhereInput[]
    id?: IntFilter<"recipes"> | number
    user_id?: IntFilter<"recipes"> | number
    title?: StringFilter<"recipes"> | string
    ingredients?: StringFilter<"recipes"> | string
    instructions?: StringNullableFilter<"recipes"> | string | null
    created_at?: DateTimeNullableFilter<"recipes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"recipes"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type recipesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: recipesOrderByRelevanceInput
  }

  export type recipesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recipesWhereInput | recipesWhereInput[]
    OR?: recipesWhereInput[]
    NOT?: recipesWhereInput | recipesWhereInput[]
    user_id?: IntFilter<"recipes"> | number
    title?: StringFilter<"recipes"> | string
    ingredients?: StringFilter<"recipes"> | string
    instructions?: StringNullableFilter<"recipes"> | string | null
    created_at?: DateTimeNullableFilter<"recipes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"recipes"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type recipesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: recipesCountOrderByAggregateInput
    _avg?: recipesAvgOrderByAggregateInput
    _max?: recipesMaxOrderByAggregateInput
    _min?: recipesMinOrderByAggregateInput
    _sum?: recipesSumOrderByAggregateInput
  }

  export type recipesScalarWhereWithAggregatesInput = {
    AND?: recipesScalarWhereWithAggregatesInput | recipesScalarWhereWithAggregatesInput[]
    OR?: recipesScalarWhereWithAggregatesInput[]
    NOT?: recipesScalarWhereWithAggregatesInput | recipesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recipes"> | number
    user_id?: IntWithAggregatesFilter<"recipes"> | number
    title?: StringWithAggregatesFilter<"recipes"> | string
    ingredients?: StringWithAggregatesFilter<"recipes"> | string
    instructions?: StringNullableWithAggregatesFilter<"recipes"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"recipes"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"recipes"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    api_keys?: Api_keysListRelationFilter
    recipes?: RecipesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    api_keys?: api_keysOrderByRelationAggregateInput
    recipes?: recipesOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    api_keys?: Api_keysListRelationFilter
    recipes?: RecipesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type api_keysCreateInput = {
    key: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutApi_keysInput
  }

  export type api_keysUncheckedCreateInput = {
    id?: number
    user_id: number
    key: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type api_keysUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutApi_keysNestedInput
  }

  export type api_keysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type api_keysCreateManyInput = {
    id?: number
    user_id: number
    key: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type api_keysUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type api_keysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type migrationsCreateInput = {
    migration: string
    batch: number
  }

  export type migrationsUncheckedCreateInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateManyInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateManyMutationInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type recipesCreateInput = {
    title: string
    ingredients: string
    instructions?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutRecipesInput
  }

  export type recipesUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    ingredients: string
    instructions?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type recipesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type recipesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesCreateManyInput = {
    id?: number
    user_id: number
    title: string
    ingredients: string
    instructions?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type recipesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    api_keys?: api_keysCreateNestedManyWithoutUsersInput
    recipes?: recipesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    api_keys?: api_keysUncheckedCreateNestedManyWithoutUsersInput
    recipes?: recipesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    api_keys?: api_keysUpdateManyWithoutUsersNestedInput
    recipes?: recipesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    api_keys?: api_keysUncheckedUpdateManyWithoutUsersNestedInput
    recipes?: recipesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type api_keysOrderByRelevanceInput = {
    fields: api_keysOrderByRelevanceFieldEnum | api_keysOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type api_keysCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type api_keysAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type api_keysMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type api_keysMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type api_keysSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type migrationsOrderByRelevanceInput = {
    fields: migrationsOrderByRelevanceFieldEnum | migrationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type recipesOrderByRelevanceInput = {
    fields: recipesOrderByRelevanceFieldEnum | recipesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type recipesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type recipesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type recipesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type recipesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type recipesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Api_keysListRelationFilter = {
    every?: api_keysWhereInput
    some?: api_keysWhereInput
    none?: api_keysWhereInput
  }

  export type RecipesListRelationFilter = {
    every?: recipesWhereInput
    some?: recipesWhereInput
    none?: recipesWhereInput
  }

  export type api_keysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recipesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCreateNestedOneWithoutApi_keysInput = {
    create?: XOR<usersCreateWithoutApi_keysInput, usersUncheckedCreateWithoutApi_keysInput>
    connectOrCreate?: usersCreateOrConnectWithoutApi_keysInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutApi_keysNestedInput = {
    create?: XOR<usersCreateWithoutApi_keysInput, usersUncheckedCreateWithoutApi_keysInput>
    connectOrCreate?: usersCreateOrConnectWithoutApi_keysInput
    upsert?: usersUpsertWithoutApi_keysInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutApi_keysInput, usersUpdateWithoutApi_keysInput>, usersUncheckedUpdateWithoutApi_keysInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutRecipesInput = {
    create?: XOR<usersCreateWithoutRecipesInput, usersUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: usersCreateOrConnectWithoutRecipesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<usersCreateWithoutRecipesInput, usersUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: usersCreateOrConnectWithoutRecipesInput
    upsert?: usersUpsertWithoutRecipesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRecipesInput, usersUpdateWithoutRecipesInput>, usersUncheckedUpdateWithoutRecipesInput>
  }

  export type api_keysCreateNestedManyWithoutUsersInput = {
    create?: XOR<api_keysCreateWithoutUsersInput, api_keysUncheckedCreateWithoutUsersInput> | api_keysCreateWithoutUsersInput[] | api_keysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: api_keysCreateOrConnectWithoutUsersInput | api_keysCreateOrConnectWithoutUsersInput[]
    createMany?: api_keysCreateManyUsersInputEnvelope
    connect?: api_keysWhereUniqueInput | api_keysWhereUniqueInput[]
  }

  export type recipesCreateNestedManyWithoutUsersInput = {
    create?: XOR<recipesCreateWithoutUsersInput, recipesUncheckedCreateWithoutUsersInput> | recipesCreateWithoutUsersInput[] | recipesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutUsersInput | recipesCreateOrConnectWithoutUsersInput[]
    createMany?: recipesCreateManyUsersInputEnvelope
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
  }

  export type api_keysUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<api_keysCreateWithoutUsersInput, api_keysUncheckedCreateWithoutUsersInput> | api_keysCreateWithoutUsersInput[] | api_keysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: api_keysCreateOrConnectWithoutUsersInput | api_keysCreateOrConnectWithoutUsersInput[]
    createMany?: api_keysCreateManyUsersInputEnvelope
    connect?: api_keysWhereUniqueInput | api_keysWhereUniqueInput[]
  }

  export type recipesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<recipesCreateWithoutUsersInput, recipesUncheckedCreateWithoutUsersInput> | recipesCreateWithoutUsersInput[] | recipesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutUsersInput | recipesCreateOrConnectWithoutUsersInput[]
    createMany?: recipesCreateManyUsersInputEnvelope
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
  }

  export type api_keysUpdateManyWithoutUsersNestedInput = {
    create?: XOR<api_keysCreateWithoutUsersInput, api_keysUncheckedCreateWithoutUsersInput> | api_keysCreateWithoutUsersInput[] | api_keysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: api_keysCreateOrConnectWithoutUsersInput | api_keysCreateOrConnectWithoutUsersInput[]
    upsert?: api_keysUpsertWithWhereUniqueWithoutUsersInput | api_keysUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: api_keysCreateManyUsersInputEnvelope
    set?: api_keysWhereUniqueInput | api_keysWhereUniqueInput[]
    disconnect?: api_keysWhereUniqueInput | api_keysWhereUniqueInput[]
    delete?: api_keysWhereUniqueInput | api_keysWhereUniqueInput[]
    connect?: api_keysWhereUniqueInput | api_keysWhereUniqueInput[]
    update?: api_keysUpdateWithWhereUniqueWithoutUsersInput | api_keysUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: api_keysUpdateManyWithWhereWithoutUsersInput | api_keysUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: api_keysScalarWhereInput | api_keysScalarWhereInput[]
  }

  export type recipesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<recipesCreateWithoutUsersInput, recipesUncheckedCreateWithoutUsersInput> | recipesCreateWithoutUsersInput[] | recipesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutUsersInput | recipesCreateOrConnectWithoutUsersInput[]
    upsert?: recipesUpsertWithWhereUniqueWithoutUsersInput | recipesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: recipesCreateManyUsersInputEnvelope
    set?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    disconnect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    delete?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    update?: recipesUpdateWithWhereUniqueWithoutUsersInput | recipesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: recipesUpdateManyWithWhereWithoutUsersInput | recipesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: recipesScalarWhereInput | recipesScalarWhereInput[]
  }

  export type api_keysUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<api_keysCreateWithoutUsersInput, api_keysUncheckedCreateWithoutUsersInput> | api_keysCreateWithoutUsersInput[] | api_keysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: api_keysCreateOrConnectWithoutUsersInput | api_keysCreateOrConnectWithoutUsersInput[]
    upsert?: api_keysUpsertWithWhereUniqueWithoutUsersInput | api_keysUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: api_keysCreateManyUsersInputEnvelope
    set?: api_keysWhereUniqueInput | api_keysWhereUniqueInput[]
    disconnect?: api_keysWhereUniqueInput | api_keysWhereUniqueInput[]
    delete?: api_keysWhereUniqueInput | api_keysWhereUniqueInput[]
    connect?: api_keysWhereUniqueInput | api_keysWhereUniqueInput[]
    update?: api_keysUpdateWithWhereUniqueWithoutUsersInput | api_keysUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: api_keysUpdateManyWithWhereWithoutUsersInput | api_keysUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: api_keysScalarWhereInput | api_keysScalarWhereInput[]
  }

  export type recipesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<recipesCreateWithoutUsersInput, recipesUncheckedCreateWithoutUsersInput> | recipesCreateWithoutUsersInput[] | recipesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutUsersInput | recipesCreateOrConnectWithoutUsersInput[]
    upsert?: recipesUpsertWithWhereUniqueWithoutUsersInput | recipesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: recipesCreateManyUsersInputEnvelope
    set?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    disconnect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    delete?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    update?: recipesUpdateWithWhereUniqueWithoutUsersInput | recipesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: recipesUpdateManyWithWhereWithoutUsersInput | recipesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: recipesScalarWhereInput | recipesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutApi_keysInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recipes?: recipesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutApi_keysInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recipes?: recipesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutApi_keysInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutApi_keysInput, usersUncheckedCreateWithoutApi_keysInput>
  }

  export type usersUpsertWithoutApi_keysInput = {
    update: XOR<usersUpdateWithoutApi_keysInput, usersUncheckedUpdateWithoutApi_keysInput>
    create: XOR<usersCreateWithoutApi_keysInput, usersUncheckedCreateWithoutApi_keysInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutApi_keysInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutApi_keysInput, usersUncheckedUpdateWithoutApi_keysInput>
  }

  export type usersUpdateWithoutApi_keysInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipes?: recipesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutApi_keysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipes?: recipesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutRecipesInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    api_keys?: api_keysCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRecipesInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    api_keys?: api_keysUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRecipesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRecipesInput, usersUncheckedCreateWithoutRecipesInput>
  }

  export type usersUpsertWithoutRecipesInput = {
    update: XOR<usersUpdateWithoutRecipesInput, usersUncheckedUpdateWithoutRecipesInput>
    create: XOR<usersCreateWithoutRecipesInput, usersUncheckedCreateWithoutRecipesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRecipesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRecipesInput, usersUncheckedUpdateWithoutRecipesInput>
  }

  export type usersUpdateWithoutRecipesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    api_keys?: api_keysUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    api_keys?: api_keysUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type api_keysCreateWithoutUsersInput = {
    key: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type api_keysUncheckedCreateWithoutUsersInput = {
    id?: number
    key: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type api_keysCreateOrConnectWithoutUsersInput = {
    where: api_keysWhereUniqueInput
    create: XOR<api_keysCreateWithoutUsersInput, api_keysUncheckedCreateWithoutUsersInput>
  }

  export type api_keysCreateManyUsersInputEnvelope = {
    data: api_keysCreateManyUsersInput | api_keysCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type recipesCreateWithoutUsersInput = {
    title: string
    ingredients: string
    instructions?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type recipesUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    ingredients: string
    instructions?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type recipesCreateOrConnectWithoutUsersInput = {
    where: recipesWhereUniqueInput
    create: XOR<recipesCreateWithoutUsersInput, recipesUncheckedCreateWithoutUsersInput>
  }

  export type recipesCreateManyUsersInputEnvelope = {
    data: recipesCreateManyUsersInput | recipesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type api_keysUpsertWithWhereUniqueWithoutUsersInput = {
    where: api_keysWhereUniqueInput
    update: XOR<api_keysUpdateWithoutUsersInput, api_keysUncheckedUpdateWithoutUsersInput>
    create: XOR<api_keysCreateWithoutUsersInput, api_keysUncheckedCreateWithoutUsersInput>
  }

  export type api_keysUpdateWithWhereUniqueWithoutUsersInput = {
    where: api_keysWhereUniqueInput
    data: XOR<api_keysUpdateWithoutUsersInput, api_keysUncheckedUpdateWithoutUsersInput>
  }

  export type api_keysUpdateManyWithWhereWithoutUsersInput = {
    where: api_keysScalarWhereInput
    data: XOR<api_keysUpdateManyMutationInput, api_keysUncheckedUpdateManyWithoutUsersInput>
  }

  export type api_keysScalarWhereInput = {
    AND?: api_keysScalarWhereInput | api_keysScalarWhereInput[]
    OR?: api_keysScalarWhereInput[]
    NOT?: api_keysScalarWhereInput | api_keysScalarWhereInput[]
    id?: IntFilter<"api_keys"> | number
    user_id?: IntFilter<"api_keys"> | number
    key?: StringFilter<"api_keys"> | string
    created_at?: DateTimeNullableFilter<"api_keys"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"api_keys"> | Date | string | null
  }

  export type recipesUpsertWithWhereUniqueWithoutUsersInput = {
    where: recipesWhereUniqueInput
    update: XOR<recipesUpdateWithoutUsersInput, recipesUncheckedUpdateWithoutUsersInput>
    create: XOR<recipesCreateWithoutUsersInput, recipesUncheckedCreateWithoutUsersInput>
  }

  export type recipesUpdateWithWhereUniqueWithoutUsersInput = {
    where: recipesWhereUniqueInput
    data: XOR<recipesUpdateWithoutUsersInput, recipesUncheckedUpdateWithoutUsersInput>
  }

  export type recipesUpdateManyWithWhereWithoutUsersInput = {
    where: recipesScalarWhereInput
    data: XOR<recipesUpdateManyMutationInput, recipesUncheckedUpdateManyWithoutUsersInput>
  }

  export type recipesScalarWhereInput = {
    AND?: recipesScalarWhereInput | recipesScalarWhereInput[]
    OR?: recipesScalarWhereInput[]
    NOT?: recipesScalarWhereInput | recipesScalarWhereInput[]
    id?: IntFilter<"recipes"> | number
    user_id?: IntFilter<"recipes"> | number
    title?: StringFilter<"recipes"> | string
    ingredients?: StringFilter<"recipes"> | string
    instructions?: StringNullableFilter<"recipes"> | string | null
    created_at?: DateTimeNullableFilter<"recipes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"recipes"> | Date | string | null
  }

  export type api_keysCreateManyUsersInput = {
    id?: number
    key: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type recipesCreateManyUsersInput = {
    id?: number
    title: string
    ingredients: string
    instructions?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type api_keysUpdateWithoutUsersInput = {
    key?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type api_keysUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type api_keysUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recipesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}