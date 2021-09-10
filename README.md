# unl-js-api

A javascript SDK to wrap the UNL API. The library is written in TypeScript and it provides its own type definitions.

## Install

```sh
npm install unl-js-api
```

```sh
yarn add unl-core
```

## Usage

You can import the UnlApi class and create an instance by passing an UNL API Key. Replace "YOUR-UNL-API-KEY" with a valid key in the following snippet.

```js
import UnlApi from 'unl-js-api';

const UNL_API_KEY = config.UNL_API_KEY;
const unlApi = new UnlApi('YOUR-UNL-API-KEY');
```

Next, the methods can be called by referencing the `unlApi` instance:

```js
unlApi.recordsApi.getById('YOUR-PROJECT-ID', 'YOUR-RECORD-ID');
```

For information on how to generate an API key, along with usage examples follow the [UNL developer documentation](https://developer.unl.global/):
