# Setup Instructions for GitHub Personal Access Token

## Important Security Notice
Your GitHub Personal Access Token was detected in the original commit and has been removed for security reasons. 

## Required Setup
To use the `run.sh` script, you need to create a `.env.local` file:

1. Create a file named `.env.local` in the project root
2. Add the following content:
   ```
   GITHUB_PERSONAL_ACCESS_TOKEN=your_token_here
   ```
3. Replace `your_token_here` with your actual GitHub token

## Security Best Practices
- **NEVER** commit `.env.local` or any file containing tokens to Git
- The `.env.local` file is already in `.gitignore` to prevent accidental commits
- Consider rotating your GitHub token since it was briefly exposed
  - Go to GitHub Settings → Developer settings → Personal access tokens
  - Delete the old token and create a new one

## Running the Script
After setting up the `.env.local` file, you can run:
```bash
./run.sh
```

The script will automatically load the token from the `.env.local` file.
