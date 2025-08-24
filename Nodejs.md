# Node-JS

First upon start the instance. with using nginx...

A Smooth Node.js Kickoff

1. Getting Started

    Install Node.js – Make sure Node.js is installed on your system.

        sudo yum install nodejs
        
    Check npm – Run npm -v; if it's not installed, ensure it's included with your Node.js setup.

3. Set Up Your Project

    Create a project folder: mkdir nodeapp && cd nodeapp

    And then Create file  index.js and package.json 
    I have provided the code above—please copy and paste it from these two files.

or

   Initialize your project: npm init -y (This auto-generates your package.json file)

3. Install Dependencies

    Now, simply run npm install again — this will install everything specified in the package.json file.

    Whenever you have a package.json ready, simply run:

        npm install

    This brings all listed packages into your project.

    if you make changes your code
    Reinstall npm (if needed due to new dependencies)

4. Develop and Test

    We’re only using basic Node.js—simply to run the frontend.
    So,
    Launch your app:

    node index.js

***  Confirm that port 3000 is open and accessible, as Node.js listens on that port by default.
      If port 3000 is unavailable, update your instance’s settings—and the security group rules—
      to match the new port so your application remains reachable.


5.  Some extra command 
    
    check who is using port 3000 in amazon Linux ?

    Methods to Identify the Process on Port 3000
    Using lsof , Using netstat , Using ss , Using fuser etc.
    I'M using lsof
    
        sudo lsof -i :3000

   Terminate the Process
        Using kill with the PID
        Once you've identified the PID (e.g., 1234), terminate the process gracefully:
    
          sudo kill 1234
If the process doesn't terminate, forcefully kill it:
      
       sudo kill -9 1234
    
   
