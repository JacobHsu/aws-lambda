'use strict';

const axios = require('axios');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const bucketName = process.env.OUTPUT_BUCKET
const bucketKeyPrefix = "tw_ipo_company_revenue/"
 
module.exports.crawl = async (event, context, callback) => {
  return axios.get('http://mopsfin.twse.com.tw/opendata/t187ap05_L.csv')
    .then(function(res) {
      return new Promise ((resolve, reject) => {
        const params = {Bucket: bucketName, Key: bucketKeyPrefix + Date.now() + '.csv', Body: res.data};
        s3.putObject(params, function(err, data) {
          if (err) {
            reject(err)    
          } else {
            resolve(data);
          }
        });
      });
    })
    .then((data) => {
      callback(null, { success: true, msg: data });
    })
    .catch((error) => {
      callback(error, { success: false });
    });
};

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
