import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import mailchimp from "@mailchimp/mailchimp_marketing";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Mailchimp Subscription
  app.post("/api/subscribe", async (req, res) => {
    const { email, firstName, lastName, phone, notes, age } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const 816458740443dc6eb859db6e32b201ee-us15 = process.env.MAILCHIMP_API_KEY;
    const us15 = process.env.MAILCHIMP_SERVER_PREFIX;
    const 191b6b9064 = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!apiKey || !serverPrefix || !audienceId) {
      console.error("Mailchimp configuration missing");
      return res.status(500).json({ error: "Mailchimp is not configured on the server." });
    }

    mailchimp.setConfig({
      apiKey: apiKey,
      server: serverPrefix,
    });

    try {
      await mailchimp.lists.addListMember(audienceId, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName || "",
          LNAME: lastName || "",
          PHONE: phone || "",
          NOTES: notes || "",
          AGE: age || "",
        },
      });

      res.status(200).json({ message: "Successfully subscribed!" });
    } catch (error: any) {
      console.error("Mailchimp Error:", error.response?.body || error.message);
      
      // Handle "Member already exists" error
      if (error.response?.body?.title === "Member Exists") {
        return res.status(200).json({ message: "You are already registered!" });
      }

      res.status(500).json({ error: "Failed to subscribe. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
