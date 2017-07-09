var _numInstances = 0;

module.exports = function() {
    var _events = [];
    var _instance = _numInstances++;

    this.get = function() {
        return JSON.parse(JSON.stringify(_events));
    }

    this.fetch = function() {
        _events = _events.concat([
            {
                id: 1,
                name: 'TIFF',
                description: 'Toronto International Film Festival',
                date: '2015-09-10'
            },
            {
                id: 2,
                name: 'The Martian Premiere',
                description: 'The Martian comes to theatres.',
                date: '2015-10-02'
            },
            {
                id: 3,
                name: 'SXSW',
                description: 'Music, film and interactive festival in Austin, TX.',
                date: '2016-03-11'
            }
        ]);
    }

    this.add = function(evt) {
        _events.push(evt);
    }

    this.del = function(index) {
        _events.splice(index, 1);
    }
}