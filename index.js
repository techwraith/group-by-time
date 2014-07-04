var groupByTime
  , groupBy = require('lodash.groupby')


function getMonday(d) {
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1) // adjust when day is sunday
  return new Date(d.setDate(diff))
}

function groupByTime (arr, key, group) {

  var groupings = {
    day: function (obj) {
      var date = new Date(obj[key])
      date.setHours(0, 0, 0, 0)
      return date.valueOf()
    }
  , week: function (obj) {
      var date = new Date(obj[key])
      date.setHours(0, 0, 0, 0)
      return getMonday(date).valueOf()
    }
  , month: function (obj) {
      var date = new Date(obj[key])
      return new Date(date.getFullYear(), date.getMonth(), 1).valueOf()
    }
  }

  if (!group) group == 'day'

  return groupBy(arr, groupings[group])

}

groupByTime.byDay = function (arr, key) { groupByTime(arr, key, 'day') }
groupByTime.byWeek = function (arr, key) { groupByTime(arr, key, 'week') }
groupByTime.byMonth = function (arr, key) { groupByTime(arr, key, 'month') }

module.exports = groupByTime
