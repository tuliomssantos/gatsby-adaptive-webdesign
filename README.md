#   Gatsby Adaptive Webdesign

> Adaptive web design (AWD) promotes the creation of multiple versions of a web page to better fit the user's device, as opposed to a single static page which loads (and looks) the same on all devices or a single page which reorders and resizes content responsively based on the device/screen size/browser of the user. - Wikipedia

##  System Structure
*   Multiple versions of website
    *   Mobile version (PWA)
    *   Desk version (Non-PWA)
*   AWS Infrastructure
    *   Each version is hosted on S3 bucket
    *   Single Cloudfront distribution
    *   Redirect to correct bucket basead on user's device

##  Live Demo
https://d2pzb6x027d678.cloudfront.net/

##  Contact
tuliomssantos@gmail.com

https://www.linkedin.com/in/tulio-santos-b04958172/