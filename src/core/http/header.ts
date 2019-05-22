/*
 * @Author: saber2pr
 * @Date: 2019-04-30 19:36:26
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-22 18:27:30
 */
export type Header =
  | 'Access-Control-Allow-Headers'
  | 'Access-Control-Allow-Methods'
  | 'Access-Control-Allow-Credentials'
  | 'Access-Control-Allow-Origin'
  | 'Access-Control-Max-Age'
  | 'Accept-Patch'
  | 'Accept-Ranges'
  | 'Age'
  | 'Allow'
  | 'Cache-Control'
  | 'Connection'
  | 'Content-Disposition'
  | 'Content-Encoding'
  | 'Content-Language'
  | 'Content-Length'
  | 'Content-Location'
  | 'Content-Range'
  | 'Content-Type'
  | 'Date'
  | 'ETag'
  | 'Expires'
  | 'Last-Modified'
  | 'Link'
  | 'Location'
  | 'P3P'
  | 'Pragma'
  | 'Proxy-Authenticate'
  | 'Public-Key-Pins'
  | 'Refresh'
  | 'Retry-After'
  | 'Server'
  | 'Set-Cookie'
  | 'Status'
  | 'Trailer'
  | 'Transfer-Encoding'
  | 'Upgrade'
  | 'Vary'
  | 'Via'
  | 'Warning'
  | 'WWW-Authenticate'

export type Headers = Partial<Record<Header, string | number | string[]>>
