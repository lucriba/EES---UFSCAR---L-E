# EES---UFSCAR---L-E
EES - UFSCAR - Luara &amp; Eduardo


# _*Healthy Project*_ :running:

People everyday are becoming very busy accross their modern lives. Basically they need to manage too many activities in paralel combining both personal and professional aspects.
One of the biggest consequence of it, is that their healthy, even living in a globally food scene where you can find any product being good or not to your healthy, even tought is becoming worst everyday.
People get sick all the time and some constraint diseases are daily becoming part of our lives.
Based on that, this project will enable you starting a healthy project anywhere it interests you. You can use at you work, your home, or within any group you want to start having a healthy attitude;
The project allows you controlling some basic and important data like person details, weight, pressure, ...in order to have a constantly follow-up on the quality of life from the group and allowing having better life actions based on this data that usually people don´t care too much about it.


## *Prerequisites:*

### REDIS DATABASE
![alt text](http://3.bp.blogspot.com/-qFzuZimiwv8/Wj2i2upNTzI/AAAAAAAA-s4/zUmkf_BXhjsgcyynRi-bSBC8WW0Cn4OgACK4BGAYYCw/s1600/89e5782a-76ea-4b94-a561-39e331c281a5-redis.png "Redis Logo")
The app connects to a REDIS database. In terms of architecture it might be an overkill but we decided to use it for learning purposes. REDIS is a key-value database that has become very popular. It is in the 8th position among the most popular databases according to the website https://db-engines.com/en/ranking and is used by many popular websites such as Twitter, GitHub, Pinterest and Snapchat.

In order to install the app, you need first to have REDIS database installed. You have a couple of options here. You can either install the database in the machine or run it in a docker container. The following commands cover the second option which I consider easier and faster. They should work in most of Linux Debian distros, ex. Ubuntu.

1. Install docker in case you don't have it already installed.
```sh
sudo apt-get install docker.io
```

2. Test if everything is OK with the following command. You should see a message starting by Hello from Docker!
```sh
docker run hello-world
```

3. To pull a docker REDIS file and run it on local machine with default port use the command below.
```sh
docker run --name some-redis -d redis
```

4. At this point, you should be able to see the recently downloaded image with the command below.
```sh
docker ps
```

5. Finally, run it passing the parameters as follow.
```sh
docker run -p 6379:6379 redis
```
## *Execution:*

A step by step series of examples that tell you how to get a development env running


## *Versioning:*

This is the initial version 1.0


## *Authors:*
* Luara C. Barbosa
* Eduardo G. Nascimento

This initiative borned from a especialization course in Software Engineering performed at UFSCAR Sorocaba in the period from July-2018 till December-2019.
As close coleagues and the empaty between both, they were able to have this job done together to accomplish the results of the classes for Web Development managed by teacher Kleber Carvalho.

