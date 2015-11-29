# Pebble-Checkout
A redesign of [Pebble's](https://www.pebble.com/checkout) checkout page  
Check it out [here](http://pebble.jing-pei.com)

[<img src="https://raw.githubusercontent.com/jingpei/Pebble-Checkout/master/assets/pebble_redesign_ss.png" width="100%;">](http://pebble.jing-pei.com)

## Table of Contents

1. [Usage](#usage)
1. [Technologies](#technologies)
1. [Developer-Notes](#developer-notes)
1. [Design-Notes](#design-notes)
1. [Wishlist](#wishlist)

## Usage
Navigate to the root folder and run the command:

```sh
python -m SimpleHTTPServer [port]
```

## Technologies

[AngularJS](https://angularjs.org/) v1.3.15  
[Angular UI](https://github.com/angular-ui/ui-router) v0.2.15  
[Bootstrap](http://getbootstrap.com/) v3.3.6  
[Font Awesome](https://fortawesome.github.io/Font-Awesome/) v4.5.0  
[Hover.css](https://github.com/IanLunn/Hover) v2.0.2  

## Developer-Notes

#### Angular ####
- Angular's two way data binding makes it extremely easy to maintain form data as you transition through different states (Shipping Info --> Credit Card Info --> Completing the Order)
- All of these are bound through models on the form itself so we don't need to repopulate the form with pure javascript

#### Angular UI Router ####
- Angular UI Router is a more powerful way to bind views and controllers
- Views can be bound to states instead of url routes
- This was a great way to transition between states (and views) while using the same controller

#### Bootstrap ####
- Bootstrap is the best way to quickly scaffold a responsive design with consistent margin/padding/positioning
- Custom CSS can be added on top of these to make pages look less like a generic bootstrap page without having to put in the overhead of writing media queries from scratch

#### Hover.css ####
- Hover.css is amazing for adding animations on buttons

#### Font Awesome ####
- An incredible iconic font library with more options than boostrap glyphicons
- Gives a finishing touch on UX to buttons and other custom messaging to users

## Design-Notes
- Maintained the general layout of the page while decluttering the appearance by making form fields, buttons, and extra messaging visually consistent in styling and and positioning
- Added checkout progress feature so users know exactly where in the checkout process they are
- Kept a few elements of whimsy in the button hover interactions--redesigned buttons to be either flat/rounded for greater visual consistency
- Decluttered the messaging regarding returns/shipping by bringing out the main messaging as a group at page end
- Cleaner UX with input labels aligned right  
  

<img src="https://raw.githubusercontent.com/jingpei/Pebble-Checkout/master/assets/pebble_redesign_ss.png" width="45%;">
<img src="https://raw.githubusercontent.com/jingpei/Pebble-Checkout/master/assets/pebble_original_ss.png" width="45%;">

## Wishlist

- Form validation
- Make templating more modular