/** Keep local assets valid both at the domain root and in a deployed subdirectory. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
