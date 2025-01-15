# Resolving Hyperbolic API Key Error

    The error message "ERROR LLMManager Error getting dynamic models Hyperbolic : Missing Api Key configuration for Hyperbolic provider" indicates that your application is trying to use a service from the Hyperbolic provider, but it is missing the required API key.

    To resolve this, you need to configure your application with the correct API key. Here's how you can do it:

    1. **Obtain an API Key:**
        - If you don't have an API key, you'll need to sign up for an account with the Hyperbolic provider and obtain one.
        - Follow the provider's documentation on how to create an API key.

    2. **Configure the API Key:**
        - The API key needs to be set in your application's configuration. This can be done in several ways:
            - **Environment Variables:** The most secure way is to set an environment variable (e.g., `HYPERBOLIC_API_KEY`).
            - **Configuration File:** Some applications use a configuration file (e.g., `.env`, `config.json`) to store API keys.
            - **Directly in Code:** (Not recommended) You can set the API key directly in your code, but this is not secure and should be avoided.

    3. **Example using Environment Variables:**
        - In your `.env` file (or similar), add the following line:
          ```
          HYPERBOLIC_API_KEY=your_actual_api_key
          ```
        - Replace `your_actual_api_key` with the API key you obtained.
        - In your application code, access the environment variable using `process.env.HYPERBOLIC_API_KEY`.

    4. **Example using a Configuration File:**
        - In your `config.json` file (or similar), add the following:
          ```json
          {
            "hyperbolicApiKey": "your_actual_api_key"
          }
          ```
        - In your application code, read the configuration file and access the API key.

    5. **Restart Your Application:**
        - After configuring the API key, restart your application for the changes to take effect.

    6. **Verify the Configuration:**
        - Check your application's logs or console output to ensure that the API key is being loaded correctly.

    **Important Security Note:**
        - Never commit your API keys directly into your version control system. Use environment variables or secure configuration files.

    By following these steps, you should be able to resolve the "Missing Api Key configuration" error and use the Hyperbolic provider's services correctly.
