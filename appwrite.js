import {Client, Account} from "appwrite";
const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('6731dad500370ad08535');
const account = new Account(client);
export {account, client};
