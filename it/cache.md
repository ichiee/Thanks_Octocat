### Do not refer this note to particular CDN service
this is just note to understand mechanism





    Question:
    What is the cache called in Fastly CDN? is it called cache-store?
    What is F's default cache behaviour?
    Headers correspond to the cache on cdn?
    
    ??Simultaneously, a Surrogate-Control header can be sent with a longer max-age 
    that lets a proxy cache in front of the source handle most of the browser traffic, 
    only passing requests to the source when the proxy's cache expires.
    
    What cache exists between browser and fastly cache? cache in local ?
    
    
The headers were designed with the client (browser) in mind 
but `CDNs like Fastly will also use those headers as a guide on caching policy`.

The `Expires` header is the original cache-related HTTP header 
If following headers are not found Fastly use `Expires` header value.
These three on Cache-Controlwill influence Fastly's caching
`max-age`, `s-maxage`, `and private`

Fastly looks for cache headers on those 
this is order of preference
`Surrogate-Control:`
`Cache-Control: s-maxage`
`Cache-Control: max-age`
`Expires:`

#### The Cache-Control headers cover browser caches and the most of cases intermediate caches as well:

`Cache-Control: public` - Any cache can store a copy of the content.
`Cache-Control: private` - Don't store, this is for a single user.
`Cache-Control: no-cache` - Re-validate before serving this content.
`Cache-Control: no-store` - Don't ever store this content.
`Cache-Control: public, max-age=[seconds]` - Caches can store this content for n seconds.
`Cache-Control: s-maxage=[seconds]` - Same as max-age but applies specifically to proxy caches.

#### Surrogate Headers
https://www.w3.org/TR/edge-arch/
It provide a specific cache policy for proxy caches in the processing path
It is for edge server not browser cache
`Surrogate-Control` accepts many of the same values and more
`Surrogate Key` will be used for Purge API

    Usage
    POST /service/service_id/purge/key
    
    Request example 1:
    POST /service/SU1Z0isxPaozGVKXdv0eY/purge/hTE5dRlSBICGPJxJwCH4M HTTP/1.1
    Fastly-Key: YOUR_FASTLY_TOKEN
    Accept: application/json
    
    request example 2: (bach)
    POST /service/SU1Z0isxPaozGVKXdv0eY/purge HTTP/1.1
    Surrogate-Key: key_1 key_2 key_3
    Fastly-Key: YOUR_FASTLY_TOKEN
    Accept: application/json
    
    Response Example of i e 2:
    HTTP/1.1 200 OK
    Content-Type: application/json
    {
      "key_1":"108-1391560174-974124",
      "key_2":"108-1391560174-974125",
      "key_3":"108-1391560174-974126"
    }
    
    read:https://docs.fastly.com/api/purge
    
### Shielding 
Shield node lives between caches and origin server, 
It's like a parent cache (normally geograficaly close to you)
All the children nodes (cache nodes: POP) get contents from shield node


## Cache Control!

This is the prority
#### cache: control private (No Cache)
        No cache on fastly, still would cache on browser
        if you would like to do no cache for both
        Cache-Control: private, no-store
        or
        Cache-Control: private, max-age=0
        This is only case surrogate-control cannot take over cache-control
        
#### 1 Surrogate-Control:max-age= n (in sec)
        This header gets stripped and is only visible to Fastly caches.
#### 2 Cache-Control: s-maxage= n (in sec)
        the header is not stripped and will be respected by Fastly caches 
        and any caches between Fastly and the browser, but not the browser itself.
#### 3 Cache-Control: max-age= n (in sec)
        it will be be respected by all caches including browser cache
#### 4 Expires:
        it will be be respected by all caches including browser cache

        
Fastly does not currently respect no-store or no-cache directives. 
Including either or both of these in a Cache-Control header has no effect on Fastly's caching decision, 
unless you alter this behavior using custom VCL.





### Case

This causes the browser to re-validate with the source on every request for the content.
So user see the most updated contents. 

    Cache-Control: no-cache

No cache in browser but always in Fastly
Cache control headers to go to browser, 
Surrogate-Control to Fastly but stripped off before browser cache

    Cache-Control: no-cache, no-store, must-revalidate
    Surrogate-Control: max-age=3600
    Pragma: no-cache
    Expires: 0
    
 
 
 

hash key, I presume it create automatically


### to do
https://docs.fastly.com/guides/tutorials/cache-control-tutorial#example-backend-configs



## Fastly Debug Tools

https://www.youtube.com/watch?v=GPRSw7qlrag

You cannot ask CDN company that some thing is off

Get data! Debug CDN!

http://www.fastly-debug.com/
    
### FASTLY-DEBUG   
    
    Turn debug on:
    CURL -SVO /DEV/NULL www.example.com \ -H "FASTLY-DEBUG:1"

    fastly debug header is a way to tarce a request through the CDN
    from start to finish

FASTLY-DEBUG-PATH

    (if fetch OR deliver,  "EDGE OR SHIELD NAME INC location",  time stamp)
    i.e (D Chache-SJC3135-SJC 145289203639)
    If you see a aiffrernt edge the time that it delivered that 
    differs from the tim of pulling the object - it means cache hit (? why)

FASTLY-DEBUG-TTL:

    i.e.
    (H CAHCHE-SJC3135-SJC - 6584)
    The last number is age
    {M CACHE-SEA1922 - - 0)
    Miss in seatle age is 0 (as miss)


X timer:

    CURL -SVO /DEV/NUMM EXAMPLE.COM

        shows this header
    
    < XTIMER: S1435112951 . 069252, VS0, VE1
    (unix timestamp, VERNISH START - should be 1 or 0, VERNISH END - should not be too high)
    

MTR command

    MTR -C 20 -W -R
    it's comvine traceroute and ping you can copy and paste and share it with them
    his for spot network problems


Tracking PURGE 

    Every purge has ID,  being logged

    If there is a problem in purging, 
    it is possible to track down with the ID
    
    CURL -X PURGE www.example.com

Web page Test
    https://www.webpagetest.org/
    

IRC
MOst of IRC is pushing into slack channel






MTR network testing tool
