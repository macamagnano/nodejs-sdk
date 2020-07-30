/**
 * MELI Markeplace SDK
 * This is a the codebase to generate a SDK for Open Platform Marketplace
 *
 * The version of the OpenAPI document: 0.1.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.meli);
  }
}(this, function(expect, meli) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new meli.Item();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Item', function() {
    it('should create an instance of Item', function() {
      // uncomment below and update the code to test Item
      //var instane = new meli.Item();
      //expect(instance).to.be.a(meli.Item);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "category_id")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property currencyId (base name: "currency_id")', function() {
      // uncomment below and update the code to test the property currencyId
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property availableQuantity (base name: "available_quantity")', function() {
      // uncomment below and update the code to test the property availableQuantity
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property buyingMode (base name: "buying_mode")', function() {
      // uncomment below and update the code to test the property buyingMode
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property listingTypeId (base name: "listing_type_id")', function() {
      // uncomment below and update the code to test the property listingTypeId
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property videoId (base name: "video_id")', function() {
      // uncomment below and update the code to test the property videoId
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property pictures (base name: "pictures")', function() {
      // uncomment below and update the code to test the property pictures
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

    it('should have the property variations (base name: "variations")', function() {
      // uncomment below and update the code to test the property variations
      //var instane = new meli.Item();
      //expect(instance).to.be();
    });

  });

}));