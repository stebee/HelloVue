var _numInstances = 0;
const Vue = require('vue')

module.exports = function() {
    var _events = [];
    var _instance = _numInstances++;

    this.get = function() {
        return JSON.parse(JSON.stringify(_events));
    }

    this.fetch = function(dest) {
        console.log("make fetch happen!");
        Vue.http.get('/api/bogus').then(
            response => {
                console.log(response.body);
                var events = JSON.parse(response.body);
                if (events)
                {
                    events.forEach((item) => { _events.push(item); dest.push(item); });
                }
            },
            error => {
                console.log("sadness " + error.statusText);
            }
        );
    }

    this.add = function(evt) {
        _events.push(evt);
    }

    this.del = function(index) {
        _events.splice(index, 1);
    }
}