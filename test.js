var test = require('prova')
  , _ = require('lodash')
  , groupByTime = require('./')
  , data = require('./test-data.json')

test('Test Days', function (t) {

  var days = groupByTime(data, 'ts', 'day')

  t.equal(
    _.keys(days).length
  , 196
  , 'Has the proper number of days'
  )

  t.equal(
    _.flatten(_.toArray(days)).length
  , data.length
  , 'The length of all combined days equals the original data length'
  )

  t.end()

})

test('Test Weeks', function (t) {

  var weeks = groupByTime(data, 'ts', 'week')

  t.equal(
    _.keys(weeks).length
  , 45
  , 'Has the proper number of weeks'
  )

  t.equal(
    _.flatten(_.toArray(weeks)).length
  , data.length
  , 'The length of all combined weeks equals the original data length'
  )

  t.end()

})

test('Test Months', function (t) {

  var months = groupByTime(data, 'ts', 'month')

  t.equal(
    _.keys(months).length
  , 14
  , 'Has the proper number of months'
  )

  t.equal(
    _.flatten(_.toArray(months)).length
  , data.length
  , 'The length of all combined months equals the original data length'
  )

  t.end()

})
