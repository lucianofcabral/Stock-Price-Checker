const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('GET /api/stock-prices => stockData object', function() {

    test('1 stock', function(done) {
      chai.request(server)
        .get('/api/stock-prices')
        .query({stock: 'goog'})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.property(res.body, 'stockData');
          assert.property(res.body.stockData, 'stock');
          assert.property(res.body.stockData, 'price');
          assert.property(res.body.stockData, 'likes');
          assert.isString(res.body.stockData.stock);
          assert.isNumber(res.body.stockData.price);
          assert.isNumber(res.body.stockData.likes);
          done();
        });
    });

    test('1 stock with like', function(done) {
      chai.request(server)
        .get('/api/stock-prices')
        .query({stock: 'goog', like: true})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.property(res.body, 'stockData');
          assert.property(res.body.stockData, 'stock');
          assert.property(res.body.stockData, 'price');
          assert.property(res.body.stockData, 'likes');
          assert.isString(res.body.stockData.stock);
          assert.isNumber(res.body.stockData.price);
          assert.isNumber(res.body.stockData.likes);
          done();
        });
    });

    test('1 stock with like again (ensure likes arent double counted)', function(done) {
      chai.request(server)
        .get('/api/stock-prices')
        .query({stock: 'goog', like: true})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.property(res.body, 'stockData');
          assert.property(res.body.stockData, 'stock');
          assert.property(res.body.stockData, 'price');
          assert.property(res.body.stockData, 'likes');
          assert.isString(res.body.stockData.stock);
          assert.isNumber(res.body.stockData.price);
          assert.isNumber(res.body.stockData.likes);
          done();
        });
    });

    test('2 stocks', function(done) {
      chai.request(server)
        .get('/api/stock-prices')
        .query({stock: ['goog', 'msft']})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.property(res.body, 'stockData');
          assert.isArray(res.body.stockData);
          assert.equal(res.body.stockData.length, 2);
          res.body.stockData.forEach(function(stockData) {
            assert.property(stockData, 'stock');
            assert.property(stockData, 'price');
            assert.property(stockData, 'rel_likes');
            assert.isString(stockData.stock);
            assert.isNumber(stockData.price);
            assert.isNumber(stockData.rel_likes);
          });
          done();
        });
    });

    test('2 stocks with like', function(done) {
      chai.request(server)
        .get('/api/stock-prices')
        .query({stock: ['goog', 'msft'], like: true})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.property(res.body, 'stockData');
          assert.isArray(res.body.stockData);
          assert.equal(res.body.stockData.length, 2);
          res.body.stockData.forEach(function(stockData) {
            assert.property(stockData, 'stock');
            assert.property(stockData, 'price');
            assert.property(stockData, 'rel_likes');
            assert.isString(stockData.stock);
            assert.isNumber(stockData.price);
            assert.isNumber(stockData.rel_likes);
          });
          done();
        });
    });

  });

});
