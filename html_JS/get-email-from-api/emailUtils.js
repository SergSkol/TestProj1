const token = 'f040c13db5ae4cd3ab991d2e7f19a0cc';//process.env.REACT_APP_API_DOMAIN;
const domain = 'team875296.testinator.com';//process.env.REACT_APP_API_TOKEN;
const baseUrl = 'https://mailinator.com/api/v2/domains/';

const fillMessagesArray = (data) => {
  const messages = [];
  const itemNames = Object.keys(data);
  itemNames.forEach((id) => {
    const itemContent = data[id];
    const { subject, from } = itemContent[0];
    const message = {
      id, subject, from,
    };
    messages.push(message);
  });
  return messages;
};

export async function getPinFromEmail(username, responseField) {
    // const url = `${baseUrl}${domain}/inboxes/${username || 'test3'}/messages`;
  const url = 'https://api.spacexdata.com/v3/rockets';

  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");
  headers.set("Authorization", token);

  // const options = {    
  //   mode: 'no-cors',
  //   credentials: 'include',
  //   method: 'GET',
  //   headers: headers,
  // };
  const options = {};
  
  const fetchPromise = fetch(url, options);

  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      
      const dataArray = JSON.stringify(data);

      // const messages = fillMessagesArray(dataArray);
      const messages = dataArray;

      responseField.value = messages;
    });
};
