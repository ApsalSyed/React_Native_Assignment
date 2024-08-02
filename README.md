This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).


## Project title  
React Native App

## description
React Native App aims to give consumers a simple and enjoyable experience.The app features a clean and modern user interface, enabling users to seamlessly navigate between different sections. the navigation system mixes drawer navigation for more options with bottom tab navigation for main areas.


## Project Screenshots
![Login Page](./asset/images/loginpageOutput.png?raw=true "LOgin Page")
![Profile Page Validation](./asset/images/validationLoginOutput.png?raw=true "Profile Page With Validation")
![Home page](./asset/images/homeOutput.png?raw=true "Home Page")
![Profile Page](./asset/images/profileOutput.png?raw=true "Profile Page")
![settings Page](./asset/images/settingsOutput.png?raw=true "Settings Page")
![Drawer Window](./asset/images/drawerOutput.png?raw=true "Settings Page")


## Project Features
**Login Page**: Users can log in with form validation to ensure correct input.
**Home Page**: The main landing page after login.
**Profile Page**: Displays user profile information.
**Settings Page**: Allows users to adjust app settings.
**Navigation**: Utilizes bottom bar navigation and drawer navigation for seamless navigation between pages.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


## Step 1: Install Library

```bash
# using npm
npm install

```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!
3. Adding New Pages
Create a new component in the `src/Pages` directory.
Add styles for the component in the `src/styles` directory.
Update the navigation configuration in `BottomTabNavigator.tsx` or `DrawerNavigator.tsx` as needed.
4. Navigation
Bottom Tab Navigation: For primary pages (Home, Profile, Settings).
Drawer Navigation: For additional navigation options and settings.



### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Future Update 
1. Aenhancing each page's component's functionality.
2. include more features

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.

- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
