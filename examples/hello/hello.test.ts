import { HelloKube } from './hello';
import { Testing } from '@awslabs/cdk8s';

test('snapshot', () => {
  const app = Testing.app();
  const chart = new HelloKube(app, 'hello');

  expect(Testing.synth(chart)).toMatchSnapshot();
});