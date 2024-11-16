import ButtonTextChange from "./ButtonTextChange";
import ChangeColors from "./ChangeColors";
import MenuButton from "./MenuButton";
import TitleChange from "./TitleChange";
import UploadImages from "./UploadImages";

type MenuEditorProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MenuEditor = ({ isOpen, setIsOpen }: MenuEditorProps) => {
  return (
    <div
      className={` bg-white flex flex-col  space-y-6 rounded-lg w-[360px]  shadow-lg 
        ${
          isOpen ? "block" : "hidden"
        } p-4 h-[calc(100vh-2rem)]  overflow-y-auto scrollbar-thin `}
    >
      <div className="sticky top-0 bg-white z-10 space-y-4 ">
        {" "}
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <h1 className="text-2xl font-bold text-center">Edit Raffle</h1>
      </div>

      <TitleChange />

      <UploadImages />

      <ButtonTextChange />

      <ChangeColors />
      
    </div>
  );
};

export default MenuEditor;
