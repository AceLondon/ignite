angular.module('ignite.services', [])
.factory('SessionService', function(){
    service = {};
    service.sessions = [{   id:0,
                            title:'Clash of Titans',
                            date:'Oct 6th',
                            time:'09:45 - 10:25',
                            imgUrl:'' },
                        {   id:1,
                            title:'Whatever You Want goes here',
                            date:'Oct 7th',
                            time:'09:45 - 10:25',
                            imgUrl:'' },
                        {   id:2,
                            title:'These object defs are in SERVICES.JS',
                            date:'Oct 8th',
                            time:'09:45 - 10:25',
                            imgUrl:'' }];
    service.idRef = 2929; // Initial ID

    return {
        getSession: function(id) {
            var result  = service.sessions.filter(function(o){return o.id == id;} );
            return result? result[0] : null; // or undefined
        },
        setSession: function(session){
            this.session.push(session);
            console.log("sessions: ", service.sessions);
        },
        newSession: function(){
            var session = {id:service.idRef, title:'', date:'', time:''};
            service.idRef++; // this should be a random number
            return session;
        },
        getSessions: function(){
            return service.sessions;
        }
    };
});
