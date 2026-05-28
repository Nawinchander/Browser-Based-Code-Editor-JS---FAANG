import {
  incrementalRender
}
from '../../../src/core/renderer/incremental-renderer';

it('renders large file quickly', () => {

  const lines =
    new Array(100000)
      .fill('const x = 1');

  const start =
    performance.now();

  incrementalRender({
    lines,
    scrollTop: 0,
    lineHeight: 20,
    viewportHeight: 500
  });

  const end =
    performance.now();

  expect(end - start)
    .toBeLessThan(20);
});

