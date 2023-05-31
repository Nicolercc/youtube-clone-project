// Generate a random color;
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate Initials;
function generateInitials(text) {
  const words = text.split(' ');
  let initials = '';

  for (let i = 0; i < words.length && initials.length < 2; i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
}

// Calculate the released date;
function getDurationText(publishedAt) {
  const publishedDate = new Date(publishedAt);
  const currentDate = new Date();
  const timeDifference = currentDate - publishedDate;

  if (timeDifference < 3600000) {
    // Less than 1 hour
    const minutes = Math.floor(timeDifference / 60000);
    return `${minutes} minutes ago`;
  } else if (timeDifference < 86400000) {
    // Less than 1 day
    const hours = Math.floor(timeDifference / 3600000);
    return `${hours} hours ago`;
  } else if (timeDifference < 2592000000) {
    // Less than 1 month
    const days = Math.floor(timeDifference / 86400000);
    return `${days} days ago`;
  } else if (timeDifference < 31536000000) {
    // Less than 1 year
    const months = Math.floor(timeDifference / 2592000000);
    return `${months} months ago`;
  } else {
    // More than 1 year
    const years = Math.floor(timeDifference / 31536000000);
    return `${years} years ago`;
  }
}

function formatViewCount(count) {
  if (count >= 1000000000) {
    // More than 1 billion
    return `${(count / 1000000000).toFixed(1)}B views`;
  } else if (count >= 1000000) {
    // More than 1 million
    return `${(count / 1000000).toFixed(1)}M views`;
  } else if (count >= 1000) {
    // More than 1 thousand
    return `${(count / 1000).toFixed(1)}K views`;
  } else {
    return `${count} views`;
  }
}

export { getRandomColor, generateInitials, getDurationText, formatViewCount };
