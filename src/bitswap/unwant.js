import { configure } from '../lib/configure.js'
import { toUrlSearchParams } from '../lib/to-url-search-params.js'

export const createUnwant = configure(api => {
  /**
   * @type {import('../types').BitswapAPI["unwant"]}
   */
  async function unwant (cid, options = {}) {
    const res = await api.post('bitswap/unwant', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    })

    return res.json()
  }
  return unwant
})
