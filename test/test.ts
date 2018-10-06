import { expect, tap } from '@pushrocks/tapbundle';
import * as smartunique from '../ts/index';

tap.test('should create shortid', async () => {
  let result = smartunique.shortId();
  console.log(result);
});

tap.test('should create uuidv4', async () => {
  let result = smartunique.uuid4();
  console.log(result);
});

tap.test('should create uuidv5', async () => {
  let result = smartunique.uuid5('sometext');
  console.log(result);
});

tap.test('should create uuidv5 within namespace', async () => {
  let result = smartunique.uuid5('sometext', smartunique.uuid4());
  console.log(result);
});

tap.start();
