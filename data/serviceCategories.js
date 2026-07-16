// Category -> breadcrumb entry, kept in its own file so components can import it
// without pulling in the large servicePages data module (avoids import cycles).
// The href is where "Home > [Category]" points.
export const categoryBreadcrumb = {
  'Work Permits': { label: 'Work', href: '/#programs' },
  'Permanent Residence': { label: 'Permanent Residence', href: '/#permanent-residence' },
  'Business Visa': { label: 'Business', href: '/#business-visa' },
  'Super Visa Guides': { label: 'Super Visa', href: '/services/super-visa' },
  'Additional Services': { label: 'Additional Services', href: '/#additional-services' },
};

export default categoryBreadcrumb;
