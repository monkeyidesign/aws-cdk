import * as cdk from '@aws-cdk/core';
// import * as sqs from '@aws-cdk/aws-sqs';
import {Bucket, BucketEncryption} from "@aws-cdk/aws-s3";
import {CfnOutput} from "@aws-cdk/core";

export class rSamAwsCdkStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        const bucket = new Bucket(this, 'rSamFirstAppBucket', {
            encryption: BucketEncryption.S3_MANAGED
        })

        //display bucket info
        new CfnOutput(this, 'bucket',{
            value: bucket.bucketName
        })
    }
}

