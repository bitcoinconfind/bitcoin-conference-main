# PowerShell script to copy venue images

$sourceImage1 = "C:\Users\ummeh\OneDrive\Pictures\Screenshots 1\Screenshot 2025-10-04 132328.png"
$sourceImage2 = "C:\Users\ummeh\Downloads\Gemini_Generated_Image_nwjzb0nwjzb0nwjz.png"

$destImage1 = "C:\Users\ummeh\OneDrive\Desktop\Projects\bitcoin-conference-main-main\bitcoin-conference-main-main\public\assets\imgs\others\venue_slide_1.png"
$destImage2 = "C:\Users\ummeh\OneDrive\Desktop\Projects\bitcoin-conference-main-main\bitcoin-conference-main-main\public\assets\imgs\others\venue_slide_2.png"

Write-Host "Copying venue images..." -ForegroundColor Green

if (Test-Path $sourceImage1) {
    Copy-Item -Path $sourceImage1 -Destination $destImage1 -Force
    Write-Host "✓ Copied venue_slide_1.png" -ForegroundColor Green
} else {
    Write-Host "✗ Source image 1 not found: $sourceImage1" -ForegroundColor Red
}

if (Test-Path $sourceImage2) {
    Copy-Item -Path $sourceImage2 -Destination $destImage2 -Force
    Write-Host "✓ Copied venue_slide_2.png" -ForegroundColor Green
} else {
    Write-Host "✗ Source image 2 not found: $sourceImage2" -ForegroundColor Red
}

Write-Host "`nImages copied successfully!" -ForegroundColor Green
Write-Host "You can now run 'npm run dev' to see the sliding reveal effect." -ForegroundColor Cyan