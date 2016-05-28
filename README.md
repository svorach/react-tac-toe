# react-tac-toe #

[Demo](http://svorach.github.io/react-tac-toe/)

### How do I get set up? ###

If you do not have webpack and webpack-dev-server set up, please run:

    npm i webpack webpack-dev-server -g

After that, all you need to do is open up your workspace in the command line and run:

    git clone https://github.com/svorach/react-tac-toe.git
    cd react-tac-toe
    npm i

### Development

    npm run dev

From here you can view the app at <http://localhost:1337>

Changes to any existing scss or jsx files inside of ./src will hot reload the development server, jsx files will be linted against [Airbnb's ESLint configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

### Build

    npm run build

You can now open the index.html file now and view the compiled application

### Testing

    npm run test
