### Just note for some questions


### Docker
https://www.youtube.com/watch?v=YFl2mCHdv24

(this person is good)

https://www.youtube.com/watch?v=F82K07NmRpk
Do this next!

https://classroom.udacity.com/courses/ud615
and do this too cannot be difficult

watch this too, it explains well about container
https://www.youtube.com/watch?v=R-3dfURb2hA

Ok, So docker, what is going on



it uses host os kenel 
Docket itself is just on the top of it got bin and app
It is apprenntly not single process, just a single entry

    container is a running instance of image
    image is a template for creating enviroment you wanted to snapshot of the system at a parrticular timme
    So image got - OS, software, the application code all bundle up in a file

    images are defined using a docker file (text file with a steps to perform to create the image)

    i.e. You configure the OS, instal software you need copy theh project file into the right places
    So you write dockerfile and build the image
    then you can get to run the container

    You can go to docker hub to see existing images, you can build things on the top of it
    https://hub.docker.com/
    Best one is official, Left one is themost specific, don't go to generic - very right one
    
        FROM php:7.0-apache             // Download apache from the hub
        COPY src/ /var/www/html         // copy our code from src/ to /var/www/html
        EXPOSE 80                       // accept on port 80 - you need to specify as docker run
        
        //then go to the folder where both Dockerfile and src live onn bash
        
        docker build -t hello-world .    
        // give it a name to the image hello-word then let it know where the dockerfile is '.' - current directory
        // download necessary application - once got the image, copy src file inside then out put new image
        
        docker run -p 80:80 hello-world          // now you can run
        // -p to forward a port port80 from the host to port 80 in the container
        // when the request reach to port 80 on host, docker is going to forward yo the container
        
 Then you can type local host on browser
 Any changes you need to re build docker again, here comes volume
 
 2 type of volumes wants to persists and share data between containers
 
 volume lives on container and it will be live view so i.e
 
        docker run -p 80:80 -v /Users/Ichi/Dev/docker/src:/var/www/html/ hello-world
    
 Then you can make change then immidiately reflected on the outcome
 Volumes just get an updated copy of the files put inside vollumes just give a 
 runing container the ability to see the files on the host machine file system 
 they do not change the image
        
    
    So everything is runing in docker, no need to set up or install any of it like apache
    That is why it is a bit like vm

Ouch what is CentOS? I saw it on Lynda.com

> Q What is the kenel then? Something betwen software and hard ware ummmm

      Kenel is responsible for 
      1 Process management
      2 Divice management
      3 Memory management
      4 Interrupt handling
      5 1/o file communication
      6 file system and etc...
      
      Type of Kenel
      
      1 Monokenel
      2 MicroKenel
      
      Windows uses Hybid kenel (1&2)
      Linux uses Monolithic kenel
      

> this kind of makes sense but need to know the terminology

>    cgroups, namespaces and LXC are features of Linux kernel to isolate groups of processes; 
>    there is still single kernel, single scheduler, and one instance of kernel memory manager.

### Manifest file with SW - Restaurant App project from MWS Google

Oh damn't manufest start_url is not working, people talk about there is a bug
but using the most recent canary sort the problem out - NOT Boooo



