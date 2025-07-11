import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About TiwanaConnect</title>
        <meta name="description" content="Learn more about TiwanaConnect — why we built it and what's coming next." />
      </Head>

      <main style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>About TiwanaConnect</h1>
        <p>
          <strong>TiwanaConnect</strong> is a private, digital platform designed for the Tiwana biradri — 
          a space to preserve our heritage, connect generations, and map our family relationships in a meaningful way.
        </p>

        <h2>🎯 Why We Built It</h2>
        <p>
          In our rapidly evolving world, families are growing, moving across cities and countries, and sometimes losing track of deeper roots.
          TiwanaConnect aims to bring our entire extended family into a single digital platform where:
        </p>
        <ul>
          <li>🧬 Relationships are clearly visualized through a dynamic family tree</li>
          <li>🗂️ Every member has their own profile with important life details</li>
          <li>🔍 We can search, discover, and connect with each other anytime</li>
        </ul>

        <h2>🚀 What's Ahead</h2>
        <p>We’re just getting started. In future releases, we plan to add:</p>
        <ul>
          <li>🎉 Event management (weddings, funerals, announcements)</li>
          <li>📨 App-based invitations and notifications</li>
          <li>📜 Inheritance tracking and historical archiving</li>
          <li>👨‍👩‍👧‍👦 Private social interaction features</li>
        </ul>

        <h2>🔐 Our Commitment</h2>
        <p>
          TiwanaConnect is built with love and respect for our family values. Privacy is central — 
          all data is secured and only accessible to verified members. No ads. No outsiders.
        </p>

        <h2>💌 Want to Get Involved?</h2>
        <p>
          We’re open to collaboration and feedback. Reach out at <a href="mailto:support@tiwanaconnect.com">support@tiwanaconnect.com</a>.
        </p>
      </main>
    </Layout>
  );
}
