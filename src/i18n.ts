import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  try {
    const messages = await import(`../messages/${locale}.json`);
    return { messages: messages.default };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    // Retour à une locale par défaut ou gestion de l'erreur
    const defaultMessages = await import('../messages/en.json');
    return { messages: defaultMessages.default };
  }
});
