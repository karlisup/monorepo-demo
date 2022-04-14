Whenever a new version is released, it will appear in either Blendermarket or Gumroad marketplace where you bought the addon.
To find the latest addon version, navigate to:

=== "Blendermarket"
    1. Go to [Blendermarket Orders](https://blendermarket.com/account/orders){:target="_blank"}
    ```
    Menu (right top corner)  > Orders > Downloads (Go to Downloads link)
    ```
    2. Download the `.zip` file with the latest version.
    3. _If exists_, remove the previous `physical-starlight-atmosphere` version from Blender .
    4. Install `.zip` file by following normal Blender addon [installation process](/psa/getting-started/#installation).
=== "Gumroad"
    1. Go to [Gumroad Library](https://gumroad.com/library){:target="_blank"}
    ```
    Library > (hover on a product) View content
    ```
    2. Download the `.zip` file with the latest version.
    3. _If exists_, remove the previous `physical-starlight-atmosphere` version from Blender .
    4. Install `.zip` file by following normal Blender addon [installation process](/psa/getting-started/#installation).
    

## Troubleshooting 
If updating to a newer add-on version (or the installation method did not work) recommendation is to remove previous
 a version of the addon. For now this is the only option we can assure that addon will work properly. To do that go to
 the Blender addons location:
 
=== "Windows 7 / 10"
    ```
    C:\Users\{username}\AppData\Roaming\Blender Foundation\Blender\2.XX\scripts\addons
    ``` 
=== "Mac"
    From Finder in the Go dropdown holding ++command++ key will expand and show Library where you can access the local data of Blender.
    ```
    /Users/{username}/Library/Application Support/Blender/2.XX/scripts/addons
    ```
=== "Linux"
    ```
    ~/.config/blender/2.XX/scripts/addons
    ```



- Remove `physical-starlight-atmosphere` folder.
- Then either:
    - follow normal Blender addon [installation process](/psa/getting-started/#installation)
    - or copy the contents of the .zip to the `/scripts/addons` directory and in Blender enable the add-on (go to `Edit > Preferences > Add-ons` and search for _atmosphere_ - tick the checkbox)
