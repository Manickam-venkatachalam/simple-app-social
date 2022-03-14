# simple_social_app
Hitesh's LCO pro backend developer course first section social app

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###


## Install

    $ git clone https://github.com/Manickam-venkatachalam/simple_social_app/
    $ cd simple_social_app
    $ npm install 

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

## Running the project

    $ npm  start
## API routes

![image](https://user-images.githubusercontent.com/72659782/158248650-0ae39382-04a2-4176-8d71-829767699e4c.png)


#### After the project runs in  `localhost:4444` you can check the following routes 
  After installing node, this project will need yarn too, so just run the following command.
  #### it ill return a great messgae like this 
  ![image](https://user-images.githubusercontent.com/72659782/158249134-556df6cc-2d9f-4012-8737-751242af5c76.png)



    $ /
---
    $ /api/v1/instagram
#### it will return the values `{"username":,"follower":,"following":,"date | time":}` similarly for following routes 
---
    $ /api/v1/facebook
---    
    $ /api/v1/linkedin
---
### it ill return the values passed in url after the route `{localhost:4444\api\v1\<anyvalue>}` it will return `{"param":"<anyvalue>"}`
    $ /api/v1/<anyvalue>

    

## Simple build for production

    $ npm build

