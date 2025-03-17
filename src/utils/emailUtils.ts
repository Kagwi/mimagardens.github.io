export const createEmailLink = (data: Record<string, string>) => {
  const subject = encodeURIComponent('New Inquiry from Mima Gardens Website');
  const body = encodeURIComponent(Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n'));
  
  return `mailto:mimagardens2121ltd@gmail.com?subject=${subject}&body=${body}`;
};
