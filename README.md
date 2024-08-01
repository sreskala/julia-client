# IEANAI Frontend (Julian Client)
## Description
This is the frontend client app for my julian-planets backend web application. The name Julian Planets comes from the fact that the backend was written in Julia.

For the frontend I didn't have as much time as I would have liked to style it and take time making it look good, although this is one of the things I would most definitely improve if given more time.

---

## Components
### Landing Page
The landing page takes you to a nice rocket animation where you can click to launch

### Planets (route -> /planets)
This component houses alot of other small components and it's where we fetch all our planet data from the backend.

### Pagination (inside Planets)
The pagination component allows us to paginate through the many planets we have so we don't have all of them at the same time in our screen

### Charts (inside Planets)
The chart components are dynamic in the sense that they use the data only from the planets shown on the page so if you go to a different page you will see the graphs changes according to the new data presented. They also themselves have arrows to paginate between the different types of graphs to display different kinds of data.

### Planet Cards (inside Planets)
These components are just simple cards that include one image across the board of an exo planet and a link to go to that specific planet's data.

### Planet (route -> /planets/:id)
This component is what renders when you go to the route of a particular planet. It uses a loader for the logic of loading in the planet data and calls the Julia endpoint to retrieve that planets information. It also houses other cool components within it

### Mesh Component AKA Interactive Animation (inside Planet)
This component leverages React Three Fiber to interact with the Lava planet that is displayed on the screen! You can move it around, zoom in and out, and it rotates on its own giving the impression of a planet outside our solar system.

### Stats (inside Planet)
This is just a component that is reused to display the stats of the planet within the card

---

## Improvements
There are several improvements I would make here given more time. The first one being I would include a dropdown to select number of planets per page in case a user wants to see less or more on the /planets page. I would also make sure to have different unique images for each card to give it a more distinctive style. I would also do the same for the Rendered Interactive Planet and have it be different for each entry. Overall I would also focus a lot on UX design and make a more appealing color scheme, along with having the option to toggle between dark and light mode, and most importantly adding accessibility everywhere to make sure the website is accessible.

---

## Links
[deployed website](https://66ab0a31e4ef7169652da426--clinquant-crepe-446d20.netlify.app/planets/2)