# smartunique

make things unique

## Availabililty

[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartunique)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartunique)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartunique)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartunique/)

## Status for master

[![build status](https://GitLab.com/pushrocks/smartunique/badges/master/build.svg)](https://GitLab.com/pushrocks/smartunique/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartunique/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartunique/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartunique.svg)](https://www.npmjs.com/package/smartunique)
[![Dependency Status](https://david-dm.org/pushrocks/smartunique.svg)](https://david-dm.org/pushrocks/smartunique)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartunique/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartunique/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartunique/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartunique)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

Use TypeScript for best in class instellisense.

```javascript
// We are using TypeScript syntax here to have types in place
import * as smartunique from 'smartunique';

// creates a short mathematically highly unique short string
let myShortid = smartunique.shortid();

// creates a string that is possibly unique world wide
let myUuid4 = smartunique.uuid4();

// creates a oneway repeatable unique id within a certain namespace
let myUuid5 = smartunique.uuid('myobscureduser@somedomain.com', smartunique.uuid4());
```

Learn more about UUIDs: knowledgebase.gitzone.com/uuid.html

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
