echo 'Signing release APK...'
call "%JAVA_HOME%\bin\jarsigner" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore reactkey.jks -storepass abc12345 "android/app/build/outputs/apk/app-release-unsigned.apk" ReactNative
call "%ANDROID_HOME%\build-tools\22.0.1\zipalign.exe" -v 4 "android/app/build/outputs/apk/app-release-unsigned.apk" Showcase-ReactNative.apk
echo 'Finished :)'
pause