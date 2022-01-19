import {
  MdCardGiftcard,
  MdMenu,
  MdArrowDropDown,
  MdStar,
  MdStarBorder,
  MdStarHalf,
} from "react-icons/md";
import { ImBook, ImSearch } from "react-icons/im";
import { GiBookPile } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosList,
  IoMdPaper,
  IoMdNotifications,
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoInstagram,
} from "react-icons/io";

export const Icons = {
  SEARCH: ImSearch,
  PERSON: IoPersonOutline,
  GIFT: MdCardGiftcard,
  BOOK: GiBookPile,
  BOOK_B: ImBook,
  MENU: MdMenu,
  ARROW_RIGHT: IoIosArrowForward,
  ARROW_LEFT: IoIosArrowBack,
  ARROW_SELECT: MdArrowDropDown,
  STAR_COMPLETE: MdStar,
  STAR_INCOMPLETE: MdStarHalf,
  STAR_EMPTY: MdStarBorder,

  LIST: IoIosList,
  PAPER: IoMdPaper,
  NOTIFICATION_FULL: IoMdNotifications,

  FACEBOOK: IoLogoFacebook,
  WHATSAPP: IoLogoWhatsapp,
  INSTAGRAM: IoLogoInstagram,
};
