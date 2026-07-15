import company from '@/data/company';

export const defaultSEO = {
  siteName: company.name,
  siteUrl: company.url,
  titleTemplate: `%s | ${company.name}`,
  defaultTitle: `${company.name} \u2014 Regulated Canadian Immigration Consultants`,
  defaultDescription:
    'Regulated Canadian immigration consultants for Super Visa, visitor visa, study permit, work permit, Express Entry, sponsorship and refused applications. Book a confidential consultation.',
  defaultImage: company.ogImage,
  locale: 'en_CA',
  twitterHandle: '@simmiimmigration',
  keywords: [
    'Canadian immigration consultant',
    'RCIC Toronto',
    'Super Visa Canada',
    'visitor visa Canada',
    'study permit',
    'work permit Canada',
    'Express Entry',
    'spousal sponsorship',
    'visa refusal review',
    'LMIA services',
  ],
};

export const pageSEO = {
  home: {
    title: 'Canadian Immigration Consultants \u2014 Super Visa, Work, Study & PR',
    description:
      'Simmi Immigration helps visitors, students, workers and families move to Canada \u2014 including complex and previously refused cases. Regulated, transparent, results-driven.',
    path: '/',
  },
};

export default defaultSEO;
