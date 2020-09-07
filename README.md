# ts
A monolithic repo for all the TypeScript code

to get device id for pushbullet:
```
 curl --header 'Access-Token: <access_token>' https://api.pushbullet.com/v2/devices | jq .
```