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

This is a step-by-step instruction on how using and execution the webpage.

#### 1. Access http://eduardogarcia.eng.br/

This is the main page of the application. Here you can find for specific person its own timeline with corresponding weight, blood pressure and additional details and based on that is possible to see the progress accross the date and time period.

![image](https://raw.githubusercontent.com/lucriba/EES---UFSCAR---L-E/master/screenshots/list.png)

![image](https://user-images.githubusercontent.com/47474803/52752746-151bd680-2fdb-11e9-97dd-9cad20ace9f0.png)


#### 2. Adding a new record

![image](https://user-images.githubusercontent.com/47474803/52753062-67a9c280-2fdc-11e9-9750-315e71e1d486.png)


![image](https://raw.githubusercontent.com/lucriba/EES---UFSCAR---L-E/master/screenshots/add.png)


![image](https://user-images.githubusercontent.com/47474803/52753084-80b27380-2fdc-11e9-9617-148491b5e84a.png)


![image](https://user-images.githubusercontent.com/47474803/52753144-b5262f80-2fdc-11e9-95fe-2173d1d08896.png)


#### 3. Deleting an existing record

![image](https://user-images.githubusercontent.com/47474803/52753314-44cbde00-2fdd-11e9-976b-c4d153bcf13b.png)


![image](https://user-images.githubusercontent.com/47474803/52753359-6dec6e80-2fdd-11e9-97fa-469cec46f6f9.png)



#### 4. Chart - Pull out chart Results x Timeline

![image](https://raw.githubusercontent.com/lucriba/EES---UFSCAR---L-E/master/screenshots/chart.png)




#### 5. All line records listed in the page have two main options:

This is the section of the page allows you to updated record lines one by one clicking in corresponding check box on left side or directly having one or many records deleted at the same time by clicking the same check box.

  ##### 5.1 Edit
It is possible, for existing records already saved, in case of any error or duplication, having it deleted through this  option;

![image](https://user-images.githubusercontent.com/47474803/52752950-e05c4f00-2fdb-11e9-9cc8-7e79e94b14fb.png)



![image](https://raw.githubusercontent.com/lucriba/EES---UFSCAR---L-E/master/screenshots/edit.png)



  ##### 5.2 Delete
It is possible, for existing records already saved, in case of any error or duplication, having it deleted through this option.

![image](https://user-images.githubusercontent.com/47474803/52752992-14377480-2fdc-11e9-903e-b1c698aec30a.png)




## *Versioning:*

This is the initial version 1.0


## *Authors:*
* Luara C. Barbosa
* Eduardo G. Nascimento

This initiative borned from a especialization course in Software Engineering performed at UFSCAR Sorocaba in the period from July-2018 till December-2019.
As close coleagues and the empaty between both, they were able to have this job done together to accomplish the results of the classes for Web Development managed by teacher Kleber Carvalho.

