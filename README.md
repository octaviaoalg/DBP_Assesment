# DBP_Assesment
 DBP technical assesment

NOTICE: This was tested on Windows 11.

 Steps to run the tests:

1. Download or clone this repository
2. Download and install Node.js v20.12.2 from this [link](https://nodejs.org/dist/v20.12.2/node-v20.12.2-x64.msi)
3. Open a CMD/Termial in the path of the project folder downloaded from GitHub 
4. Execute `node --version` to check NodeJs is installed
5. To prepare the test for run, execute `npm install`
6. To make sure that the internal browsers are preapared execute `npx playwright install`
7. Tests can be run in 3 ways:
   1. UI: `npx playwright test --ui`
   2. Console: `npx playwright test `
   3. Headed: `npx playwright test --headed`
