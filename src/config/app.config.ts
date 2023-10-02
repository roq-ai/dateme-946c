interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['App Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['App Owner', 'Admin User', 'Premium User', 'Standard User', 'Guest User'],
  tenantName: 'Company',
  applicationName: 'DateMe',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal user information',
    'Read company information',
    'Create company',
    'Edit personal user information',
  ],
  ownerAbilities: ['Manage users', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5fea9c0d-98bc-4f88-8f88-026af6e356db',
};
