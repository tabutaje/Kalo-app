$env:JAVA_HOME = 'C:\Program Files\Android\Android Studio\jbr'
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"
Set-Location 'C:\Users\JESUS\Escritorio\Proyecto Claude\Kalo\android'
& '.\gradlew.bat' assembleRelease
Write-Host "BUILD_EXIT_CODE=$LASTEXITCODE"
