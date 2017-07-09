<template>
    <div class="container">
        <!-- add an event form -->
        <div class="col-sm-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>Add an Event</h3>
                </div>
                <div class="panel-body">
                    <div class="form-group">
                        <input class="form-control" placeholder="Event Name" v-model="event.name">
                    </div>

                    <div class="form-group">
                        <textarea class="form-control" placeholder="Event Description" v-model="event.description"></textarea>
                    </div>

                    <div class="form-group">
                        <input type="date" class="form-control" placeholder="Date" v-model="event.date">
                    </div>

                    <button class="btn btn-primary" v-on:click="addEvent">Submit</button>
                </div>
            </div>
        </div>

        <!-- show the events -->
        <div class="col-sm-6">
            <div class="list-group">

                <a href="#" class="list-group-item" v-for="(event,index) in events">
                    <h4 class="list-group-item-heading">
                        <i class="glyphicon glyphicon-bullhorn"></i>
                        {{ event.name }}
                    </h4>

                    <h5>
                        <i class="glyphicon glyphicon-calendar" v-if="event.date"></i>
                        {{ event.date }}
                    </h5>

                    <p class="list-group-item-text" v-if="event.description">{{ event.description }}</p>

                    <button class="btn btn-xs btn-danger" v-on:click="deleteEvent(index)">Delete</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
var Events = require('./events');

export default {
    name: 'app',


    data: function() {
        this._store = new Events();

        return {
            event: {name: '', description: '', date: ''},
            events: []
        }
    },

    mounted: function() {
        this.fetchEvents();
    },

    methods: {
        // We dedicate a method to retrieving and setting some data
        fetchEvents: function () {
            this._store.fetch();
            this.events = this.events.concat(this._store.get());
        },

        // Adds an event to the existing events array
        addEvent: function () {
            if (this.event.name) {
                this.events.push(this.event);
                this._store.add(this.event);
                this.event = {name: '', description: '', date: ''};
            }
        },

        deleteEvent: function (index) {
            if (confirm("Are you sure you want to delete this event?")) {
                // $remove is a Vue convenience method similar to splice
                this.events.splice(index, 1);
                this._store.del(index);
            }
        }
    }
}
</script>
