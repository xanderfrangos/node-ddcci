# node-ddcci

## Installation

node-ddcci is currently only supported on Windows.

````bash
npm install @hensm/ddcci
````

## Usage

````js
const ddcci = require("@hensm/ddcci");

for (const monitor of ddcci.getAllMonitors()) {
    console.log(`${monitor.deviceKey} current brightness: ${ddcci.getBrightness(monitor.deviceKey)}`);
    ddcci.setBrightness(monitor.deviceKey, 25);
}
````

## Docs

* ### `getAllMonitors()`
  Gets a detailed list of the current connected monitors.
  * #### Return value
    An array of monitors, represented as an `Object`, containing the following properties:
    * **`deviceKey`**  
      `String`. The monitor ID. Use this for other functions such as `setBrightness`.
    * **`name`**  
      `String`. The display path for this device.
    * **`fullName`**  
      `String`. The full display path for this device and monitor.
    * **`name`**  
      `Boolean`. Whenther or not this devices accepts DCC/CI commands. You cannot use other functions such as `setBrightness` if this is false.
    * **`capabilities`**  
      `Object`. A object of all VCP codes reported as supported on this device by Windows. The keys are the VCP codes as a hexadecimal string. Each value is an array of specifically supported values, if applicable.

* ### `getMonitorList()`
  Gets a list of the current connected monitors.
  * #### Return value
    An array of `String` containing the monitor IDs.

* ### `getBrightness(monitorId)`
  Queries a monitor's brightness level.
  * #### Parameters
    * **`monitorId`**  
      `String`. ID of monitor for which to query the brightness.
  * #### Return value
    An `integer`, typically between 0-100, representing the current brightness.
    
* ### `getMaxBrightness(monitorId)`
  Queries a monitor's maximum brightness level.
  * #### Parameters
    * **`monitorId`**  
      `String`. ID of monitor for which to query the brightness.
  * #### Return value
    An `integer`, typically between 0-100, representing the maximum brightness.

* ### `setBrightness(monitorId, level)`
  Sets a monitor's brightness level.
  * #### Parameters
    * **`monitorId`**  
      `String`. ID of monitor for which to set the brightness.
    * **`level`**  
      `integer`. Between 0-100 representing the new brightness level.

* ### `getContrast(monitorId)`
  Queries a monitor's contrast level.
  * #### Parameters
    * **`monitorId`**  
      `String`. ID of monitor for which to query the contrast.
  * #### Return value
    An `integer`, typically between 0-100, representing the current contrast.
    
* ### `getMaxContrast(monitorId)`
  Queries a monitor's maximum contrast level.
  * #### Parameters
    * **`monitorId`**  
      `String`. ID of monitor for which to query the contrast.
  * #### Return value
    An `integer`, typically between 0-100, representing the maximum contrast.

* ### `setContrast(monitorId, level)`
  Sets a monitor's contrast level.
  * #### Parameters
    * **`monitorId`**  
      `String`. ID of monitor for which to set the contrast.
    * **`level`**  
      `integer`. Between 0-100 representing the new contrast level.

* ### `_getVCP(monitorId, vcpCode)`
  Queries a monitor for a VCP code value.
  * #### Parameters
    * **`monitorId`**  
      `String`. ID of monitor for which to query the VCP feature.
    * **`vcpCode`**  
      `integer`. VCP code to query
  * #### Return value
    An `array` of two `integer` values in the format of `[currentValue, maxValue]`.

* ### `_setVCP(monitorId, vcpCode, value)`
  Sets the value of a VCP code for a monitor.
  * #### Parameters
    * **`monitorId`**  
      `String`. ID of monitor for which to set the VCP feature.
    * **`vcpCode`**  
      `integer`. VCP code to set.
    * **`value`**  
      `integer`. Value of the VCP code.

* ### `_refresh()`
  Manually refreshes the monitor list.


