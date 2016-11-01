namespace PDQS.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }


    export class SecretController {
        public secrets;

        constructor($http: ng.IHttpService) {
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });
        }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class ProcessController { }

    export class PropertyController { }

    export class PersonalController { }

    export class InfoController { }

    export class ContactController { }

    export class NewController {
    }

}
