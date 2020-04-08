# Note

服務/運算/[Lambda](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions)
`tw-ipo-revenue-dev-crawl`  

s3Bucket `jacobhsu-serverless`
tw-ipo-revenue\ `$ serverless deploy`

jacobhsu-serverless > tw_ipo_company_revenue > files.. .csv

serverless [Schedule](https://serverless.com/framework/docs/providers/aws/events/schedule/)

` schedule: cron(0 8 3 * ? *)` 每月3號8點

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │                                   
│ │ │ │ │
│ │ │ │ │
* * * * *
```
