# nba_push_score2
(push notification without firebase tutorials)[https://www.youtube.com/watch?v=IEiZy0pcMMA]


https://app.nativenotify.com/

#expo build android apk
https://docs.expo.dev/build-reference/apk/

```shell
eas build -p android --profile preview --local --output output/android

adb devices
adb -s 72a1e28e install application-b6ba2795-20f9-4a8c-a41e-a2c7d9693392.apk 
```

#no development, allow offline
```shell
npx expo start -c --no-dev  --offline 
npx expo start -c  --offline 

npx expo start -c --no-dev 
```

#all user install
```shell
npx expo start -c --no-dev --tunnel
```

#local build ios
[local build ios]](https://docs.expo.dev/app-signing/local-credentials/)

#server setup
```
nohup npx expo start -c --no-dev  &
```