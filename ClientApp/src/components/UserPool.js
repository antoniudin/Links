import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId:'us-east-2_X2ypa77KV',
    ClientId: '33srkabq24j9sujvd556u303qv'
}

export default new CognitoUserPool(poolData);