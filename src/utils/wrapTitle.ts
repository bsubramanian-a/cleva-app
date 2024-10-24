export const wrapTitle = (title: string, maxLength: number): string => {
    if (title.length <= maxLength) {
      return title;
    }
  
    const words = title.split(' ');
    const lines: string[] = [];
    let currentLine = '';
  
    for (const word of words) {
      if (currentLine.length + word.length + 1 > maxLength) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine += currentLine.length > 0 ? ` ${word}` : word;
      }
    }
  
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }
  
    return lines.join('\n');
  };
