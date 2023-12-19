import type { Domain, SubDomains } from "./domains";

const ALL = "all";
const NO_DOMAIN = "";
type QueryKeySignature<TSubDomains extends string, TParams> = readonly [
  Domain | "",
  string | number,
  SubDomains<TSubDomains> | "",
  string,
  ...(TParams | undefined)[]
];

/**
 * Normalizes the possibly empty, possibly already an array, params into an array
 * @param params the unknown value
 * @returns params converted to array
 */
function getParamsList<T>(params: T | T[]) {
  if (params !== null && params !== undefined) {
    return Array.isArray(params) ? params : [params];
  }
  return [];
}

/**
 * This function generates the query keys for you in the specific order we need
 *
 * @param queryName the literal name of the function calling the endpoint, serves as a unique identifier for this specific query since there could be multiple queries for the same domain that give different payloads
 * @param options.domain the main domain being queried
 * @param options.id if specified, the id of the value inside the domain that is mutated. Primarily used to later invalidate queries for THIS id in THIS domain
 * @param options.subDomains comma separated domains whose data is also included in the query
 * @param options.params extra data, usually query params like filtering, sorting, pagination, etc
 *
 */
export function generateQueryKey<TSubDomains extends string, TParams>(
  queryName: string,
  {
    domain,
    id,
    subDomains,
    params,
  }: {
    domain?: Domain;
    id?: string | number | null;
    subDomains?: SubDomains<TSubDomains>;
    params?: TParams | TParams[];
  } = {}
) {
  const queryKey: QueryKeySignature<TSubDomains, TParams> = [
    domain ?? NO_DOMAIN,
    id ?? ALL,
    subDomains ?? NO_DOMAIN,
    queryName,
    ...getParamsList(params),
  ] as const;

  return queryKey;
}
