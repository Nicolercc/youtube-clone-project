import { GiMusicSpell } from 'react-icons/gi';
import { MdSportsGymnastics } from 'react-icons/md';
import { BiGame } from 'react-icons/bi';
import { MdAppShortcut } from 'react-icons/md';
import { MdCode } from 'react-icons/md';
import { BsLaptop } from 'react-icons/bs';
import { BsFire } from 'react-icons/bs';

export const categories = [
  { name: 'Trending', icon: <BsFire /> },
  { name: 'FreeCodeCamp', icon: <MdCode /> },
  { name: 'Programming', icon: <BsLaptop /> },
  { name: 'Gaming', icon: <BiGame /> },
  { name: 'Music', icon: <GiMusicSpell /> },
  { name: 'Sports', icon: <MdSportsGymnastics /> },
  { name: 'Shorts', icon: <MdAppShortcut /> },
];
