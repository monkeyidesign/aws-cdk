# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region or cdk deploy --all
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

```--------------------------------``` 
* `cdk init app --language typescript`
* `cdk list`
* `aws s3 ls`
* `cdk destroy AwsCdkStack`
* `cdk doctor`

```Parameters```
* `cdk deploy --parameters duration=9`
 
## Docs
```
cdk doc
 https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html
```

## S3
```
- npm install @aws-cdk/aws-s3@1.134.0 and its version the same as "@aws-cdk/core": "1.134.0"
- cdk bootstrap
https://docs.aws.amazon.com/cdk/api/latest/docs/aws-s3-readme.html
```
