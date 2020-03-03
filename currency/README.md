# Currency 

**Table of Contents**

- [cli.js](#-cli)
- [index.js](#-index)

## cli.js

cli.js allows users to convert money from one currency to another.
To do so, enter :
```sh
node cli.js [amount] [original_currency] [second_currency]
```
by default, the amount will be 1, the original currency is USD and the second currency is BTC.

If you want to see an example, type :
```sh
node cli.js --help
```

### External variables :

#### currency
currency is fetched from the main file 'index.js' (see package.json). It is used to convert the money.

#### ora
The library 'ora' is used to display a spinner when the script is running. It allows use to modify a few options such as the shape, the color or the text.

#### argv
When calling `const argv = process.argv()`, the program parses every argument entered in the command line and stores them in an array called argv. 
When calling `const argv = process.argv.slice(2)`, the program ignores the first two arguments (argv[0] and argv[1]) and stores every other values.
Argv stands for argument values.
In our case, `argv` is used to store the amount and the currencies.


### Main function `start`:

The function `start` takes a dictionnary as a parameter. This dictionnary contains the amount, currency1 and currency2. It then uses the `currency` variable to convert the amount. Once it is done, it stops the spinner and display the result.


### Script proceeding :

- reading the command line arguments
- if the user entered to command `node cli.js --help`, the `help` function is launched and the script stops
- if not, the spinner starts and the `start` function is launched

