# Understanding the interface

Take a deep breath and have a look at the user interface. At first addon interface may look a bit complex. It is due to many tweakable parameters and fancy names like Kelvins, radiance, and absorption that we use those to standardize the variables names.

## Addon panel location
As the atmosphere is a part of a world, it is stored in the World Properties. For your convenience, you will also find the panel available in the *N bar* which is turned on by default (panel [name](https://www.physicaladdons.com/psa/customization/#toolbar-label) and [visibility](https://www.physicaladdons.com/psa/customization/#toolbar-enabled) can be configured).

## General controls
[Sun](https://www.physicaladdons.com/psa/sun/) can be moved using azimuth and elevation properties or you can move it by rotating the Sun object itself or using the [Sun Position](https://docs.blender.org/manual/en/latest/addons/lighting/sun_position.html) addon that comes with the Blender.

There are a bunch of parameters that are grouped in 8 sections: Sun, Binary Sun (if enabled), Atmosphere, Stars, Clouds, Object Fog, Ground, and Artistic Controls. To understand what each and every parameter does we do encourage playing with it.

!!! tip
    Try taking an existing image of an atmosphere and tweak the addon controls in order to achieve the wanted result.  

Another way to learn the parameters is to reverse engineer our pre-defined [world assets](https://www.physicaladdons.com/psa/presets/). Apply asset and see what parameters have been tweaked. 