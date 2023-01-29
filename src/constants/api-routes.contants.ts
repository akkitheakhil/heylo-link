type API_ROUTE_NAMES = "CREATE_SHORT_LINK" | "GET_SHORT_LINK";

export const API_ROUTE_CONSTANTS: Record<API_ROUTE_NAMES, string> = {
  CREATE_SHORT_LINK: `api/short-links`,
  GET_SHORT_LINK: `api/short-links/`,
};
