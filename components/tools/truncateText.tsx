
export const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    text = text.substring(0, maxLength) + '...';
  }
  return text;
};
