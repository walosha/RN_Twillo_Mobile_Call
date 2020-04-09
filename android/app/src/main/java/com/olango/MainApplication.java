<<<<<<< HEAD
package com.nzenweoforgroup.olango;
import com.hoxfon.react.RNTwilioVoice.TwilioVoicePackage;  // <--- Import Package 

import android.app.Application;
import com.facebook.react.BuildConfig;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
=======
package com.olango;

import android.app.Application;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
>>>>>>> b4expo
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
<<<<<<< HEAD
import com.nzenweoforgroup.olango.generated.BasePackageList;
=======
import com.olango.generated.BasePackageList;
>>>>>>> b4expo

import org.unimodules.adapters.react.ReactAdapterPackage;
import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.Package;
import org.unimodules.core.interfaces.SingletonModule;
import expo.modules.constants.ConstantsPackage;
import expo.modules.permissions.PermissionsPackage;
import expo.modules.filesystem.FileSystemPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  private final ReactModuleRegistryProvider mModuleRegistryProvider = new ReactModuleRegistryProvider(
    new BasePackageList().getPackageList(),
    Arrays.<SingletonModule>asList()
  );

<<<<<<< HEAD
  private final ReactNativeHost reactNativeHost = new ReactNativeHost(this) {

    @Override public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }
    

    //  @Override
    //     protected List<ReactPackage> getPackages() {
    //         return Arrays.<ReactPackage>asList(
    //             new MainReactPackage(),
    //             new TwilioVoicePackage()         // <---- Add the Package : by default it will ask microphone permissions 
    //             // new TwilioVoicePackage(false) // <---- pass false to handle microphone permissions in your application 
    //         );
    //     }
=======
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }
>>>>>>> b4expo

    @Override
    protected List<ReactPackage> getPackages() {
      List<ReactPackage> packages = new PackageList(this).getPackages();
      packages.add(new ModuleRegistryAdapter(mModuleRegistryProvider));
      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
<<<<<<< HEAD

=======
>>>>>>> b4expo
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
<<<<<<< HEAD
    return reactNativeHost;
=======
    return mReactNativeHost;
>>>>>>> b4expo
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
