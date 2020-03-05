import { expect, tap } from '@pushrocks/tapbundle';
import * as smartunique from '../ts/index';

tap.test('should create shortid', async () => {
  const result = smartunique.shortId();
  console.log(result);
});

tap.test('should create uuidv4', async () => {
  const result = smartunique.uuid4();
  console.log(result);
});

tap.test('should create uuidv5', async () => {
  const result = smartunique.uuid5('sometext');
  console.log(result);
});

tap.test('should create uuidv5 within namespace', async () => {
  const result = smartunique.uuid5('sometext', smartunique.uuid4());
  console.log(result);
});

tap.test('should create a uni string', async () => {
  const result = smartunique.uni();
  console.log(result);
});

tap.start();
