package com.splash;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        // Show the js-controlled splash screen
        // NOTE: It needs the react instance manager so it can listen to the react
        //       context creation event and hide the native splash
        //SplashScreen.show(this, getReactInstanceManager());

        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Splash";
    }
}
