// /api/subscribe.ts
import mailchimp from '@mailchimp/mailchimp_marketing';

export default async function handler(req, res) {
  // Only allow POST requests (when the form is submitted)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Pull your secure keys from Vercel's Environment Variables
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  // Configure Mailchimp
  mailchimp.setConfig({
    apiKey: apiKey,
    server: serverPrefix,
  });

  // 2. Grab the data sent from your frontend form
  // (Make sure these variable names match exactly what your form is sending)
  const { email, businessName, contactName, phone, vendorType, notes } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // 3. Send the data to Mailchimp
    const response = await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: contactName || "",
        PHONE: phone || "",
        // Add any other custom merge fields you set up in Mailchimp
      }
    });

    // 4. Tell the frontend it was successful!
    return res.status(200).json({ message: "Successfully added contact" });

  } catch (error) {
    console.error("Mailchimp Error:", error);
    // Tell the frontend it failed
    return res.status(500).json({ error: "Error adding contact to Mailchimp" });
  }
}