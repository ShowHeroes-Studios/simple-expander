# Simple expander
This is a template for and a showcase of the **Simple Expander** format.

## Usage

### Designers / users
The template is meant to be ready-made. 
- Download and use the `dist/` folder from this repository.  
- Use the `index.html` file as the starting point.
- Feel free to add, remove and rearrange any content inside the `index.html` file.
- The template includes *reusable components* (see [components section](#components)). Delete all unused components and all its dependencies (css, js).
- The template also includes some preformatted css *classes* (see [classes section](#classes)). These provide some of the most often used pre-designd blocks of elements.
- Images (and other assets) can be placed inside the `assets/` directory. The `assets/expander/` dir contains assets for the aforementioned components - don't delete these if you plan to use any of the components.
- Any custom styling can be added inside the `css/style.css` file.
- Similarly any custom scripting can be added inside the `js/script.js`.

### Developers
For development of the template a [SCSS preprocessor](https://sass-lang.com/) is being used. All the JavaScript components are written in plain JS as of now.

The compilation of the ready-made template is being done by *Node scripts*. Please see the `package.json` file.

## Components

The components are entities that are being used repetitively in the expanders. Things like video players (almost always), sliders, carousels etc.

These pre-coded elements are prepared to be easily used and adapted. More advanced adjustment is also possible but requires some knowledge of JavaScript.

Some of the components rely on third-party scripts and libraries that need to be included in order to function properly.

### Video
Basic video component for inserting videos.

*Required CSS file:*
```
<link rel="stylesheet" href="css/expander/video.css">
```
*Required JS file:*
```
<script src="js/video.js"></script>
```
*The code snippet:*
```
<div class="expander-video">
    <video autoplay playisinline>
        <source type="video/mp4" src="...">
    </video>
</div>
```
The video code snippet inserts a video into the page.

If the `autoplay` attribute is present in the `video` element, the video tries to play automatically. While the autoplay of unmted videos may be prevented by certain browsers, the video gets muted in such case (by JavaScript), an unmute button is added and the video tries to autoplay again.

TODO: make videos autoplay when scrolled into view

### Slider
Slider/carousel component for displaying scrollable/swipeable row of elements (like images or even more complex blocks).

*Required CSS files:*
```
<link rel="stylesheet" href="css/expander/slider.css">
<link rel="stylesheet" href="css/vendor/tiny-slider.css">
```
*Required JS files:*
```
<script src="js/vendor/tiny-slider.js"></script>
<script src="js/slider.js" defer></script>
```
*The code snippet:*
```
<div class="expander-slider my-custom-slider">
    <div class="slider" data-items="1" data-desktop-items="3" data-loop data-autoplay data-nav data-controls data-gap="32">
            <div class="item">
            ...
            </div>
            <div class="item">
            ...
            </div>
            ...
        </div>
    </div>
</div>
```
The `.slider` element expects multiple children elements that will be displayed in a horizontally scrollable/swipeable row. These children can be anything from images to more complex blocks of code including texts, graphics, videos etc.

There are several options that can be set by `data-` attributes to in the `.slider` element:
- `data-items` sets the number of elements being displayed in the mobile viewport
- `data-desktop-items` sets the number of elements being displayed in the desktop viewport
- `data-loop` makes the slider appear as infinite in both directions
- `data-autoplay` makes the slider slide automatically
- `data-gap` sets the gap between the slides

## Classes
- `.heading`, `.subheading`, `.title` for basic typography
- `.lead` - a block of larger and highlighted text
- `.hero` - full width element for displaying mainly images
- `.tiles` - a component for image/text tile-like blocks
- `.centered` - simply centering the content of the element
- `.cta` - basic button TODO: more varieties (like large, small etc)
- `.sticky-cta` - full-width sticky CTA button at the bottom of the page
