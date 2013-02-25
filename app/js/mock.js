if (typeof getSpotifyApi == "undefined") {

    function getSpotifyApi() {
        return {
            require:function () {
                var models = {
                    application:{
                        observe:function () {
                            return {};
                        }
                    },
                    EVENT:{}
                };
                return models;
            }
        };
    }

    angular.element(document).ready(function(){

        var head = angular.element("head");
        head.append(angular.element("<link rel='stylesheet' href='sp/api.css'/>"));
        head.append(angular.element("<link rel='stylesheet' href='sp/eye.css'/>"));
        head.append(angular.element("<link rel='stylesheet' href='sp/list.css'/>"));
        head.append(angular.element("<link rel='stylesheet' href='sp/player.css'/>"));
    });



}

