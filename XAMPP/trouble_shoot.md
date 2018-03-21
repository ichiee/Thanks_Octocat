
### Permission change

  1. Open applications folder
  2. Locate XAMPP folder
  3. Right click, get info (as described above)
  4. In pop-up window locate the 'sharing & permission' section
  5. Click the 'locked' padlock symbol
  6. Enter admin password
  7. Change 'Everyone' permissions to read & write
  8. In the get info window still, select the 'cog' icon' drop down option at the very bottom and select 'Apply to enclosed items' this will adjust the permission across all sub-folders as well.
  9. Re-lock the padlock symbol
  10. Close the 'Get Info' window.
  
  you can do that from command line 
  chmod -R 0775 XAMPP/
  on appliation directory
  You need to change permission on XAMPP itself
  https://stackoverflow.com/questions/9046977/xampp-permissions-on-mac-os-x
