# EES - UFSCAR - Plataformas Web
Grupo: Luara &amp; Eduardo


# _*Healthy Project*_ :running:

People everyday are becoming very busy accross their modern lives. Basically they need to manage too many activities in paralel combining both personal and professional aspects.
One of the biggest consequences of it, is that their health, even living in a globally food scene where you can find any product being good or not to your health, even thought is becoming worst everyday.
People get sick all the time and some constraint diseases are daily becoming part of our lives.
Based on that, this project will enable you starting a healthy project anywhere it interests you. You can use at you work, your home, or within any group you want to start having a healthy attitude.
The project allows you controlling the most basic and important data like weight and blood pressure. Like that you can have a constantly follow-up on the quality of life beginning from yourself and a better life plan and actions based on that.


## *Used Technologies and Plataforms:*

* *Node.Js*
* *Redis Database*
* *Visual Studio Code*
* *GIT*
* *Docker*
* *Bootstrap*
* *ChartJS*


## *Prerequisites:*

For using GIT is necessary the instalation of Git aplication.


Mandatory having Node.js installed to run this application.


#### REDIS DATABASE
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

## *Instalation:*

For having all functionality fully working you need to follow the basic steps below. Make sure you have Node JS installed in your computer. If you are running on Linux Debian based distro, execute the command below.

```sh
sudo apt install nodejs
```

To confirm you have a successful installation, type

```sh
node -v
npm -v
```

#### 1. Install the coding
Make sure you have installed and downloaded all files cointaned in this project. In order to do that execute the commands below.

```sh
git clone https://github.com/lucriba/EES---UFSCAR---L-E.git
```

#### 2. Execute
Perform execution of command *nodemon*.

#### 3. Access Webpage
Access link http://localhost:3030 . You can change the port as you want by editing the file /bin/www .


## *Execution:*

This is a step-by-step instruction on how start using and execution the webpage.

#### 1. Manage webpage

This is the main page of the application. Here you can find for specific person its own timeline with corresponding weight, blood pressure and additional details and based on that is possible to see the progress accross the date and time period. There are some main functionalities like Adding New records, Editing and Deleting records and finally generating a Chart based on all the records.

![image](https://raw.githubusercontent.com/lucriba/EES---UFSCAR---L-E/master/screenshots/list.png)


#### 2. Add New Record

This is the functionality to create/add new entry to the page. Basically you need to fill up the following details:
*Weight*
*Blood Pressure*
*More*
Date and Time information will be automatically populated by the page once a record is submitted/saved.

![image](https://raw.githubusercontent.com/lucriba/EES---UFSCAR---L-E/master/screenshots/add.png)


#### 3. Edit and Delete 

This is the section of the page allows you to updated record lines one by one clicking in corresponding check box on left side or directly having one or many records deleted at the same time by clicking the same check box.

  ##### 3.1 Edit
It is possible, for existing records already saved, in case of any error or duplication, having it deleted through this  option;

![image](https://raw.githubusercontent.com/lucriba/EES---UFSCAR---L-E/master/screenshots/edit.png)

  ##### 3.2 Delete
It is possible, for existing records already saved, in case of any error or duplication, having it deleted through this option.


#### 4. Chart - Pull out chart Results x Timeline

This section of the page allows you to pull out some outstanding chart that shows the progress accross the timeline showing both Weight and Blood Pressure. This is a great option to perform comparison and see the evolution of the project not only for the good but also to the bad aspect. Enjoy it!

![image](https://raw.githubusercontent.com/lucriba/EES---UFSCAR---L-E/master/screenshots/chart.png)



## *Versioning:*

This is the initial version 1.0


## *Authors:*
* Luara C. Barbosa
* Eduardo G. Nascimento

This initiative borned from a especialization course in Software Engineering performed at UFSCAR Sorocaba in the period from July-2018 till December-2019.
As close coleagues and the empaty between both, they were able to have this job done together to accomplish the results of the classes for Web Development managed by teacher Kleber Carvalho.

