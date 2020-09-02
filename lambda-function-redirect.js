'use strict';

exports.handler = (event, context, callback) => {
   const request = event.Records[0].cf.request;
   const headers = request.headers;
   
   const mobileAppBucket = "mobile-version-ekzo281bbk9q3y55.s3-website-sa-east-1.amazonaws.com";
   const deskAppBucket = "desk-version-ekzo281bbk9q3y55.s3-website-sa-east-1.amazonaws.com";
   
   let domain = "";
   
   //domain = deskAppBucket; //apenas para testar o redirect
   
   if(headers['cloudfront-is-mobile-viewer'] && headers['cloudfront-is-mobile-viewer'][0].value === 'true'){
       domain = mobileAppBucket;
   } else {
       domain = deskAppBucket;
   }
   
    request.headers["host"] = [{ key: "host", value: domain }];
    request.origin.custom.domainName = domain;
   
   callback(null,request)
};