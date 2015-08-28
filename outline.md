<!-- why the problem being solved is important - tell the story of how the solution came-about! --> 
<!-- how the problem is solved using the presented process or tool and why it works -->
<!-- how the solution fits within real-world organizations and improves its products, services, and/or collaboration -->

Let's Encrypt
===================

### Introduction

* Workshop Title Slide
* Instructor Slide
* Workshop Overview

### What is HTTPS

* What is HTTPS
	* HTTP + SSL/TLS
	* TODO create SSL/TLS diagram
* Levels of Trust
	* There are three types of certificates issued 
		* Domain Validation (DV) !!!TODO show image!!!
			* this shows a lock and green https in the address bar
		* Organization Validation (OV)
			* same UX as DV w/ additional certificate information
		* Extended Validation (EV) !!!TODO show image!!!
			* This shows green w/ the org's name in the address bar
			
### Why should I use HTTPS?

* HTTP traffic is an open book
	* public Wifi hotspots, forged cell networks
* Your ISP is listening
	* [Verizon adds tracking cookies for advertising partners]()
	* [Comcast injects ads via JavaScript](http://arstechnica.com/tech-policy/2014/09/why-comcasts-javascript-ad-injections-threaten-security-net-neutrality/)
* The government is listening
	* [Pervasive Monitoring](https://tools.ietf.org/html/rfc7258)
	* [NSA & Government Surveillance](https://www.washingtonpost.com/news/the-switch/wp/2013/12/10/nsa-uses-google-cookies-to-pinpoint-targets-for-hacking/)
* It's good for you
	* [Google uses it as a ranking signal](http://googleonlinesecurity.blogspot.com/2014/08/https-as-ranking-signal_6.html)
	* [Chrome and Firefox will deprecate http](https://www.chromium.org/Home/chromium-security/marking-http-as-non-secure)
* It's good for your users
	* Users know the content is trusted and comes from you!

### Barriers to Security

* Certificates Expire
	* TODO Insert story about an organization's expired certificate
* Certificates cost money
* Difficult to install and configure (FREAK)
* TLS lowers performance
* inhibits load balancing
* name-based virtual server
* mixed mode: adverisers, CDNs, and 3rd parties

### Introducing Let’s Encrypt

* Let's Encrypt
	* Let’s Encrypt is a free, automated, and open certificate authority
	* Free, Automatic, Secure, Transparent, Open, Cooperative
		* https://letsencrypt.org/about/
* Comprised of 3 components
	* Client (letsencrypt)
	* Protocol (ACME)
	* Certificate Authority (boulder)
* How it works
	* Domain Registration !!! TODO add diagram !!!
		* client contacts let's encrypt
		* server Put [text] at https://example.com/[location] sign [nonce]
	* Domain Validation !!! TODO add diagram !!!
		* client puts [text] at [location]
		* client generates a new public/private pair
		* client signs [nonce] with its [private key]
		* client sends the signed [nonce] with its [public key] to the server
		* server connects to https://example.com/[location] and verifies [text]
	* Certificate Issuance
		* client creates a request to issue a certificate for example.com with the validated public key
		* client signs the entire Certificate Signing Request (CSR) w/ the authorized key
		* server issues a certificate to the client
		* NOTE: revocation works in a similar way
* https://letsencrypt.org/howitworks/technology/
	* Steps:
		* First, the agent proves to the CA that the web server controls a domain
		* Second, the agent can request, renew, and revoke certificates for that domain
	* ACME Protocol
		* ACME is a protocol for automating the management of domain-validation certificates, based on a simple JSON-over-HTTPS interface
			* https://github.com/letsencrypt/acme-spec

### Securing a Site with Let’s Encrypt

	* https://letsencrypt.org/howitworks/
	* Getting a Certificate
		* `letsencrypt -d example.com auth`
	* Automatically Configuring nginx
		* `letsencrypt run`
	* Renewing a Certificate
		* `letsencrypt renew —cert-path example-cert.pem`
	* Revoking a Certificate
		* `letsencrypt revoke`
		
### Demo Time!
https://letsencrypt.readthedocs.org/en/latest/index.html

```
docker run -it --rm -p 443:443 --name letsencrypt -v `pwd`/etc:/etc/letsencrypt quay.io/letsencrypt/letsencrypt:latest auth
```

### Questions?
* Limited Availability September 7, 2015
* General Availability November , 2015

### Become Involved

* [GitHub](https://github.com/letsencrypt)
* Wishlist
	* Improve nginx support
	* Write a MOD_ACME for Apache & nginx
* Contact: @jamespugjones
* Who runs Let's Encrypt
	* Internet Security Research Group (ISRG)
	* Major Sponsors
		* https://letsencrypt.org/sponsors/

### FAQ

* Certificates
	* standard Domain Validation (DV) certificates
	* not Extended Validation (EV)
	* Allows for automated certificate creation
	* EV certs don’t differ from DV certs, only their verification methods for issuance
* Wildcard certificates
	* Let’s Encrypt has no plans to issue wildcard certs
	* Problematic for name-based virtual hosts
		* http://www.crsr.net/Notes/Apache-HTTPS-virtual-host.html
		* work-arounds
			* <s>wildcard certificates</s>
			* Subject alternative names, a.k.a. SubjectAltNames
			* SNI
				* support: https://www.digicert.com/ssl-support/apache-secure-multiple-sites-sni.htm
				* IE7, iOS 4, Android 3
				* http://wiki.apache.org/httpd/NameBasedSSLVHostsWithSNI
				* https://www.digicert.com/ssl-support/apache-multiple-ssl-certificates-using-sni.htm

### Additional Information

* [Let’s Encrypt Client Documentation](https://letsencrypt.readthedocs.org/en/latest/index.html)
* [Let’s Encrypt Client Forum](https://groups.google.com/a/letsencrypt.org/forum/#!forum/client-dev)
* [Let’s Encrypt Github repo](https://github.com/letsencrypt/letsencrypt)
* [SSL Server Test](https://www.ssllabs.com/ssltest/)

### Questions?

Additional Content:
SPDY | HTTP/2
https://en.wikipedia.org/wiki/SPDY
https://http2.github.io/
