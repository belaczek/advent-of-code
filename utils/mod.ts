import { dirname, fromFileUrl, join } from "path";

export function resolvePath(path: string) {
  const directory = dirname(fromFileUrl(Deno.mainModule));
  return join(directory, path);
}
