He is good at talking
https://www.lynda.com/Server-tutorials/CompTIA-Server-SK0-004-Cert-Prep-5-Networking/606080-2.html

### Networking

 MPLS really shines when multiple locations need to easily connect together. 
 Since these connections are routed, your traffic moves into the provider cloud 
 and routes to its final destination, which could be any of your location
 
  A local area network (LAN) is a group of computers and associated devices 
  that share a common communications line or wireless link to a server.
  LAN networking comprises cables, switches, routers and other components 
  that let users connect to internal servers, websites and 
  other LANs via wide area networks.
 
 Demaication point:
 where a perovider's equipment physically ends and the LAN begins
 Often ISP-owned swich or router
 
 
### IP

First 8 bits - 127 is reserved for diagnosetic
127.0.0.1   loop back address or local host

A class: (1-126)   The 1st octet to network ID rest to host ID
B class: (128-191) Two octlets for network ID
C class: (192-223) Three octlets for network ID
D class: (224-239) Multi cast
E class: (240-243) Experimental

    It should be first octet 1-223 is for internet communication

    Private IP range (they cnnot communicate directly with Internet)
    10.0.0.0-10.255.255.255.255
    172.16.0.0-172.31.255.255
    182.168.0.0-192.168.255.255

    169.254.0.0-169.254.255.255 - Special range called APIPA (randomly automatically assign)

    Most of company use private IP address

NAT Network Address Translation : 2 network cards on for internal one for external


### Internetworking

Router : connect atleast 2 networks
located at gateways
When you conect one place to the another, the data is always seen and directed by router.


The only way for a computer to communicate with a computer on a different network is 
through router (internetworking)

#### Default gateway (it's ip address of a router!)
reperesents the ip address of a router 
that computer uses to communicate outside its network

#### Subnet mask
You can make it into smaller networks Let's say 254 hosts each - you put router in each network

#### CIDR Classless Inter-Domain Routing

VLSM (variable length subnet masks)

decimal subnet mask - such as 255.255.255.0

Binary subnet mask - '11111111.11111111.11111111.000000000'



So tis is Original Subnet Mask

11111111.11111111.11111111.000000000

With Subnetting

11111111.11111111.11111000.000000000

there 5 x 1 on the thrrd octlet is called subnet id


#### CIDR nortation: 
192.168.10.1/29
this 29 represents first 29 binary is 1 (so last three is 0)
So you see the subnetting

#### Protocal
SNMP Simple Network Managing Protocol used  by network management system
data refer to MIB (message information blockVS code
Agent collecting  data about network (MIB) send them to the managing system for analysing

#### REST API
https://reqres.in/
https://www.getpostman.com/
https://insomnia.rest/
https://marketplace.visualstudio.com/items?itemName=humao.rest-client for VS code 




