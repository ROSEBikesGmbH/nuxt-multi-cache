import { MultiCacheServerOptions } from './../types'

export function defineMultiCacheOptions(
  options: MultiCacheServerOptions | Promise<MultiCacheServerOptions>,
): MultiCacheServerOptions | Promise<MultiCacheServerOptions> {
  return options
}
