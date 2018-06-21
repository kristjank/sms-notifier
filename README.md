# ARK Core - SMS-NEXMO Notifier plugin

> A plugin for basic sms notification for various blockchain events. A demo of ark core plugin based on this https://blog.ark.io/setting-up-new-plugins-in-ark-core-v2-example-7fac69993a73 tutorial.


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Prerequisites
- Setup development environment
  - via docker https://docs.ark.io/docs/docker or
  - git clone https://github.com/arkecosystem/core


## Installation

```bash
cd core
cd plugins
git clone https://github.com/kristjank/sms-notifier/edit/master/README.md

lerna bootstrap
```

## Configuration
Add and adjust the following setup from [defaults.js](https://github.com/kristjank/sms-notifier/blob/master/lib/defaults.js) to the network setup file for plugins loading. Plugins.json for selected network can be found in @arkecosystem/core package: https://github.com/ArkEcosystem/core/blob/master/packages/core/lib/config/testnet/plugins.js#L98. Parent folder is the name of your network.

## Running
- Go to `@arkecosystem/core` package
- Start your node in test mode (or and other) `yarn start:testnet`
- Wait for messages and check console output

Feel free to further explore the possible events and conditions. A list of events ca be found here: https://docs.ark.io/docs/events#section-available-events

## Security
If you discover a security vulnerability within this package, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Credits

- [Kristjan Kosic](https://github.com/kristjank)

## License

[MIT](LICENSE) © [ArkEcosystem](https://ark.io)
