import * as cdk from '@aws-cdk/core';
// import * as sqs from '@aws-cdk/aws-sqs';
import {Bucket, BucketEncryption} from "@aws-cdk/aws-s3";
import {CfnOutput, CfnParameter, Duration} from "@aws-cdk/core";

export class rSamAwsCdkStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        //cdk param
        const duration = new CfnParameter(this, 'duration', {
            type: 'Number',
            default: 6,
            minValue: 1,
            maxValue: 10
        })

        const bucket = new Bucket(this, 'rSamFirstAppBucket', {
            encryption: BucketEncryption.S3_MANAGED,
            lifecycleRules: [
                {
                    expiration: Duration.days(2)
                }
            ]
        })

        //display bucket info
        new CfnOutput(this, 'bucket',{
            value: bucket.bucketName
        })
    }
}

