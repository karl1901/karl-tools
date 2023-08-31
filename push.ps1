Write-Output "=== runing ===";
Write-Output "add all update files ===>>>";
git add *
$commitInfo = Read-Host 'please input commitInfo'
git commit -m $commitInfo
Write-Output "git push ===>>>";
git push
Write-Output "push ok ===>>>";
Write-Output "=== stop ===";
Pause