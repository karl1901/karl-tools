Write-Output "=== runing ===";
Write-Output "check registry ===>>>";
npm config get registry
Write-Output "Please login npm: ===>>>";
npm login
Write-Output "npm publish ===>>>";
npm publish
Write-Output "publish ok ===>>>";
Write-Output "=== stop ===";
Pause
