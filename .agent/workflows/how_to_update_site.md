---
description: How to update the live website
---

Updating your site is easy because Vercel is connected to your GitHub repository. Whenever you push code to GitHub, Vercel automatically detects the change and redeploys your site.

1.  **Make your changes** to the code (edit files, add images, etc.).

2.  **Save your changes** in your editor.

3.  **Open your terminal** and run these three commands:

    ```bash
    # 1. Add all your changes to the "staging area"
    git add .

    # 2. Commit the changes with a message describing what you did
    git commit -m "Describe your change here"

    # 3. Push the changes to GitHub
    git push
    ```

4.  **Wait 1-2 minutes.** Vercel will see the new code, build it, and update `zkinvest.lv` automatically.
