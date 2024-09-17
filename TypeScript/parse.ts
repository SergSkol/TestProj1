import set from 'lodash/set';

interface keyValueObject  {
    [key: string]: string;
}

const unflattenObject = (array: keyValueObject[]) =>
    array.reduce((result, item) => {
      Object.entries(item).forEach(([key, value]) => {
        set(result, key, value);
      });
      return result;
    }, {}
);
 
const constructedJSON: keyValueObject[] = [
    { 'auth.login.email.title': 'Enter your email' },
    { 'auth.login.email.input.label': 'Enter your email address' },
    {
      'auth.login.email.input.description': 'Please provide an email address we will use to communicate with you including all booking information.'
    },
    { 'auth.login.email.input.placeholder': 'youremail@gmail.com' },
];

const stringify = JSON.stringify(
    unflattenObject(constructedJSON),
    (key, value) => {
      if (
        typeof value === 'string' &&
        value.startsWith('(') &&
        value.endsWith('`')
      ) {
        return value.replace(/\((\w+)\)/, '($1: number)');
      }
      return value;
    },
    2
);

const parseFunctions = stringify.replace(/"([^"]*`[^"]*)"/g, '$1');

console.log(parseFunctions);
