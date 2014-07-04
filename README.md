group-by-time
=============

Given an array of objects, where the objects each have some key with a unix timestamp value, break the array into multiple arrays and return them on an object, keyed by the group label.

## Usage

```javascript
var groupByTime = require('group-by-time')
  , data = require('test-data.json')

var groupedByDay = groupByTime(data, 'ts', 'day')
var groupedByWeek = groupByTime(data, 'ts', 'week')
var groupedByMonth = groupByTime(data, 'ts', 'month')

```

### Methods

#### groupByTime
`groupByTime(array [Array], key [String], group [String])`

##### Arguments

  - array: the data to be grouped
  - key: the key on the object who's values are unix time stamps
  - group: 'day', 'week', or 'month'
