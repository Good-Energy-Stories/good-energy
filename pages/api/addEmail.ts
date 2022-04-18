import client from '@mailchimp/mailchimp_marketing';

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const addEmailToMailingList = async (first, last, email, organization) => {
  return await client.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: first,
      LNAME: last,
      ORG: organization,
    },
  });
};

export default async function handleRequest(req, res) {
  const { first, last, email, organization } = JSON.parse(req.body);
  try {
    await addEmailToMailingList(first, last, email, organization);
  } catch (err) {
    console.log(err);
    const { title } = JSON.parse(err.response.text);
    if (title === 'Member Exists') {
      return res.status(401).json({ message: 'Member Exists' });
    }
    return res.status(400).json({ message: "Couldn't Submit" });
  }
  return res.status(200).json({ message: 'Email submitted' });
}
