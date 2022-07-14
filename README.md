# fetch-credentials

lvh.me는 127.0.0.1로 라우팅하도록 global DNS 서버에 등록되어 있음.

* `host` : http://lvh.me:3000
* `subdomain` : http://subdomain.lvh.me:4000
* `external` : https://192.168.0.14:8080

모든 POST 요청은 fetch로 진행했고 이 때 credentials 옵션은 `include`로 설정
```sh
# FROM host website
## 1) POST to host address (same origin)
{Lax: 'Host', Strict: 'Host' }

## 2) POST to host's subdomain address (same site)
{Lax: 'Subdomain', Strict: 'Subdomain' }

## 3) POST to another address (external[https])
{ None: 'External'}

################################################################


# FROM subdomain of host website
## 1) POST to host address (same site)
{Lax: 'Host', Strict: 'Host' }


## 2) POST to host's subdomain address (same origin)
{Lax: 'Subdomain', Strict: 'Subdomain' }

## 3) POST to another address (external[https])
{ None: 'External'}


################################################################

# FROM external(https) website
## 1) POST to self(external domain)
{ None: 'External', Lax: 'External', Strict: 'External' }

## 2) POST to host domain (Need CORS)
{ None: 'Host' }

## 3) POST to  subdomain of host (Need CORS)
{ None: 'Subdomain' }
```