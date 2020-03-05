# @pushrocks/smartunique
make things unique

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartunique)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartunique)
* [github.com (source mirror)](https://github.com/pushrocks/smartunique)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartunique/)

## Status for master
[![pipeline status](https://gitlab.com/pushrocks/smartunique/badges/master/pipeline.svg)](https://gitlab.com/pushrocks/smartunique/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartunique/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartunique/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartunique.svg)](https://www.npmjs.com/package/@pushrocks/smartunique)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartunique/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartunique)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

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
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbh/privacy)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)


## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
