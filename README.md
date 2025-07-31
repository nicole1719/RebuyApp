# Rebuy

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Technical Decisions

**Mock Data** <br>
I worked with mock data to simulate a backend functionality, because no API was provided. This allowed faster implementation which meets the MVP requirements.

**Responsive Design** <br>
To implement responsive design, I used Bootstrap's grid system and classes. Furthermore, I used ARIA attributes for improved accessibility.

**Local Storage** <br>
To keep the data even after refreshing the page, I used local storage.
I also used local storage to keep track of the offers a user has already voted on to prevent multiple upvoting/downvoting on one offer.

**Offer Service** <br>
My offer service provides the logic needed to get, save data and change the votes. I used a ```BehaviorSubject``` to manage the offers reactively. All subscribed components automatically receive updates when the data changes.
API calls can be easily integrated into the service.
Once this happens, ```BehaviorSubject``` will also prevent redundant API calls. 

**Redirect to Existent Page** <br>
One of the requirements was to enable the user to purchase an offer from the existent platform.
For this, I simply redirect the user to the existent page using the ID of the offer.



## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
