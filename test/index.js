
/*global describe, it */

var fallback = require('../');
var expect = require('chai').expect;

describe('Hub module', function () {
  it('should be writable stream', function () {
    expect(fallback).to.respondTo('write');
  });
});
