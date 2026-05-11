import { BookOpen, Shield, Terminal } from "lucide-react";

export const guides = [
  {
    slug: "choosing-your-domain",
    title: "Choosing Your Identity: Picking a Domain That Lasts",
    category: "Strategy",
    icon: BookOpen,
    description: "A deep dive into branding, TLD selection, and why your first choice is often your most important.",
    content: `
# Choosing Your Identity: Picking a Domain That Lasts

Your domain name is the foundation of your online identity. It's the first thing people see and the address they'll remember. Getting it right from the start is crucial for long-term success.

## 1. Keep it Short and Memorable
The best domains are concise. Aim for 2-3 words maximum. Avoid hyphens and numbers, as they are often misunderstood when spoken aloud.

## 2. Choose the Right TLD (Extension)
While .com remains the gold standard, new extensions like .app, .tech, and .io offer great opportunities for specific niches. Choose an extension that aligns with your brand's purpose.

## 3. Avoid Trademarks
Before registering, ensure your desired name doesn't infringe on existing trademarks. This can save you from legal headaches and forced rebranding later.

## 4. Think Long Term
Is this name scalable? Avoid being too specific if you plan to expand your services or product lines in the future.
    `
  },
  {
    slug: "security-deep-dive",
    title: "Security Deep Dive: Locking Down Your Digital Real Estate",
    category: "Security",
    icon: Shield,
    description: "From registry locks to hardware security keys, learn how to prevent unauthorized transfers and hijacking.",
    content: `
# Security Deep Dive: Locking Down Your Digital Real Estate

Your domain is one of your most valuable digital assets. Losing it to a hacker or an unauthorized transfer can be catastrophic for your business.

## 1. Enable Two-Factor Authentication (2FA)
This is the single most important step. Use app-based authenticators or hardware keys rather than SMS for better security.

## 2. Use a Strong, Unique Password
Never reuse passwords across services. Use a password manager to generate and store complex credentials.

## 3. Enable Transfer Locks
Most registrars offer a "transfer lock" or "client transfer prohibited" status. Ensure this is always enabled unless you are actively moving your domain.

## 4. Monitor WHOIS Information
Regularly check your WHOIS data to ensure the administrative and registrant contacts are correct. This information is critical for proving ownership.
    `
  },
  {
    slug: "migration-handbook",
    title: "The Migration Handbook: Painless Domain Transfers",
    category: "Tutorial",
    icon: Terminal,
    description: "Everything you need to know about auth codes, 60-day locks, and switching registrars without a second of downtime.",
    content: `
# The Migration Handbook: Painless Domain Transfers

Moving your domain to a new registrar doesn't have to be stressful. By following a structured process, you can ensure a smooth transition with zero downtime.

## Step 1: Unlock Your Domain
Log in to your current registrar and disable the transfer lock.

## Step 2: Obtain the Auth Code (EPP Code)
Request the authorization code from your current provider. This is the "key" that allows the new registrar to take control.

## Step 3: Initiate the Transfer
Enter the domain and auth code at Brand Name It. You'll receive a confirmation email to approve the request.

## Step 4: Wait for Completion
Transfers typically take 5-7 days. During this time, your DNS settings remain active at the current provider.

## Step 5: Verify DNS at New Provider
Once the transfer is complete, double-check that your MX records and A records are correctly reflected in our dashboard.
    `
  }
];
