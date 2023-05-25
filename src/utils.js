import { GiMusicSpell } from 'react-icons/gi';
import { MdSportsGymnastics } from 'react-icons/md';
import { BiGame } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { MdAppShortcut } from 'react-icons/md';

export const categoryIcons = {
  Programming: <BsCodeSlash />,
  Gaming: <BiGame />,
  Music: <GiMusicSpell />,
  Sports: <MdSportsGymnastics />,
  Shorts: <MdAppShortcut />,
};

console.log(categoryIcons);
