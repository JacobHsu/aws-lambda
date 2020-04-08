# aws-lambda

`$ npm i -g serverless`  
`$ serverless create --template aws-nodejs`    
`$ npm i --save aws-sdk axios`    
`$ serverless deploy`  #成功會生成 .serverless  
到 AWS 的 [Lambda console](https://console.aws.amazon.com/lambda) 點入內容裡面可以看到 `tw-ipo-revenue-dev-crawl` 新增 `測試` 執行 S3可看到檔案  

[AWS Lambda 資源](https://aws.amazon.com/tw/lambda/resources/?aws-lambda-resources-blog.sort-by=item.additionalFields.createdDate&aws-lambda-resources-blog.sort-order=desc#Workshops_.26_Tutorials)  
[Serverless framework 使用 AWS Lambda 製作爬蟲到 AWS S3](https://zh.data-driven.blog/2019/10/12/serverless-framework-使用-aws-lambda-製作爬蟲到-aws-s3/)  
[Serverless Framework](https://serverless.com/) gives you everything you need to develop, deploy, monitor and secure serverless applications on any cloud.  

## examples

AWS | [Fetch File And Store In S3](https://serverless.com/examples/aws-node-fetch-file-and-store-in-s3/)

`serverless install -u https://github.com/serverless/examples/tree/master/aws-node-fetch-file-and-store-in-s3 -n  aws-node-fetch-file-and-store-in-s3`
`-n` directory `aws-node-fetch-file-and-store-in-s3`

```js
serverless invoke --function save --log --data='{ "image_url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", "key": "googlelogo.png"}'
```

## References

[Serverless framework 使用 AWS Lambda 製作爬蟲到 AWS S3](https://zh.data-driven.blog/2019/10/12/serverless-framework-%E4%BD%BF%E7%94%A8-aws-lambda-%E8%A3%BD%E4%BD%9C%E7%88%AC%E8%9F%B2%E5%88%B0-aws-s3/)  
[如何在 AWS 中創造新使用者權限](https://zh.data-driven.blog/2019/10/07/如何在-aws-中創造新-user-權限/)  
serverless/[build-a-web-app](https://aws.amazon.com/tw/serverless/build-a-web-app/)  
為 Lambda 函數建立 IAM 角色  
每個 Lambda 函數皆有與其關聯的 IAM 角色。此角色會定義允許函數與哪些其他 AWS 服務進行互動。針對本研習營之用途，您必須建立一個 IAM 角色，授與 Lambda 函數許可將記錄寫入  
