/**
 *
 * Push a file from the device.
 *
 * @param {String} path  local path to file
 *
 * @see  https://github.com/appium/appium/blob/master/docs/en/appium-bindings.md#push-file
 * @type appium
 *
 */
module.exports = function pushFileToDevice(pathOnDevice, base64Data) {

    /*!
     * make sure that callback contains chainit callback
     */
    var callback = arguments[arguments.length - 1];

    var requestOptions = {
        path: '/session/:sessionId/appium/device/push_file',
        method: 'POST'
    };

    this.requestHandler.create(requestOptions, { path: pathOnDevice, data: base64Data }, callback);

};