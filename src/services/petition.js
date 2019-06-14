const ENDPOINT = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

const petition = () => fetch(ENDPOINT).then(response => response.json());

export {petition};