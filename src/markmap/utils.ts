type Item = {
  title: string;
};

type Section = {
  title: string;
  sections?: Section[];
  items?: Item[];
};

export type Data = {
  title: string;
  sections: Section[];
};

export const convertToMarkdown = (obj: Data | Section, level = 1): string => {
  let markdown = '';

  if (obj.title) {
    markdown += `${'#'.repeat(level)} ${obj.title}\n`;
  }

  if ('sections' in obj && obj.sections) {
    obj.sections.forEach(section => {
      markdown += convertToMarkdown(section, level + 1);
    });
  }

  if ('items' in obj && obj.items) {
    obj.items.forEach(item => {
      markdown += `- ${item.title}\n`;
    });
  }

  return markdown;
};
