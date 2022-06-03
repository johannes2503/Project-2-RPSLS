# **_Rock Paper Scissors Lizard Spock Game_**

RPSLS is a game where you choose one of the following, Rock, Paper, Scissor, Lizar or Spock and the computer randomly chooses one as well. Then if you won you get a score added or if the computer won she gets a score added.

Welcome to the journey through <a href="https://github.com/johannes2503/Project-2-RPSLS" target="_blank" rel="noopener">Rock Paper Scissors Lizar Spock</a>

![RPSLS responsive design](./assets/readme-images/responsive.png)

# Contents

* [**User Experience UX**](<#user-experience-ux>)
    * [Wireframes](<#wireframes>)
    * [Site Structure](<#site-structure>)
    * [Design Choices](<#design-choices>)
    *  [Typography](<#typography>)
    *  [Colour Scheme](<#colour-scheme>)
* [**Features**](<#features>)
    * [**Home**](<#navigation-menu>)
         * [Navigation menu](<#navigation-menu>)
         * [Owners Welcome](<#owners-welcome>)
         * [Footer](<#footer>)
         * [Menu page](<#menu-page>)
         * [Reservations page](<#reservations-page>)
         * [Contact us page](<#contact-us-page>)
    * [**Future Features**](<#future-features>)
* [**Technologies Used**](<#technologies-used>)
* [**Testing**](<#testing>)
* [**Deployment**](<#deployment>)
* [**Credits**](<#credits>)
    * [**Content**](<#content>)
    * [**Media**](<#media>)
*  [**Acknowledgements**](<#acknowledgements>)


# User Experience (UX)


## Wireframes

The wireframes for Restaurant were produced in [Figma](https://figma.com). There are frames for a full width display. The final site varies slightly from the wireframes due to developments that occured during the creation process. 

![Desktop wireframe image]()

[Back to top](<#contents>)

## Site Structure

Restaurant website has four pages. The [home page](./index.html) is the default loading page, [Menu page](./menu.html), [Reservations](./reservations.html) and [contact](./contact.html) pages are all accessible primarily from the navigation menu.

[Back to top](<#contents>)

## Design Choices

 * ### Typography
      The fonts chosen were 'Parisienne' for the main heading and 'Poppins' for the headings and text. They fall back to cursive and sans-serif respectively. 
     *  ''Parisienne' was chosen for the headings to give the user an inital welcoming feel. The cursive style generally feels more inviting and less intimidating for the user than others.
      * 'Poppins' is used for the body text as it provides a nice contrast to the cursive whilst being easy to read for all.

 * ### Colour Scheme
      The colour scheme eventually chosen is one based on green and off-white. The colour contrasts with the wood colour in many of the images. Green traditionally gives the impression of energy, safety and growth.

![Colour Palate image](./assets/readme-images/color-palette.png)


[Back to top](<#contents>)

# Features

Restaurants site is set up to be welcoming and easy to use. It contains many features that the user would probably be familiar with, such as a navigation bar and contact form. The overall feel of the website is intended to be inviting and not intimidating to encourage the user to explore further. 

## Existing Features  
  * ### Navigation Menu

    * Sited at the top of all the pages in the site, it is fully responsive and contains links to all the pages of the site to enable ease of navigation in one convenient location.
    * The logo is clickable with a link back to the home page for enhanced UX.

![Navigation bar image](./assets/readme-images/navbar.png)

[Back to top](<#contents>)

  * ### Owners Welcome

      * Located on the home page beneath the title section. It is supposed to invite the user to have a enjoyable evening in the good hands of the owner.
      

![Owners welcome image](./assets/readme-images/owner-welcome.png)

[Back to top](<#contents>)

  * ### Reviews
    * The reviews section adds to the trust that Restaurant is a place of excellent service and food. 

![Reviews image](./assets/readme-images/reviews.png)

[Back to top](<#contents>)

* ### Footer
    
    * Contains social media links. To enhance the UX the links open in other tabs.
    * The social media presence will help the user with their research into Restaurant.
    * The footer also contains information about opening hours and contact info.
    
![Footer image](./assets/readme-images/footer.png)

[Back to top](<#contents>)

* ### Menu page
    
    * The menu page contains every course that the restaurant offers.
    * The menu items alternate to be more interesting to the user.

![Menu page image](./assets/readme-images/menu-item.png)

[Back to top](<#contents>)

* ### Reservations page

    * On the reservations page users can order a table at the restaurant.
    * The form askes for information from the user. First name, last name and so on and sends it then on to the restaurant when the user clicks send.
    * The user can pick a date and time from a calendar picker.

![Reservations page image](./assets/readme-images/reservations.png)

[Back to top](<#contents>)

* ### Contact us page

    * On the contact page users can contact the restaurant.
    * The form askes for information from the user. First name, last name and so on and sends it then on to the restaurant when the user clicks send.

![Contact page image](./assets/readme-images/contact.png)

[Back to top](<#contents>)

## Future Features 

* A 'Order' section so the user can order takeaway food.
    * This would incorporate an e-commerce platform and an enhanced menu page.
* Introduce swipe actions for use on mobile devices for the menu items sliders.

[Back to top](<#contents>)

# Technologies Used
* [HTML5](https://html.spec.whatwg.org/) - provides the content and structure for the website.
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - provides the styling.
* [Figma](https://figma.com) - used to create the wireframes.
* [Gitpod](https://www.gitpod.io/#get-started) - used to deploy the website.
* [Github](https://github.com/) - used to host and edit the website.

[Back to top](<#contents>)

# Testing

## Code Validation
The Restaurant site has be throughly tested. All the code has been run through the [W3C html Validator](https://validator.w3.org/) and the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Errors were found on the home and menu pages. After a fix and retest, no errors were returned for both. 

The HTML validator results for each page are below:

* Home page

![W3C Validator test result](./assets/readme-images/html-testing.png)

* Menu page

![W3C Validator test result](./assets/readme-images/html-testing.png)

* Reservations page

![W3C Validator test result](./assets/readme-images/html-testing.png)

* Contact page

![W3C Validator test result](./assets/readme-images/html-testing.png)

The CSS validator results are below:

![CSS Validator test result](./assets/readme-images/CSS-testing.png)

## Responsiveness Test

* The responsive design tests were carried out manually with [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) and [Responsive Design Checker](https://www.responsivedesignchecker.com/).

|        | Moto G4 | Galaxy S5 | iPhone 5 | iPad | iPad Pro | Display <1200px | Display >1200px |
|--------|---------|-----------|----------|------|----------|-----------------|-----------------|
| Render | pass    | pass      | pass     | pass | pass     | pass            | pass            |
| Images | pass    | pass      | pass     | pass | pass     | pass            | pass            |
| Links  | pass    | pass      | pass     | pass | pass     | pass            | pass            |

Note: On wide display types the contents of the site are restricted in width to 2000px. This helps the UX by not spreading the content too wide on the extra wide screens.

## Browser Compatibility

Restaurant site was tested on the following browsers with no visible issues for the user. 
Google Chrome, Microsoft Edge, Safari and Mozilla Firefox. Appearance, functionality and responsiveness were consistent throughout for a range of device sizes and browsers.

## Known Bugs
* ### Resolved

    * During validation two bugs became known during the validation stage, a brief description is below:

    * Home page - 
    There was an error in the section for the hero-image. Had to change the section to a div to fix it.

    * Menu page - 
    Had numerous bugs on the menu page. Had been using colspan="number" when I didn't have to. Took me quite a while to figure that one out. Fixed it by getting rid of it and then it was good to go.

* ### Unresolved
    * The form, on the face of it acts like you would expect it to, it acknowledges your data input, however the data doesn't push anywhere. This is a limitation within this project and would be rectified for a true deployment of the Restaurant site.

[Back to top](<#contents>)

# Deployment

### **To deploy the project**
The site was deployed to GitHub pages. The steps to deploy a site are as follows:
  1. In the GitHub repository, navigate to the **Settings** tab.
  2. Once in Settings, navigate to the **Pages** tab on the left hand side.
  3. Under **Source**, select the branch to **main**, then click **save**.
  4. Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

![GitHub pages deployed image](./assets/readme-images/github-pages.png)

  The live link to the Github repository can be found here - https://github.com/johannes2503/Project-1-Restaurant

### **To fork the repository on GitHub**
A copy of the GitHub Repository can be made by forking the GitHub account. This copy can be viewed and changes can be made to the copy without affecting the original repository. Take the following steps to fork the repository;
1. Log in to **GitHub** and locate the [repository](https://github.com/johannes2503/Project-1-Restaurant).
2. On the right hand side of the page inline with the repository name is a button called **'Fork'**, click on the button to create a copy of the original repository in your GitHub Account.
![GitHub forking process image](./assets/readme-images/github-fork.png)

### **To create a local clone of this project**
The method from cloning a project from GitHub is below:

1. Under the repository’s name, click on the **code** tab.
2. In the **Clone with HTTPS** section, click on the clipboard icon to copy the given URL.
![Cloning image](./assets/readme-images/github-clone.png)
3. In your IDE of choice, open **Git Bash**.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type **git clone**, and then paste the URL copied from GitHub.
6. Press **enter** and the local clone will be created.

[Back to top](<#contents>)

# Credits
### Content

* The font came from [Google Fonts](https://fonts.google.com/).
* The colour palate was found on [Behance](http://behance.net/).
* The icons came from [Font Awesome](https://fontawesome.com/).
* [Figma](https://figma.com) was used to create the wireframes.


### Media
* The most photos came from the developer.
* The photos that were not from the developer came from [Unsplash](https://unsplash.com/).

[Back to top](<#contents>)

# Acknowledgements
The site was completed as a Portfolio 1 Project piece for the Full Stack Software Developer (e-Commerce) Diploma at the [Code Institute](https://codeinstitute.net/). As such I would like to thank my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/), the Slack community, and all at the Code Institute for their help and support. Also want to thank Ewan Colquhoun for the README.md template which this readme is based on.[Ewan Colquhoun](https://github.com/EwanColquhoun/wawaswoods/blob/master/README.md). Restaurant is a fictional restaurant based on my father in laws place. Which is located in my home town.  

Johannes Hreinsson 2022.

[Back to top](<#contents>)