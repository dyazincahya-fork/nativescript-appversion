import { Application } from "@nativescript/core/application";

export function getAppId() {
  return new Promise(function (resolve, reject) {
    function _resolve() {
      const context = Application.android.context; // Gunakan context
      resolve(context.getPackageName());
    }
    try {
      if (Application.android.context) {
        _resolve();
      } else {
        // if this is called before application.start() wait for the event to fire
        Application.on(Application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getAppId: " + ex);
      reject(ex);
    }
  });
}

export function getAppIdSync() {
  return Application.android.context.getPackageName(); // Gunakan context
}

export function getVersionName() {
  return new Promise(function (resolve, reject) {
    function _resolve() {
      const context = Application.android.context; // Gunakan context
      const packageManager = context.getPackageManager();
      resolve(
        packageManager.getPackageInfo(context.getPackageName(), 0).versionName
      );
    }
    try {
      if (Application.android.context) {
        _resolve();
      } else {
        // if this is called before application.start() wait for the event to fire
        Application.on(Application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
}

export function getVersionNameSync() {
  const context = Application.android.context; // Gunakan context
  const packageManager = context.getPackageManager();
  return packageManager.getPackageInfo(context.getPackageName(), 0).versionName;
}

export function getVersionCode() {
  return new Promise(function (resolve, reject) {
    try {
      const context = Application.android.context; // Gunakan context
      const packageManager = context.getPackageManager();
      resolve(
        "" +
          packageManager.getPackageInfo(context.getPackageName(), 0).versionCode
      );
    } catch (ex) {
      console.log("Error in appversion.getVersionCode: " + ex);
      reject(ex);
    }
  });
}

export function getVersionCodeSync() {
  const context = Application.android.context; // Gunakan context
  const packageManager = context.getPackageManager();
  return (
    "" + packageManager.getPackageInfo(context.getPackageName(), 0).versionCode
  );
}
