import puppeteer from 'puppeteer';

export const MockJsResponseHeader: puppeteer.Headers = {
  'access-control-allow-headers':
    'Origin, Content-Type, Accept, Range, Content-Length',
  'access-control-allow-methods': 'GET, PUT, POST, DELETE, OPTIONS, HEAD',
  'access-control-allow-origin': '*',
  'access-control-max-age': '31536000',
  'cache-control': 'max-age=31471237',
  'content-encoding': 'gzip',
  'content-length': '110356',
  'content-type': 'text/javascript',
  'etag': '"756e3774c07bc311073c9778f753a9b7-df"',
  'last-modified': 'Sun, 19 Jan 2020 08:08:35 GMT',
  'network_info': 'US_WESTJORDAN_7922',
  'served-from': 'e:184.25.254.87',
  'server': 'edge-esnssl-1.17.3-14.3',
  'status': '200',
  'vary': 'Accept-Encoding',
  'x-filesize': '392193',
  'x-via-cdn':
    'f=Akamai,s=184.25.254.87,c=2601:681:4503:56d0:d555:4bed:421f:fca7;f=edge,s=ctc.ningbo.edssl.123.nb.sinaedge.com,c=184.51.198.13;f=edge,s=ctc.ningbo.union.83.nb.sinaedge.com,c=115.238.190.123;f=Edge,s=ctc.ningbo.union.80,c=115.238.190.83',
  'x-via-edge': '15794214039530dc633b8f0beee730e074967',
  'x-via-ssl': 'ssl.23.sinag1.qxg.lb.sinanode.com',
};

export const PathWeiboChat = '/weibo_chat';
