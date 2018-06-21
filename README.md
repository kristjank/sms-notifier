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
Add the following setup from defaults.js to the network setup file for plugins loading.
File is located here: https://github.com/ArkEcosystem/core/blob/master/packages/core/lib/config/testnet/plugins.js#L98. Parent folder is the name of your network.

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Credits

- [Kristjan Kosic](https://github.com/kristjank)

## License

[MIT](LICENSE) © [ArkEcosystem](https://ark.io)
