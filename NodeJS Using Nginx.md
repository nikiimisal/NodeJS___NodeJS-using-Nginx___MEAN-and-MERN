Until now, we’ve been using Node.js solely to run the foreground. <br>
From here on, we’ll begin using NGINX to manage the background<br>
If we only use Node.js, it can’t handle too many incoming requests under load—so we employ NGINX to manage that.<br>

# Nodejs Using Nginx

>>>>>>>So far, the steps we've taken have been strictly about running Node.js. From this point onward, we will continue the process.<<<<<<<<<<br>


Now we will run Node.js using NGINX. <br>

First, install NGINX and start the service.<br> 

     sudo yum install nginx
     sudo service nginx start 
     

Next, update the NGINX configuration file to proxy requests to port 3000.<br> 

     location / {
     proxy_pass http://localhost:3000;
     }

 After saving your changes, reload NGINX. <br> 

     sudo service nginx reload
     sudo systemctl reload nginx

Finally, run your application with command<br> 

     node index.js
and you’re ready to go!<br> 
