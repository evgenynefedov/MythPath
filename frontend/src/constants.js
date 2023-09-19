export const CONSTANTS = {
  /**
 * Values are read from .env file, which  should be in React project root dir (/fronend/)
 * .env is marked as untracked in .gitignotre
 * .env contains pairs in `KEY = VALUE` format
 * All keys shoud start with `REACT_APP_`
 * After setting or changing the keys in  `/.env` stop running project and run `npm start`
 * again.
 * .env shoud have the following lines:
 *@example 
REACT_APP_OPENAI_API_KEY = hereIsSomeApiKey
REACT_APP_CLOUDINARY_API_KEY  = hereIsSomeOtherApiKey
 */
  apiKeys: {
    /**
     * openai.com
     */
    openai: `${process.env.REACT_APP_OPENAI_API_KEY}`,
    // /**
    //  * cloudinary.com
    //  */
    cloudinary: `${process.env.REACT_APP_CLOUDINARY_API_KEY}`,
    cloudinary_secret: `${process.env.REACT_APP_CLOUDINARY_API_SECRET}`,
  },
  cloudinaryBaseLink:
    "https://res.cloudinary.com/dyigwqfyo/image/upload/v1693918007/MythPath/Library",
  cloudinaryUploadBaseLink:
    "https://res.cloudinary.com/dyigwqfyo/image/upload/",
  cloudinaryBackgroundLink:
    "https://res.cloudinary.com/dyigwqfyo/image/upload/v1693918007/MythPath/backgrounds",
  testMode: process.env.REACT_APP_TEST_MODE === "false" ? false : true,
  cloudinaryBasePath: "MythPath/Library",
  cloudinaryCloudName: "dyigwqfyo",
  openAI: {
    maxTokens: process.env.REACT_APP_OPENAI_MAX_TOKENS
      ? process.env.REACT_APP_OPENAI_MAX_TOKENS
      : 1500,
  },
};

console.log("testMode: ", CONSTANTS.testMode);
