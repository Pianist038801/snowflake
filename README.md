Snowflake ![snowflake](https://cloud.githubusercontent.com/assets/1282364/11599365/1a1c39d2-9a8c-11e5-8819-bc1e48b30525.png)
==================================
#### A React-Native starter mobile app for iOS and Android with a
single code base.  Using Redux and Immutable, the state of the
application is fully testable with Jest, currently at 86% coverage.
Snowflake supports Hot Reloading of its state.

[![Join the chat at https://gitter.im/bartonhammond/snowflake](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bartonhammond/snowflake?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
ios: [![Build Status](https://www.bitrise.io/app/a44bb73e76a07b0a.svg?token=h7L3i9fo2NQzkk3mgNy-GQ)](https://www.bitrise.io/app/a44bb73e76a07b0a)
android: [![Build Status](https://www.bitrise.io/app/2208a743f1e2bc77.svg?token=CDkkOzD9axAqgpIBqOibqA)](https://www.bitrise.io/app/2208a743f1e2bc77)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/bartonhammond/snowflake/blob/master/LICENSE)

# Content

- [Screens](#screens)
- [Hot Reloading](#hot-reloading)
- [Summary](#summary)
- [Source documentation](http://bartonhammond.github.io/snowflake/snowflake.js.html)
- [Technologies](docs/Technologies.md)
- [Setup](docs/Setup.md)
- [Redux State Management](docs/ReduxStateManagement.md)
- [FAQ](docs/FAQ.md)

----------

## Screens

| Platform| Register     | Login | Profile   |
| :------:| :-------: | :----: | :---: |
| iOS|  ![ios Profile](https://cloud.githubusercontent.com/assets/1282364/11598478/b2b1b5e6-9a87-11e5-8be9-37cbfa478a71.gif)  | ![ios Login](https://cloud.githubusercontent.com/assets/1282364/11598580/6d360f02-9a88-11e5-836b-4171f789a41d.gif)| ![ios Register](https://cloud.githubusercontent.com/assets/1282364/11598582/6d392750-9a88-11e5-9839-05127dfba96b.gif)  |
| Android |![Android Register](https://cloud.githubusercontent.com/assets/1282364/11598579/6d3487b8-9a88-11e5-9e95-260283a6951e.gif)    | ![Android Login](https://cloud.githubusercontent.com/assets/1282364/11598577/6d2f140e-9a88-11e5-8cd4-1ba8c9cbc603.gif)   |  ![Android Profile](https://cloud.githubusercontent.com/assets/1282364/11598578/6d314ee0-9a88-11e5-9a6c-512a313535ee.gif) |

----------

## Hot Reloading
This video shows Snowflake exporting and importing state from Redux.  It demonstrates, with the iOS Simulator, the process of copying the state for import at a later time.  After the demo, I walk through the code to clarify how I achieved this.  It's assumed you have some familiarity with Redux.  Hopefully it helps you gain a better understanding of what Redux provides you!

<a href="http://www.youtube.com/watch?feature=player_embedded&v=b4eqQUA3O6o" target="_blank"><img src="http://img.youtube.com/vi/b4eqQUA3O6o/0.jpg" 
alt="Snowflake Hot Loading" width="240" height="180" border="10" /></a>

----------

## Summary

1. The application runs on **both iOS and Android** with a **single code** base
1. A User can **Register, Login, Logout, Reset their Password** and modify their **Profile**
1. The Forms display messages for **help and field validation**.
1. The Forms are **protected** when fetching.
1. The Forms display **spinner** when fetching.
1. Form submission **errors are displayed** (see above Login)
1. **All state changes*** are actions to the Redux store.
1. The backend is provided by Parse.com using the **Rest API**
1. **Every action** performed by the UI interfaces with the **Redux actions** and subsequently to the Redux Store.  This **reduces the complexity** of the JSX Components **tremendously**and makes them easily testable.
1. **Jest Unit Tests cover 86%** of the application statements.
1. Demonstrates how to **setup React-Native to perform Jest testing** with Babel.
1. Includes ability to **debug Jest unit tests**with Chrome

----------

######-barton hammond
