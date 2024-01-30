# At Last Mega Inventory Counter

Welcome to the At Last full stack take home test.

**Please be sure to read this entire document before you start.**

## System Specification

The system is nothing more than a counter. Because our merchant are busy and they get inventory for an item multiple times a day, they wanted something where they could just put a bunch of comma separated numbers tagged to an item and their inventory number to update accordingly. This helps them know the overall total of "things" in their inventory quickly and easily.

**For example:**

On Monday the merchant received two batches of `Nike Shoes`, the first with `10` shoes, the second with `45` shoes.

At the end of the day they go to our UI, put in `Nike Shoes`, `10,45` and we add `10 + 45 (55)` on the backend to the overall inventory of said shoes. Once the update is complete that total is displayed on the UI.

The merchant can repeat this as many times as they wish.

## Instructions & Scope

We have tried to streamline this test, so that it shouldn't take you more than a couple of hour to resolve. And before you start solutionising please familiarize yourself with the codebase.

### Issues

#### Bug Report

We've had reports of users, that sometimes when writing the comma separated quantities, there's sometimes typos that completely destroy the calculations.

We've seen reports of users writing things like `22,e36,40` and the middle element `e36` ruining not just the calculation, but the overall totals as well.

We would like to show an error message on the UI if we find examples where we can't make these calculations properly.

#### New Feature

It also turns out that this little app became quite popular. But unfortunately it was made for a single user, meaning if two people use the same name for an inventory item their numbers will get mixed up!

For example, if user A creates an item called `Shoes, 20` and user B creates one for `Shoes, 10` they will both see `Shoes, 30`!

Can you introduce something to the app that can properly keep the inventories separated for each user.
  
### Notes

Please create and or update the tests to ensure the issue won't happen again and that the feature is working properly.

The data store is in memory for simplicity and it does not need to be persisted between runs. This isn't something you need to worry about, nor is it something we will be evaluating.

Feel free to change any and all parts of the code. But, please create a `SOLUTION.md` file describing what you've changed and why. We'll use it to help understand your decisions. We can run through them on the technical interview!

IF you decide to add UI elements, then you do not have to worry about how it looks. We want working software that's to spec. You also do not need to be incredibly thorough in your testing. Feel free to specify what other kinds of testing you would add in the `SOLUTION.md` file.

**You do not need to build an auth system or handle anything auth related for the second issue. Keep it simple, as long as the numbers don't clash in that one session, then we're good!**

## Deliverables

The project source code and dependencies should be made available in GitHub. Here are the steps you should follow:

- Clone this repository (do not fork it!)
- Create a new file called `SOLUTION.md` that you can use for:
  - Special build instructions, if any
  - List of third-party libraries used and short description of why/how they were used
  - Changes and updated done to the UI and how it works, if any
- Once the work is complete, bundle the code into a zip file and email it to us.
- Avoid using huge commits hiding your progress. Feel free to work on a branch and use rebase to adjust your commits before submitting the final version.
- Write at least some unit tests for any modules you create and/or change. To help validate your solution.
- Be as clean and concise as possible with your work.
- **Ensure the code compiles and runs!**
- You have 2 days from the initial call to deliver the solution.

## Usage

This is a mono-repo (using Yarn Workspaces) and it should be fully setup and ready for use. The code base is in Typescript with the UI using Next and React and the backend using Node and Express.

If you're not familiar with yarn Workspaces. Use the following commands to install dependencies in the appropriate packages. **All of these commands should be executed on the project's root folder**

- Server: `yarn workspace server add [dependency]`
- Client: `yarn workspace client add [dependency]`

You can execute tests for all packages by executing `yarn test` in the project root.

### Requirements

Make sure you have `Node 20` installed on your machine. Also ensure you've installed the corepack with `corepack enable` cli command as this will install Yarn.

### Running

Be sure to install all dependencies by executing the `yarn` command in the project's root. This will install all dependencies in all packages in this monorepo.

Once dependencies are installed, you can execute the following script command `yarn start` to start both UI and Server. You should see boot logs in the command line for both next and express.

The UI runs in port `3000` while the backend runs in port `3001` by default. Feel free to change these if needed in the codebase.

Both projects run locally and have hot reloading to make the dev process easier and faster.

## Extra

If you have any questions or concerns please let us know as soon as possible, we're happy to help, especially if the issues are around project setup.
