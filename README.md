# isTrue(bool)

> 检查传入参数是不是布尔值且为 `true`。

## 使用

```js
import { log } from "console";
import isTrue from "@iyowei/is-true";

log(isTrue(true)); // true
log(isTrue(false)); // false
log(isTrue('')); // false
log(isTrue({})); // false
log(isTrue(123)); // false
```

## 安装

![esm][esm] [![Node Version Badge][node version badge]][download node.js] ![browser][browser]

```shell
# Pnpm
pnpm add @iyowei/is-true

# yarn
yarn add @iyowei/is-true

# npm
npm add @iyowei/is-true
```

## 参与贡献

![PRs Welcome][prs welcome badge]

## 其它

"@iyowei/is-true" 使用 [@iyowei/create-esm][create-esm] 脚手架生成。

[browser]: https://img.shields.io/badge/Browser-orange?style=flat
[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[esm]: https://img.shields.io/badge/ESM-brightgreen?style=flat
[create-esm]: https://github.com/iyowei/create-esm
