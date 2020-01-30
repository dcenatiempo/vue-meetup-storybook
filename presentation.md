# Intro
Devin Cenatiempo
Full Time job as Mobile Team Lead for Inside Real Estate - React Native
Part Time/ Personal Projects Vue

Today I will speaking about how using storybook can make you and your team better developers.

According to their website:

"Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.

Storybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements."

Recap - two main uses/benefits
- Create components in isolated dev environment
- Showcase Components interactively

Storybook is very easy to use... if you can overcome the setup issues, specifically webpack configuration. Recently storybook changed their api to make it much simpler to setup and use.

# Lets Get Started
(branch 1)

I'll be doing a new automatic install, but you can easily do a manual install on an existing project if you need to.

Init in new project (with vuex)
- vue create vue-storybook-example

Install Storybook (Automatic Setup)
- npx -p @storybook/cli sb init --type vue

Test Base Project
- npm run storybook

As you can see there is a `.storybook` folder with a `main.js` file which is basically the config for storybook.

there are 2 props in here to start with:
- stories - this is where you can tell storybook to find your stories
- addons - this is where you can register addons with storybook

There is another new folder called `Stories' which has 2 components and 2 stories in it.
We will be changing this setup in a moment, but you can see there are a couple ways to write your stories...

# Digging Deeper

## Custom Components
(branch 2)
Here are the main differences:
- Deleted the `Stories`
- Added some custom components
- Moved stories to live next to my components
- Modified the `stories` prop of the `main.js` file to account for change in project structure
- Added a webpackFinal prop to the main.js file to account for more complex components

## Addons
(branch 3)
- knobs
- actions
- links

- docs
- storysource

- viewport
- background

## Custom Decorators (Vuex provider)
(branch 4)
What if you are using vuex

