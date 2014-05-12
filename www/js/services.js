angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Pedro ' },
    { id: 1, name: 'Julio' },
    { id: 2, name: 'Daniel' },
    { id: 3, name: 'Kristoffer' },
    { id: 4, name: 'Mauricio' },
    { id: 5, name: 'Andres' },
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Debts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var iowe = [
    { name: 'Pedro ', val: 23 },
    { name: 'Julio', val: 30  },
    { name: 'Daniel', val: 23  },
    { name: 'Kristoffer', val: 23  },
    { name: 'Mauricio', val: 23  },
    { name: 'Andres', val: 23  },
  ];

  return {
    iowe: function() {
      return iowe;
    },
    owesme: function(){
      return [];
    }
  }
});
