@echo off
set JAVA_HOME=C:\Program Files\Android\Android Studio\jbr
set PATH=%JAVA_HOME%\bin;%PATH%
cd /d "C:\Users\JESUS\Escritorio\Proyecto Claude\Kalo\android"
call gradlew.bat assembleRelease
echo BUILD_EXIT_CODE=%ERRORLEVEL%
