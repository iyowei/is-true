import assert from 'assert';
import isTrue from './isTrue.js';

describe('isTrue', () => {
  describe('传入 `true`', () => {
    it('决策 `true`', () => {
      assert.equal(isTrue(true), true);
    });
  });

  describe('传入 `false`', () => {
    it('决策 `false`', () => {
      assert.equal(isTrue(false), false);
    });
  });

  describe('传入 `""`', () => {
    it('决策 `false`', () => {
      assert.equal(isTrue(''), false);
    });
  });

  describe('传入 `123`', () => {
    it('决策 `false`', () => {
      assert.equal(isTrue(123), false);
    });
  });

  describe('传入 `{}`', () => {
    it('决策 `false`', () => {
      assert.equal(isTrue({}), false);
    });
  });
});
