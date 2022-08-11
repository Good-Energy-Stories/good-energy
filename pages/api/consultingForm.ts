var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appY36dJMDgGmTPxn',
);

const NAME_ID = 'flddMBCTWOzWpqoik';
const ORGANIZATION_ID = 'fld3TL7jwXp3wTLsf';
const EMAIL_ID = 'fld6SJIdv4ca5n7wz';
const DESCRIPTION_ID = 'fldCsnrIxcfOrEvyV';
const BUDGET_ID = 'fld3qiVWw6kLeppCF';

export default async function handleRequest(req, res) {
  const { name, email, organization, description, budget } = JSON.parse(
    req.body,
  );
  console.log('name', name);

  base('Consulting Website Form').create(
    [
      {
        fields: {
          [NAME_ID]: name,
          [ORGANIZATION_ID]: organization,
          [EMAIL_ID]: email,
          [DESCRIPTION_ID]: description,
          [BUDGET_ID]: budget,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);

        return res.status(400).json({ message: "Couldn't Submit" });
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
      return res.status(200).json({ message: 'Email submitted' });
    },
  );
}
