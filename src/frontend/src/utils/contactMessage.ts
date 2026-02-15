interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function composeContactMessage(data: ContactFormData): string {
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company/Project: ${data.company}` : '',
    '',
    'Message:',
    data.message
  ];

  return lines.filter(Boolean).join('\n');
}
