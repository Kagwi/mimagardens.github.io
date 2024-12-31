export const createEmailLink = (data: Record<string, string>) => {
  const subject = encodeURIComponent('New Inquiry from Mima Gardens Website');
  const body = encodeURIComponent(Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n'));
  
  return `mailto:info@mimagardens.co.ke?subject=${subject}&body=${body}`;
};