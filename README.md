# Robert-Toth Ludanyi Portfolio

This is my personal portfolio website.

## Project Setup

- Clone repo: `git clone https://github.com/Mikra011/my_personal_portfolio_mikra`
- Run the following command to install all necessary dependencies: `npm install`
- Launch the project in a development server executing `npm run dev`
- Visit your app by navigating Chrome to `http://localhost:5173`


## Tech Stack:

- react
- vite
- tailwind

## Colors

This project features both dark and light color schemes to enhance usability and aesthetics across different environments. The color palettes have been crafted using the Figma color wheel with a square palette type, ensuring a balanced and harmonious visual experience.

## Typography

In this project, I use a combination of fonts to create a visually appealing and functional design. Here’s a breakdown of the fonts and their uses:

-   #### Playfair Display for Headings

    Playfair Display is used for headings to provide an elegant and classic look. Its high contrast and refined style make it ideal for main titles and section headings.

-   #### Kurale for Body Text

    Kurale is chosen for body text due to its readability and graceful appearance. This serif font ensures that longer passages of text are easy to read while maintaining a sophisticated look.

-   #### Alfa Slab One for Highlights

    Alfa Slab One is used for highlighting key pieces of information. Its bold and striking presence effectively draws attention to specific words, phrases, or sections, enhancing the emphasis within the content.

### Animated/Decorative Fonts
For adding decorative and animated text elements, I use the following fonts:

-   #### Dancing Script
    Dancing Script is a lively and flowing cursive font perfect for adding a touch of whimsy and personal flair to your designs. It’s ideal for quotes, taglines, or any text that benefits from a dynamic, hand-written appearance.

-   #### Alex Brush
    Alex Brush complements Dancing Script with its elegant and refined brush-stroke style. This font is suitable for decorative headers, invitations, or any text that requires a sophisticated and stylish touch.

## Form

I chose to use the service provided by [formsubmit.co](https://formsubmit.co) for handling form submissions. While the implementation is user-friendly and effective, I am considering switching services due to frequent downtimes. To ensure I remain reachable, I have also added my email to the contact information.

## AnimatedInView

`AnimatedInView` offers an excellent way to implement animations on various elements while keeping the code simple and manageable. It allows for the easy setup of different animations, which can be applied effortlessly to enhance user experience.

### Example

Here’s a simple example of how to use `AnimatedInView`:

```javascript
<AnimatedInView
    baseClass="animated-drop-grow" 
    animationClass="animate-dg"  
    threshold={0.2}>
    <h1> Header Element </h1>
</AnimatedInView>
```
For more detailed information about usage, please refer to the component itself within the project.

## Testing

A few basic tests have been written for the project; however, they should be expanded. I am not fully satisfied with the current coverage.
