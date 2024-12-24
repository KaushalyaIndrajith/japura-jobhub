# 🌟 Japura JobHub - README

Welcome to **Japura JobHub**, a web application designed to connect undergraduates, graduates and alumni of the University of Sri Jayewardenepura with exciting job opportunities. Built using modern web technologies, this project ensures smooth performance and an engaging user experience.

![japura jobhub Screenshot](/public/images/mainJobHub.png)
<br>
## 🎉 Live Demo - https://final-assessment-group3.vercel.app/


## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (using the App Router for navigation)
- **Backend**: [Vercel Postgres](https://vercel.com/postgres) for database management
- **Styling**: Tailwind CSS
- **Hosting**: Deployed on [Vercel](https://vercel.com/)

## ✨ Features

- 🔍 **Search Jobs**: A robust search feature to filter jobs based on criteria.
- 📝 **Candidate Registration**: Candidates can sign up to apply job opportunities.
- 📝 **Employer Registration**: Employers can sign up to post job opportunities.
- 📄 **Job Applications**: Graduates can apply for jobs easily.
- 📂 **Database Integration**: All data is stored in a scalable Vercel Postgres database.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [Vercel CLI](https://vercel.com/docs/cli)
- A [Vercel Postgres](https://vercel.com/postgres) database instance

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd JobHub
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   DATABASE_URL=<your-vercel-postgres-database-url>
   ```

   Example:

   ```env
   DATABASE_URL=postgres://username:password@ep-your-project-region.aws.neon.tech/dbname?sslmode=require
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🌐 Deployment

The project is hosted on [Vercel](https://vercel.com/). Follow these steps to deploy:

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account:

   ```bash
   vercel login
   ```

3. Deploy the project:

   ```bash
   vercel
   ```





